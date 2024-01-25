/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
export class TuiInvalidYearException extends Error {
    constructor(year: number) {
        super(ngDevMode ? `Invalid year: ${year}` : '');
    }
}
