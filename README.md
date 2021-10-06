# VisualElementsManifestify

Ever since a mate showed me his app [OblyTile](https://google.com/search?q=OblyTile), my start menu has never looked the same again :P

At some point a new version of the Start Menu appeared, development on OblyTile stopped because there didn't seem to be a similar way to do it on the new start.

Some other apps also did pinning, like pinning Steam Games and Websites, among others.

After a bit I created this NodeJS script to create VisualElementsManifest.xml by checking if the folder contains a file named icon`*name of app/or whatever else*.[png/jpg]`.

If it does, create an XML file, pointing to the icon file, and some other options.

# Usage

In a terminal you can pass arguments in order: Color, Dark/Light Text, Show Name on the tile.

Example (from commandline):
`node x:\VSM\index.js '#0099FF' 'light' 'on'`

There are default values in the script, you can change those and then just use `node x:\VSM\index.js`.

