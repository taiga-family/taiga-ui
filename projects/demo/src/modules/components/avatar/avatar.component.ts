import {Component, Inject} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDocCodeModule,
    TuiDocDemoModule,
    TuiDocDocumentationModule,
    TuiDocExample,
    TuiDocExampleModule,
    TuiDocPageModule,
    TuiRawLoaderContent,
} from '@taiga-ui/addon-doc';
import {TuiNotificationModule, TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';

import {TuiAvatarExample1} from './examples/1';
import {TuiAvatarExample2} from './examples/2';
import {TuiAvatarExample3} from './examples/3';
import {TuiAvatarExample4} from './examples/4';
import {TuiAvatarExample5} from './examples/5';
import {TuiAvatarExample6} from './examples/6';

@Component({
    standalone: true,
    selector: 'example-avatar',
    imports: [
        TuiDocPageModule,
        TuiDocExampleModule,
        TuiNotificationModule,
        TuiAvatarExample1,
        TuiAvatarExample2,
        TuiAvatarExample3,
        TuiAvatarExample4,
        TuiAvatarExample5,
        TuiAvatarExample6,
        TuiDocDemoModule,
        TuiAvatarComponent,
        TuiDocDocumentationModule,
        TuiDocCodeModule,
    ],
    templateUrl: './avatar.template.html',
    changeDetection,
})
export default class ExampleTuiAvatarComponent {
    readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
        LESS: import('./examples/6/index.less?raw'),
    };

    readonly sizes: ReadonlyArray<TuiSizeXXL | TuiSizeXXS> = [
        'xxs',
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    size = this.sizes[3];

    readonly srcVariants: ReadonlyArray<SafeResourceUrl | string> = [
        'MW',
        'https://avatars.githubusercontent.com/u/11832552',
        'https://taiga-ui.dev/assets/images/test-not-found.png',
        'tuiIconUserLarge',
        this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://avatars.githubusercontent.com/u/10106368',
        ),
    ];

    src = this.srcVariants[0];

    round = true;

    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}
}
