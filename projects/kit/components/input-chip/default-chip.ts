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
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TUI_TEXTFIELD_OPTIONS,
    tuiInjectAuxiliary,
} from '@taiga-ui/core/components/textfield';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {TuiHintOverflow} from '@taiga-ui/core/directives/hint';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {TuiChip} from '@taiga-ui/kit/components/chip';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {injectContext} from '@taiga-ui/polymorpheus';
import type {PolymorpheusContext} from '@taiga-ui/polymorpheus/classes/context';

import {TuiInputChipDirective} from './input-chip.directive';
import type {TuiStringHandler} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    selector: 'tui-default-chip',
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        TuiButton,
        TuiChip,
        TuiFade,
        TuiHintOverflow,
    ],
    template: `
        <input
            #input
            appearance=""
            tuiChip
            [ngModel]="internal()"
            [readOnly]="!editMode()"
            [style.color]="editMode() ? 'var(--tui-text-primary)' : 'transparent'"
            (blur)="cancelEdit()"
            (keydown.backspace.stop)="(0)"
            (keydown.enter)="edit()"
            (keydown.esc)="cancelEdit()"
            (ngModelChange)="internal.set($event)"
        />
        <div
            tuiFade
            tuiFadeOffset="2rem"
            tuiHintOverflow
            [style.pointer-events]="editMode() ? 'none' : 'auto'"
            (dblclick)="editable && editMode.set(true); editable && input.focus()"
        >
            {{ internal() }}
        </div>
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
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiChip],
    host: {
        tuiChip: '',
        tabIndex: '0',
        '[size]': "textfieldOptions.size() === 'l' ? 's' : 'xs'",
        '(click.stop)': '(0)',
        '(keydown.backspace)': 'remove()',
        '(keydown.arrowLeft.prevent)': 'moveFocus(-1)',
        '(keydown.arrowRight.prevent)': 'moveFocus(1)',
    },
})
export class TuiDefaultChip<T> {
    private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    private readonly context = signal(
        injectContext<
            PolymorpheusContext<{
                index: number;
                item: T;
            }>
        >()?.$implicit,
    );

    protected readonly directive = tuiInjectAuxiliary<TuiInputChipDirective<T>>(
        (x) => x instanceof TuiInputChipDirective<T>,
    );

    protected item = computed(() => {
        return this.context()?.item;
    });

    protected value = computed(() => this.directive()?.value() ?? []);

    protected readonly internal = signal(this.item());

    protected readonly editMode = signal(false);
    protected readonly textfieldOptions = inject(TUI_TEXTFIELD_OPTIONS);
    protected stringify: TuiStringHandler<T> = this.itemsHandlers.stringify();
    protected appearance = inject(TuiAppearance).appearance();
    protected editModeAppearance = computed(() => {
        const app = this.editMode() ? '' : this.appearance;

        return app;
    });

    protected binding = tuiDirectiveBinding(
        TuiAppearance,
        'tuiAppearance',
        this.editModeAppearance,
    );

    @Input()
    public editable = true;

    @Input('context')
    public set c(_context: {index: number; item: T}) {
        this.internal.set(this.item());
    }

    protected remove(): void {
        this.directive()?.onChange(
            this.value().filter((_, index) => index !== this.context().index),
        );
        this.directive()?.el.focus();
    }

    protected edit(): void {
        this.directive()?.onChange(
            this.value().map((item, index) =>
                index === this.context().index ? (this.internal() ?? item) : item,
            ),
        );
        this.editMode.set(false);
        this.directive()?.el.focus();
    }

    protected cancelEdit(): void {
        this.editMode.set(false);
        this.directive()?.setValue(this.value());
    }

    protected moveFocus(step: number): void {
        this.directive()?.moveFocus(step, this.context().index);
    }
}
