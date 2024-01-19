import {isDevMode} from '@angular/core';

export class TuiTsParserException extends Error {
    constructor() {
        super(isDevMode() ? 'TsFileParser: 1 component/module per ts-file' : '');
    }
}
