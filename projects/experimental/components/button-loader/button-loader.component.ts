import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiSizeBigger, TuiSizeL, TuiSizeS, TuiSizeXS} from '@taiga-ui/core';

@Component({
    selector:
        'a[tuiButton][loading],button[tuiButton][loading],a[tuiIconButton][loading],button[tuiIconButton][loading]',
    templateUrl: './button-loader.template.html',
    styleUrls: ['./button-loader.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[disabled]': 'disabled || loading',
        '[class._loading]': 'loading',
    },
})
export class TuiButtonLoaderComponent {
    @Input()
    size: TuiSizeL | TuiSizeXS = 'l';

    @Input()
    loading = false;

    @Input()
    disabled = false;

    get loaderSize(): TuiSizeS {
        return tuiSizeBigger(this.size) ? 'm' : 's';
    }
}
