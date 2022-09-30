export class TuiTableSortKeyException extends Error {
    constructor() {
        super(`Trying to sort with no key`);
    }
}
