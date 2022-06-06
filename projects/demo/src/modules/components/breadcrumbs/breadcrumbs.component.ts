import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL} from '@taiga-ui/core';

@Component({
    selector: 'example-breadcrumbs',
    templateUrl: './breadcrumbs.template.html',
    changeDetection,
})
export class ExampleTuiBreadcrumbsComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly itemsVariants = [
        [
            {
                caption: 'Select',
                routerLink: '/tui-select',
            },
            {
                caption: 'MultiSelect',
                routerLink: '/tui-multi-select',
            },
            {
                caption: 'InputTag',
                routerLink: '/tui-input-tag',
            },
            {
                caption: 'Current',
                routerLink: '/tui-breadcrumbs',
            },
        ],
    ];

    items = this.itemsVariants[0];

    readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];
}
