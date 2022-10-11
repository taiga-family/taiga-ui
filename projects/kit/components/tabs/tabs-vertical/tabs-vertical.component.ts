import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiHorizontalDirection} from '@taiga-ui/core';

import {TuiTabsDirective} from '../tabs.directive';

@Component({
    selector: `tui-tabs[vertical], nav[tuiTabs][vertical]`,
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: [`./tabs-vertical.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTabsVerticalComponent {
    @Input()
    @HostBinding(`attr.data-vertical`)
    @tuiDefaultProp()
    vertical: TuiHorizontalDirection = `left`;

    constructor(@Inject(TuiTabsDirective) private readonly tabs: TuiTabsDirective) {}

    @HostListener(`keydown.arrowDown.prevent`, [`$event.target`, `1`])
    @HostListener(`keydown.arrowUp.prevent`, [`$event.target`, `-1`])
    onKeyDownArrow(current: HTMLElement, step: number): void {
        this.tabs.moveFocus(current, step);
    }
}
