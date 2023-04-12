export class TuiPureException extends Error {
    constructor() {
        super(ngDevMode ? `tuiPure can only be used with functions or getters` : ``);
    }
}
