import {inject, Injectable} from '@angular/core';
import type {OpenOptions, Project} from '@stackblitz/sdk';
import stackblitz from '@stackblitz/sdk';
import type {TuiCodeEditor} from '@taiga-ui/addon-doc';
import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TsFileComponentParser, TsFileModuleParser} from '../classes';
import {StackblitzEditButtonComponent} from './edit-button';
import {StackblitzDepsService} from './stackblitz-deps.service';
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

interface TuiProjectFiles {
    angularJson: string;
    appComponentTs: string;
    indexHtml: string;
    mainTs: string;
    styles: string;
    tsconfig: string;
}

const APP_COMP_META = {
    SELECTOR: 'my-app',
    TEMPLATE_URL: './app.component.html',
    STYLE_URLS: ['./app.component.less'],
    CLASS_NAME: 'AppComponent',
} as const;

@Injectable()
export class TuiStackblitzService implements TuiCodeEditor {
    private readonly deps = inject(StackblitzDepsService);

    public readonly name = 'Stackblitz';
    public readonly content = new PolymorpheusComponent(StackblitzEditButtonComponent);

    public async getProjectFiles(): Promise<TuiProjectFiles> {
        const [
            configsContent,
            mainTsContent,
            indexHtmlContent,
            stylesContent,
            appComponentContent,
        ]: string[] = await Promise.all(
            [
                import('./project-files/configs.md?raw'),
                import('./project-files/src/main.ts.md?raw'),
                import('./project-files/src/index.html.md?raw'),
                import('./project-files/src/styles.less.md?raw'),
                import('./project-files/src/app/app.component.ts.md?raw'),
            ].map(tuiRawLoad),
        );

        const [angularJson, tsconfig] = tuiTryParseMarkdownCodeBlock(configsContent);
        const [mainTs] = tuiTryParseMarkdownCodeBlock(mainTsContent);
        const [indexHtml] = tuiTryParseMarkdownCodeBlock(indexHtmlContent);
        const [styles] = tuiTryParseMarkdownCodeBlock(stylesContent);
        const [appComponentTs] = tuiTryParseMarkdownCodeBlock(appComponentContent);

        return {angularJson, tsconfig, mainTs, indexHtml, appComponentTs, styles};
    }

    public async getReadMeFiles(): Promise<{stackblitzReadMe: string}> {
        const [stackblitzReadMe] = await Promise.all([
            tuiRawLoad(import('./project-files/src/app/@stackblitz/README.md?raw')),
        ]);

        return {stackblitzReadMe};
    }

    public async edit(
        component: string,
        sampleId: string,
        content: Record<string, string>,
    ): Promise<void> {
        if (!content.HTML || !content.TypeScript) {
            return;
        }

        const {appComponentTs} = await this.getProjectFiles();

        const appModule = new TsFileModuleParser(appComponentTs);
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
            ...(await this.getStackblitzProjectConfig()),
            title: `${component}-${sampleId}`,
            description: `Taiga UI example of the component ${component}`,
            files: {
                ...(await this.getBaseAngularProjectFiles()),
                ...(await this.getStackblitzOnlyFiles(supportModulesTuples)),
                ...modifiedSupportFiles,
                [appPrefix`app.component.ts`]: appCompTs.toString(),
                [appPrefix`app.component.html`]: `<tui-root>\n\n${content.HTML}\n</tui-root>`,
                [appPrefix`app.component.less`]: prepareLess(content.LESS || ''),
            },
        });
    }

    public async openStarter(
        {title, description, files}: Pick<Project, 'description' | 'files' | 'title'>,
        openOptions?: OpenOptions,
    ): Promise<void> {
        return stackblitz.openProject(
            {
                ...(await this.getStackblitzProjectConfig()),
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
        const {tsconfig, angularJson, mainTs, indexHtml, styles, appComponentTs} =
            await this.getProjectFiles();

        return {
            'tsconfig.json': tsconfig,
            'angular.json': angularJson,
            'src/main.ts': mainTs,
            'src/index.html': indexHtml,
            'src/styles.less': styles,
            [appPrefix`app.component.ts`]: appComponentTs.toString(),
        };
    }

    /** Some stackblitz hacks */
    private async getStackblitzOnlyFiles(
        additionalModules: Array<[fileName: string, parsedFile: TsFileModuleParser]> = [],
    ): Promise<Project['files']> {
        const {stackblitzReadMe} = await this.getReadMeFiles();

        return {
            [stackblitzPrefix`README.md`]: stackblitzReadMe,
            [stackblitzPrefix`all-taiga-modules.ts`]:
                await getAllTaigaUIModulesFile(additionalModules),
        };
    }

    private async getStackblitzProjectConfig(): Promise<
        Pick<Project, 'dependencies' | 'tags' | 'template'>
    > {
        return {
            template: 'angular-cli',
            dependencies: await this.deps.get(),
            tags: ['Angular', 'Taiga UI', 'Angular components', 'UI Kit'],
        };
    }
}
