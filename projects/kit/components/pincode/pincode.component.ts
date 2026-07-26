import {computed, Directive, effect, input, output, signal} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoCaretGuard} from '@maskito/kit';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
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
    rejected: 'tuiPincodeScale',
} as const;

@Directive({
    selector: 'input[tuiPincode]',
    providers: [
        tuiAsTextfieldContent(() => TuiPincodeContent),
        tuiFallbackValueProvider(''),
    ],
    hostDirectives: [MaskitoDirective, TuiTextfieldContent],
    host: {
        autocomplete: 'one-time-code',
        inputmode: 'numeric',
        spellcheck: 'false',
        '[attr.data-state]': 'state()',
        '[class._paste]': 'paste()',
        '[maxLength]': 'maxLength()',
        '[value]': 'value()',
        '(input)': 'onInput($event.target.value)',
    },
})
export class TuiPincodeComponent extends TuiControl<string> {
    private phase = 0;
    private bounced = false;

    public readonly el = tuiInjectElement<HTMLInputElement>();
    public readonly paste = signal(false);
    public readonly focused = tuiFocusedIn(this.el);

    protected readonly maskito = tuiMaskito({
        mask: /^\d+$/,
        overwriteMode: 'replace',
        plugins: [maskitoCaretGuard((value) => [value.length, value.length])],
        postprocessors: [(newState, initial) => (this.state() ? initial : newState)],
    });

    public readonly maxLength = input(4);
    public readonly confirmed = output();
    public readonly finished = output();

    protected readonly state = computed<'invalid' | 'pending' | 'success' | null>(() => {
        if (tuiIsPresent(this.pseudoInvalid())) {
            return this.pseudoInvalid() ? 'invalid' : 'success';
        }

        return this.value().length === this.maxLength() ? 'pending' : null;
    });

    protected readonly effect = effect(() => {
        this.bounced = false;
        this.phase = tuiIsPresent(this.pseudoInvalid()) ? this.value().length : 0;
    });

    public onAnimationStart({animationName}: AnimationEvent): void {
        if (animationName === ANIMATION.confirmed && !this.bounced) {
            this.bounced = true;
            this.confirmed.emit();
        }
    }

    public onAnimationEnd({animationName}: AnimationEvent): void {
        const isCollapse = animationName === ANIMATION.collapsed;
        const isReject = animationName === ANIMATION.rejected;

        if ((!isReject && !isCollapse) || --this.phase) {
            return;
        }

        if (isReject) {
            this.onChange('');
        }

        this.finished.emit();
    }

    public isFocused(index: number): boolean {
        return (
            this.focused() &&
            index === Math.min(this.value().length, this.maxLength() - 1)
        );
    }

    protected onInput(value: string): void {
        this.paste.set(!this.value().length && value.length === this.maxLength());
        this.onChange(value);
    }
}
