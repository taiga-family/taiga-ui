import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly importCode = import('./examples/import/import.md?raw');
    protected readonly templateCode = import('./examples/import/template.md?raw');
    protected readonly reorderStrategyCode = import(
        './examples/import/reorder-strategy.md?raw'
    );
}
