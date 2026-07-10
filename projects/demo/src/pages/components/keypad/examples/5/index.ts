import {Component, computed, type ElementRef, signal, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeypad, type TuiKeypadKey} from '@taiga-ui/addon-mobile';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiPopout} from '@taiga-ui/experimental';

const KEYBOARD_MAP: Record<string, TuiKeypadKey> = {
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

    protected readonly keys: readonly TuiKeypadKey[][] = [
        ['clear', '(', ')', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', 'backspace', 'enter'],
    ];

    protected onKey(key: TuiKeypadKey): void {
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

    private reduce(current: string, key: TuiKeypadKey): string {
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
