export class TuiInvalidYearException extends Error {
    constructor(year: number) {
        super(ngDevMode ? `Invalid year: ${year}` : ``);
    }
}
