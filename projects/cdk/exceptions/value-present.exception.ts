export class TuiValuePresentException extends Error {
    constructor() {
        super(`Value must present`);
    }
}
