import {Injectable} from '@angular/core';
import stackblitz from '@stackblitz/sdk';
import {CodeEditor, rawLoad, tryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';

import {TsFileComponentParser, TsFileModuleParser} from '../classes';
import {STACKBLITZ_DEPS} from './stackblitz-deps.constants';
import {
    appPrefix,
    getComponentsClassNames,
    getSupportFiles,
    getSupportModules,
    prepareLess,
    prepareSupportFiles,
} from './utils';

const APP_COMP_META = {
    SELECTOR: 'my-app',
    TEMPLATE_URL: './app.component.html',
    STYLE_URLS: ['./app.component.less'],
    CLASS_NAME: 'AppComponent',
} as const;

@Injectable()
export class StackblitzService implements CodeEditor {
    readonly name = 'Stackblitz';

    private static async getFiles() {
        const [angularJson, tsconfig] = tryParseMarkdownCodeBlock(
            await rawLoad(import('!!raw-loader!./project-files/configs.md')),
        );
        const [mainTs] = tryParseMarkdownCodeBlock(
            await rawLoad(import('!!raw-loader!./project-files/src/main.ts.md')),
        );
        const [indexHtml] = tryParseMarkdownCodeBlock(
            await rawLoad(import('!!raw-loader!./project-files/src/index.html.md')),
        );
        const [polyfills] = tryParseMarkdownCodeBlock(
            await rawLoad(import('!!raw-loader!./project-files/src/polyfills.ts.md')),
        );
        const [styles] = tryParseMarkdownCodeBlock(
            await rawLoad(import('!!raw-loader!./project-files/src/styles.less.md')),
        );

        return {angularJson, tsconfig, mainTs, indexHtml, polyfills, styles};
    }

    async open(component: string, sampleId: string, content: Record<string, string>) {
        if (!content.HTML || !content.TypeScript) {
            return;
        }

        const [appModuleTs] = tryParseMarkdownCodeBlock(
            await rawLoad(
                import('!!raw-loader!./project-files/src/app/app.module.ts.md'),
            ),
        );
        const appModule = new TsFileModuleParser(appModuleTs);
        const appCompTs = new TsFileComponentParser(content.TypeScript);

        const supportFilesTuples = getSupportFiles(content);
        const supportModulesTuples = getSupportModules(supportFilesTuples);
        const supportCompClassNames = getComponentsClassNames(supportFilesTuples);
        const modifiedSupportFiles = prepareSupportFiles(supportFilesTuples);

        supportCompClassNames.forEach(([fileName, className]) => {
            const insideAnotherModule = supportModulesTuples.some(([_, module]) =>
                module.hasDeclarationEntity(className),
            );

            if (insideAnotherModule) {
                return;
            }

            appModule.addImport(className, `./${fileName}`);
            appModule.addDeclaration(className);
        });

        supportModulesTuples.forEach(([fileName, {className}]) => {
            appModule.addImport(className, `./${fileName}`);
            appModule.addModuleImport(className);
        });

        appCompTs.selector = APP_COMP_META.SELECTOR;
        appCompTs.templateUrl = APP_COMP_META.TEMPLATE_URL;
        appCompTs.styleUrls = APP_COMP_META.STYLE_URLS;
        appCompTs.className = APP_COMP_META.CLASS_NAME;

        const {tsconfig, angularJson, indexHtml, mainTs, polyfills, styles} =
            await StackblitzService.getFiles();

        stackblitz.openProject({
            title: `${component}-${sampleId}`,
            description: `Taiga UI example of the component ${component}`,
            template: 'angular-cli',
            dependencies: STACKBLITZ_DEPS,
            files: {
                ...modifiedSupportFiles,
                'tsconfig.json': tsconfig,
                'angular.json': angularJson,
                'src/index.html': indexHtml,
                'src/main.ts': mainTs,
                'src/polyfills.ts': polyfills,
                'src/styles.less': styles,
                [appPrefix`app.module.ts`]: appModule.toString(),
                [appPrefix`app.component.ts`]: appCompTs.toString(),
                [appPrefix`app.component.html`]: `<tui-root>\n\n${content.HTML}\n</tui-root>`,
                [appPrefix`app.component.less`]: prepareLess(content.LESS || ''),
            },
            tags: ['Angular', 'Taiga UI', 'Angular components', 'UI Kit'],
        });
    }
}
