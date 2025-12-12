import {Directive, inject, input} from '@angular/core';
import {type TuiHorizontalDirection} from '@taiga-ui/core/types';

import {TuiTabsDirective} from './tabs.directive';

@Directive({
    selector: 'tui-tabs[vertical], nav[tuiTabs][vertical]',
    hostDirectives: [
        {
            directive: TuiTabsDirective,
            inputs: ['activeItemIndex', 'size'],
            outputs: ['activeItemIndexChange'],
        },
    ],
    host: {
        '[attr.data-vertical]': 'vertical()',
        '(keydown.arrowDown.prevent)': 'onKeyDownArrow($event.target, 1)',
        '(keydown.arrowUp.prevent)': 'onKeyDownArrow($event.target, -1)',
    },
})
export class TuiTabsVertical {
    private readonly tabs = inject(TuiTabsDirective);

    public readonly vertical = input<TuiHorizontalDirection>('left');

    protected onKeyDownArrow(current: HTMLElement, step: number): void {
        this.tabs.moveFocus(current, step);
    }
}
