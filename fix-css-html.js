const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Ensure html and body both have overflow-x: clip or overflow-x: hidden
css = css.replace('html {', 'html {\n    overflow-x: clip;');
css = css.replace('body {', 'body {\n    overflow-x: clip;');

fs.writeFileSync('src/app/globals.css', css);
console.log('Updated globals.css with overflow-x: clip');
