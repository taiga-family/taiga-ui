import {TsFileParser} from './ts-file.parser';

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

    hasDeclarationEntity(entity: string): boolean {
        const [, declarations = ''] =
            /(?:declarations:\s\[)(.*)(?:\])/i.exec(this.rawFileContent) || [];

        return declarations.includes(entity);
    }
}
