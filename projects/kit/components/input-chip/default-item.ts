import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldComponent,
} from '@taiga-ui/core/components/textfield';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {TuiChip} from '@taiga-ui/kit/components/chip';
import type {TuiInputChipDirective} from '@taiga-ui/kit/components/input-chip';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {injectContext} from '@taiga-ui/polymorpheus';
import type {PolymorpheusContext} from '@taiga-ui/polymorpheus/classes/context';

@Component({
    standalone: true,
    selector: 'tui-chip-item',
    imports: [FormsModule, NgIf, ReactiveFormsModule, TuiButton, TuiChip, TuiFade],
    template: `
        <div
            tuiFade
            tuiFadeOffset="2rem"
        >
            {{ internal() }}
        </div>
        <input
            tuiChip
            tuiFade
            tuiFadeOffset="2rem"
            [ngModel]="internal()"
            [readOnly]="!editMode()"
            (blur)="cancelEdit()"
            (dblclick)="editMode.set(true)"
            (keydown.backspace.stop)="(0)"
            (keydown.enter)="edit()"
            (keydown.esc)="cancelEdit(); textfield.input?.nativeElement?.focus()"
            (ngModelChange)="internal.set($event)"
        />
        <button
            *ngIf="!editMode()"
            iconStart="@tui.x"
            tuiIconButton
            type="button"
            (click.prevent)="remove()"
        >
            Remove
        </button>
    `,
    styles: [
        `
            :host {
                margin: 0.125rem 0.25rem 0.125rem 0;
            }

            [tuiChip] {
                color: var(--tui-text-primary);
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiChip],
    host: {
        tuiChip: '',
        appearance: '',
        tabIndex: '0',
        '[size]': "textfieldOptions.size() === 'l' ? 's' : 'xs'",
        '[style.color]': "'transparent'",
        '(click.stop)': '(0)',
        '(keydown.backspace)': 'remove()',
        '(keydown.arrowLeft.prevent)': 'moveFocus(-1)',
        '(keydown.arrowRight.prevent)': 'moveFocus(1)',
    },
})
export class TuiDefaultItem<T> {
    private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);

    private readonly context = injectContext<
        PolymorpheusContext<TuiInputChipDirective<T>> & {
            index: number;
        }
    >();

    protected item = computed(() => {
        return this.context.$implicit.value()[this.context.index];
    });

    protected readonly internal = signal(this.item());

    protected readonly editMode = signal(false);
    protected readonly textfield = inject(TuiTextfieldComponent);
    protected readonly textfieldOptions = inject(TUI_TEXTFIELD_OPTIONS);
    protected stringify = this.itemsHandlers.stringify();

    protected appearance = computed(() => (this.editMode() ? 'icon' : 'neutral'));

    protected binding = tuiDirectiveBinding(TuiAppearance, 'appearance', this.appearance);

    protected remove(): void {
        this.context.$implicit.onChange(
            this.context.$implicit
                .value()
                .filter((_, index) => index !== this.context.index),
        );
        this.textfield.input?.nativeElement.focus();
    }

    protected edit(): void {
        this.context.$implicit.onChange(
            this.context.$implicit
                .value()
                .map((item, index) =>
                    index === this.context.index ? (this.internal() ?? item) : item,
                ),
        );
        this.editMode.set(false);
        this.textfield.input?.nativeElement.focus();
    }

    protected cancelEdit(): void {
        this.internal.set(this.item());
        this.editMode.set(false);
    }

    protected moveFocus(step: number): void {
        this.context.$implicit.moveFocus(step, this.context.index);
    }
}
