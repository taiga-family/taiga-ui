import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';

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
    providers: [provideStyles(Styles)],
    hostDirectives: [
        {
            directive: TuiAppearance,
            inputs: ['tuiAppearance: tuiSurface'],
        },
        TuiWithStyles,
    ],
    host: {
        tuiSurface: '',
        '[attr.data-surface]': 'tuiSurface()',
    },
})
export class TuiSurface {
    public readonly tuiSurface = input('');
}
