import {
    afterRender,
    computed,
    Directive,
    effect,
    input,
    output,
    signal,
} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {
    tuiAsTextfieldContent,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TuiPincodeContent} from './pincode-content.component';

const BOUNCE_MS = 400;
const STAGGER_MS = 100;
const TAIL_MS = 300;

@Directive({
    selector: 'input[tuiPincode]',
    providers: [tuiAsTextfieldContent(TuiPincodeContent)],
    hostDirectives: [MaskitoDirective, TuiTextfieldContent],
    host: {
        autocomplete: 'one-time-code',
        inputmode: 'numeric',
        maxlength: '4',
        spellcheck: 'false',
        '[attr.data-mode]': 'mode()',
        '[attr.data-paste]': 'paste() ? "" : null',
        '(beforeinput)': 'onBeforeInput($event)',
        '(input)': 'onInput()',
        '(selectionchange)': 'onSelection()',
    },
})
export class TuiPincodeComponent {
    private collapseCount = 0;
    private invalidCount = 0;
    private animatedEmitted = false;
    public readonly el = tuiInjectElement<HTMLInputElement>();
    public readonly value = signal('');
    public readonly paste = signal(false);
    public readonly focused = tuiFocusedIn(this.el);
    protected readonly maskito = tuiMaskito({mask: /^\d+$/, overwriteMode: 'replace'});
    public readonly valid = input<boolean | null>(null);
    public readonly animated = output();
    public readonly finished = output();

    public readonly mode = computed<'invalid' | 'pending' | 'success' | null>(() => {
        const validity = this.valid();

        if (validity === true) {
            return 'success';
        }

        if (validity === false) {
            return 'invalid';
        }

        const {maxLength} = this.el;

        return maxLength > 0 && this.value().length === maxLength ? 'pending' : null;
    });

    constructor() {
        afterRender(() => {
            if (this.value() !== this.el.value) {
                this.value.set(this.el.value);
            }
        });

        effect(() => {
            this.valid();
            this.collapseCount = 0;
            this.invalidCount = 0;
            this.animatedEmitted = false;
        });
    }

    public onAnimationStart(event: AnimationEvent): void {
        if (
            this.valid() &&
            event.animationName === 'tuiPincodeDotIn' &&
            !this.animatedEmitted
        ) {
            this.animatedEmitted = true;
            this.animated.emit();
        }
    }

    public onAnimationEnd(event: AnimationEvent): void {
        const validity = this.valid();

        if (validity === null) {
            return;
        }

        const filled = Math.min(this.value().length, this.el.maxLength);
        const target = event.target as HTMLElement | null;

        if (
            validity &&
            event.animationName === 'tuiPincodeDotCollapseScale' &&
            ++this.collapseCount === filled
        ) {
            this.finished.emit();
        } else if (
            !validity &&
            event.animationName === 'tuiScale' &&
            target?.classList.contains('t-dot_placeholder') &&
            ++this.invalidCount === filled
        ) {
            this.clearValue();
            this.finished.emit();
        }
    }

    public getStyle(index: number): Record<string, string> {
        const n = this.el.maxLength;
        const offset = index - (n - 1) / 2;
        const cycle = BOUNCE_MS + (n - 1) * STAGGER_MS + TAIL_MS;

        return {
            '--t-animation-delay': `${index * STAGGER_MS}ms`,
            '--t-animation-cycle': `${cycle}ms`,
            '--t-offset': `${offset}`,
        };
    }

    public isFocused(index: number): boolean {
        return (
            this.focused() &&
            index === Math.min(this.value().length, this.el.maxLength - 1)
        );
    }

    protected onBeforeInput(event: Event): void {
        if (this.value().length >= this.el.maxLength) {
            event.preventDefault();
        }
    }

    protected onInput(): void {
        const oldLength = this.value().length;
        const newValue = this.el.value;
        const {maxLength} = this.el;

        if (oldLength === 0 && newValue.length === maxLength) {
            this.paste.set(true);
        } else if (newValue.length === 0) {
            this.paste.set(false);
        }

        this.value.set(newValue);
    }

    protected onSelection(): void {
        const {maxLength} = this.el;
        const end = this.el.value.length;
        const start = end === maxLength ? end - 1 : end;

        if (this.el.selectionStart !== start || this.el.selectionEnd !== end) {
            this.el.setSelectionRange(start, end);
        }
    }

    private clearValue(): void {
        this.el.value = '';
        this.el.dispatchEvent(new Event('input'));
    }
}
