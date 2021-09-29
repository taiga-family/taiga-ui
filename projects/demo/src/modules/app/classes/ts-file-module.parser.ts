import {TsFileParser} from './ts-file.parser';

const DECLARATIONS_REG_EXP = /(?<=declarations:\s\[)(.*)(?=\])/gi;

export class TsFileModuleParser extends TsFileParser {
    addDeclaration(entity: string): void {
        this.rawFileContent = this.rawFileContent.replace(
            'declarations: [',
            `declarations: [${entity}, `,
        );
    }

    addModuleImport(entity: string): void {
        this.rawFileContent = this.rawFileContent.replace(
            'imports: [',
            `imports: [\n${entity}, `,
        );
    }

    hasDeclarationEntity(entityName: string): boolean {
        return (this.rawFileContent.match(DECLARATIONS_REG_EXP) || '').includes(
            entityName,
        );
    }
}
