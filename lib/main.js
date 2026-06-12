'use strict';

const fs = require('fs');
const path = require('path');

let emailFrameStyles = null;

module.exports = {
  activate() {
    const sourcePath = path.join(__dirname, '..', 'styles', 'email-frame.less');
    const compiledPath = path.join(__dirname, '..', 'styles', 'email-frame.css');
    const content = fs.readFileSync(compiledPath, 'utf8');

    emailFrameStyles = AppEnv.styles.addStyleSheet(content, {
      sourcePath,
      priority: 1,
    });
  },

  deactivate() {
    if (emailFrameStyles) {
      emailFrameStyles.dispose();
      emailFrameStyles = null;
    }
  },
};
