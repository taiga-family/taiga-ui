import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrl: './collapsed.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-card-collapsed'},
})
class Styles {}

@Directive({
    selector: '[tuiCardCollapsed]',
    host: {
        tuiCardCollapsed: '',
        '[style.margin-block-end.rem]': 'collapsed() ? 0.75 : 0',
        '[style.clip-path]': 'collapsed() ? "inset(-0.75rem)" : "inset(0)"',
    },
})
export class TuiCardCollapsed {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly collapsed = input(false, {alias: 'tuiCardCollapsed'});
}
