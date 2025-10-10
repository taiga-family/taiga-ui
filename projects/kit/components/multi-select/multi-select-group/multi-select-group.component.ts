import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ContentChildren,
    inject,
    Input,
    type QueryList,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
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
    standalone: true,
    selector: 'tui-opt-group[tuiMultiSelectGroup]',
    imports: [TuiLink],
    templateUrl: './multi-select-group.template.html',
    styleUrl: './multi-select-group.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._label]': 'label',
    },
})
export class TuiMultiSelectGroupComponent<T> {
    private readonly handlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS);
    private readonly control =
        inject(TuiTextfieldComponent, {optional: true})?.control ||
        inject(NgControl, {optional: true});

    protected readonly values = signal<readonly T[]>([]);
    protected readonly texts = toSignal(inject(TUI_MULTI_SELECT_TEXTS));
    protected readonly value = tuiInjectValue<readonly T[] | null>();
    protected readonly checked = computed(() =>
        this.values().every((item) =>
            this.value()?.some((value) => this.handlers.identityMatcher()(item, value)),
        ),
    );

    @Input()
    public label = '';

    @ContentChildren(TuiOptionWithValue)
    protected set options(options: QueryList<TuiOptionWithValue<T>>) {
        this.values.set(
            options
                .toArray()
                .map(({value}) => value())
                .filter(tuiIsPresent),
        );
    }

    protected toggle(): void {
        const values = this.values();
        const matcher = this.handlers.identityMatcher();
        const value = this.value() || [];
        const others = value.filter((a) => values.every((b) => !matcher(a, b)));

        this.control?.control?.setValue(this.checked() ? others : others.concat(values));
    }
}
