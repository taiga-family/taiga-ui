import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_IS_ANDROID} from '@taiga-ui/cdk/tokens';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styles: ['.t-select-like:not(:read-only) {cursor: pointer}'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-select-like',
    },
})
class TuiSelectLikeStyles {}

@Directive({
    standalone: true,
    host: {
        class: 't-select-like',
        inputmode: 'none',
        autocomplete: 'off',
        // Click on cleaner icon does not trigger `beforeinput` event --> handle all kind of deletion in input event
        '(beforeinput)': '$event.inputType.includes("delete") || $event.preventDefault()',
        '(input.capture)': '$event.inputType?.includes("delete") && clear($event.target)',
        // Hide Android text select handle (bubble marker below transparent caret)
        '(mousedown)': 'prevent($event, $event.target)',
    },
})
export class TuiSelectLike {
    private readonly isAndroid = inject(TUI_IS_ANDROID);
    protected readonly nothing = tuiWithStyles(TuiSelectLikeStyles);

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
