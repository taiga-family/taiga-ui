import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    signal,
} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiAutoFocus} from '@taiga-ui/cdk/directives/auto-focus';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import type {TuiContext, TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TUI_TEXTFIELD_OPTIONS,
    tuiInjectAuxiliary,
    type TuiTextfieldItem,
} from '@taiga-ui/core/components/textfield';
import {TuiHintDirective, TuiHintOverflow} from '@taiga-ui/core/directives/hint';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {TuiChip} from '@taiga-ui/kit/components/chip';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {injectContext} from '@taiga-ui/polymorpheus';

import {TuiInputChipDirective} from './input-chip.directive';

@Component({
    standalone: true,
    selector: 'tui-input-chip',
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        TuiAutoFocus,
        TuiButton,
        TuiChip,
        TuiFade,
        TuiHintOverflow,
    ],
    template: `
        <input
            *ngIf="editing()"
            appearance=""
            enterkeyhint="enter"
            tuiAutoFocus
            tuiChip
            class="t-input"
            [ngModel]="internal()"
            (blur)="cancel()"
            (keydown.enter)="save()"
            (keydown.esc)="cancel()"
            (keydown.stop)="(0)"
            (ngModelChange)="internal.set($event)"
        />
        <div
            tuiFade
            tuiFadeOffset="0.5rem"
            class="t-text"
            [tuiHintOverflow]="hint?.content() ? null : stringify(internal())"
            (pointerdown.prevent.zoneless)="(0)"
        >
            {{ internal() }}
        </div>
        <button
            *ngIf="directive()?.interactive() && !editing()"
            iconStart="@tui.x"
            tabIndex="-1"
            tuiIconButton
            type="button"
            (click.stop)="delete()"
            (pointerdown.prevent.stop.zoneless)="(0)"
        >
            Remove
        </button>
    `,
    styleUrls: ['./input-chip.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiChip],
    host: {
        tuiChip: '',
        tabIndex: '-1',
        class: 'tui-interactive',
        '[class._edit]': 'editing()',
        '(click)': 'editing() && $event.stopPropagation()',
        '(pointerdown.self.prevent.zoneless)': '0',
        '(keydown.backspace.prevent)': 'delete()',
        '(keydown.enter.prevent)': 'edit()',
        '(dblclick)': 'edit()',
    },
})
export class TuiInputChipComponent<T> {
    private readonly options = inject(TUI_TEXTFIELD_OPTIONS);
    private readonly context = injectContext<TuiContext<TuiTextfieldItem<T>>>();
    private readonly value = computed(() => this.directive()?.value() ?? []);

    protected readonly mobile = inject(TUI_IS_MOBILE);
    protected readonly internal = signal(this.context.$implicit.item);
    protected readonly editing = signal(false);
    protected readonly hint = inject(TuiHintDirective, {self: true, optional: true});
    protected readonly stringify: TuiStringHandler<T> =
        inject(TUI_ITEMS_HANDLERS).stringify();

    protected readonly directive = tuiInjectAuxiliary<TuiInputChipDirective<T>>(
        (x) => x instanceof TuiInputChipDirective,
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
        this.directive()?.onChange(this.value().filter((_, i) => i !== this.index));

        if (!this.mobile) {
            this.directive()?.el.focus({preventScroll: true});
        }
    }

    protected save(): void {
        if (!this.internal()) {
            this.delete();
        } else {
            this.directive()?.onChange(
                this.value().map((item, index) =>
                    index === this.index ? this.internal() : item,
                ),
            );
        }

        this.editing.set(false);
        this.directive()?.el.focus({preventScroll: true});
    }

    protected cancel(): void {
        this.editing.set(false);
        this.internal.set(this.context.$implicit.item);
    }

    protected edit(): void {
        if (this.editable && this.directive()?.interactive()) {
            this.editing.set(true);
        }
    }
}
