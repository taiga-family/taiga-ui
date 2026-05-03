import {
    ChangeDetectionStrategy,
    Component,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiLinkOptionsProvider} from '@taiga-ui/core/components/link';
import {tuiTextfieldOptionsProvider} from '@taiga-ui/core/components/textfield';
import {tuiDropdownOptionsProvider} from '@taiga-ui/core/portals/dropdown';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';
import {tuiBreadcrumbsOptionsProvider} from '@taiga-ui/kit/components/breadcrumbs';
import {tuiTabsOptionsProvider} from '@taiga-ui/kit/components/tabs';

const PROVIDERS = [
    tuiTextfieldOptionsProvider({size: signal('s')}),
    tuiBreadcrumbsOptionsProvider({icon: '/'}),
    tuiLinkOptionsProvider({appearance: 'action-grayscale'}),
    tuiTabsOptionsProvider({size: 'm'}),
    tuiDropdownOptionsProvider({align: 'end'}),
    tuiBadgeOptionsProvider({size: 'm'}),
];

@Component({
    selector: '[tuiSubheader]:not([compact]),[tuiNavigationSubheader]:not([compact])',
    template: `
        <ng-content select="[tuiLink]" />
        <ng-content select="tui-breadcrumbs" />
        <ng-content select="[tuiHeader]" />
        <ng-content />
        <ng-content select="tui-tabs,[tuiTabs]" />
    `,
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './subheader.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        PROVIDERS,
        tuiButtonOptionsProvider({appearance: 'secondary', size: 'xs'}),
    ],
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiSubheaderComponent {}

@Component({
    selector: '[tuiSubheader][compact],[tuiNavigationSubheader][compact]',
    template: `
        <div class="t-nav-subheader">
            <ng-content />
            <ng-content select="tui-tabs,tui-tabs-with-more" />
            <ng-content select="[tuiButton],[tuiIconButton]" />
        </div>
    `,
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './subheader.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PROVIDERS, tuiButtonOptionsProvider({size: 's'})],
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiSubheaderCompactComponent {}
