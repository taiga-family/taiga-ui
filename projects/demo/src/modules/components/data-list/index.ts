import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiDataList} from '@taiga-ui/core';
import {delay, of} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiDataList, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    private readonly items = ['Foo', 'Bar', 'Baz'];
    protected readonly items$ = inject(TUI_IS_E2E)
        ? of(this.items)
        : of(this.items).pipe(delay(1e3));

    protected readonly emptyContentVariants = ['Loading...', ''];
    protected emptyContent = this.emptyContentVariants[0];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];
    protected size = this.sizeVariants[0]!;

    protected readonly example4 = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        'custom-list/index.ts': import('./examples/4/custom-list/index.ts?raw'),
        'custom-list/index.html': import('./examples/4/custom-list/index.html?raw'),
    };
}
