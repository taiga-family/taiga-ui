/* eslint-disable */
/**
 * Copied from
 * {@link https://github.com/text-mask/text-mask/blob/master/angular2/src/angular2TextMask.ts angular2-text-mask}
 * ___
 * "angular2-text-mask" is a legacy not-maintained library. It is published using legacy View Engine distribution.
 * Stackblitz fails to run "View Engine"-libraries in Ivy application.
 * See {@link https://github.com/Tinkoff/taiga-ui/issues/2541#issuecomment-1235516443 this comment}.
 */
import {
    Directive,
    ElementRef,
    forwardRef,
    Inject,
    Input,
    NgModule,
    OnChanges,
    Optional,
    Renderer2,
} from '@angular/core';
import {
    COMPOSITION_BUFFER_MODE,
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {ɵgetDOM as getDOM} from '@angular/platform-browser';
import {TuiTextMaskOptions} from '@taiga-ui/core';
import {createTextMaskInputElement} from 'text-mask-core';

/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid(): boolean {
    const userAgent = getDOM() ? getDOM().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}

@Directive({
    host: {
        '(input)': '_handleInput($event.target.value)',
        '(blur)': 'onTouched()',
        '(compositionstart)': '_compositionStart()',
        '(compositionend)': '_compositionEnd($event.target.value)',
    },
    selector: '[textMask]',
    exportAs: 'textMask',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MaskedInputDirective),
            multi: true,
        },
    ],
})
export class MaskedInputDirective implements ControlValueAccessor, OnChanges {
    @Input('textMask') textMaskConfig: TuiTextMaskOptions = {
        mask: [],
        guide: true,
        placeholderChar: '_',
        pipe: undefined,
        keepCharPositions: false,
    };

    onChange = (_: any) => {};
    onTouched = () => {};

    private textMaskInputElement: any;
    private inputElement!: HTMLInputElement;

    /** Whether the user is creating a composition string (IME events). */
    private _composing = false;

    constructor(
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        @Optional() @Inject(COMPOSITION_BUFFER_MODE) private _compositionMode: boolean,
    ) {
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }

    ngOnChanges() {
        this._setupMask(true);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    }

    writeValue(value: any) {
        this._setupMask();

        // set the initial value for cases where the mask is disabled
        const normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this.inputElement, 'value', normalizedValue);

        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    }

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this._renderer.setProperty(
            this._elementRef.nativeElement,
            'disabled',
            isDisabled,
        );
    }

    _handleInput(value: any) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this._setupMask();

            if (this.textMaskInputElement !== undefined) {
                this.textMaskInputElement.update(value);

                // get the updated value
                value = this.inputElement.value;
                this.onChange(value);
            }
        }
    }

    _setupMask(create = false) {
        if (!this.inputElement) {
            if (this._elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
                // `textMask` directive is used directly on an input element
                this.inputElement = this._elementRef.nativeElement;
            } else {
                // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
                this.inputElement =
                    this._elementRef.nativeElement.getElementsByTagName('INPUT')[0];
            }
        }

        if (this.inputElement && create) {
            this.textMaskInputElement = createTextMaskInputElement(
                Object.assign({inputElement: this.inputElement}, this.textMaskConfig),
            );
        }
    }

    _compositionStart(): void {
        this._composing = true;
    }

    _compositionEnd(value: any): void {
        this._composing = false;
        this._compositionMode && this._handleInput(value);
    }
}

@NgModule({
    declarations: [MaskedInputDirective],
    exports: [MaskedInputDirective],
})
export class TextMaskModule {}
