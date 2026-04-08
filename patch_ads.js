const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (!content.includes('adsbygoogle.js')) {
        content = content.replace('</head>', '    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5523284074139678" crossorigin="anonymous"></script>\n</head>');
        fs.writeFileSync(fullPath, content);
        console.log('Patched ' + fullPath);
      }
    }
  }
}

processDir('/home/dcyinvest/.openclaw/workspace-apollo/seo-ai-js');
