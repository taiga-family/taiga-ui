export class TuiGrepException extends Error {
    constructor(pattern: string, result: string) {
        super(`There are problems with ${pattern} in:\n\n${result}`);
    }
}
