export class TuiXmlParsingException extends Error {
    constructor() {
        super(ngDevMode ? `Error parsing XML string` : ``);
    }
}
