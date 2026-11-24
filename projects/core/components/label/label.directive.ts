import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    Directive,
    forwardRef,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DATA_LIST_HOST} from '@taiga-ui/core/components/data-list';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/label.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-label-${TUI_VERSION}`,
})
class TuiLabelStyles {}

// TODO: Replace TUI_DATA_LIST_HOST with proper token once we refactor textfields
@Directive({
    standalone: true,
    selector: 'label[tuiLabel]',
    host: {
        tuiLabelV: TUI_VERSION,
        '[attr.data-label-reverse]': 'tuiLabelReverse ? "" : null',
        '[attr.data-orientation]': 'textfield ? "vertical" : "horizontal"',
        '[attr.for]': 'el.htmlFor || parent?.id',
    },
})
export class TuiLabel {
    @ContentChild(forwardRef(() => TUI_DATA_LIST_HOST))
    protected readonly textfield?: unknown;

    protected readonly el = tuiInjectElement<HTMLLabelElement>();
    protected readonly nothing = tuiWithStyles(TuiLabelStyles);
    protected readonly parent = inject(
        forwardRef(() => TUI_DATA_LIST_HOST),
        {optional: true},
    );

    @Input({transform: coerceBooleanProperty})
    public tuiLabelReverse = false;
}
