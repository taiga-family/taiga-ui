import {Directive, inject} from '@angular/core';
import {TUI_IS_ANDROID} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';

@Directive({
    selector: '[tuiSelectLike]',
    host: {
        tuiSelectLike: '',
        inputmode: 'none',
        spellcheck: 'false',
        autocomplete: 'off',
        // Click on cleaner icon does not trigger `beforeinput` event --> handle all kind of deletion in input event
        '(beforeinput)':
            'options.cleaner() && $event.inputType.includes("delete") || $event.preventDefault()',
        '(input.capture)': '$event.inputType?.includes("delete") && clear()',
        // Hide Android text select handle (bubble marker below transparent caret)
        '(mousedown)': 'prevent($event)',
    },
})
export class TuiSelectLike {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly isAndroid = inject(TUI_IS_ANDROID);
    protected readonly options = inject(TUI_TEXTFIELD_OPTIONS);

    protected clear(): void {
        this.el.value = '';
    }

    protected prevent(event: MouseEvent): void {
        if (!this.isAndroid) {
            return;
        }

        event.preventDefault();
        this.el.focus();
    }
}
