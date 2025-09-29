import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    Directive,
    forwardRef,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_DATA_LIST_HOST} from '@taiga-ui/core/components/data-list';

@Component({
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/label.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-label'},
})
class Styles {}

// TODO: Replace TUI_DATA_LIST_HOST with proper token once we refactor textfields
@Directive({
    selector: 'label[tuiLabel]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
    host: {
        '[attr.for]': 'el.htmlFor || parent?.id',
        '[attr.data-orientation]': 'textfield ? "vertical" : "horizontal"',
    },
})
export class TuiLabel {
    @ContentChild(forwardRef(() => TUI_DATA_LIST_HOST))
    protected readonly textfield?: unknown;

    protected readonly el = tuiInjectElement<HTMLLabelElement>();
    protected readonly parent = inject(
        forwardRef(() => TUI_DATA_LIST_HOST),
        {optional: true},
    );
}
