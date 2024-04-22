import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, type TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDialogModule,
    TuiLinkDirective,
    TuiLoaderModule,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiCarouselModule,
    TuiIslandModule,
    TuiPaginationModule,
} from '@taiga-ui/kit';

import {TuiCarouselExample1} from './examples/1';
import {TuiCarouselExample2} from './examples/2';
import {TuiCarouselExample3} from './examples/3';
import {TuiCarouselExample4} from './examples/4';
import {TuiCarouselExample5} from './examples/5';

@Component({
    standalone: true,
    selector: 'example-carousel',
    imports: [
        CommonModule,
        TuiCarouselModule,
        TuiPaginationModule,
        TuiNotificationModule,
        TuiLinkDirective,
        TuiButtonDirective,
        TuiIslandModule,
        TuiAmountPipe,
        TuiLoaderModule,
        TuiAvatarComponent,
        TuiDialogModule,
        TuiRepeatTimesModule,
        TuiAddonDocModule,
        TuiCarouselExample1,
        TuiCarouselExample2,
        TuiCarouselExample3,
        TuiCarouselExample4,
        TuiCarouselExample5,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class ExampleTuiCarouselComponent {
    protected readonly durationVariants = [0, 3000, 10000];
    protected readonly itemPaddingVariants = [null, '0 10px', '0'];
    protected draggable = false;
    protected duration = this.durationVariants[0];
    protected itemPadding: string | null = this.itemPaddingVariants[0];
    protected index = 0;
    protected itemsCount = 1;

    protected readonly exampleModule = import('./examples/import/import.md?raw');

    protected readonly exampleHtml = import('./examples/import/template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };
}
