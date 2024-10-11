import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TUI_SHEET_DIALOG_DEFAULT_OPTIONS, TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
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
    ];

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
