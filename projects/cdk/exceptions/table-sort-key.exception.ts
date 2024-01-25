/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
export class TuiTableSortKeyException extends Error {
    constructor() {
        super(ngDevMode ? 'Trying to sort with no key' : '');
    }
}
