import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
// import { Dialog } from '@microsoft/sp-dialog';

// import * as strings from 'DynamicFaviconApplicationCustomizerStrings';
import { override } from "@microsoft/decorators";

const LOG_SOURCE: string = 'DynamicFaviconApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IDynamicFaviconApplicationCustomizerProperties {
  // This is an example; replace with your own property
  favicon: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class DynamicFaviconApplicationCustomizer
  extends BaseApplicationCustomizer<IDynamicFaviconApplicationCustomizerProperties> {
@override
  public onInit(): Promise<void> {
  const url: string = this.properties.favicon;

  if (!url) {
    Log.info(LOG_SOURCE, "Favicon not found");
  } else {
    const link =
      (document.querySelector("link[rel*='icon']") as HTMLElement) ||
      (document.createElement("link") as HTMLElement);
    link.setAttribute("type", "image/x-icon");
    link.setAttribute("rel", "shortcut icon");
    link.setAttribute("href", url);
    document.getElementsByTagName("head")[0].appendChild(link);
  }

    return Promise.resolve();
  }
}
