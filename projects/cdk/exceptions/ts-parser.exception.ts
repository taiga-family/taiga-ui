export class TuiTsParserException extends Error {
    constructor() {
        super(`TsFileParser: 1 component/module per ts-file`);
    }
}
