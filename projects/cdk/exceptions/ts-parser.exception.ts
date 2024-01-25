/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
export class TuiTsParserException extends Error {
    constructor() {
        super(ngDevMode ? 'TsFileParser: 1 component/module per ts-file' : '');
    }
}
