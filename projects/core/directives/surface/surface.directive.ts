import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {tuiWithStyles} from '@taiga-ui/cdk';

@Component({
    template: '',
    styleUrls: ['./surface.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-surface'},
})
class Styles {}

@Directive({
    selector: '[tuiSurface]',
    hostDirectives: [
        {
            directive: TuiAppearance,
            inputs: ['tuiAppearance: tuiSurface'],
        },
    ],
    host: {
        tuiSurface: '',
        '[attr.data-surface]': 'tuiSurface()',
    },
})
export class TuiSurface {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly tuiSurface = input('');
}
