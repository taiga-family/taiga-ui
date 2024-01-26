/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
export class TuiXmlParsingException extends Error {
    constructor() {
        super(ngDevMode ? 'Error parsing XML string' : '');
    }
}
