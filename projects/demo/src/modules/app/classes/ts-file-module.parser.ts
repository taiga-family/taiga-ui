import {TsFileParser} from './ts-file.parser';

export class TsFileModuleParser extends TsFileParser {
    addDeclaration(entity: string): void {
        this.rawFileContent = this.rawFileContent.replace(
            'declarations: [',
            `declarations: [${entity}, `,
        );
    }
}
