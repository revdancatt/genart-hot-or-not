const path = require('path')
const fs = require('fs')

// First check to see if an 'outputs' folder exists
// If it doesn't, create it
if (!fs.existsSync(path.join(__dirname, 'outputs'))) {
  fs.mkdirSync(path.join(__dirname, 'outputs'))
}
// Now check to see if there are any files in the 'outputs' folder, of the type, jpg, jpeg, png, gif
// Get a count of the files
const files = fs.readdirSync(path.join(__dirname, 'outputs')).filter(file => {
  return file.match(/.(jpg|jpeg|png|gif)$/i)
})

// If there are no files tell the user they need to put some into the folder
if (files.length === 0) {
  console.log('\nNo files found in the outputs folder. Please add some images to the folder and try again.\n')
  process.exit(1)
}

