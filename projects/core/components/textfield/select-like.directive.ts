import {Directive} from '@angular/core';

@Directive({
    standalone: true,
    host: {
        inputmode: 'none',
        '[style.cursor]': '"pointer"',
        '[style.caret-color]': '"transparent"',
        // Click on cleaner icon does not trigger `beforeinput` event --> handle all kind of deletion in input event
        '(beforeinput)': '$event.inputType.includes("delete") || $event.preventDefault()',
        '(input.capture)': '$event.inputType?.includes("delete") && clear($event.target)',
    },
})
export class TuiSelectLike {
    protected clear(element: HTMLInputElement): void {
        element.value = '';
    }
}
