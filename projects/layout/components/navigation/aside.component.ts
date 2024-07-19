import {
    ChangeDetectionStrategy,
    Component,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiScrollable, TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {tuiDropdownOptionsProvider} from '@taiga-ui/core/directives/dropdown';
import {TuiFade} from '@taiga-ui/kit/directives/fade';

@Component({
    standalone: true,
    selector: 'aside[tuiNavigationAside]',
    imports: [TuiScrollbar, TuiFade, TuiScrollable],
    template: `
        <ng-content select="header"></ng-content>
        <tui-scrollbar class="t-nav-scrollbar">
            <div
                tuiFade="vertical"
                tuiScrollable
                class="t-nav-content"
            >
                <ng-content></ng-content>
            </div>
        </tui-scrollbar>
        <ng-content select="footer"></ng-content>
    `,
    styleUrls: ['./aside.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({size: 's', appearance: 'flat'}),
        tuiDropdownOptionsProvider({
            appearance: 'dropdown-navigation',
            align: 'right',
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
    // TODO: refactor to signal inputs after Angular update
    public readonly expanded = signal(false);

    @Input()
    public set tuiNavigationAside(expanded: boolean) {
        this.expanded.set(expanded);
    }
}
