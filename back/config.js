const path = require('path');

const rootPath = __dirname;

module.exports = {
    rootPath,
    port: 8000,
    uploadPath: path.join(rootPath, 'public', 'uploads')
};