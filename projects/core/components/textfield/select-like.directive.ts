import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_IS_ANDROID} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
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
    selector: '[tuiSelectLike]',
    host: {
        class: 't-select-like',
        inputmode: 'none',
        spellcheck: 'false',
        autocomplete: 'off',
        // Click on cleaner icon does not trigger `beforeinput` event --> handle all kind of deletion in input event
        '(beforeinput)': '$event.inputType.includes("delete") || $event.preventDefault()',
        '(input.capture)': '$event.inputType?.includes("delete") && clear()',
        // Hide Android text select handle (bubble marker below transparent caret)
        '(mousedown)': 'prevent($event)',
    },
})
export class TuiSelectLike {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly isAndroid = inject(TUI_IS_ANDROID);

    protected readonly nothing = tuiWithStyles(TuiSelectLikeStyles);

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
