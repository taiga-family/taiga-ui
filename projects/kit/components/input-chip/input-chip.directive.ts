import {NgForOf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    Input,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {TUI_IS_MOBILE, tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiGetClipboardDataText, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import {
    type TuiTextfieldAccessor,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {
    tuiAsTextfieldAccessor,
    TuiTextfieldBase,
    TuiTextfieldMultiComponent,
} from '@taiga-ui/core/components/textfield';
import {tuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {timer} from 'rxjs';

import {TUI_INPUT_CHIP_OPTIONS} from './input-chip.options';
import {TuiChipWrapper} from './input-chip-wrapper.component';

const BACKSPACE_CODE = 8;
const ARROW_LEFT_CODE = 37;

@Component({
    standalone: true,
    selector: 'input[tuiInputChip]',
    imports: [NgForOf, PolymorpheusOutlet, TuiTextfieldContent],
    template: `
        <ng-template tuiTextfieldContent>
            <ng-container *ngFor="let item of value(); let i = index">
                <ng-container
                    *polymorpheusOutlet="
                        wrapper as text;
                        context: {
                            $implicit: {item, index: i, length: value().length},
                        }
                    "
                >
                    {{ text }}
                </ng-container>
            </ng-container>
        </ng-template>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsControl(TuiInputChipDirective),
        tuiFallbackValueProvider([]),
        tuiAsTextfieldAccessor(TuiInputChipDirective),
        tuiAsAuxiliary(TuiInputChipDirective),
    ],
    hostDirectives: [
        TuiNativeValidator,
        {
            directive: TuiTextfieldBase,
            inputs: ['invalid', 'focused', 'readOnly', 'state'],
        },
    ],
    host: {
        enterkeyhint: 'enter',
        '[disabled]': 'disabled()',
        '(blur)': 'onEnter();',
        '(keydown.enter.prevent)': 'onEnter()',
        '(keydown.silent)': 'onKeydown($event.keyCode)',
        '(input.silent)': 'onInput($event)',
        '(paste.prevent)': 'onPaste($event)',
        '(drop.prevent)': 'onPaste($event)',
    },
})
export class TuiInputChipDirective<T>
    extends TuiControl<T[]>
    implements TuiTextfieldAccessor<T[]>
{
    private readonly options = inject(TUI_INPUT_CHIP_OPTIONS);
    private readonly destroyRef = inject(DestroyRef);
    private readonly mobile = inject(TUI_IS_MOBILE);

    protected readonly textfield = inject(TuiTextfieldMultiComponent);
    protected readonly wrapper = new PolymorpheusComponent(TuiChipWrapper);
    protected readonly open = tuiDropdownOpen();

    @Input()
    public separator = this.options.separator;

    @Input()
    public unique = this.options.unique;

    public readonly el = tuiInjectElement<HTMLInputElement>();

    public setValue(value: T[]): void {
        this.onChange(this.filterValue(value));
        this.textfield.value.set('');
    }

    public moveFocus(step: number, index?: number): void {
        if (step > 0 && index === this.value().length - 1) {
            this.el.focus();

            return;
        }

        const items = this.textfield.items?.nativeElement;
        const elements = Array.from(items?.querySelectorAll('tui-chip-wrapper') ?? [])
            .map(({firstElementChild}) => firstElementChild)
            .filter(Boolean) as HTMLElement[];

        tuiMoveFocus(index ?? elements.length, elements, step);
    }

    public delete(index: number): void {
        this.onChange(this.value().filter((_, i) => i !== index));

        if (!this.mobile) {
            this.el.focus({preventScroll: true});
        }
    }

    protected onEnter(): void {
        const value = this.textfield.value().trim();
        const items: any[] = this.separator ? value.split(this.separator) : [value];

        this.textfield.value.set('');

        if (items.length) {
            this.onChange(this.filterValue([...this.value(), ...items.filter(Boolean)]));
            this.scrollTo();
        }
    }

    protected onInput(): void {
        this.open.set(true);

        if (this.separator && this.textfield.value().match(this.separator)) {
            this.onEnter();
        }
    }

    protected onKeydown(keyCode: number): void {
        // (keydown.backspace) doesn't emit event on empty input in ios safari
        if (
            keyCode === BACKSPACE_CODE ||
            (keyCode === ARROW_LEFT_CODE && this.textfield.item)
        ) {
            this.onBackspace();
        }
    }

    protected onPaste(event: ClipboardEvent | DragEvent): void {
        const value =
            'dataTransfer' in event
                ? event.dataTransfer?.getData('text/plain') || ''
                : tuiGetClipboardDataText(event);

        this.textfield.value.set(value);
        this.onEnter();
    }

    protected onBackspace(): void {
        if (this.textfield.value() || !this.interactive()) {
            return;
        }

        if (this.mobile || !this.textfield.item) {
            this.onChange(this.value().slice(0, -1));
        } else {
            this.moveFocus(-1);
        }
    }

    protected scrollTo(): void {
        // Allow change detection to run and add new tag to DOM
        timer(0)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.textfield.items?.nativeElement.scrollTo({
                    top: Number.MAX_SAFE_INTEGER,
                    left: Number.MAX_SAFE_INTEGER,
                });
            });
    }

    private filterValue(value: T[]): T[] {
        return this.unique ? Array.from(new Set(value.reverse())).reverse() : value;
    }
}
