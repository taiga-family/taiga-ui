/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
export class TuiDocumentSelectionException extends Error {
    constructor() {
        super(ngDevMode ? 'Failed to get document selection' : '');
    }
}
