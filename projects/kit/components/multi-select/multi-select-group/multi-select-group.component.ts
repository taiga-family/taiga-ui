import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChildren,
    inject,
    input,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiOptionWithValue} from '@taiga-ui/core/components/data-list';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
import {TUI_MULTI_SELECT_TEXTS} from '@taiga-ui/kit/tokens';
import {tuiInjectValue} from '@taiga-ui/kit/utils';

@Component({
    selector: 'tui-opt-group[tuiMultiSelectGroup]',
    imports: [TuiLink],
    templateUrl: './multi-select-group.template.html',
    styleUrl: './multi-select-group.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMultiSelectGroupComponent<T> {
    private readonly options = contentChildren(TuiOptionWithValue<T>);
    private readonly handlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS);
    private readonly control =
        inject(TuiTextfieldComponent, {optional: true})?.control() ||
        inject(NgControl, {optional: true});

    protected readonly values = computed(() => this.options().map(({value}) => value()));
    protected readonly texts = inject(TUI_MULTI_SELECT_TEXTS);
    protected readonly value = tuiInjectValue<readonly T[] | null>();
    protected readonly checked = computed(() =>
        this.values().every((item) =>
            this.value()?.some(
                (v) => tuiIsPresent(item) && this.handlers.identityMatcher()(item, v),
            ),
        ),
    );

    public readonly label = input('');

    protected toggle(): void {
        const values = this.values().filter(tuiIsPresent);
        const matcher = this.handlers.identityMatcher();
        const value = this.value() || [];
        const others = value.filter((a) => values.every((b) => !matcher(a, b)));

        this.control?.control?.setValue(this.checked() ? others : others.concat(values));
    }
}
