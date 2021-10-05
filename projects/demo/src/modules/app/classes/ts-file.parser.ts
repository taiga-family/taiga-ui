const CLASS_NAME_REGEXP = /(?<=export class\s)(\w*)/gi;

export class TsFileParser {
    get className(): string {
        const [className] = this.rawFileContent.match(CLASS_NAME_REGEXP) || [''];

        return className;
    }

    set className(newClassName: string) {
        this.rawFileContent = this.rawFileContent.replace(
            CLASS_NAME_REGEXP,
            newClassName,
        );
    }

    get hasNgModule(): boolean {
        return this.rawFileContent.includes('@NgModule');
    }

    get hasNgComponent(): boolean {
        return this.rawFileContent.includes('@Component');
    }

    constructor(protected rawFileContent: string) {
        const classesInside = rawFileContent.match(CLASS_NAME_REGEXP) || [];

        if (classesInside.length > 1) {
            throw new Error('TsFileParser: 1 component/module per ts-file');
        }
    }

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
