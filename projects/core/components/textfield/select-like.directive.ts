import {Directive, inject} from '@angular/core';
import {WA_IS_ANDROID, WA_IS_MOBILE} from '@ng-web-apis/platform';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';

@Directive({
    selector: '[tuiSelectLike]',
    host: {
        autocomplete: 'off',
        inputmode: 'none',
        spellcheck: 'false',
        tuiSelectLike: '',
        // Click on cleaner icon does not trigger `beforeinput` event --> handle all kind of deletion in input event
        '(beforeinput)':
            '(isMobile && $event.inputType.includes("insertText")) || options.cleaner() && $event.inputType.includes("delete") || $event.preventDefault()',
        '(input.capture)': '$event.inputType?.includes("delete") && clear()',
        '(keydown.backspace)': 'options.cleaner() && dispatchInputEvent(-1)', // No (input) event if caret is at the beginning
        '(keydown.delete)': 'options.cleaner() && dispatchInputEvent(1)', // No (input) event if caret is at the end
        // Hide Android text select handle (bubble marker below transparent caret)
        '(mousedown)': 'prevent($event)',
    },
})
export class TuiSelectLike {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly isAndroid = inject(WA_IS_ANDROID);

    protected readonly isMobile = inject(WA_IS_MOBILE);
    protected readonly options = inject(TUI_TEXTFIELD_OPTIONS);

    protected clear(): void {
        this.el.value = '';
    }

    protected dispatchInputEvent(direction: -1 | 1): void {
        const caret = this.el.selectionStart ?? 0;

        if (
            this.el.value &&
            tuiClamp(caret + direction, 0, this.el.value.length) === caret
        ) {
            this.el.dispatchEvent(
                new InputEvent('input', {
                    bubbles: true,
                    inputType: `deleteContent${direction === 1 ? 'Forward' : 'Backward'}`,
                }),
            );
        }
    }

    protected prevent(event: MouseEvent): void {
        if (!this.isAndroid) {
            return;
        }

        event.preventDefault();
        this.el.focus();
    }
}
