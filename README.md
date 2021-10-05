# VisualElementsManifestify

Ever since a mate showed me his app [OblyTile](https://google.com/search?q=OblyTile), my start menu has never looked the same again :P
At some point a new version of the Start Menu appeared, development on OblyTile stopped because there didn't seem to be a similar way to do it on the new start.
Some other apps also did pinning, like pinning Steam Games and Websites, among others.

After a bit we just manually added the XML files to the folders, slap in some icon and all still works.
After a bit I created this NodeJS script to create VisualElementsManifest.xml by checking if the folder contains a file named icon`*name of app/or whatever else*.[png/jpg]`.
If it does, create an XML file, pointing to the icon file, and some other options.
