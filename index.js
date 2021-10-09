const fs = require('fs')
const process = require('process')
const args = process.argv.filter((v, i) => i >= 2 && v)

fs.readdir('.', 'utf8', (error, files) => {
	if (error) throw new Error(error)
	for (const file of files) {
		if (file.startsWith('icon')) {
			let applicationName = file.replace(/icon(\w|\d+)\.png|jpg/g, '')
			let backgroundColor = args[0] || '#123123'
			let textLightDark = args[1] || 'dark'
			let showNameOnOff = args[2] || 'off'
			fs.writeFileSync(
				`${applicationName}.VisualElementsManifest.xml`,
				`<Application xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
