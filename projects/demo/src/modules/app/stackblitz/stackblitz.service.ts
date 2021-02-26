import {Injectable} from '@angular/core';
import {CodeEditor} from '@taiga-ui/addon-doc';

import {default as angularJson} from '!!raw-loader!./project-files/angular.txt';
import {default as indexHtml} from '!!raw-loader!./project-files/src/index.html';
import {default as mainTs} from '!!raw-loader!./project-files/src/main.ts.txt';
import {default as polyfills} from '!!raw-loader!./project-files/src/polyfills.ts';
import {default as styles} from '!!raw-loader!./project-files/src/styles.less';
import {default as tsconfig} from '!!raw-loader!./project-files/tsconfig.txt';

import {default as appModuleTs} from '!!raw-loader!./project-files/src/app/app.module.ts.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

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
    '@tinkoff/ng-dompurify': '*',
    '@tinkoff/ng-polymorpheus': '*',
    '@ng-web-apis/common': '*',
    '@tinkoff/ng-event-plugins': '*',
    '@ng-web-apis/intersection-observer': '*',
    '@ng-web-apis/mutation-observer': '*',
    'angular2-text-mask': '*',
    dompurify: '*',
    '@types/dompurify': '*',
    '@angular/cdk': '*',
};

const COMPONENT = `@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent `;

function prepareTs(content: string): string {
    console.log(content);

    return content.replace(/@Component\({[A-z:'\n\s\-,.\/0-9})]+/gm, COMPONENT);
}

@Injectable()
export class StackblitzService implements CodeEditor {
    readonly name = 'Stackblitz';

    open(component: string, sampleId: string, content: FrontEndExample) {
        if (!content.HTML || !content.TypeScript) {
            return;
        }

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
                'src/app/app.module.ts': appModuleTs,
                'src/app/app.component.ts': prepareTs(content.TypeScript || ''),
                'src/app/app.component.html': `<tui-root>\n\n${content.HTML}\n</tui-root>`,
                'src/app/app.component.less': content.LESS || '',
            },
            tags: ['Angular', 'Taiga UI', 'Angular components', 'UI Kit'],
        });
    }
}
