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
import {
    MASKITO_DEFAULT_OPTIONS,
    type MaskitoOptions,
    maskitoTransform,
} from '@maskito/core';
import {maskitoCaretGuard, maskitoPrefixPostprocessorGenerator} from '@maskito/kit';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_PHONE_OPTIONS} from './input-phone.options';
import {tuiCreateCompletePhoneInsertionPreprocessor} from './utils/complete-phone-insertion-preprocessor';
import {tuiCreatePhoneMaskExpression} from './utils/create-phone-mask-expression';

const MASK_SYMBOLS = /[ \-_()]/g;

function isText(value: string): boolean {
    return Number.isNaN(parseInt(value.replaceAll(MASK_SYMBOLS, ''), 10));
}

@Directive({
    standalone: true,
    selector: 'input[tuiInputPhone]',
    providers: [
        tuiAsControl(TuiInputPhone),
        tuiValueTransformerFrom(TUI_INPUT_PHONE_OPTIONS),
    ],
    hostDirectives: [TuiWithTextfield, MaskitoDirective],
    host: {
        type: 'tel',
        '[inputMode]': 'inputMode()',
        '[disabled]': 'disabled()',
        '(input)': 'onInput($event.target.value)',
    },
})
export class TuiInputPhone extends TuiControl<string | null> {
    private readonly textfield = inject(TuiTextfieldDirective);
    private readonly host: TuiTextfieldComponent<string> = inject(TuiTextfieldComponent);

    protected readonly nonRemovablePrefix = computed(() => `${this.countryCode()} `);
    protected inputMode = computed(() => (this.allowText() ? 'text' : 'numeric'));

    protected readonly valueEffect = effect(() => {
        if (this.value()) {
            this.textfield.value.set(maskitoTransform(this.value() ?? '', this.mask()));
        }
    });

    protected readonly blurEffect = effect(() => {
        const incomplete = untracked(() => !this.value());
        const prefix = incomplete && this.interactive() && !this.allowText();

        if (!this.host.focused() && incomplete) {
            this.textfield.value.set('');
        } else if (this.host.focused() && prefix) {
            this.textfield.value.set(this.nonRemovablePrefix());
        }
    });

    protected readonly options = inject(TUI_INPUT_PHONE_OPTIONS);
    protected readonly el = tuiInjectElement<HTMLInputElement>();

    protected readonly mask = computed(() =>
        this.calculateMask(
            this.countryCode(),
            this.phoneMask(),
            this.nonRemovablePrefix(),
            this.allowText(),
        ),
    );

    protected readonly maskito = tuiMaskito(computed(() => this.mask()));

    public readonly countryCode = signal(extractCountryCode(this.options.mask));
    public readonly allowText = signal(this.options.allowText);
    public readonly phoneMask = signal(extractMask(this.options.mask));

    // TODO(v5): replace with signal input
    @Input('allowText')
    public set allowTextSetter(allow: boolean) {
        this.allowText.set(allow);
    }

    // TODO(v5): replace with signal input
    @Input('mask')
    public set maskSetter(mask: string) {
        this.countryCode.set(extractCountryCode(mask));
        this.phoneMask.set(extractMask(mask));
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

function extractCountryCode(mask: string): string {
    const match = /^(\+\d+)/.exec(mask);

    return match?.[1] || '';
}

function extractMask(mask: string): string {
    const match = /^\+\d+(.*)$/.exec(mask);

    return match?.[1]?.trim() || '';
}
