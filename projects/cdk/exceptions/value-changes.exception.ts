export class TuiValueChangesException extends Error {
    constructor() {
        super(`Control does not have valueChanges`);
    }
}
