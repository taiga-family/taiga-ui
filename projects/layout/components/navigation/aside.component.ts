import {
    ChangeDetectionStrategy,
    Component,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiScrollable, TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {tuiDropdownOptionsProvider} from '@taiga-ui/core/portals/dropdown';
import {tuiHintOptionsProvider} from '@taiga-ui/core/portals/hint';
import {TuiFade} from '@taiga-ui/kit/directives/fade';

@Component({
    selector: 'aside[tuiNavigationAside]',
    imports: [TuiFade, TuiScrollable, TuiScrollbar],
    template: `
        <ng-content select="header" />
        <tui-scrollbar class="t-nav-scrollbar">
            <div
                tuiFade="vertical"
                tuiScrollable
                class="t-nav-content"
            >
                <ng-content />
            </div>
        </tui-scrollbar>
        <ng-content select="footer" />
    `,
    styleUrl: './aside.style.less',
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
        tuiNavigationAside: '',
        tuiTheme: 'dark',
        '[class._expanded]': 'expanded()',
    },
})
export class TuiAsideComponent {
    public readonly expanded = input(false, {alias: 'tuiNavigationAside'});
}
