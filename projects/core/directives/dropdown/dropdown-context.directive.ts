import {Directive, HostListener, inject} from '@angular/core';
import {EMPTY_CLIENT_RECT, TuiActiveZone, tuiPointToClientRect} from '@taiga-ui/cdk';
import {tuiAsDriver, tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';
import {shouldCall} from '@taiga-ui/event-plugins';

import {TuiDropdownDriver} from './dropdown.driver';

function activeZoneFilter(this: TuiDropdownContext, target: Element): boolean {
    return !this.activeZone.contains(target);
}

@Directive({
    standalone: true,
    selector: '[tuiDropdownContext]',
    providers: [
        TuiActiveZone,
        TuiDropdownDriver,
        tuiAsDriver(TuiDropdownDriver),
        tuiAsRectAccessor(TuiDropdownContext),
    ],
})
export class TuiDropdownContext extends TuiRectAccessor {
    private readonly driver = inject(TuiDropdownDriver);
    private currentRect = EMPTY_CLIENT_RECT;

    protected readonly activeZone = inject(TuiActiveZone);

    public readonly type = 'dropdown';

    public getClientRect(): DOMRect {
        return this.currentRect;
    }

    @HostListener('contextmenu.prevent.stop', ['$event.clientX', '$event.clientY'])
    protected onContextMenu(x: number, y: number): void {
        this.currentRect = tuiPointToClientRect(x, y);
        this.driver.next(true);
    }

    @shouldCall(activeZoneFilter)
    @HostListener('document:click.silent', ['$event.target'])
    @HostListener('document:contextmenu.capture.silent', ['$event.target'])
    @HostListener('document:keydown.esc', ['$event.currentTarget'])
    protected closeDropdown(): void {
        this.driver.next(false);
    }
}
