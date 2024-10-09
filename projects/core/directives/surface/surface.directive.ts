import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';

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
    hostDirectives: [
        {
            directive: TuiAppearance,
            inputs: ['tuiAppearance: tuiSurface'],
        },
    ],
    host: {
        tuiSurface: '',
        '[attr.data-surface]': 'tuiSurface',
    },
})
export class TuiSurface {
    protected readonly nothing = tuiWithStyles(TuiSurfaceStyles);

    @Input()
    public tuiSurface = '';
}
