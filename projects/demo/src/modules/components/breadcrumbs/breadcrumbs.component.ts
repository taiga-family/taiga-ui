import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {TuiSizeL} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-breadcrumbs',
    templateUrl: './breadcrumbs.template.html',
    changeDetection,
})
export class ExampleTuiBreadcrumbsComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    items1 = [
        {
            caption: 'Селекты',
            routerLink: '/tui-select',
        },
        {
            caption: 'Мульти',
            routerLink: '/tui-multi-select',
        },
        {
            caption: 'С тегами',
            routerLink: '/tui-multi-select',
        },
        {
            caption: 'Текущая',
            routerLink: '/tui-breadcrumbs',
        },
    ];

    itemsVariants = [this.items1];

    items = this.itemsVariants[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeL> = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];
}
