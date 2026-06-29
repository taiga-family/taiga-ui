import {computed, Directive, inject, Injectable, Input, signal} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {
    TUI_DROPDOWN_ACTIVE_ZONE_CLOSE_GUARD,
    TUI_DROPDOWN_COMPONENT,
    TuiDropdownDirective,
} from '@taiga-ui/core/directives/dropdown';

import {TuiDropdownMobileComponent} from './dropdown-mobile.component';

@Injectable()
class TuiDropdownMobileActiveZoneCloseGuard {
    public readonly canClose = signal(true);
}

@Directive({
    standalone: true,
    selector: '[tuiDropdownMobile]',
    providers: [
        TuiDropdownMobileActiveZoneCloseGuard,
        {
            provide: TUI_DROPDOWN_ACTIVE_ZONE_CLOSE_GUARD,
            useExisting: TuiDropdownMobileActiveZoneCloseGuard,
            multi: true,
        },
        {
            provide: TUI_DROPDOWN_COMPONENT,
            useFactory: () =>
                inject(TUI_IS_MOBILE)
                    ? TuiDropdownMobileComponent
                    : inject(TUI_DROPDOWN_COMPONENT, {skipSelf: true}),
        },
    ],
    host: {
        '[style.visibility]': 'visible() ? "visible" : ""',
        '(mousedown)': 'onMouseDown($event)',
    },
})
export class TuiDropdownMobile {
    private readonly closeGuard = inject(TuiDropdownMobileActiveZoneCloseGuard);
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private sheetTitle = '';

    private readonly dropdown = inject(TuiDropdownDirective, {
        optional: true,
        self: true,
    });

    protected readonly visible = computed(() => !this.dropdown || this.dropdown.ref());

    @Input()
    public set tuiDropdownMobile(value: string | null | undefined) {
        this.sheetTitle = value ?? '';
        this.closeGuard.canClose.set(!this.sheetTitle);
    }

    public get tuiDropdownMobile(): string {
        return this.sheetTitle;
    }

    protected onMouseDown(event: MouseEvent): void {
        if (
            !this.isMobile ||
            !tuiIsHTMLElement(event.target) ||
            !event.target.matches('input,textarea') ||
            this.tuiDropdownMobile
        ) {
            return;
        }

        event.preventDefault();
        event.target.focus({preventScroll: true});
    }
}
