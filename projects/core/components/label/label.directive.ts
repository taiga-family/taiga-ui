import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    Directive,
    forwardRef,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DATA_LIST_HOST} from '@taiga-ui/core/components/data-list';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/label.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-label'},
})
class Styles {}

// TODO: Replace TUI_DATA_LIST_HOST with proper token once we refactor textfields
@Directive({
    selector: 'label[tuiLabel]',
    host: {
        'data-tui-version': TUI_VERSION,
        '[attr.for]': 'el.htmlFor || parent?.id',
        '[attr.data-orientation]': 'textfield() ? "vertical" : "horizontal"',
    },
})
export class TuiLabel {
    protected readonly textfield = contentChild(forwardRef(() => TUI_DATA_LIST_HOST));
    protected readonly el = tuiInjectElement<HTMLLabelElement>();
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly parent = inject(
        forwardRef(() => TUI_DATA_LIST_HOST),
        {optional: true},
    );
}
