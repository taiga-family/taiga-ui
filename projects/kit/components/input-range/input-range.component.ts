import {NgIf} from '@angular/common';
import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    inject,
    Input,
    type QueryList,
    signal,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TUI_IDENTITY_VALUE_TRANSFORMER,
    tuiAsControl,
    TuiControl,
    tuiValueTransformerFrom,
} from '@taiga-ui/cdk/classes';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TUI_IS_MOBILE, tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiIsNativeFocused, tuiIsNativeFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {TUI_TEXTFIELD_OPTIONS, TuiTextfield} from '@taiga-ui/core/components/textfield';
import {
    TuiInputNumber,
    TuiInputNumberDirective,
    TuiQuantumValueTransformerBase,
} from '@taiga-ui/kit/components/input-number';
import {TuiRange} from '@taiga-ui/kit/components/range';
import {
    type TuiKeySteps,
    tuiSliderOptionsProvider,
} from '@taiga-ui/kit/components/slider';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_INPUT_RANGE_OPTIONS} from './input-range.options';

@Component({
    standalone: true,
    selector: 'tui-input-range',
    imports: [
        FormsModule,
        NgIf,
        PolymorpheusOutlet,
        TuiInputNumber,
        TuiRange,
        TuiTextfield,
    ],
    templateUrl: './input-range.template.html',
    styleUrls: ['./input-range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsControl(TuiInputRangeComponent),
        tuiSliderOptionsProvider({trackColor: 'transparent'}),
        tuiFallbackValueProvider([0, 0]),
        tuiValueTransformerFrom(TUI_INPUT_RANGE_OPTIONS),
    ],
    host: {
        new: '', // TODO(v5): remove after deletion of legacy control
        // TODO: use css :host:has(tui-textfield[data-size]) after browser bump
        '[attr.data-size]': 'size()',
    },
})
export class TuiInputRangeComponent
    extends TuiControl<readonly [number, number]>
    implements AfterViewInit
{
    @ViewChildren(TuiInputNumberDirective, {read: ElementRef})
    private readonly inputNumberRefs: QueryList<ElementRef<HTMLInputElement>> =
        EMPTY_QUERY;

    @ViewChild(TuiRange, {read: ElementRef})
    private readonly rangeRef?: ElementRef<HTMLElement>;

    @ViewChild(TuiRange)
    private readonly range?: TuiRange;

    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly options = inject(TUI_INPUT_RANGE_OPTIONS);
    private readonly quantum = signal(0);
    private readonly quantumTransformer = computed((quantum = this.quantum()) =>
        quantum
            ? new TuiQuantumValueTransformerBase(quantum)
            : TUI_IDENTITY_VALUE_TRANSFORMER,
    );

    protected readonly size = inject(TUI_TEXTFIELD_OPTIONS).size;
    protected textfieldValueStart = this.value()[0];
    protected textfieldValueEnd = this.value()[1];
    protected lastActiveSide: 'end' | 'start' = 'start';

    @Input()
    public min = this.options.min;

    @Input()
    public max = this.options.max;

    @Input()
    public step = this.options.step;

    @Input()
    public segments = this.options.segments;

    @Input()
    public keySteps: TuiKeySteps | null = this.options.keySteps;

    @Input()
    public content: readonly [
        PolymorpheusContent<TuiContext<number>>,
        PolymorpheusContent<TuiContext<number>>,
    ] = this.options.content;

    @Input({transform: (x: readonly [string, string] | null) => x ?? ['', '']})
    public prefix: readonly [string, string] = this.options.prefix;

    @Input({transform: (x: readonly [string, string] | null) => x ?? ['', '']})
    public postfix: readonly [string, string] = this.options.postfix;

    // TODO(v5): use signal inputs
    @Input('quantum')
    public set quantumSetter(x: number) {
        this.quantum.set(x);
    }

    public override writeValue(value: [number, number]): void {
        super.writeValue(value);
        this.setTextfieldValues(this.value());
    }

    public ngAfterViewInit(): void {
        if (this.range) {
            this.range.legacyMode = false; // TODO(v5): remove backward compatibility
        }
    }

    protected get hideStartContent(): boolean {
        return (
            !this.content[0] ||
            tuiIsNativeFocused(this.textfieldStart) ||
            (tuiIsNativeFocusedIn(this.rangeRef?.nativeElement) &&
                this.lastActiveSide === 'start')
        );
    }

    protected get hideEndContent(): boolean {
        return (
            !this.content[1] ||
            tuiIsNativeFocused(this.textfieldEnd) ||
            (tuiIsNativeFocusedIn(this.rangeRef?.nativeElement) &&
                this.lastActiveSide === 'end')
        );
    }

    protected takeStep(
        event: Event | KeyboardEvent,
        coefficients: readonly [number, number],
    ): void {
        if (!this.interactive() || !this.range) {
            return;
        }

        event.preventDefault();

        const [start, end] = this.value();
        const newValue = this.valueGuard(this.range.takeStep(coefficients));

        if (newValue[0] !== start || newValue[1] !== end) {
            this.onExternalValueUpdate(newValue);
        }
    }

    protected onInput([start, end]: [number | null, number | null]): void {
        const [prevStart, prevEnd] = this.value();

        this.setValue([start ?? prevStart, end ?? prevEnd]);
    }

    protected onExternalValueUpdate(value: readonly [number, number]): void {
        this.setValue(value);
        this.setTextfieldValues(this.value());
    }

    protected focusToTextInput(): void {
        const element =
            this.lastActiveSide === 'start' ? this.textfieldStart : this.textfieldEnd;

        if (!this.isMobile && element) {
            element.focus();
        }
    }

    protected onActiveThumbChange(activeThumb: 'left' | 'right'): void {
        // TODO(v5): remove backward compatibility
        this.lastActiveSide = activeThumb === 'left' ? 'start' : 'end';
    }

    protected setTextfieldValues([start, end]: readonly [number, number]): void {
        this.textfieldValueStart = start;
        this.textfieldValueEnd = end;
    }

    private get textfieldStart(): HTMLInputElement | null {
        return this.inputNumberRefs.first?.nativeElement || null;
    }

    private get textfieldEnd(): HTMLInputElement | null {
        return this.inputNumberRefs.last?.nativeElement || null;
    }

    private setValue(value: readonly [number, number]): void {
        this.onChange(this.valueGuard(value));
    }

    private valueGuard(value: readonly [number, number]): readonly [number, number] {
        const [prevStart, prevEnd] = this.value();
        const [start, end] = value.map(
            (x) => this.quantumTransformer().toControlValue(x) ?? x,
        ) as unknown as readonly [number, number];

        return [Math.min(start, prevEnd), Math.max(end, prevStart)];
    }
}
