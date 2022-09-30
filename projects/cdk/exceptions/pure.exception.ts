export class TuiPureException extends Error {
    constructor() {
        super(`tuiPure can only be used with functions or getters`);
    }
}
