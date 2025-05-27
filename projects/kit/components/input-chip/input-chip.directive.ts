import {NgForOf} from '@angular/common';
import type {AfterViewInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_IS_MOBILE, tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {
    tuiGetClipboardDataText,
    tuiInjectElement,
    tuiIsHTMLElement,
    tuiValue,
} from '@taiga-ui/cdk/utils/dom';
import {tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import type {TuiTextfieldAccessor} from '@taiga-ui/core/components/textfield';
import {
    tuiAsTextfieldAccessor,
    TuiTextfieldMultiComponent,
    TuiWithTextfieldMulti,
} from '@taiga-ui/core/components/textfield';
import {tuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {timer} from 'rxjs';

import {TUI_INPUT_CHIP_OPTIONS} from './input-chip.options';
import {TuiChipWrapper} from './input-chip-wrapper.component';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';

const BACKSPACE_CODE = 8;

@Component({
    standalone: true,
    selector: 'input[tuiInputChip]',
    imports: [NgForOf, PolymorpheusOutlet],
    template: `
        <ng-template #template>
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
    hostDirectives: [TuiWithTextfieldMulti],
    host: {
        enterkeyhint: 'enter',
        '[disabled]': 'disabled()',
        '(keydown.enter.prevent)': 'onEnter()',
        '(blur)': 'onEnter();',
        '(keydown.arrowLeft)': 'onKeydownLeft()',
        '(keydown.silent)': 'onKeydown($event)',
        '(input.silent)': 'onInput($event)',
        '(paste.prevent)': 'onPaste($event)',
        '(drop.prevent)': 'onDrop($event)',
    },
})
export class TuiInputChipDirective<T>
    extends TuiControl<T[]>
    implements TuiTextfieldAccessor<T[]>, AfterViewInit
{
    @ViewChild(TemplateRef)
    private readonly template?: TemplateRef<unknown>;

    private readonly options = inject(TUI_INPUT_CHIP_OPTIONS);
    private readonly destroyRef = inject(DestroyRef);
    private readonly mobile = inject(TUI_IS_MOBILE);

    protected readonly textfield = inject(TuiTextfieldMultiComponent);
    protected readonly wrapper = new PolymorpheusComponent(TuiChipWrapper);

    protected readonly open = tuiDropdownOpen();

    @Input()
    public separator: RegExp | string = this.options.separator;

    @Input()
    public unique = this.options.unique;

    public readonly el = tuiInjectElement<HTMLInputElement>();
    public readonly textfieldValue = tuiValue(this.el);

    public setValue(value: T[]): void {
        this.onChange(this.filterValue(value));
        this.textfieldValue.set('');
    }

    public ngAfterViewInit(): void {
        if (this.template) {
            this.textfield.vcr?.createEmbeddedView(this.template);
        }
    }

    public moveFocus(step: number, index?: number): void {
        if (step > 0 && index === this.value().length - 1) {
            this.el.focus();
        }

        tuiMoveFocus(index ?? this.elements.length, this.elements, step);
    }

    public delete(index: number): void {
        this.onChange(this.value().filter((_, i) => i !== index));

        if (!this.mobile) {
            this.el.focus({preventScroll: true});
        }

        this.textfield.refresh();
    }

    protected get elements(): readonly HTMLElement[] {
        return Array.from(
            this.textfield.container?.nativeElement.querySelectorAll(
                'tui-chip-wrapper',
            ) ?? [],
        ).map(({firstChild}) => firstChild) as HTMLElement[];
    }

    protected onEnter(): void {
        const value = this.separator
            ? (this.textfieldValue().trim().split(this.separator).filter(Boolean) as T[])
            : ([this.textfieldValue().trim()] as T[]);

        this.textfieldValue.set('');

        if (value.length) {
            this.onChange(this.filterValue([...this.value(), ...value]));
            this.scrollTo();
        }
    }

    protected onInput(): void {
        this.open.set(true);

        if (this.separator && this.el.value.match(this.separator)) {
            this.onEnter();
        }
    }

    protected onKeydown(keydown: KeyboardEvent): void {
        // (keydown.backspace) doesn't emit event on empty input in ios safari
        if (keydown.keyCode === BACKSPACE_CODE) {
            this.onBackspace();
        }
    }

    protected onPaste(event: ClipboardEvent): void {
        this.textfieldValue.set(tuiGetClipboardDataText(event));
        this.onEnter();
    }

    protected onDrop({dataTransfer}: DragEvent): void {
        if (dataTransfer) {
            this.textfieldValue.set(dataTransfer.getData('text') || '');
            this.onEnter();
        }
    }

    protected onBackspace(): void {
        if (this.el.value || !this.elements.length || !this.interactive()) {
            return;
        }

        if (this.mobile || !tuiIsHTMLElement(this.elements[0])) {
            this.onChange(this.value().slice(0, -1));
        } else {
            this.moveFocus(-1);
        }
    }

    protected onKeydownLeft(): void {
        if (tuiIsHTMLElement(this.elements[0])) {
            this.onBackspace();
        }
    }

    protected scrollTo(): void {
        // Allow change detection to run and add new tag to DOM
        timer(0)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                if (!this.scrollRef) {
                    return;
                }

                if (this.textfield.rows === 1) {
                    this.scrollRef.scrollLeft = this.scrollRef.scrollWidth || 0;
                } else {
                    this.scrollRef.scrollTop = this.scrollRef.scrollHeight || 0;
                }
            });
    }

    private get scrollRef(): HTMLElement | null {
        return this.textfield.container?.nativeElement ?? null;
    }

    private filterValue(value: T[]): T[] {
        return this.unique ? Array.from(new Set(value.reverse())).reverse() : value;
    }
}
