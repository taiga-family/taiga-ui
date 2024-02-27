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
    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    protected readonly exampleComponent = import(
        './examples/import/insert-component.md?raw'
    );

    protected closeable = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.closeable;
    protected initial = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.initial;
    protected stops = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.stops;
    protected label = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.label;

    protected open = false;

    protected readonly stopsVariants = [this.stops, ['100px'], ['10rem', '20rem']];
    protected readonly labelVariants = [this.label, 'String label', 'Template'];

    protected readonly isMobile = inject(TUI_IS_MOBILE);

    protected toggle(): void {
        this.open = !this.open;
    }
}
