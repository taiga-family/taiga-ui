export class TuiValuePresentException extends Error {
    constructor() {
        super(ngDevMode ? `Value must present` : ``);
    }
}
