import {
    computed,
    Directive,
    effect,
    inject,
    Input,
    signal,
    untracked,
} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import {MASKITO_DEFAULT_OPTIONS, maskitoTransform} from '@maskito/core';
import {maskitoCaretGuard, maskitoPrefixPostprocessorGenerator} from '@maskito/kit';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_PHONE_OPTIONS} from './input-phone.options';
import {
    tuiCreateCompletePhoneInsertionPreprocessor,
    tuiCreatePhoneMaskExpression,
} from './utils';

const MASK_SYMBOLS = /[ \-_()]/g;

function isText(value: string): boolean {
    return Number.isNaN(parseInt(value.replaceAll(MASK_SYMBOLS, ''), 10));
}

@Directive({
    standalone: true,
    selector: 'input[tuiInputPhone]',
    providers: [tuiAsControl(TuiInputPhoneDirective)],
    hostDirectives: [TuiWithTextfield, MaskitoDirective],
    host: {
        '[type]': '"tel"',
        '[inputMode]': 'inputMode()',
        '[disabled]': 'disabled()',
        '(input)': 'onInput($event.target.value)',
        '(tuiActiveZoneChange)': 'onActiveZone($event)',
    },
})
export class TuiInputPhoneDirective extends TuiControl<string | null> {
    private readonly textfield = inject(TuiTextfieldDirective);
    private readonly host: TuiTextfieldComponent<string> = inject(TuiTextfieldComponent);

    protected readonly nonRemovablePrefix = computed(() => `${this.countryCode()} `);
    protected inputMode = computed(() => (this.allowText() ? 'text' : 'numeric'));

    protected readonly valueEffect = effect(() => {
        const value = this.value() ?? '';

        if (!value) {
            return;
        }

        this.textfield.value.set(
            maskitoTransform(
                value,
                this.calculateMask(
                    this.countryCode(),
                    this.phoneMask(),
                    this.nonRemovablePrefix(),
                    this.allowText(),
                ),
            ),
        );
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly blurEffect = effect(() => {
        const incomplete = untracked(() => !this.value());

        if (!this.host.focused() && incomplete) {
            this.textfield.value.set('');
        }

        if (this.host.focused() && incomplete && !this.allowText()) {
            this.textfield.value.set(this.nonRemovablePrefix());
        }
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly options = inject(TUI_INPUT_PHONE_OPTIONS);
    protected readonly element = tuiInjectElement<HTMLInputElement>();

    protected readonly mask = tuiMaskito(
        computed(() =>
            this.calculateMask(
                this.countryCode(),
                this.phoneMask(),
                this.nonRemovablePrefix(),
                this.allowText(),
            ),
        ),
    );

    public readonly countryCode = signal(this.options.countryCode);
    public readonly allowText = signal(this.options.allowText);
    public readonly phoneMask = signal(this.options.phoneMaskAfterCountryCode);

    // TODO(v5): replace with signal input
    @Input('countryCode')
    public set countryCodeSetter(code: string) {
        this.countryCode.set(code);
    }

    // TODO(v5): replace with signal input
    @Input('allowText')
    public set allowTextSetter(allow: boolean) {
        this.allowText.set(allow);
    }

    // TODO(v5): replace with signal input
    @Input('phoneMask')
    public set phoneMaskSetter(mask: string) {
        this.phoneMask.set(mask);
    }

    protected onInput(value: string): void {
        if (!value && !this.allowText()) {
            this.textfield.value.set(this.nonRemovablePrefix());
        }

        const parsed = isText(value)
            ? value
            : value.replaceAll(MASK_SYMBOLS, '').slice(0, this.maxPhoneLength);

        this.onChange(parsed === this.countryCode() || isText(parsed) ? '' : parsed);
    }

    private get maxPhoneLength(): number {
        return (
            this.countryCode().length + this.phoneMask().replaceAll(/[^#]+/g, '').length
        );
    }

    @tuiPure
    private calculateMask(
        countryCode: string,
        phoneMaskAfterCountryCode: string,
        nonRemovablePrefix: string,
        allowText: boolean,
    ): MaskitoOptions {
        const mask = tuiCreatePhoneMaskExpression(countryCode, phoneMaskAfterCountryCode);
        const preprocessors = [
            tuiCreateCompletePhoneInsertionPreprocessor(
                countryCode,
                phoneMaskAfterCountryCode,
            ),
        ];

        return allowText
            ? {
                  mask: ({value}) =>
                      isText(value) && value !== '+'
                          ? (MASKITO_DEFAULT_OPTIONS.mask as RegExp)
                          : mask,
                  preprocessors,
              }
            : {
                  mask,
                  preprocessors,
                  postprocessors: [
                      maskitoPrefixPostprocessorGenerator(nonRemovablePrefix),
                  ],
                  plugins: [
                      maskitoCaretGuard((value, [from, to]) => [
                          from === to ? nonRemovablePrefix.length : 0,
                          value.length,
                      ]),
                  ],
              };
    }
}
