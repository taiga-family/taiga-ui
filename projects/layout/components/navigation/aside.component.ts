import {
    ChangeDetectionStrategy,
    Component,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiScrollControls, TuiScrollRef} from '@taiga-ui/core/components/scrollbar';
import {tuiDropdownOptionsProvider} from '@taiga-ui/core/portals/dropdown';
import {tuiHintOptionsProvider} from '@taiga-ui/core/portals/hint';
import {TuiFade} from '@taiga-ui/kit/directives/fade';

@Component({
    selector: 'aside[tuiNavigationAside]',
    imports: [TuiFade, TuiScrollControls, TuiScrollRef],
    template: `
        <ng-content select="header" />
        <div
            tuiFade="vertical"
            tuiScrollRef
            class="t-nav-scrollbar"
        >
            <tui-scroll-controls />
            <div class="t-nav-content">
                <ng-content />
            </div>
        </div>
        <ng-content select="footer" />
    `,
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './aside.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiHintOptionsProvider({appearance: 'floating'}),
        tuiButtonOptionsProvider({size: 's', appearance: 'flat-grayscale'}),
        tuiDropdownOptionsProvider({
            appearance: 'dropdown-navigation',
            align: 'end',
            offset: 12,
        }),
    ],
    host: {
        'data-tui-version': TUI_VERSION,
        tuiNavigationAside: '',
        tuiTheme: 'dark',
        '[class._expanded]': 'expanded()',
    },
})
export class TuiAsideComponent {
    public readonly expanded = input(false, {alias: 'tuiNavigationAside'});
}
