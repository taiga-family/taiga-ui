var fileType = require('file-type'),
    mime = require('mime');

module.exports = {
    getBufferInfo: function(buffer, type) {
        var fileInfo = fileType(buffer),
            fileExtension = 'txt',
            fileMime = 'text/plain';
        if(type) {
            fileMime = type;
            fileExtension = mime.getExtension(fileMime);
        } else if(fileInfo) {
            fileExtension = fileInfo.ext;
            fileMime = fileInfo.mime;
        }
        return {
            mime: fileMime,
            ext: fileExtension
        };
    }
};
