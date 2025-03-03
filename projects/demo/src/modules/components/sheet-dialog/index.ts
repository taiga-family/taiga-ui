import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TUI_SHEET_DIALOG_DEFAULT_OPTIONS, TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatar, TuiButton, TuiDemo, TuiSheetDialog, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected readonly exampleComponent = import('./examples/import/component.md?raw');
    protected readonly examples = [
        'String',
        'Basic',
        'Advanced',
        'Sticky elements',
        'Responsive',
        'AppBar',
        'Fullscreen',
    ];

    protected closeable = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.closeable;
    protected fullscreen = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.fullscreen;
    protected bar = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.bar;
    protected initial = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.initial;
    protected stops = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.stops;
    protected label = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.label;
    protected offset = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.offset;

    protected open = false;

    protected readonly stopsVariants = [this.stops, ['100px'], ['10rem', '20rem']];
    protected readonly labelVariants = [this.label, 'String label', 'Template'];

    protected toggle(): void {
        this.open = !this.open;
    }
}
