import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import {tuiIsString} from '@taiga-ui/cdk';
import {tuiSizeBigger, TuiSizeS} from '@taiga-ui/core';

import {TUI_BUTTON_OPTIONS} from './button.options';

@Component({
    selector: '[tuiButton][loading],[tuiIconButton][loading]',
    templateUrl: './button.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.aria-disabled]': 'loading',
        '[class._loading]': 'loading',
    },
})
export class TuiButtonComponent {
    private readonly options = inject(TUI_BUTTON_OPTIONS);

    @Input()
    public size = this.options.size;

    @Input()
    public loading: boolean | string | null = false;

    protected get loaderSize(): TuiSizeS {
        return tuiSizeBigger(this.size) ? 'm' : 's';
    }

    protected get label(): string {
        return tuiIsString(this.loading) ? this.loading : '';
    }

    @HostListener('click.capture', ['$event'])
    protected onClick(event: MouseEvent): void {
        if (this.loading) {
            event.stopPropagation();
        }
    }
}
