import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

const context = `<ng-container *ngFor="let item of items">
    <tui-tag
        *tuiItem
        class="tui-space_right-2"
        [value]="item"
    ></tui-tag>
</ng-container>
<span *tuiMore>and now for something completely different!</span>`;

@Component({
    selector: 'example-items-with-more',
    templateUrl: './items-with-more.template.html',
    changeDetection,
})
export class ExampleTuiItemsWithMoreComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly items = [
        'John Cleese',
        'Eric Idle',
        'Graham Chapman',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
    ];

    readonly requiredVariants = [-1, 2, 4];

    readonly itemsLimitVariants = [Infinity, 4, 2];

    required = this.requiredVariants[0];

    itemsLimit = this.itemsLimitVariants[0];

    readonly content = context;
}
