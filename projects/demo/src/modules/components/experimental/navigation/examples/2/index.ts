import {DOCUMENT} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiIcon,
    TuiSurface,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {TuiNavigationModule} from '@taiga-ui/experimental';
import {
    TuiBadgeDirective,
    TuiChevronDirective,
    TuiFadeDirective,
    TuiSwitchComponent,
    TuiTabDirective,
    TuiTabsHorizontalDirective,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiNavigationModule,
        TuiSwitchComponent,
        FormsModule,
        TuiButton,
        TuiChevronDirective,
        TuiDropdownDirective,
        TuiDropdownOpenDirective,
        TuiHeaderDirective,
        TuiTitleDirective,
        TuiIcon,
        TuiFadeDirective,
        TuiBadgeDirective,
        TuiTabsHorizontalDirective,
        TuiTabDirective,
        TuiRepeatTimes,
        TuiCardLarge,
        TuiSurface,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly doc = inject(DOCUMENT);

    protected color = false;

    protected readonly initial =
        this.doc.head
            .querySelector('meta[name="theme-color"]')
            ?.getAttribute('content') || '';

    protected onColor(color: boolean): void {
        this.color = color;
        this.doc.body.style.setProperty('--tui-theme-color', color ? 'purple' : 'black');
        this.doc.head
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', color ? 'purple' : this.initial);
    }
}
