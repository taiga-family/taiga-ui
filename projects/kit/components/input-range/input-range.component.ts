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
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TUI_IS_MOBILE, tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
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

    @ViewChild(TuiRange)
    private readonly range?: TuiRange;

    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly quantum = signal(0);
    private readonly quantumTransformer = computed(
        () => new TuiQuantumValueTransformerBase(this.quantum()),
    );

    protected readonly size = inject(TUI_TEXTFIELD_OPTIONS).size;
    protected textfieldValueStart = this.value()[0];
    protected textfieldValueEnd = this.value()[1];
    protected lastActiveSide: 'end' | 'start' = 'start';

    @Input()
    public min = 0;

    @Input()
    public max = 100;

    @Input()
    public step = 1;

    @Input()
    public segments = 1;

    @Input()
    public keySteps: TuiKeySteps | null = null;

    @Input()
    public content: readonly [
        PolymorpheusContent<TuiContext<number>>,
        PolymorpheusContent<TuiContext<number>>,
    ] = ['', ''];

    @Input({transform: (x: readonly [string, string] | null) => x ?? ['', '']})
    public prefix: readonly [string, string] = ['', ''];

    @Input({transform: (x: readonly [string, string] | null) => x ?? ['', '']})
    public postfix: readonly [string, string] = ['', ''];

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
        return !this.content[0] || tuiIsNativeFocused(this.textfieldStart);
    }

    protected get hideEndContent(): boolean {
        return !this.content[1] || tuiIsNativeFocused(this.textfieldEnd);
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

        setTimeout((end = Number.MAX_SAFE_INTEGER) => {
            if (tuiIsNativeFocused(this.activeTextfield)) {
                this.activeTextfield?.setSelectionRange(end, end);
            }
        });
    }

    protected focusToTextfield(): void {
        if (!this.isMobile) {
            this.activeTextfield?.focus();
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

    private get activeTextfield(): HTMLInputElement | null {
        return this.lastActiveSide === 'start' ? this.textfieldStart : this.textfieldEnd;
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
