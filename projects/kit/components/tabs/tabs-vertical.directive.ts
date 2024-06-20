import {Directive, HostBinding, HostListener, inject, Input} from '@angular/core';
import type {TuiHorizontalDirection} from '@taiga-ui/core/types';

import {TuiTabsDirective} from './tabs.directive';

@Directive({
    standalone: true,
    selector: 'tui-tabs[vertical], nav[tuiTabs][vertical]',
    hostDirectives: [
        {
            directive: TuiTabsDirective,
            inputs: ['activeItemIndex', 'size'],
            outputs: ['activeItemIndexChange'],
        },
    ],
})
export class TuiTabsVerticalDirective {
    private readonly tabs = inject(TuiTabsDirective);

    @Input()
    @HostBinding('attr.data-vertical')
    public vertical: TuiHorizontalDirection = 'left';

    @HostListener('keydown.arrowDown.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowUp.prevent', ['$event.target', '-1'])
    protected onKeyDownArrow(current: HTMLElement, step: number): void {
        this.tabs.moveFocus(current, step);
    }
}
