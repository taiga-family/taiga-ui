import {TsFileParser} from './ts-file.parser';

export class TsFileModuleParser extends TsFileParser {
    public addDeclaration(entity: string): void {
        this.rawFileContent = this.rawFileContent.replace(
            'declarations: [',
            `declarations: [${entity}, `,
        );
    }

    public addModuleImport(entity: string): void {
        this.rawFileContent = this.rawFileContent.replace(
            'imports: [',
            `imports: [\n${entity}, `,
        );
    }

    public hasDeclarationEntity(entity: string): boolean {
        const [, declarations = ''] =
            this.rawFileContent.match(/(?:declarations:\s\[)(.*)(?:\])/i) || [];

        return declarations.includes(entity);
    }
}
