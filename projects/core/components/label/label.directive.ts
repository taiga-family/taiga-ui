import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    Directive,
    forwardRef,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {tuiInjectElement, tuiWithStyles} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_HOST} from '@taiga-ui/core/components/data-list';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./label.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-label-styles',
    },
})
class TuiLabelStyles {}

// TODO: Replace TUI_DATA_LIST_HOST with proper token once we refactor textfields
@Directive({
    standalone: true,
    selector: 'label[tuiLabel]',
    host: {
        '[attr.for]': 'el.htmlFor || parent?.input.id',
        '[class._textfield]': 'textfield',
    },
})
export class TuiLabelDirective {
    @ContentChild(forwardRef(() => TUI_DATA_LIST_HOST))
    protected readonly textfield?: unknown;

    protected readonly el = tuiInjectElement<HTMLLabelElement>();
    protected readonly nothing = tuiWithStyles(TuiLabelStyles);
    protected readonly parent = inject(
        forwardRef(() => TUI_DATA_LIST_HOST),
        {optional: true},
    );
}
