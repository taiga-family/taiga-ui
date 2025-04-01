import {
    ChangeDetectionStrategy,
    Component,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiLinkOptionsProvider} from '@taiga-ui/core/components/link';
import {tuiTextfieldOptionsProvider} from '@taiga-ui/core/components/textfield';
import {tuiDropdownOptionsProvider} from '@taiga-ui/core/directives/dropdown';
import {tuiBreadcrumbsOptionsProvider} from '@taiga-ui/kit/components/breadcrumbs';
import {tuiTabsOptionsProvider} from '@taiga-ui/kit/components/tabs';

const PROVIDERS = [
    tuiTextfieldOptionsProvider({size: signal('s')}),
    tuiBreadcrumbsOptionsProvider({icon: '/'}),
    tuiLinkOptionsProvider({appearance: 'action-grayscale'}),
    tuiTabsOptionsProvider({size: 'm'}),
    tuiDropdownOptionsProvider({align: 'right'}),
];

@Component({
    standalone: true,
    selector: '[tuiSubheader]:not([compact]),[tuiNavigationSubheader]:not([compact])',
    template: `
        <ng-content select="[tuiLink]" />
        <ng-content select="tui-breadcrumbs" />
        <ng-content select="[tuiHeader]" />
        <ng-content />
        <ng-content select="tui-tabs,[tuiTabs]" />
    `,
    styleUrls: ['./subheader.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        PROVIDERS,
        tuiButtonOptionsProvider({appearance: 'secondary', size: 'xs'}),
    ],
})
export class TuiSubheaderComponent {}

@Component({
    standalone: true,
    selector: '[tuiSubheader][compact],[tuiNavigationSubheader][compact]',
    template: `
        <div class="t-nav-subheader">
            <ng-content />
            <ng-content
                select="tui-tabs,tui-tabs-with-more,[tuiTabsWithMore],[tuiTabs]"
            />
            <ng-content select="[tuiButton],[tuiIconButton]" />
        </div>
    `,
    styleUrls: ['./subheader.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PROVIDERS, tuiButtonOptionsProvider({size: 's'})],
})
export class TuiSubheaderCompactComponent {}
