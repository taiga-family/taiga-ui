import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';
import {tuiTabsOptionsProvider} from '@taiga-ui/kit/components/tabs';

@Component({
    standalone: true,
    selector: 'nav[tuiNavigationNav]',
    template: '<ng-content />',
    styleUrls: ['./nav.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiBadgeOptionsProvider({size: 'm'}),
        tuiButtonOptionsProvider({size: 's'}),
        tuiTabsOptionsProvider({size: 'm'}),
    ],
    host: {
        tuiNavigationNav: '',
        tuiNavigationNavV: TUI_VERSION,
    },
})
export class TuiNavComponent {}
