/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
export class TuiPureException extends Error {
    constructor() {
        super(ngDevMode ? 'tuiPure can only be used with functions or getters' : '');
    }
}
