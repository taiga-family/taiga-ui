import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {default as example1Ts} from '!!raw-loader!./examples/1/component.ts';
import {default as example1Html} from '!!raw-loader!./examples/1/template.html';

import {Component} from '@angular/core';
import {TuiMatcher} from '@taiga-ui/cdk';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-filter',
    templateUrl: './filter.template.html',
    styleUrls: ['./filter.style.less'],
    changeDetection,
})
export class ExampleTuiFilterComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    items = [
        {
            name: 'Sword',
            price: 1000,
        },
        {
            name: 'Axe',
            price: 100,
        },
        {
            name: 'Spear',
            price: 500,
        },
    ];

    matcherVariants: ReadonlyArray<TuiMatcher<any>> = [
        (item, search: string) =>
            item.name.toLowerCase().indexOf(search.toString().toLowerCase()) !== -1,
        (item, search: number) => item.price > search,
    ];

    matcher = this.matcherVariants[0];

    argsVariants: ReadonlyArray<string | number> = ['', 'hey', 400];

    args = this.argsVariants[0];
}
