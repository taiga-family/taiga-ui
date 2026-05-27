import {Component, computed, type ElementRef, signal, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeypad, type TuiKeypadKey} from '@taiga-ui/addon-mobile';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
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
    imports: [TuiAutoFocus, TuiButton, TuiKeypad, TuiPopout],
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
        this.input()?.nativeElement.focus();
        this.expression.update((expr) => this.reduce(expr, key));
    }

    protected onKeydown(event: KeyboardEvent): void {
        const mapped =
            KEYBOARD_MAP[event.key] ?? (/^\d$/.test(event.key) ? event.key : null);

        if (mapped) {
            event.preventDefault();
            this.onKey(mapped);
        }
    }

    private reduce(expr: string, key: TuiKeypadKey): string {
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
        const lastNumber = /[\d.]*$/.exec(expr)?.[0] ?? '';

        return lastNumber.includes('.') ? expr : `${expr}.`;
    }

    private tryCalculate(expr: string): string {
        try {
            return this.calculate(expr);
        } catch {
            return 'Error';
        }
    }

    private calculate(expr: string): string {
        const sanitized = expr.replaceAll('×', '*').replaceAll('÷', '/');

        if (!/^[\d+\-*/().\s]+$/.test(sanitized)) {
            throw new Error('Invalid characters');
        }

        const open = (sanitized.match(/\(/g) ?? []).length;
        const close = (sanitized.match(/\)/g) ?? []).length;

        if (open !== close) {
            throw new Error('Unbalanced parentheses');
        }

        // eslint-disable-next-line @typescript-eslint/no-implied-eval
        const result = new Function(`"use strict"; return (${sanitized});`)();

        return Number.isFinite(result) ? String(result) : 'Error';
    }
}
