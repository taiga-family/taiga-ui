import {NgForOf} from '@angular/common';
import type {AfterViewInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement, tuiValueBinding} from '@taiga-ui/cdk/utils/dom';
import {tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import type {TuiTextfieldAccessor} from '@taiga-ui/core/components/textfield';
import {
    tuiAsTextfieldAccessor,
    TuiTextfieldMultiComponent,
    TuiWithTextfieldMulti,
} from '@taiga-ui/core/components/textfield';
import {tuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {TuiDefaultItem} from '@taiga-ui/kit/components/input-chip/default-item';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'input[tuiInputChip]',
    imports: [NgForOf, PolymorpheusOutlet],
    template: `
        <ng-template #template>
            <ng-container *ngFor="let item of value(); let i = index">
                <span
                    *polymorpheusOutlet="
                        chip as text;
                        context: {
                            $implicit: this,
                            index: i,
                        }
                    "
                >
                    {{ text }}
                </span>
            </ng-container>
        </ng-template>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsControl(TuiInputChipDirective),
        tuiFallbackValueProvider([]),
        tuiAsTextfieldAccessor(TuiInputChipDirective),
    ],
    hostDirectives: [TuiWithTextfieldMulti],
    host: {
        '[disabled]': 'disabled()',
        '(input)': 'textfieldValue.set(element.value)',
        '(keydown.enter)': 'onEnter()',
        '(keydown.backspace)': 'onBackspace()',
        '(keydown.arrowLeft)': 'onBackspace()',
        '[size]': 'textfieldValue().length || 1',
        '(input.silent)': 'open.set(true)',
    },
})
export class TuiInputChipDirective<T>
    extends TuiControl<T[]>
    implements TuiTextfieldAccessor<T[]>, AfterViewInit
{
    @ViewChild(TemplateRef)
    private readonly template?: TemplateRef<unknown>;

    protected readonly element = tuiInjectElement<HTMLInputElement>();
    protected readonly textfieldValue = tuiValueBinding();
    protected readonly textfield = inject(TuiTextfieldMultiComponent);

    protected readonly open = tuiDropdownOpen();

    @Input()
    public chip: PolymorpheusContent<
        TuiContext<TuiInputChipDirective<T>> & {
            index: number;
        }
    > = new PolymorpheusComponent(TuiDefaultItem);

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
            this.element.focus();
        }

        tuiMoveFocus(index ?? this.elements.length - 1, this.elements, step);
    }

    protected get elements(): readonly HTMLElement[] {
        return Array.from(
            this.textfield.container?.nativeElement.children ?? [],
        ) as HTMLElement[];
    }

    protected onEnter(): void {
        if (this.element.value.trim()) {
            this.onChange([...this.value(), this.element.value as T]);

            this.textfieldValue.set('');
        }
    }

    protected onBackspace(): void {
        if (!this.element.value) {
            this.textfieldValue.set('');

            this.moveFocus(-1);
        }
    }
}
