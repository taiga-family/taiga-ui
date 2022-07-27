import {TuiTsParserException} from '@taiga-ui/cdk';

export class TsFileParser {
    get className(): string {
        const [, className] = this.rawFileContent.match(/(?:export class\s)(\w*)/i) || [];

        return className || ``;
    }

    set className(newClassName: string) {
        this.rawFileContent = this.rawFileContent.replace(
            /(export class\s)(\w*)/i,
            `$1${newClassName}`,
        );
    }

    get hasNgModule(): boolean {
        return this.rawFileContent.includes(`@NgModule`);
    }

    get hasNgComponent(): boolean {
        return this.rawFileContent.includes(`@Component`);
    }

    constructor(protected rawFileContent: string) {
        const classesInside = rawFileContent.match(/export class/gi) || [];

        if (classesInside.length > 1) {
            throw new TuiTsParserException();
        }
    }

    addImport(entity: string, packageOrPath: string): void {
        const fromName = packageOrPath.replace(`.ts`, ``);

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
            `gm`,
        );

        return this.rawFileContent.replace(packageImportsRegex, parsed => {
            return parsed.replace(`{`, `{${entity}, `);
        });
    }
}
