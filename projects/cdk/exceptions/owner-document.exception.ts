/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
export class TuiOwnerDocumentException extends Error {
    constructor() {
        super(ngDevMode ? 'Element does not have ownerDocument' : '');
    }
}
