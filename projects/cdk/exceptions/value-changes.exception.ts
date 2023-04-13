export class TuiValueChangesException extends Error {
    constructor() {
        super(ngDevMode ? `Control does not have valueChanges` : ``);
    }
}
