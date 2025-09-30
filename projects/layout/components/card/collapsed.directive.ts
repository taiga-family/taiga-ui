import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';

@Component({
    template: '',
    styleUrls: ['./collapsed.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-card-collapsed'},
})
class Styles {}

@Directive({
    selector: '[tuiCardCollapsed]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
    host: {
        tuiCardCollapsed: '',
        '[style.margin-block-end.rem]': 'collapsed() ? 0.75 : 0',
        '[style.clip-path]': 'collapsed() ? "inset(-0.75rem)" : "inset(0)"',
    },
})
export class TuiCardCollapsed {
    public readonly collapsed = input(false, {alias: 'tuiCardCollapsed'});
}
