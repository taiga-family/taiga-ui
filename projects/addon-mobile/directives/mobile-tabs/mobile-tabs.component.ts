import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    host: {
        class: 'tui-mobile-tabs-styles',
    },
    template: '',
    styleUrls: ['./mobile-tabs.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMobileTabsComponent {}
