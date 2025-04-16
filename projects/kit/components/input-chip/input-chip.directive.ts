import {NgForOf} from '@angular/common';
import type {AfterViewInit, Signal, TrackByFunction} from '@angular/core';
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
import type {TuiTextfieldAccessor} from '@taiga-ui/core/components/textfield';
import {
    tuiAsTextfieldAccessor,
    TuiTextfieldMultiComponent,
    TuiWithTextfieldMulti,
} from '@taiga-ui/core/components/textfield';
import {TuiMultiItem} from '@taiga-ui/kit/components/input-chip/default-item';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {tuiDropdownOpen} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'input[tuiInputChip]',
    imports: [NgForOf, PolymorpheusOutlet],
    template: `
        <ng-template #template>
            <ng-container
                *ngFor="let item of control?.value; let i = index; trackBy: trackBy"
            >
                <span
                    *polymorpheusOutlet="
                        chip as text;
                        context: {
                            $implicit: item,
                            onChange: onChange,
                            value: value,
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
        TuiMultiItem,
    ],
    hostDirectives: [TuiWithTextfieldMulti],
    host: {
        '[disabled]': 'disabled()',
        '(input)': 'textfieldValue.set(element.value)',
        '(keydown.enter)': 'onEnter()',
        '(keydown.backspace)': 'onBackspace()',
        '[size]': 'textfieldValue().length || 1',
        '(input.silent)': 'open.set(true)',
    },
})
export class TuiInputChipDirective<T>
    extends TuiControl<T[]>
    implements TuiTextfieldAccessor<T[]>, AfterViewInit
{
    @ViewChild(TemplateRef)
    private readonly template?: TemplateRef<any>;

    protected readonly element = tuiInjectElement<HTMLInputElement>();
    protected readonly textfieldValue = tuiValueBinding();
    protected readonly textfield = inject(TuiTextfieldMultiComponent);

    protected readonly open = tuiDropdownOpen();

    @Input()
    public chip: PolymorpheusContent<
        TuiContext<T> & {
            onChange: (value: T[]) => void;
            value: Signal<T[]>;
            index: number;
        }
    > = new PolymorpheusComponent(TuiMultiItem);

    public setValue(value: T[]): void {
        this.onChange(value);
        this.textfieldValue.set('');
    }

    public ngAfterViewInit(): void {
        if (this.template) {
            this.textfield.vcr?.createEmbeddedView(this.template);
        }
    }

    protected readonly trackBy: TrackByFunction<T> = (index: number) => index;

    protected onEnter(): void {
        this.onChange([...this.value(), this.element.value as T]);

        this.textfieldValue.update((_value) => '');
    }

    protected onBackspace(): void {
        if (!this.element.value) {
            this.textfieldValue.set('');
        }
    }
}
