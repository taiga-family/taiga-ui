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
import {maskitoCaretGuard} from '@maskito/kit';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAsTextfieldContent,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TuiPincodeContent} from './pincode-content.component';

const ANIMATION = {
    confirmed: 'tuiPincodeDotIn',
    collapsed: 'tuiPincodeDotCollapseScale',
    rejected: 'tuiScale',
} as const;

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
        '(input)': 'onInput()',
    },
})
export class TuiPincodeComponent {
    private phase = 0;
    private bounced = false;

    public readonly el = tuiInjectElement<HTMLInputElement>();
    public readonly value = signal('');
    public readonly length = signal(4);
    public readonly paste = signal(false);
    public readonly focused = tuiFocusedIn(this.el);

    protected readonly maskito = tuiMaskito({
        mask: /^\d+$/,
        overwriteMode: 'replace',
        plugins: [maskitoCaretGuard((value) => [value.length, value.length])],
        postprocessors: [
            (newState, initialState) => (this.mode() === null ? newState : initialState),
        ],
    });

    public readonly valid = input<boolean | null | undefined>(null);
    public readonly confirmed = output();
    public readonly finished = output();

    protected readonly mode = computed<'invalid' | 'pending' | 'success' | null>(() => {
        const validity = this.valid();

        if (tuiIsPresent(validity)) {
            return validity ? 'success' : 'invalid';
        }

        const length = this.length();

        return length > 0 && this.value().length === length ? 'pending' : null;
    });

    constructor() {
        afterRender(() => {
            if (this.value() !== this.el.value) {
                this.value.set(this.el.value);
            }

            if (this.length() !== this.el.maxLength) {
                this.length.set(this.el.maxLength);
            }
        });

        effect(() => {
            const v = this.valid();

            this.phase = tuiIsPresent(v)
                ? Math.min(this.el.value.length, this.el.maxLength)
                : 0;
            this.bounced = false;
        });
    }

    public onAnimationStart({animationName}: AnimationEvent): void {
        if (this.valid() && animationName === ANIMATION.confirmed && !this.bounced) {
            this.bounced = true;
            this.confirmed.emit();
        }
    }

    public onAnimationEnd({animationName, target}: AnimationEvent): void {
        const validity = this.valid();

        const isReject =
            validity === false &&
            animationName === ANIMATION.rejected &&
            target instanceof HTMLElement &&
            target.classList.contains('t-dot_placeholder');

        const isCollapse = validity && animationName === ANIMATION.collapsed;

        if ((!isReject && !isCollapse) || --this.phase) {
            return;
        }

        if (isReject) {
            this.el.value = '';
            this.el.dispatchEvent(new Event('input'));
        }

        this.finished.emit();
    }

    public isFocused(index: number): boolean {
        return (
            this.focused() &&
            index === Math.min(this.value().length, this.el.maxLength - 1)
        );
    }

    protected onInput(): void {
        const newValue = this.el.value;

        if (!this.value().length && newValue.length === this.el.maxLength) {
            this.paste.set(true);
        } else if (!newValue.length) {
            this.paste.set(false);
        }

        this.value.set(newValue);
    }
}
