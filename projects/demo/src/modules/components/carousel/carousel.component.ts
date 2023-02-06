import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-carousel',
    templateUrl: './carousel.template.html',
    styleUrls: ['./carousel.style.less'],
    changeDetection,
})
export class ExampleTuiCarouselComponent {
    readonly durationVariants = [0, 3000, 10000];
    draggable = false;
    duration = this.durationVariants[0];
    index = 0;
    itemsCount = 1;

    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');

    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
        LESS: import('!!raw-loader!./examples/4/index.less'),
    };
}
