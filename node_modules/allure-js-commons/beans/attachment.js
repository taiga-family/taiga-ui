/**
 * Created by dolf on 12.05.15.
 */
function Attachment(title, source, size, mime) {
    this.title = title;
    this.type = mime;
    this.size = size;
    this.source = source;
}

Attachment.prototype.toXML = function () {
    return {
        '@': {
            title: this.title,
            source: this.source,
            type: this.type,
            size: this.size
        }
    };
};

module.exports = Attachment;
