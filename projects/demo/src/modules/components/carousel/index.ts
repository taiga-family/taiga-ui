import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemoModule} from '@demo/utils';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiLinkDirective,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {TuiCarouselModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'example-carousel',
    imports: [
        TuiDemoModule,
        TuiNotificationModule,
        TuiCarouselModule,
        TuiRepeatTimesModule,
        TuiButtonDirective,
        TuiLinkDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class ExampleTuiCarouselComponent {
    protected readonly examples = [
        'Single',
        'Multiple',
        'Custom',
        'Carousel inside dialog',
        'Vertical alignment',
    ];

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
