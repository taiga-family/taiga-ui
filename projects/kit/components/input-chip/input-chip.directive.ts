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
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {
    tuiGetClipboardDataText,
    tuiInjectElement,
    tuiValueBinding,
} from '@taiga-ui/cdk/utils/dom';
import {tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import type {TuiTextfieldAccessor} from '@taiga-ui/core/components/textfield';
import {
    tuiAsAuxiliary,
    tuiAsTextfieldAccessor,
    TuiTextfieldMultiComponent,
    TuiWithTextfieldMulti,
} from '@taiga-ui/core/components/textfield';
import {tuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {timer} from 'rxjs';

import {TUI_INPUT_CHIP_OPTIONS} from './input-chip.options';
import {TuiChipWrapper} from './input-chip-item/chip-wrapper.component';

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
                            $implicit: {item, index: i},
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
        '[disabled]': 'disabled()',
        '(input)': 'textfieldValue.set(el.value)',
        '(keydown.enter)': 'onEnter()',
        '(keydown.backspace)': 'onBackspace()',
        '(keydown.arrowLeft)': 'onBackspace()',
        '(keydown.silent)': 'onKeydown($event)',
        '(input.silent)': 'open.set(true)',
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

    protected readonly textfieldValue = tuiValueBinding();
    protected readonly textfield = inject(TuiTextfieldMultiComponent);
    protected readonly wrapper = new PolymorpheusComponent(TuiChipWrapper);

    protected readonly open = tuiDropdownOpen();

    @Input()
    public separator: RegExp | string = this.options.separator;

    @Input()
    public unique = this.options.unique;

    public readonly el = tuiInjectElement<HTMLInputElement>();

    public setValue(value: T[]): void {
        this.onChange(value);
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

        tuiMoveFocus(index ?? this.elements.length - 1, this.elements, step);
    }

    protected get elements(): readonly HTMLElement[] {
        return Array.from(this.textfield.container?.nativeElement.children ?? []).map(
            ({firstChild}) => firstChild,
        ) as HTMLElement[];
    }

    protected onEnter(): void {
        const value = this.textfieldValue()
            .trim()
            .split(this.separator)
            .filter(
                (item) => !!item && this.unique && !this.value().find((i) => i === item),
            ) as T[];

        if (value.length) {
            this.onChange([...this.value(), ...value]);

            this.textfieldValue.set('');
            this.scrollTo();
        }
    }

    protected onKeydown(keydown: KeyboardEvent): void {
        if (keydown.key.match(this.separator)) {
            keydown.preventDefault();
            this.onEnter();
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
        if (!this.el.value) {
            this.textfieldValue.set('');

            this.moveFocus(-1);
        }
    }

    protected scrollTo(scrollLeft = this.scrollRef?.scrollWidth): void {
        // Allow change detection to run and add new tag to DOM
        timer(0)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                if (this.scrollRef) {
                    this.scrollRef.scrollLeft = scrollLeft || 0;
                }
            });
    }

    private get scrollRef(): HTMLElement | null {
        return this.textfield.container?.nativeElement ?? null;
    }
}
