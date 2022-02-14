export class InvalidYearException extends Error {
    constructor(year: number) {
        super(`Invalid year: ${year}`);
    }
}
