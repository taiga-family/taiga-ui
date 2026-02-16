import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    inject,
    input,
    viewChild,
    viewChildren,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {CHAR_EN_DASH, CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiIsFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiIsNumber, tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiKeySteps} from '@taiga-ui/core/components/slider';
import {TUI_TEXTFIELD_OPTIONS, TuiTextfield} from '@taiga-ui/core/components/textfield';
import {
    TUI_INPUT_NUMBER_OPTIONS,
    TuiInputNumber,
    TuiInputNumberDirective,
    TuiQuantumValueTransformerBase,
} from '@taiga-ui/kit/components/input-number';
import {TuiRange} from '@taiga-ui/kit/components/range';
import {
    type PolymorpheusContent,
    PolymorpheusOutlet,
    type PolymorpheusPrimitive,
} from '@taiga-ui/polymorpheus';

const transform = (x?: readonly [string, string] | null): readonly [string, string] =>
    x ?? ['', ''];

@Component({
    selector: 'tui-input-range',
    imports: [FormsModule, PolymorpheusOutlet, TuiInputNumber, TuiRange, TuiTextfield],
    templateUrl: './input-range.template.html',
    styleUrl: './input-range.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsControl(TuiInputRange), tuiFallbackValueProvider([0, 0])],
    host: {
        '[attr.data-size]': 'size()',
        // TODO: Delete this line and put `tui-input-range:has(.t-content-end) {--t-icon-lock: none}` to proprietary styles
        '[style.--t-icon-lock]': 'contentEnd() ? "none" : null',
    },
})
export class TuiInputRange extends TuiControl<readonly [number, number]> {
    private readonly inputs = viewChildren(TuiInputNumberDirective, {read: ElementRef});
    private readonly range = viewChild(TuiRange);
    private readonly options = inject(TUI_INPUT_NUMBER_OPTIONS);
    private readonly isMobile = inject(WA_IS_MOBILE);
    private readonly quantumTransformer = computed(
        () => new TuiQuantumValueTransformerBase(this.quantum()),
    );

    protected readonly size = inject(TUI_TEXTFIELD_OPTIONS).size;
    protected start = this.value()[0];
    protected end = this.value()[1];
    protected side: 'end' | 'start' = 'start';
    protected readonly contentStart = computed(() => {
        const [start, end] = this.content().map((x, i) => {
            const value = this.value()[i]!;

            return typeof x === 'function' ? x({$implicit: value}) : x || value;
        });

        if (this.interactive() || !this.isPrimitive(start) || !this.isPrimitive(end)) {
            return this.content()[0];
        }

        return `${start}${CHAR_NO_BREAK_SPACE}${CHAR_EN_DASH}${CHAR_NO_BREAK_SPACE}${end}`;
    });

    protected readonly contentEnd = computed(() =>
        this.contentStart() === this.content()[0] ? this.content()[1] : '',
    );

    public readonly min = input(0);
    public readonly max = input(100);
    public readonly step = input(1);
    public readonly segments = input(1);
    public readonly keySteps = input<TuiKeySteps>();
    public readonly quantum = input(0);
    public readonly prefix = input([this.options.prefix, this.options.prefix], {
        transform,
    });

    public readonly postfix = input([this.options.postfix, this.options.postfix], {
        transform,
    });

    public content = input<
        readonly [
            PolymorpheusContent<TuiContext<number>>,
            PolymorpheusContent<TuiContext<number>>,
        ]
    >(['', '']);

    public override writeValue(value: [number, number]): void {
        super.writeValue(value);
        this.setTextfieldValues(this.value());
    }

    protected get contentStartHidden(): boolean {
        return this.interactive() && tuiIsFocused(this.textfieldStart);
    }

    protected get contentEndHidden(): boolean {
        return (
            !this.content()[1] || (this.interactive() && tuiIsFocused(this.textfieldEnd))
        );
    }

    protected takeStep(
        event: Event | KeyboardEvent,
        coefficients: readonly [number, number],
    ): void {
        if (!this.interactive() || !this.range()) {
            return;
        }

        event.preventDefault();

        const [start, end] = this.value();
        const newValue = this.valueGuard(this.range()!.takeStep(coefficients));

        if (newValue[0] !== start || newValue[1] !== end) {
            this.onExternalValueUpdate(newValue);
        }
    }

    protected onInput([start, end]: [number | null, number | null]): void {
        this.setValue([start ?? this.value()[0], end ?? this.value()[1]]);
    }

    protected onExternalValueUpdate(value: readonly [number, number]): void {
        this.setValue(value);
        this.setTextfieldValues(this.value());

        setTimeout((end = Number.MAX_SAFE_INTEGER) => {
            if (tuiIsFocused(this.activeTextfield)) {
                this.activeTextfield?.setSelectionRange(end, end);
            }
        });
    }

    protected focusToTextfield(): void {
        if (!this.isMobile) {
            this.activeTextfield?.focus();
        }
    }

    protected onBlur(): void {
        this.onTouched();
        this.setTextfieldValues(this.value());
    }

    protected setTextfieldValues([start, end]: readonly [number, number]): void {
        this.start = start;
        this.end = end;
    }

    private get textfieldStart(): HTMLInputElement | null {
        return this.inputs()[0]?.nativeElement || null;
    }

    private get textfieldEnd(): HTMLInputElement | null {
        return this.inputs()[this.inputs().length - 1]?.nativeElement || null;
    }

    private get activeTextfield(): HTMLInputElement | null {
        return this.side === 'start' ? this.textfieldStart : this.textfieldEnd;
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

    private isPrimitive(x: PolymorpheusContent): x is PolymorpheusPrimitive {
        return !x || tuiIsString(x) || tuiIsNumber(x);
    }
}
