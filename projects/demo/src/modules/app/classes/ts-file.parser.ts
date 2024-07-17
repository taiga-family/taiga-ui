/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

export class TuiTsParserException extends Error {
    constructor() {
        super(ngDevMode ? 'TsFileParser: 1 component/module per ts-file' : '');
    }
}

export class TsFileParser {
    constructor(protected rawFileContent: string) {
        const classesInside = rawFileContent.match(/export class/gi) || [];

        if (classesInside.length > 1) {
            throw new TuiTsParserException();
        }

        this.replaceMetaAssets();
    }

    public get className(): string {
        const [, className] =
            this.rawFileContent.match(/(?:export(?: default)? class\s)(\w*)/i) || [];

        return className || '';
    }

    public set className(newClassName: string) {
        this.rawFileContent = this.rawFileContent.replace(
            /(export(?: default)? class\s)(\w*)/i,
            `$1${newClassName}`,
        );
    }

    public get hasNgModule(): boolean {
        return this.rawFileContent.includes('@NgModule');
    }

    public get hasNgComponent(): boolean {
        return this.rawFileContent.includes('@Component');
    }

    public addImport(entity: string, packageOrPath: string): void {
        const fromName = packageOrPath.replace('.ts', '');

        this.rawFileContent = this.rawFileContent.includes(fromName)
            ? this.addIntoExistingImport(entity, fromName)
            : `import {${entity}} from '${fromName}';\n${this.rawFileContent}`;
    }

    public toString(): string {
        return this.rawFileContent;
    }

    private addIntoExistingImport(entity: string, packageName: string): string {
        const packageImportsRegex = new RegExp(
            `(?:import\\s?\\{\\r?\\n?)(?:(?:.*),\\r?\\n?)*?(?:.*?)\\r?\\n?} from (?:'|")${packageName}(?:'|");`,
            'gm',
        );

        return this.rawFileContent.replace(packageImportsRegex, (parsed) =>
            parsed.includes(entity) ? parsed : parsed.replace('{', `{${entity}, `),
        );
    }

    /**
     * @description:
     * The 'import.meta' doesn't support on Stackblitz
     */
    private replaceMetaAssets(): void {
        this.rawFileContent = this.rawFileContent.replace(
            "import {assets} from '@demo/utils';\n",
            '',
        );

        this.rawFileContent = this.rawFileContent.replace(
            'assets`',
            '`https://taiga-ui.dev/assets',
        );
    }
}
