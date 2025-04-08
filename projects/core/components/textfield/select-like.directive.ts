import {Directive} from '@angular/core';

@Directive({
    standalone: true,
    host: {
        inputmode: 'none',
        '[style.cursor]': '"pointer"',
        // Click on cleaner icon does not trigger `beforeinput` event --> handle all kind of deletion in input event
        '(beforeinput)': '$event.inputType.includes("delete") || $event.preventDefault()',
        '(input.capture)': '$event.inputType?.includes("delete") && clear($event.target)',
        '(mousedown.prevent)': '$event.target.focus()', // Hide Android text select handle (bubble marker below transparent caret)
    },
})
export class TuiSelectLike {
    protected clear(element: HTMLInputElement): void {
        element.value = '';
    }
}
