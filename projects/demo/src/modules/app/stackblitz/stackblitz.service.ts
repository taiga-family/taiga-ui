import {Injectable} from '@angular/core';
import stackblitz, {OpenOptions, Project} from '@stackblitz/sdk';
import {TuiCodeEditor} from '@taiga-ui/addon-doc';

import {TsFileComponentParser, TsFileModuleParser} from '../classes';
import {STACKBLITZ_DEPS} from './stackblitz-deps.constants';
import {AbstractTuiStackblitzResourcesLoader} from './stackblitz-resources-loader';
import {
    appPrefix,
    getAllTaigaUIModulesFile,
    getComponentsClassNames,
    getSupportFiles,
    getSupportModules,
    prepareLess,
    prepareSupportFiles,
    stackblitzPrefix,
} from './utils';

const APP_COMP_META = {
    SELECTOR: `my-app`,
    TEMPLATE_URL: `./app.component.html`,
    STYLE_URLS: [`./app.component.less`],
    CLASS_NAME: `AppComponent`,
} as const;

@Injectable()
export class TuiStackblitzService implements TuiCodeEditor {
    private readonly stacklitzProjectConfigs: Pick<
        Project,
        'template' | 'dependencies' | 'tags'
    > = {
        template: `angular-cli`,
        dependencies: STACKBLITZ_DEPS,
        tags: [`Angular`, `Taiga UI`, `Angular components`, `UI Kit`],
    };

    readonly name = `Stackblitz`;

    async edit(
        component: string,
        sampleId: string,
        content: Record<string, string>,
    ): Promise<void> {
        if (!content.HTML || !content.TypeScript) {
            return;
        }

        const {appModuleTs} =
            await AbstractTuiStackblitzResourcesLoader.getProjectFiles();

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

        appCompTs.selector = APP_COMP_META.SELECTOR;
        appCompTs.templateUrl = APP_COMP_META.TEMPLATE_URL;
        appCompTs.styleUrls = APP_COMP_META.STYLE_URLS;
        appCompTs.className = APP_COMP_META.CLASS_NAME;

        return stackblitz.openProject({
            ...this.stacklitzProjectConfigs,
            title: `${component}-${sampleId}`,
            description: `Taiga UI example of the component ${component}`,
            files: {
                ...(await this.getBaseAngularProjectFiles()),
                ...(await this.getStackblitzOnlyFiles(supportModulesTuples)),
                ...modifiedSupportFiles,
                [appPrefix`app.module.ts`]: appModule.toString(),
                [appPrefix`app.component.ts`]: appCompTs.toString(),
                [appPrefix`app.component.html`]: `<tui-root>\n\n${content.HTML}\n</tui-root>`,
                [appPrefix`app.component.less`]: prepareLess(content.LESS || ``),
            },
        });
    }

    async openStarter(
        {title, description, files}: Pick<Project, 'title' | 'description' | 'files'>,
        openOptions?: OpenOptions,
    ): Promise<void> {
        return stackblitz.openProject(
            {
                ...this.stacklitzProjectConfigs,
                title,
                description,
                files: {
                    ...(await this.getBaseAngularProjectFiles()),
                    ...(await this.getStackblitzOnlyFiles()),
                    ...files,
                },
            },
            openOptions,
        );
    }

    private async getBaseAngularProjectFiles(): Promise<Project['files']> {
        const {tsconfig, angularJson, mainTs, polyfills, indexHtml, styles, appModuleTs} =
            await AbstractTuiStackblitzResourcesLoader.getProjectFiles();

        return {
            'tsconfig.json': tsconfig,
            'angular.json': angularJson,
            'src/main.ts': mainTs,
            'src/polyfills.ts': polyfills,
            'src/index.html': indexHtml,
            'src/styles.less': styles,
            [appPrefix`app.module.ts`]: appModuleTs.toString(),
        };
    }

    /** Some stackblitz hacks */
    private async getStackblitzOnlyFiles(
        additionalModules: Array<[fileName: string, parsedFile: TsFileModuleParser]> = [],
    ): Promise<Project['files']> {
        const taigaStyles = Object.fromEntries(
            Object.entries(
                await AbstractTuiStackblitzResourcesLoader.getTaigaStyles(),
            ).map(([path, content]) => [stackblitzPrefix`${path}`, prepareLess(content)]),
        );

        const {stackblitzReadMe} =
            await AbstractTuiStackblitzResourcesLoader.getReadMeFiles();

        return {
            ...taigaStyles,
            [stackblitzPrefix`README.md`]: stackblitzReadMe,
            [stackblitzPrefix`all-taiga-modules.ts`]: await getAllTaigaUIModulesFile(
                additionalModules,
            ),
        };
    }
}
