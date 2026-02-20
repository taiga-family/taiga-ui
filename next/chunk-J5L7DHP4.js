import"./chunk-HU6DUUP4.js";var i=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiDataList, type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';
import {delay, of} from 'rxjs';

@Component({
    imports: [TuiDataList, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    private readonly items = ['Foo', 'Bar', 'Baz'];
    protected readonly items$ = inject(WA_IS_E2E)
        ? of(this.items)
        : of(this.items).pipe(delay(1e3));

    protected readonly emptyContentVariants = ['Loading...', ''];
    protected emptyContent = this.emptyContentVariants[0];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];
    protected size = this.sizeVariants[0]!;

    protected readonly customList = {
        'custom-list/index.ts': import('./examples/4/custom-list/index.ts?raw', {
            with: {loader: 'text'},
        }),
        'custom-list/index.html': import('./examples/4/custom-list/index.html'),
    };
}
`;export{i as default};
