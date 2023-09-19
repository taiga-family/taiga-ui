import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {tuiSizeBigger, TuiSizeL, TuiSizeS, TuiSizeXS} from '@taiga-ui/core';

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
    size: TuiSizeL | TuiSizeXS = 'l';

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
}
