import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    inject,
    Input,
    signal,
    ViewChild,
} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiDirectiveBinding, tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldComponent,
    type TuiTextfieldItem,
} from '@taiga-ui/core/components/textfield';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {TuiHintDirective, TuiHintOverflow} from '@taiga-ui/core/directives/hint';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TuiChip} from '@taiga-ui/kit/components/chip';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {tuiInjectValue} from '@taiga-ui/kit/utils';
import {injectContext} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-input-chip',
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        TuiButton,
        TuiChip,
        TuiFade,
        TuiHintOverflow,
    ],
    templateUrl: './input-chip.template.html',
    styleUrls: ['./input-chip.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiChip],
    host: {
        tuiChip: '',
        class: 'tui-interactive',
        '[class._edit]': 'editing()',
        '[attr.tabIndex]': 'disabled() ? null : -1',
        '(click)': 'editing() && $event.stopPropagation()',
        '(keydown.backspace.prevent)': 'delete()',
        '(keydown.enter.prevent)': 'edit()',
        '(dblclick)': 'edit()',
    },
})
export class TuiInputChipComponent<T> {
    @ViewChild(TuiChip, {read: ElementRef})
    private readonly input?: ElementRef<HTMLInputElement>;

    private readonly options = inject(TUI_TEXTFIELD_OPTIONS);
    private readonly context = injectContext<TuiContext<TuiTextfieldItem<T>>>();
    private readonly value = tuiInjectValue<readonly T[]>();

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly mobile = inject(TUI_IS_MOBILE);
    protected readonly internal = signal(this.context.$implicit.item);
    protected readonly editing = signal(false);
    protected readonly hint = inject(TuiHintDirective, {self: true, optional: true});
    protected readonly handlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    protected readonly textfield = inject(TuiTextfieldComponent);

    protected readonly disabled = tuiDirectiveBinding(
        TuiAppearance,
        'tuiAppearanceState',
        computed(() =>
            this.handlers.disabledItemHandler()(this.context.$implicit.item) ||
            this.textfield.cva?.disabled()
                ? 'disabled'
                : null,
        ),
    );

    protected readonly size = tuiDirectiveBinding(
        TuiChip,
        'size',
        computed(() => (this.options.size() === 'l' ? 's' : 'xs')),
    );

    @Input()
    public editable = true;

    protected get index(): number {
        return this.context.$implicit.index;
    }

    protected delete(): void {
        if (this.textfield.cva?.interactive) {
            this.textfield.cva?.onChange(this.value().filter((_, i) => i !== this.index));
        }

        if (!this.mobile) {
            this.textfield.input?.nativeElement.focus({preventScroll: true});
        }
    }

    protected save(): void {
        if (!this.internal()) {
            this.delete();
        } else if (this.handlers.disabledItemHandler()(this.internal())) {
            return;
        }

        const value = this.value().map((item, index) =>
            index === this.index ? this.internal() : item,
        );

        this.textfield.cva?.onChange(value);
        this.editing.set(false);
        this.textfield.input?.nativeElement.focus({preventScroll: true});
    }

    protected cancel(): void {
        this.editing.set(false);
        this.internal.set(this.context.$implicit.item);
    }

    protected edit(): void {
        if (
            !this.editable ||
            !this.textfield.cva?.interactive() ||
            !tuiIsString(this.internal()) ||
            this.disabled()
        ) {
            return;
        }

        this.editing.set(true);
        setTimeout(() => this.input?.nativeElement.focus());
    }
}
