import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./surface.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-surface-styles',
    },
})
class TuiSurfaceStyles {}

@Directive({
    standalone: true,
    selector: '[tuiSurface]',
    host: {
        tuiSurface: '',
        '[attr.data-surface]': 'tuiSurface',
    },
})
export class TuiSurfaceDirective {
    @Input()
    public tuiSurface = '';

    protected readonly nothing = tuiWithStyles(TuiSurfaceStyles);
}
