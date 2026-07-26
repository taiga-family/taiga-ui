import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';
import {tuiTabsOptionsProvider} from '@taiga-ui/kit/components/tabs';

@Component({
    selector: 'nav[tuiNavigationNav]',
    template: '<ng-content />',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './nav.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiBadgeOptionsProvider({size: 'm'}),
        tuiButtonOptionsProvider({size: 's'}),
        tuiTabsOptionsProvider({size: 'm'}),
    ],
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiNavComponent {}
