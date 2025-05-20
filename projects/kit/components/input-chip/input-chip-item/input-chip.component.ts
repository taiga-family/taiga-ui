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
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TUI_TEXTFIELD_OPTIONS,
    tuiInjectAuxiliary,
} from '@taiga-ui/core/components/textfield';
import {TuiHintDirective, TuiHintOverflow} from '@taiga-ui/core/directives/hint';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {TuiChip} from '@taiga-ui/kit/components/chip';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {injectContext} from '@taiga-ui/polymorpheus';
import type {PolymorpheusContext} from '@taiga-ui/polymorpheus/classes/context';

import {TuiInputChipDirective} from '../input-chip.directive';

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
    template: `
        <input
            #input
            appearance=""
            enterkeyhint="enter"
            tabIndex="-1"
            tuiChip
            [ngModel]="internal()"
            [readOnly]="!editMode()"
            (blur)="cancelEdit()"
            (keydown.backspace.stop)="(0)"
            (keydown.enter)="edit()"
            (keydown.esc)="cancelEdit()"
            (ngModelChange)="internal.set($event)"
        />
        <div
            tuiFade
            tuiFadeOffset="0.5rem"
            [style.pointer-events]="editMode() ? 'none' : 'auto'"
            [style.visibility]="editMode() ? 'hidden' : 'visible'"
            [tuiHintOverflow]="hint?.content() ? null : stringify(internal())"
            (dblclick)="onDbClick(input)"
        >
            {{ internal() }}
        </div>
        <button
            *ngIf="directive()?.interactive() && !editMode()"
            iconStart="@tui.x"
            tabIndex="-1"
            tuiIconButton
            type="button"
            (click.stop.prevent)="remove()"
            (mousedown.prevent.stop)="(0)"
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
        '[class._edit]': 'editMode()',
        '(click.stop)': '(0)',
        '(keydown.backspace.prevent)': 'remove()',
        '(keydown.arrowLeft.prevent)': 'moveFocus(-1)',
        '(keydown.arrowRight.prevent)': 'moveFocus(1)',
    },
})
export class TuiInputChipComponent<T> {
    private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    private readonly context = injectContext<
        PolymorpheusContext<{
            index: number;
            item: T;
        }>
    >();

    protected readonly mobile = inject(TUI_IS_MOBILE);
    protected readonly directive = tuiInjectAuxiliary<TuiInputChipDirective<T>>(
        (x) => x instanceof TuiInputChipDirective<T>,
    );

    protected value = computed(() => this.directive()?.value() ?? []);

    protected readonly internal = signal(this.item);

    protected readonly editMode = signal(false);
    protected readonly textfieldOptions = inject(TUI_TEXTFIELD_OPTIONS);
    protected hint = inject(TuiHintDirective, {self: true, optional: true});
    protected stringify: TuiStringHandler<T> = this.itemsHandlers.stringify();

    protected size = tuiDirectiveBinding(
        TuiChip,
        'size',
        computed(() => (this.textfieldOptions.size() === 'l' ? 's' : 'xs')),
    );

    @Input()
    public editable = true;

    protected remove(): void {
        this.directive()?.remove(this.index);
    }

    protected edit(): void {
        this.directive()?.onChange(
            this.value().map((item, index) =>
                index === this.index ? (this.internal() ?? item) : item,
            ),
        );
        this.editMode.set(false);
        this.directive()?.el.focus({preventScroll: true});
    }

    protected cancelEdit(): void {
        this.editMode.set(false);
        this.directive()?.setValue(this.value());
        this.internal.set(this.item);
    }

    protected moveFocus(step: number): void {
        this.directive()?.moveFocus(step, this.index);
    }

    protected onDbClick(el: HTMLInputElement): void {
        if (this.editable) {
            this.editMode.set(true);
            el.focus();
        }
    }

    private get index(): number {
        return this.context.$implicit.index;
    }

    private get item(): T {
        return this.context.$implicit.item;
    }
}
