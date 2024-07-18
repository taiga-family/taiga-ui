import {Directive, FactoryProvider, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {tuiProvide} from '@taiga-ui/cdk';
import {
    TUI_DROPDOWN_OPTIONS,
    TuiDropdownDirective,
    TuiDropdownManual,
    TuiDropdownOptions,
    TuiDropdownPositionSided,
} from '@taiga-ui/core';
import {TUI_COMMON_ICONS, TUI_ICON_END} from '@taiga-ui/core/tokens';
import {
    TUI_DATA_LIST_HOST,
    TuiDataListComponent,
    TuiDataListHost,
} from '@taiga-ui/core/components/data-list';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import {TuiButton} from '@taiga-ui/core/components/button';

import {TuiHintAside} from './hint-aside.directive';

@Directive({
    standalone: true,
    selector: '[tuiAsideItem]',
    host: {
        tuiButton: '',
        tuiOption: '',
        '[class._link]': 'link',
        '[class._active]': 'active()',
        '[class._custom]': 'icon !== icons.iconEnd',
    },
    hostDirectives: [
        TuiHintAside,
        TuiDropdownManual,
        TuiDropdownPositionSided,
        TuiButton,
        {
            directive: RouterLinkActive,
            inputs: ['routerLinkActiveOptions'],
        },
    ],
    providers: [
        tuiProvide(TUI_DATA_LIST_HOST, TuiAsideItemDirective),
        provideIcon(),
        provideDropdown(),
    ],
})
export class TuiAsideItemDirective implements TuiDataListHost<unknown> {
    protected readonly icon = inject(TUI_COMMON_ICONS).check;
    protected readonly icons = inject(TuiIcons);
    protected readonly link = inject(RouterLink, {self: true, optional: true});
    protected readonly active = toSignal(inject(RouterLinkActive).isActiveChange);

    public readonly size = 's';
}

function provideIcon(): FactoryProvider {
    return {
        provide: TUI_ICON_END,
        useFactory: (): string => {
            const {check, more} = inject(TUI_COMMON_ICONS);
            const active =
                inject(TuiDataListComponent, {optional: true}) &&
                inject(RouterLink, {self: true, optional: true})
                    ? check
                    : '';

            return inject(TuiDropdownDirective, {self: true, optional: true})
                ? more
                : active;
        },
    };
}

function provideDropdown(): FactoryProvider {
    return {
        provide: TUI_DROPDOWN_OPTIONS,
        useFactory: (): TuiDropdownOptions => ({
            ...inject(TUI_DROPDOWN_OPTIONS, {skipSelf: true}),
            offset: inject(TuiDataListComponent, {optional: true}) ? 8 : 12,
        }),
    };
}
