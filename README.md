# VisualElementsManifestify

Ever since a mate showed me his app [OblyTile](https://google.com/search?q=OblyTile), my start menu has never looked the same again :P

At some point a new version of the Start Menu appeared, development on OblyTile stopped because there didn't seem to be a similar way to do it on the new start.

Some other apps also did pinning, like pinning Steam Games and Websites, among others.

After a bit I created this NodeJS script to create VisualElementsManifest.xml by checking if the folder contains a file named `icon[*ANYTHING*.png/jpg]`.

If it does, create an XML file, pointing to the icon file, and some other options.

# Usage

`node x:\VSM\index.js` will create the Manifest with predefined values in `index.js`.

In a terminal you can pass arguments:
 - '#colorr' (Color in HEX6)
 - 'dark/light' (Text on tile)
 - 'on/off' (Name on tile)

Example (from commandline):
`node x:\VSM\index.js '#0099FF' 'light' 'on'`
