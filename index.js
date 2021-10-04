require('fs').readdir('.', 'utf8', (error, files) => {
	if (error) throw new Error(error)
	for (const file of files) {
		if (file.startsWith('icon')) {
			let applicationName = file.replace(/(icon|\.(png|jpg))/g, ''),
				backgroundColor = '#123123',
				textLightDark = 'dark',
				showNameOnOff = 'off'
			fs.writeFileSync(
				`${applicationName}.VisualElementsManifest.xml`,
				`
<Application xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<VisualElements
    BackgroundColor="${backgroundColor}"
    ShowNameOnSquare150x150Logo="${showNameOnOff}"
    Square150x150Logo="${file}"
    Square70x70Logo="${file}"
    ForegroundText="${textLightDark}" />
</Application>
`
			)
		}
	}
})
