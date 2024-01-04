created with spfx 1.17 
install powershell7 install .net4 
open powershell7 install PNP commandline tools by issuing the below command: 
Install-Module PnP.PowerShell 



clone repo
edit serve.json and update pageurl
build solution 
gulp bundle --ship 
gulp package-solution --ship 
upload to app catalog and make available to all sites 



upload to your siteAssests a 16px x 16px .ico   
get the public path of the file 



in powershell7 issue command:
Connect-PnPOnline -UseWebLogin -Url <https://yourtenant.sharepoint.com/>

in powershell issue command: 
Add-PnPCustomAction -ClientSideComponentId "<id of app>" -Name "DynamicFavicon" -Title " DynamicFavicon " -Location ClientSideExtension.ApplicationCustomizer -ClientSideComponentProperties: '{"faviconpath":"url"}' -Scope site


