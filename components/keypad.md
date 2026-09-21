# Keypad

- **Package**: `ADDON-MOBILE`
- **Type**: components

`TuiKeypad` is an on-screen grid primitive for touch input. It only lays out and styles the keys — you project your own native `<button>` or `<a>` elements and wire clicks, labels and disabled state yourself, so the pad can be anything: a numeric pad, a shuffled PIN terminal, a calculator or a custom chooser. Each key stays a real element, so `(click)` , `aria-label` , `disabled` and `href` all work as usual. Each key updates your own state on `(click)` — display the running value however you like (the examples keep it in a signal shown in a `<div>` ).

### Example

```html
<tui-keypad [columns]="columns"> @for (digit of digits; track digit) { <button type="button" (click)="append(digit)" > {{ digit }} </button> } <button type="button" (click)="clear()" > C </button>
<button type="button" (click)="append('0')" > 0 </button>
<button aria-label="Backspace" type="button" (click)="backspace()" (longtap)="clear()" >
<tui-icon icon="@tui.delete" />
</button>
</tui-keypad>
<p>Value: {{ value() || '—' }}</p>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [columns] | `number` | Number of grid columns |

### Usage Examples

#### Basic keypad

A numeric pad — digits, clear and backspace wired via `(click)` .

**Template:**
```html
<tui-keypad class="keypad"> @for (digit of digits; track digit) { <button type="button" (click)="append(digit)" > {{ digit }} </button> } <button type="button" (click)="clear()" > C </button>
<button type="button" (click)="append('0')" > 0 </button>
<button aria-label="Backspace" type="button" (click)="backspace()" (longtap)="clear()" >
<tui-icon icon="@tui.delete" />
</button>
</tui-keypad>
<p>Value: {{ value() || '—' }}</p>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeypad} from '@taiga-ui/addon-mobile';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    imports: [TuiIcon, TuiKeypad],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    protected readonly value = signal('');

    protected append(digit: string): void {
        this.value.update((current) => `${current}${digit}`);
    }

    protected backspace(): void {
        this.value.update((current) => current.slice(0, -1));
    }

    protected clear(): void {
        this.value.set('');
    }
}
```

**LESS:**
```less
.keypad {
    inline-size: 15rem;
}
```

#### Custom keys

A custom-font pad with a conditional backspace icon, driving a display.

**Template:**
```html
<div class="display">{{ value() || '—' }}</div>
<tui-keypad class="custom"> @for (digit of digits; track digit) { <button type="button" (click)="append(digit)" > {{ digit }} </button> } <div></div>
<button type="button" (click)="append('0')" > 0 </button> @if (value()) { <button aria-label="Backspace" type="button" (click)="backspace()" (longtap)="clear()" >
<tui-icon icon="@tui.delete" />
</button> } </tui-keypad>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeypad} from '@taiga-ui/addon-mobile';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    imports: [TuiIcon, TuiKeypad],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    protected readonly value = signal('');

    protected append(digit: string): void {
        this.value.update((current) => `${current}${digit}`);
    }

    protected backspace(): void {
        this.value.update((current) => current.slice(0, -1));
    }

    protected clear(): void {
        this.value.set('');
    }
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.custom {
    inline-size: 15rem;
    font:
        normal 2.5rem/1 'SF Pro Display',
        -apple-system,
        system-ui;
}

.display {
    font: bold 2.5rem/1 var(--tui-typography-family-display);
    text-align: center;
    color: var(--tui-text-primary);
    inline-size: 100%;
}
```

#### Shuffled PIN

Digit positions are randomized at runtime — the arbitrary, dynamic content a PIN terminal needs.

**Template:**
```html
<p class="pin">{{ masked() || '—' }}</p>
<tui-keypad class="keypad"> @for (digit of digits(); track digit) { <button type="button" (click)="append(digit)" > {{ digit }} </button> } <button type="button" (click)="clear()" > C </button>
<button aria-label="Backspace" type="button" (click)="backspace()" (longtap)="clear()" >
<tui-icon icon="@tui.delete" />
</button>
</tui-keypad>
```

**TypeScript:**
```ts
import {Component, computed, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeypad} from '@taiga-ui/addon-mobile';
import {TuiIcon} from '@taiga-ui/core';

const PIN_LENGTH = 4;
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

@Component({
    imports: [TuiIcon, TuiKeypad],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    // Positions are randomized on every clear — like PIN terminals that reshuffle the pad
    protected readonly digits = signal(this.shuffle());
    protected readonly pin = signal('');
    protected readonly masked = computed(() => '•'.repeat(this.pin().length));

    protected append(digit: string): void {
        if (this.pin().length < PIN_LENGTH) {
            this.pin.update((current) => `${current}${digit}`);
        }
    }

    protected backspace(): void {
        this.pin.update((current) => current.slice(0, -1));
    }

    protected clear(): void {
        this.pin.set('');
        this.digits.set(this.shuffle());
    }

    private shuffle(): string[] {
        // uniform shuffle: independent random key per digit, then sort by it
        return DIGITS.map((digit) => [Math.random(), digit] as const)
            .sort(([a], [b]) => a - b)
            .map(([, digit]) => digit);
    }
}
```

**LESS:**
```less
.pin {
    margin: 0;
    font: bold 2.5rem/1.4 var(--tui-typography-family-display);
    letter-spacing: 0.5rem;
    text-align: center;
    color: var(--tui-text-primary);
}

.keypad {
    inline-size: 15rem;
}
```

#### Collapsible

The keypad expands while the amount field is focused, inside a sheet.

**Template:**
```html
<button tuiButton type="button" (click)="open.set(true)" > Open form </button>
<ng-template let-observer [tuiSheetDialogOptions]="options" [(tuiSheetDialog)]="open" >
<div class="sheet">
<div class="top">
<input inputmode="none" class="amount" [size]="value().length + 1" [(ngModel)]="value" (blur)="focused.set(false)" (focus)="focused.set(true)" />
<div class="chips">
<span tuiChip>23 876 $</span>
<span tuiChip>10 000 $</span>
<span tuiChip>Auto-completion</span>
</div>
</div>
<div class="middle">
<div class="card">
<div tuiCell>
<tui-avatar appearance="primary" tuiAvatar="@tui.circle-user" />
<div tuiTitle> 23 876 $ <div tuiSubtitle>from Card 1</div>
</div>
</div>
<div tuiCell>
<tui-avatar appearance="secondary" tuiAvatar="@tui.circle-dollar-sign" />
<div tuiTitle> 1 450 $ <div tuiSubtitle>from Card 2</div>
</div>
</div>
</div>
</div>
<footer tuiFloatingContainer>
<button tuiButton type="button" (click)="observer.complete()" > Send </button>
<div class="clamp">Commission-free</div> @if (focused()) { <div tuiAnimated class="pad" >
<div class="pad-inner">
<tui-keypad> @for (digit of digits; track digit) { <button type="button" (click)="append(digit)" > {{ digit }} </button> } <div></div>
<button type="button" (click)="append('0')" > 0 </button>
<button aria-label="Backspace" type="button" (click)="backspace()" (longtap)="clear()" >
<tui-icon icon="@tui.delete" />
</button>
</tui-keypad>
</div>
</div> } </footer>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiKeypad,
    TuiSheetDialog,
    type TuiSheetDialogOptions,
} from '@taiga-ui/addon-mobile';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiButton, TuiCell, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiChip} from '@taiga-ui/kit';
import {TuiFloatingContainer} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAnimated,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiChip,
        TuiFloatingContainer,
        TuiIcon,
        TuiKeypad,
        TuiSheetDialog,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    protected readonly value = signal('143');
    protected readonly open = signal(false);
    protected readonly focused = signal(false);

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        closable: true,
        bar: false,
        appearance: 'fullscreen',
    };

    protected append(digit: string): void {
        this.value.update((current) => `${current}${digit}`);
    }

    protected backspace(): void {
        this.value.update((current) => current.slice(0, -1));
    }

    protected clear(): void {
        this.value.set('');
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils.less';

.sheet {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-block-size: 100%;
}

.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem 1rem 1rem;
}

.amount {
    box-sizing: border-box;
    padding: 1rem;
    font: bold 2.5rem var(--tui-typography-family-display);
    text-align: center;
    color: var(--tui-text-primary);
    // auto width via [size] so a centered <input> never scrolls/clips its text on iOS Safari
    max-inline-size: 100%;
    border: none;
    outline: none;
    background: transparent;
    transform: translateZ(0);
}

.chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
}

.middle {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    padding-block-end: 1rem;
}

.card {
    background: var(--tui-background-neutral-1);
    border-radius: var(--tui-radius-l);
    overflow: hidden;
}

.clamp {
    .tui-line-clamp();

    margin-block-start: 0.5rem;
    min-block-size: 2rem;

    &.tui-enter,
    &.tui-leave {
        animation-name: tuiFade;
    }
}

.pad {
    display: grid;
    grid-area: auto / 1;

    // clip only while collapsing/expanding, so pressed keys aren't cut off at rest
    &.tui-enter .pad-inner,
    &.tui-leave .pad-inner {
        overflow: hidden;
    }

    &.tui-enter,
    &.tui-leave {
        animation-name: tuiFade, tuiCollapse;
    }
}
```

#### Calculator

A calculator in a picture-in-picture window — icon keys and hardware-keyboard mapping.

**Template:**
```html
<button iconStart="@tui.calculator" tuiButton type="button" (click)="open.set(true)" > Open Calculator </button>
<ng-template [tuiPopout]="open()" [tuiPopoutOptions]="{pip: true, features: {width: 300, height: 450}}" (tuiPopoutChange)="open.set($event)" >
<main class="calculator">
<input #input inputmode="none" readonly tuiAutoFocus class="input" [value]="displayValue()" (keydown)="onKeydown($event)" />
<tui-keypad [columns]="4">
<button type="button" (click)="onKey('clear')" > AC </button>
<button type="button" (click)="onKey('(')" > ( </button>
<button type="button" (click)="onKey(')')" > ) </button>
<button aria-label="Divide" type="button" (click)="onKey('÷')" >
<tui-icon icon="@tui.divide" />
</button> @for (digit of ['7', '8', '9']; track digit) { <button type="button" (click)="onKey(digit)" > {{ digit }} </button> } <button aria-label="Multiply" type="button" (click)="onKey('×')" >
<tui-icon icon="@tui.x" />
</button> @for (digit of ['4', '5', '6']; track digit) { <button type="button" (click)="onKey(digit)" > {{ digit }} </button> } <button aria-label="Subtract" type="button" (click)="onKey('-')" >
<tui-icon icon="@tui.minus" />
</button> @for (digit of ['1', '2', '3']; track digit) { <button type="button" (click)="onKey(digit)" > {{ digit }} </button> } <button aria-label="Add" type="button" (click)="onKey('+')" >
<tui-icon icon="@tui.plus" />
</button>
<button type="button" (click)="onKey('0')" > 0 </button>
<button type="button" (click)="onKey('.')" > . </button>
<button aria-label="Backspace" type="button" (click)="onKey('backspace')" (longtap)="onKey('clear')" >
<tui-icon icon="@tui.delete" />
</button>
<button aria-label="Equals" type="button" (click)="onKey('enter')" >
<tui-icon icon="@tui.equal" />
</button>
</tui-keypad>
</main>
</ng-template>
```

**TypeScript:**
```ts
import {Component, computed, type ElementRef, signal, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeypad} from '@taiga-ui/addon-mobile';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiPopout} from '@taiga-ui/experimental';

const KEYBOARD_MAP: Record<string, string> = {
    '+': '+',
    '-': '-',
    '*': '×',
    '/': '÷',
    '(': '(',
    ')': ')',
    '.': '.',
    Enter: 'enter',
    Backspace: 'backspace',
    Escape: 'clear',
};

const OPERATORS = new Set(['-', '+', '÷', '×']);

@Component({
    imports: [TuiAutoFocus, TuiButton, TuiIcon, TuiKeypad, TuiPopout],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly input = viewChild<ElementRef<HTMLInputElement>>('input');

    protected readonly expression = signal('0');
    protected readonly displayValue = computed(() => this.expression());
    protected readonly open = signal(false);

    protected onKey(key: string): void {
        const el = this.input()?.nativeElement;

        el?.focus();
        this.expression.update((expr) => this.reduce(expr, key));

        // a readonly, programmatically-set field won't scroll itself — after layout, keep
        // the latest input (the tail) in view
        requestAnimationFrame(() => {
            if (el) {
                el.scrollLeft = el.scrollWidth;
            }
        });
    }

    protected onKeydown(event: KeyboardEvent): void {
        const mapped =
            KEYBOARD_MAP[event.key] ?? (/^\d$/.test(event.key) ? event.key : null);

        if (mapped) {
            event.preventDefault();
            this.onKey(mapped);
        }
    }

    private reduce(current: string, key: string): string {
        const expr = current === 'Error' ? '0' : current;

        switch (key) {
            case '.':
                return this.appendDot(expr);
            case '(':
                return expr === '0' ? '(' : `${expr}(`;
            case ')':
                return `${expr})`;
            case 'backspace':
                return expr.length > 1 ? expr.replace(/\s?.$/, '') || '0' : '0';
            case 'clear':
                return '0';
            case 'enter':
                return this.tryCalculate(expr);
            default:
                return OPERATORS.has(key)
                    ? this.appendOperator(expr, key)
                    : this.appendDigit(expr, key);
        }
    }

    private appendDigit(expr: string, digit: string): string {
        return expr.replace(/\d*(?:\.\d*)?$/, (last) =>
            last === '0' ? digit : `${last}${digit}`,
        );
    }

    private appendOperator(expr: string, op: string): string {
        return /[+\-×÷]\s*$/.test(expr)
            ? expr.replace(/[+\-×÷]\s*$/, `${op} `)
            : `${expr} ${op} `;
    }

    private appendDot(expr: string): string {
        const lastNumber = expr.split(/[-+*/×÷()\s]/).pop() ?? '';

        if (lastNumber.includes('.')) {
            return expr;
        }

        return lastNumber ? `${expr}.` : `${expr}0.`;
    }

    private tryCalculate(expr: string): string {
        try {
            return this.calculate(expr);
        } catch {
            return 'Error';
        }
    }

    private calculate(expr: string): string {
        const tokens = expr
            .replaceAll('×', '*')
            .replaceAll('÷', '/')
            .match(/\d+(?:\.\d+)?|[+\-*/()]/g);

        if (!tokens) {
            throw new Error('Empty expression');
        }

        const result = this.evaluate(tokens);

        if (!Number.isFinite(result)) {
            throw new Error('Not a finite number');
        }

        return String(Math.round(result * 1e10) / 1e10);
    }

    /**
     * Safe evaluation of a flat arithmetic expression via the shunting-yard
     * algorithm — no `eval`/`new Function`, only the four operators and parentheses.
     */
    private evaluate(tokens: readonly string[]): number {
        const values: number[] = [];
        const operators: string[] = [];

        const fold = (): void => {
            const operator = operators.pop();
            const right = values.pop();
            const left = values.pop();

            if (operator === undefined || left === undefined || right === undefined) {
                throw new Error('Malformed expression');
            }

            values.push(this.operate(left, right, operator));
        };

        for (const token of tokens) {
            if (/\d/.test(token)) {
                values.push(Number(token));
            } else if (token === '(') {
                operators.push(token);
            } else if (token === ')') {
                while (operators.length && operators[operators.length - 1] !== '(') {
                    fold();
                }

                if (operators.pop() !== '(') {
                    throw new Error('Unbalanced parentheses');
                }
            } else {
                while (
                    operators.length &&
                    this.precedence(operators[operators.length - 1]) >=
                        this.precedence(token)
                ) {
                    fold();
                }

                operators.push(token);
            }
        }

        while (operators.length) {
            if (operators[operators.length - 1] === '(') {
                throw new Error('Unbalanced parentheses');
            }

            fold();
        }

        const [result, ...rest] = values;

        if (result === undefined || rest.length) {
            throw new Error('Malformed expression');
        }

        return result;
    }

    private precedence(operator: string | undefined): number {
        if (operator === '+' || operator === '-') {
            return 1;
        }

        return operator === '*' || operator === '/' ? 2 : 0;
    }

    private operate(left: number, right: number, operator: string): number {
        if (operator === '-') {
            return left - right;
        }

        if (operator === '+') {
            return left + right;
        }

        if (operator === '*') {
            return left * right;
        }

        return right === 0 ? Number.NaN : left / right;
    }
}
```

**LESS:**
```less
:host {
    display: block;
    block-size: 100%;
}

.calculator {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    block-size: 100dvh;
    box-sizing: border-box;
}

tui-keypad {
    flex: 1;
    min-block-size: 0;
    grid-auto-rows: 1fr; // fill the flex height instead of the fixed default rows
}

.input {
    flex: none;
    inline-size: 100%;
    padding: 0.75rem 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: end;
    border: none;
    outline: none;
    background: var(--tui-background-neutral-2);
    border-radius: 0.5rem;
    color: var(--tui-text-primary);
    box-sizing: border-box;

    &::placeholder {
        color: var(--tui-text-secondary);
    }
}
```

Populate the pad by projecting native
`<button>`
or
`<a>`
elements. Each carries its own content, click handler,
`aria-label`
and disabled state — there are no key-behavior or icon inputs on the component itself.
