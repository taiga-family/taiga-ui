import {
    AfterViewChecked,
    Directive,
    ElementRef,
    forwardRef,
    Inject,
    Injector,
    Input,
    OnDestroy,
    Optional,
} from '@angular/core';
import {
    TuiActiveZoneDirective,
    TuiDropdownPortalService,
    TuiParentsScrollService,
} from '@taiga-ui/cdk';
import {AbstractTuiDropdown} from '@taiga-ui/core/abstract';
import {TuiDropdown} from '@taiga-ui/core/interfaces';
import {TUI_DROPDOWN_DIRECTIVE} from '@taiga-ui/core/tokens';

@Directive({
    selector: `[tuiDropdown]:not(ng-container)`,
    providers: [
        {
            provide: TUI_DROPDOWN_DIRECTIVE,
            useExisting: forwardRef(() => TuiDropdownDirective),
        },
        TuiParentsScrollService,
    ],
})
export class TuiDropdownDirective
    extends AbstractTuiDropdown
    implements TuiDropdown, AfterViewChecked, OnDestroy
{
    @Input(`tuiDropdown`)
    set open(value: boolean) {
        this.toggleDropdown(value);
    }

    constructor(
        @Inject(Injector) injector: Injector,
        @Inject(TuiDropdownPortalService)
        portalService: TuiDropdownPortalService,
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(TuiActiveZoneDirective)
        @Optional()
        activeZone: TuiActiveZoneDirective | null,
        @Inject(TuiParentsScrollService) readonly refresh$: TuiParentsScrollService,
    ) {
        super(injector, portalService, elementRef, activeZone);
    }
}
