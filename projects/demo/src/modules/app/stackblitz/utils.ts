import type {Project} from '@stackblitz/sdk';

import {TsFileComponentParser, TsFileModuleParser, TsFileParser} from '../classes';
import {isLess, isPrimaryComponentFile, isTS} from '../utils';

type FileName = string;

type FileContent = string;

function getAllModules(entryPoint: Record<string, unknown>, names: Set<string>): string {
    const modules = Object.keys(entryPoint).reduce((modules, name) => {
        const unique =
            name.endsWith('Module') &&
            name !== 'TuiOrderWeekDaysPipeModule' &&
            !names.has(name);

        if (unique) {
            names.add(name);

            return modules.concat(name);
        }

        return modules;
    }, [] as string[]);

    return modules.join(',\n\t\t');
}

export const prepareLess = (content: string): string =>
    content.replaceAll(
        /@import.+taiga-ui-local(.less)?';/g,
        "@import '@taiga-ui/core/styles/taiga-ui-local.less';",
    );

export const appPrefix = (stringsPart: TemplateStringsArray, path = ''): string =>
    `src/app/${stringsPart.join('')}${path}`;

export const stackblitzPrefix = (stringsPart: TemplateStringsArray, path = ''): string =>
    `src/app/@stackblitz/${stringsPart.join('')}${path}`;

export const getSupportFiles = <T extends Record<string, string>>(
    files: T,
): Array<[FileName, FileContent]> =>
    Object.entries(files).filter(
        ([fileName, content]) => content && !isPrimaryComponentFile(fileName),
    );

export const prepareSupportFiles = (
    files: Array<[FileName, FileContent]>,
): Project['files'] => {
    const processedContent: Project['files'] = {};

    files.forEach(([fileName, fileContent]) => {
        const prefixedFileName = appPrefix`${fileName}`;

        processedContent[prefixedFileName] = isLess(fileName)
            ? prepareLess(fileContent)
            : fileContent;
    });

    return processedContent;
};

export const getComponentsClassNames = (
    files: Array<[FileName, FileContent]>,
): Array<[FileName, FileContent]> =>
    files
        .filter(
            ([fileName, fileContent]) =>
                isTS(fileName) && new TsFileParser(fileContent).hasNgComponent,
        )
        .map(([fileName, fileContent]) => [
            fileName,
            new TsFileComponentParser(fileContent).className,
        ]);

export const getSupportModules = (
    files: Array<[FileName, FileContent]>,
): Array<[FileName, TsFileModuleParser]> =>
    files
        .filter(([name, content]) => isTS(name) && new TsFileParser(content).hasNgModule)
        .map(([fileName, fileContent]) => [
            fileName,
            new TsFileModuleParser(fileContent),
        ]);

/**
 * We can't just dynamically import all modules from packages.
 * For examples:
 * ```ts
 * import * as CDK from '@taiga-ui/cdk';
 * // ...
 * @NgModule({ imports: [...getAllModules(CDK)] })
 * ```
 * There is a limit to the amount of "static" analysis that the AOT compiler is willing to do.
 * See this {@link https://github.com/angular/angular/issues/42550 issue}
 */
export async function getAllTaigaUIModulesFile(
    additionalModules: Array<[fileName: string, parsedFile: TsFileModuleParser]> = [],
): Promise<string> {
    /**
     * Violated DRY principle:
     * You can't just iterate the array with package-names - it will cause error:
     * `Warning: Critical dependency: the request of a dependency is an expression`
     * */
    const [cdk, core, kit, charts, commerce, mobile, table] = await Promise.all([
        import('@taiga-ui/cdk'),
        import('@taiga-ui/core'),
        import('@taiga-ui/kit'),
        import('@taiga-ui/addon-charts'),
        import('@taiga-ui/addon-commerce'),
        import('@taiga-ui/addon-mobile'),
        import('@taiga-ui/addon-table'),
    ]).then(modules => {
        const allModuleNames = new Set<string>();

        return modules.map(entryPoint => getAllModules(entryPoint, allModuleNames));
    });

    const additionalModulesImports = additionalModules
        .map(
            ([fileName, {className}]) =>
                `import {${className}} from '../${fileName.replace('.ts', '')}';`,
        )
        .join('\n');

    return `
import {
    ${cdk}
} from '@taiga-ui/cdk';
import {
    ${core}
} from '@taiga-ui/core';
import {
    ${kit}
} from '@taiga-ui/kit';
import {
    ${charts}
} from '@taiga-ui/addon-charts';
import {
    ${commerce}
} from '@taiga-ui/addon-commerce';
import {
    ${mobile}
} from '@taiga-ui/addon-mobile';
import {
    ${table}
} from '@taiga-ui/addon-table';

import {ScrollingModule} from '@angular/cdk/scrolling';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaskitoDirective} from '@maskito/angular';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
${additionalModulesImports}

export const ALL_TAIGA_UI_MODULES = [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    PolymorpheusOutlet, PolymorpheusTemplate,
    MaskitoDirective,
    RouterModule.forRoot([]),
    /* CDK */
    ${cdk},
    /* CORE */
    ${core},
    /* KIT */
    ${kit},
    /* ADDON-CHARTS */
    ${charts},
    /* ADDON-COMMERCE */
    ${commerce},
    /* ADDON-MOBILE */
    ${mobile},
    /* ADDON-TABLE */
    ${table},
    /* EXAMPLE MODULES */
    ${additionalModules.map(([, {className}]) => className).join(',\n\t\t')}
];
`;
}
