import {inject, Injectable} from '@angular/core';
import stackblitz, {type OpenOptions, type Project} from '@stackblitz/sdk';
import {type TuiCodeEditor} from '@taiga-ui/addon-doc';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TsFileComponentParser} from '../classes';
import {StackblitzEditButton} from './edit';
import {StackblitzDepsService} from './stackblitz-deps.service';
import {AbstractTuiStackblitzResourcesLoader} from './stackblitz-resources-loader';
import {appPrefix, getSupportFiles, prepareLess, prepareSupportFiles} from './utils';

const APP_COMP_META = {
    SELECTOR: 'app',
    TEMPLATE_URL: './app.html',
    STYLE_URL: './app.less',
    CLASS_NAME: 'App',
} as const;

@Injectable()
export class TuiStackblitzService implements TuiCodeEditor {
    private readonly deps = inject(StackblitzDepsService);

    public readonly name = 'Stackblitz';
    public readonly content = new PolymorpheusComponent(StackblitzEditButton);

    public async edit(
        component: string,
        sampleId: string,
        content: Record<string, string>,
    ): Promise<void> {
        if (!content.HTML || !content.TypeScript) {
            return;
        }

        const appCompTs = new TsFileComponentParser(content.TypeScript);
        const supportFilesTuples = getSupportFiles(content);
        const modifiedSupportFiles = prepareSupportFiles(supportFilesTuples);

        appCompTs.selector = APP_COMP_META.SELECTOR;
        appCompTs.templateUrl = APP_COMP_META.TEMPLATE_URL;
        appCompTs.styleUrl = APP_COMP_META.STYLE_URL;
        appCompTs.className = APP_COMP_META.CLASS_NAME;
        appCompTs.defaultExport = false;

        stackblitz.openProject({
            ...(await this.getStackblitzProjectConfig()),
            title: `${component}-${sampleId}`,
            description: `Taiga UI example of the component ${component}`,
            files: {
                ...(await this.getBaseAngularProjectFiles()),
                ...modifiedSupportFiles,
                [appPrefix`app.ts`]: appCompTs.toString(),
                [appPrefix`app.html`]: content.HTML,
                [appPrefix`app.less`]: prepareLess(content.LESS || ''),
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
                    ...files,
                },
            },
            openOptions,
        );
    }

    private async getBaseAngularProjectFiles(): Promise<Project['files']> {
        const {tsconfig, angularJson, mainTs, indexHtml, globalStyles} =
            await AbstractTuiStackblitzResourcesLoader.getProjectFiles();

        return {
            'tsconfig.json': tsconfig,
            'angular.json': angularJson,
            'src/main.ts': mainTs,
            'src/index.html': indexHtml,
            'src/styles.less': globalStyles,
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
