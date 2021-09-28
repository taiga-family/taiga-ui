export class TsFileParser {
    constructor(protected rawFileContent: string) {}

    addImport(entity: string, packageOrPath: string): void {
        const fromName = packageOrPath.replace('.ts', '');

        this.rawFileContent = this.rawFileContent.includes(fromName)
            ? this.addIntoExistingImport(entity, fromName)
            : `import {${entity}} from '${fromName}';\n${this.rawFileContent};`;
    }

    toString(): string {
        return this.rawFileContent;
    }

    private addIntoExistingImport(entity: string, packageName: string): string {
        const packageImportsRegex = new RegExp(
            `(?:import\\s?\\{\\r?\\n?)(?:(?:.*),\\r?\\n?)*?(?:.*?)\\r?\\n?} from (?:'|")${packageName}(?:'|");`,
            'gm',
        );

        return this.rawFileContent.replace(packageImportsRegex, parsed => {
            return parsed.replace('{', `{${entity}, `);
        });
    }
}
