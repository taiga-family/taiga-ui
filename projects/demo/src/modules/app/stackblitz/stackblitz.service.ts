import {Injectable} from '@angular/core';
import {CodeEditor} from '@taiga-ui/addon-doc';

import {default as angularJson} from '!!raw-loader!./project-files/angular.txt';
import {default as indexHtml} from '!!raw-loader!./project-files/src/index.html';
import {default as mainTs} from '!!raw-loader!./project-files/src/main.ts.txt';
import {default as polyfills} from '!!raw-loader!./project-files/src/polyfills.ts';
import {default as styles} from '!!raw-loader!./project-files/src/styles.less';
import {default as tsconfig} from '!!raw-loader!./project-files/tsconfig.txt';

import stackblitz from '@stackblitz/sdk';

const DEPS: Record<string, string> = {
    '@taiga-ui/cdk': '*',
    '@taiga-ui/i18n': '*',
    '@taiga-ui/core': '*',
    '@taiga-ui/kit': '*',
    '@taiga-ui/icons': '*',
    '@taiga-ui/addon-charts': '*',
    '@taiga-ui/addon-commerce': '*',
    '@taiga-ui/addon-mobile': '*',
    '@taiga-ui/addon-table': '*',
    '@taiga-ui/addon-tablebars': '*',
    '@taiga-ui/addon-editor': '*',
};

@Injectable()
export class StackblitzService implements CodeEditor {
    readonly name = 'Stackblitz';

    open(component: string, sampleId: string, content: Record<string, string>) {
        console.log(content);

        stackblitz.openProject({
            title: `${component}-${sampleId}`,
            description: `Taiga UI example of the component ${component}`,
            template: 'angular-cli',
            dependencies: DEPS,
            files: {
                'tscongif.json': tsconfig,
                'angular.json': angularJson,
                'src/index.html': indexHtml,
                'src/main.ts': mainTs,
                'src/polyfills.ts': polyfills,
                'src/styles.less': styles,
            },
            tags: ['Angular', 'Taiga UI', 'Angular components', 'UI Kit'],
        });
    }
}
