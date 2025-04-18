import type {Signal} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldComponent,
} from '@taiga-ui/core/components/textfield';
import {TuiChip} from '@taiga-ui/kit/components/chip';
import {injectContext} from '@taiga-ui/polymorpheus';
import type {PolymorpheusContext} from '@taiga-ui/polymorpheus/classes/context';

@Component({
    standalone: true,
    selector: 'item',
    imports: [FormsModule, ReactiveFormsModule, TuiButton, TuiChip],
    template: `
        <div
            appearance=""
            tuiChip
            [size]="textfieldOptions.size() === 'l' ? 's' : 'xs'"
            [style.color]="'transparent'"
            (click.stop)="(0)"
        >
            {{ stringify(context.$implicit) }}
            <input
                #el
                tuiChip
                [ngModel]="context.$implicit"
                (ngModelChange)="edit($event, el)"
            />
            <button
                iconStart="@tui.x"
                tuiIconButton
                type="button"
                (click.prevent)="remove()"
            >
                Remove
            </button>
        </div>
    `,
    styles: [
        `
            div[tuiChip] {
                margin: 0.125rem 0.25rem 0.125rem 0;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {},
})
export class TuiMultiItem<T> {
    protected context = injectContext<
        PolymorpheusContext<T> & {
            onChange: (value: T[]) => void;
            value: Signal<T[]>;
            index: number;
        }
    >();

    protected readonly textfield = inject(TuiTextfieldComponent);
    protected readonly textfieldOptions = inject(TUI_TEXTFIELD_OPTIONS);

    protected stringify: (value: T) => any = (value) => value;

    protected remove(): void {
        this.context.onChange(
            this.context.value().filter((item) => item !== this.context.$implicit),
        );
        this.textfield.input?.nativeElement.focus();
    }

    protected edit(value: T, el: HTMLInputElement): void {
        this.context.onChange(
            this.context
                .value()
                .map((item, index) => (index === this.context.index ? value : item)),
        );
        el.focus();
    }
}
