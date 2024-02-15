import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TUI_SHEET_DIALOG_DEFAULT_OPTIONS} from '@taiga-ui/addon-mobile';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';

@Component({
    selector: 'example-sheet-dialog',
    templateUrl: './sheet-dialog.template.html',
    styleUrls: ['./sheet-dialog.style.less'],
    changeDetection,
})
export class ExampleTuiSheetDialogComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    readonly exampleComponent = import('./examples/import/insert-component.md?raw');

    closeable = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.closeable;
    initial = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.initial;
    stops = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.stops;
    label = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.label;

    open = false;

    readonly stopsVariants = [this.stops, ['100px'], ['10rem', '20rem']];
    readonly labelVariants = [this.label, 'String label', 'Template'];

    readonly isMobile = inject(TUI_IS_MOBILE);

    toggle(): void {
        this.open = !this.open;
    }
}
