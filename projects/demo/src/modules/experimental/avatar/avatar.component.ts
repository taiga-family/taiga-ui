import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {RawLoaderContent, TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'example-avatar',
    templateUrl: './avatar.template.html',
    changeDetection,
})
export class ExampleTuiAvatarComponent {
    readonly exampleModule: RawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: RawLoaderContent = import(
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

    readonly sizes: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    size = this.sizes[1];

    readonly srcVariants: readonly string[] = [
        'MW',
        'https://avatars.githubusercontent.com/u/11832552',
        'tuiIconUserLarge',
    ];

    src = this.srcVariants[0];

    round = false;
}
