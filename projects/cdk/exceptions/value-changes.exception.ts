/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
export class TuiValueChangesException extends Error {
    constructor() {
        super(ngDevMode ? 'Control does not have valueChanges' : '');
    }
}
