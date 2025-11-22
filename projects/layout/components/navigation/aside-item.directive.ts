import {Directive, type FactoryProvider, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    tuiAsDataListHost,
    TuiDataListComponent,
    type TuiDataListHost,
} from '@taiga-ui/core/components/data-list';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import {
    TUI_DROPDOWN_OPTIONS,
    TuiDropdownDirective,
    TuiDropdownManual,
    type TuiDropdownOptions,
    TuiDropdownPositionSided,
} from '@taiga-ui/core/portals/dropdown';
import {TUI_COMMON_ICONS, TUI_ICON_END} from '@taiga-ui/core/tokens';
import {TUI_CHEVRON, TuiChevron} from '@taiga-ui/kit/directives/chevron';

import {TuiHintAsideDirective} from './hint-aside.directive';

@Directive({
    selector: '[tuiAsideItem]',
    providers: [
        tuiAsDataListHost(TuiAsideItemDirective),
        provideIcon(),
        provideDropdown(),
    ],
    hostDirectives: [
        {
            directive: TuiHintAsideDirective,
            inputs: ['tuiHintAside:tuiAsideItem'],
        },
        TuiDropdownManual,
        TuiDropdownPositionSided,
        TuiButton,
        {
            directive: RouterLinkActive,
            inputs: ['routerLinkActiveOptions'],
        },
    ],
    host: {
        tuiButton: '',
        tuiOption: '',
        tuiAsideItem: '',
        '[class._link]': 'link',
        '[class._active]': 'active()',
        '[class._custom]': 'icon !== icons.iconEnd()',
    },
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
            if (inject(TuiChevron, {optional: true, self: true})) {
                return inject(TUI_CHEVRON);
            }

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
