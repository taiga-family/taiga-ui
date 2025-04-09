import {Directive, inject} from '@angular/core';
import {TUI_IS_ANDROID} from '@taiga-ui/cdk/tokens';

@Directive({
    standalone: true,
    host: {
        inputmode: 'none',
        autocomplete: 'off',
        '[style.cursor]': '"pointer"',
        '[style.caret-color]': '"transparent"',
        // Click on cleaner icon does not trigger `beforeinput` event --> handle all kind of deletion in input event
        '(beforeinput)': '$event.inputType.includes("delete") || $event.preventDefault()',
        '(input.capture)': '$event.inputType?.includes("delete") && clear($event.target)',
        // Hide Android text select handle (bubble marker below transparent caret)
        '(mousedown)': 'prevent($event, $event.target)',
    },
})
export class TuiSelectLike {
    private readonly isAndroid = inject(TUI_IS_ANDROID);

    protected clear(element: HTMLInputElement): void {
        element.value = '';
    }

    protected prevent(event: MouseEvent, element: HTMLInputElement): void {
        if (this.isAndroid) {
            event.preventDefault();
            element.focus();
        }
    }
}
