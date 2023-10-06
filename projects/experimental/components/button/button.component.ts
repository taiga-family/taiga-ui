import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {tuiSizeBigger, TuiSizeS} from '@taiga-ui/core';

import {TUI_BUTTON_OPTIONS, TuiButtonOptions} from './button.options';

@Component({
    selector:
        '[tuiButton][loading],[tuiIconButton][loading],[tuiButton][iconLeft],[tuiButton][iconRight],[tuiIconButton][iconLeft]',
    templateUrl: './button.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[disabled]': 'disabled || loading',
        '[class._loading]': 'loading',
    },
})
export class TuiButtonComponent {
    @Input()
    size = this.options.size;

    @Input()
    loading = false;

    @Input()
    iconLeft = '';

    @Input()
    iconRight = '';

    @Input()
    disabled = false;

    get loaderSize(): TuiSizeS {
        return tuiSizeBigger(this.size) ? 'm' : 's';
    }

    constructor(@Inject(TUI_BUTTON_OPTIONS) private readonly options: TuiButtonOptions) {}
}
