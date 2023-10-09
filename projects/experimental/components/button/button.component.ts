import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Inject,
    Input,
} from '@angular/core';
import {tuiIsString} from '@taiga-ui/cdk';
import {tuiSizeBigger, TuiSizeS} from '@taiga-ui/core';

import {TUI_BUTTON_OPTIONS, TuiButtonOptions} from './button.options';

@Component({
    selector:
        '[tuiButton][loading],[tuiIconButton][loading],[tuiButton][iconLeft],[tuiButton][iconRight],[tuiIconButton][iconLeft]',
    templateUrl: './button.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.aria-disabled]': 'loading',
        '[class._loading]': 'loading',
    },
})
export class TuiButtonComponent {
    @Input()
    size = this.options.size;

    @Input()
    loading: boolean | string | null = false;

    @Input()
    iconLeft = '';

    @Input()
    iconRight = '';

    constructor(@Inject(TUI_BUTTON_OPTIONS) private readonly options: TuiButtonOptions) {}

    get loaderSize(): TuiSizeS {
        return tuiSizeBigger(this.size) ? 'm' : 's';
    }

    get label(): string {
        return tuiIsString(this.loading) ? this.loading : '';
    }

    @HostListener('click.capture', ['$event'])
    onClick(event: MouseEvent): void {
        if (this.loading) {
            event.stopPropagation();
        }
    }
}
