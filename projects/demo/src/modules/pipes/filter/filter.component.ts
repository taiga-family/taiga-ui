import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {TuiMatcher} from '@taiga-ui/cdk';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-filter',
    templateUrl: './filter.template.html',
    styleUrls: ['./filter.style.less'],
    changeDetection,
})
export class ExampleTuiFilterComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

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

    argsVariants: ReadonlyArray<string | number> = ['', 'оп', 400];

    args = this.argsVariants[0];
}
