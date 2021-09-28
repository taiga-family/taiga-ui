import {default as angularJson} from '!!raw-loader!./project-files/angular.txt';
import {default as appModuleTs} from '!!raw-loader!./project-files/src/app/app.module.ts.txt';
import {default as indexHtml} from '!!raw-loader!./project-files/src/index.html';
import {default as mainTs} from '!!raw-loader!./project-files/src/main.ts.txt';
import {default as polyfills} from '!!raw-loader!./project-files/src/polyfills.ts';
import {default as styles} from '!!raw-loader!./project-files/src/styles.less';
import {default as tsconfig} from '!!raw-loader!./project-files/tsconfig.txt';

import {Injectable} from '@angular/core';
import stackblitz from '@stackblitz/sdk';
import {CodeEditor} from '@taiga-ui/addon-doc';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {isMainComponentFile, isTS} from '../utils';
import {STACKBLITZ_DEPS} from './stackblitz-deps.constants';
import {addImport} from './utils';

const COMPONENT_SELECTOR = `selector: 'my-app',`;
const COMPONENT_TEMPLATE = `templateUrl: './app.component.html',`;
const COMPONENT_STYLES = `styleUrls: ['./app.component.less'],`;

const COMPONENT_NAME = `
})
export class AppComponent {`;

function prepareAppTsMeta(content: string): string {
    return content
        .replace(/selector: \'.+,*$/gm, COMPONENT_SELECTOR)
        .replace(/templateUrl: \'.+,*$/gm, COMPONENT_TEMPLATE)
        .replace(/styleUrls: \['.+,*$/gm, COMPONENT_STYLES)
        .replace(/^}\)\nexport class [\w ]+{/m, COMPONENT_NAME);
}

function prepareLess(content: string): string {
    return content.replace(
        '~@taiga-ui/core/styles/taiga-ui-local',
        '@taiga-ui/core/styles/taiga-ui-local.less',
    );
}

const getSupportFiles = <T extends FrontEndExample>(files: T): Record<string, string> => {
    return Object.entries(files)
        .filter(([fileName]) => !isMainComponentFile(fileName))
        .reduce(
            (acc, [fileName, fileContent]) => ({
                ...acc,
                [fileName]: fileContent,
            }),
            {},
        );
};

const addDeclaration = (moduleFileContent: string, entity: string): string => {
    return moduleFileContent.replace('declarations: [', `declarations: [${entity},`);
};

export const getComponentsClassNames = (
    files: Record<string, string>,
): Array<[string, string]> => {
    return Object.entries(files).reduce((acc, [fileName, fileContent]) => {
        const className = isTS(fileName)
            ? (fileContent.match(/export class (\w*)/i) || [])[1]
            : '';

        return className ? [...acc, [fileName, className]] : acc;
    }, [] as [string, string][]);
};

const appPrefix = (stringsPart: TemplateStringsArray, path: string = '') =>
    `src/app/${stringsPart.join('')}${path}`;

@Injectable()
export class StackblitzService implements CodeEditor {
    readonly name = 'Stackblitz';

    open(component: string, sampleId: string, content: FrontEndExample) {
        if (!content.HTML || !content.TypeScript) {
            return;
        }

        const supportFiles = getSupportFiles(content);
        const supportClassNames = getComponentsClassNames(supportFiles);
        const prefixedSupportFiles = Object.entries(supportFiles).reduce(
            (acc, [fileName, fileContent]) => ({
                ...acc,
                [appPrefix`${fileName}`]: fileContent,
            }),
            {},
        );
        const modifiedAppModule = supportClassNames.reduce(
            (importModule, [fileName, className]) =>
                addDeclaration(
                    addImport(importModule, className, `./${fileName}`),
                    className,
                ),
            appModuleTs,
        );

        stackblitz.openProject({
            title: `${component}-${sampleId}`,
            description: `Taiga UI example of the component ${component}`,
            template: 'angular-cli',
            dependencies: STACKBLITZ_DEPS,
            files: {
                ...prefixedSupportFiles,
                'tsconfig.json': tsconfig,
                'angular.json': angularJson,
                'src/index.html': indexHtml,
                'src/main.ts': mainTs,
                'src/polyfills.ts': polyfills,
                'src/styles.less': styles,
                [appPrefix`app.module.ts`]: modifiedAppModule,
                [appPrefix`app.component.ts`]: prepareAppTsMeta(content.TypeScript || ''),
                [appPrefix`app.component.html`]: `<tui-root>\n\n${content.HTML}\n</tui-root>`,
                [appPrefix`app.component.less`]: prepareLess(content.LESS || ''),
            },
            tags: ['Angular', 'Taiga UI', 'Angular components', 'UI Kit'],
        });
    }
}
