import {Directive, inject} from '@angular/core';
import {WA_IS_ANDROID, WA_IS_MOBILE} from '@ng-web-apis/platform';
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
        '(keydown.backspace.prevent)':
            'options.cleaner() && el.value && dispatchInputEvent()',
        '(keydown.delete.prevent)':
            'options.cleaner() && el.value && dispatchInputEvent()',
        // Hide Android text select handle (bubble marker below transparent caret)
        '(mousedown)': 'prevent($event)',
    },
})
export class TuiSelectLike {
    private readonly isAndroid = inject(WA_IS_ANDROID);

    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly isMobile = inject(WA_IS_MOBILE);
    protected readonly options = inject(TUI_TEXTFIELD_OPTIONS);

    protected clear(): void {
        this.el.value = '';
    }

    protected dispatchInputEvent(): void {
        this.el.dispatchEvent(
            new InputEvent('input', {
                inputType: 'deleteContentBackward',
                bubbles: true,
            }),
        );
    }

    protected prevent(event: MouseEvent): void {
        if (!this.isAndroid) {
            return;
        }

        event.preventDefault();
        this.el.focus();
    }
}
