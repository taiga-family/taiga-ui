import {
    AfterViewChecked,
    ComponentRef,
    Directive,
    ElementRef,
    Inject,
    INJECTOR,
    Injector,
    Input,
    OnChanges,
    OnDestroy,
    Self,
    Type,
} from '@angular/core';
import {
    TuiActiveZoneDirective,
    TuiContextWithImplicit,
    TuiDestroyService,
    TuiDropdownPortalService,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    tuiAsRectAccessor,
    tuiAsVehicle,
    TuiRectAccessor,
    TuiVehicle,
} from '@taiga-ui/core/abstract';
import {TuiPortalItem} from '@taiga-ui/core/interfaces';
import {tuiCheckFixedPosition} from '@taiga-ui/core/utils';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable, Subject} from 'rxjs';
import {takeUntil, throttleTime} from 'rxjs/operators';

import {TUI_DROPDOWN_COMPONENT} from './dropdown.providers';

@Directive({
    selector: '[tuiDropdown]:not(ng-container)',
    exportAs: 'tuiDropdown',
    providers: [
        TuiDestroyService,
        tuiAsRectAccessor(TuiDropdownDirective),
        tuiAsVehicle(TuiDropdownDirective),
    ],
})
export class TuiDropdownDirective
    implements
        AfterViewChecked,
        OnDestroy,
        OnChanges,
        TuiPortalItem,
        TuiRectAccessor,
        TuiVehicle
{
    private readonly refresh$ = new Subject<void>();

    @Input('tuiDropdown')
    content: PolymorpheusContent<TuiContextWithImplicit<TuiActiveZoneDirective>>;

    dropdownBoxRef: ComponentRef<unknown> | null = null;

    readonly type = 'dropdown';

    readonly component = new PolymorpheusComponent(this.dropdown, this.injector);

    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(ElementRef) readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_DROPDOWN_COMPONENT) private readonly dropdown: Type<unknown>,
        @Inject(INJECTOR) private readonly injector: Injector,
        @Inject(TuiDropdownPortalService)
        private readonly dropdownService: TuiDropdownPortalService,
    ) {
        // Ignore multiple change detection triggers at the same frame
        this.refresh$.pipe(throttleTime(0), takeUntil(destroy$)).subscribe(() => {
            this.dropdownBoxRef?.changeDetectorRef.detectChanges();
            this.dropdownBoxRef?.changeDetectorRef.markForCheck();
        });
    }

    @tuiPure
    get position(): 'absolute' | 'fixed' {
        return tuiCheckFixedPosition(this.el.nativeElement) ? 'fixed' : 'absolute';
    }

    ngAfterViewChecked(): void {
        this.refresh$.next();
    }

    ngOnChanges(): void {
        if (!this.content) {
            this.toggle(false);
        }
    }

    ngOnDestroy(): void {
        this.toggle(false);
    }

    getClientRect(): ClientRect {
        return this.el.nativeElement.getBoundingClientRect();
    }

    toggle(show: boolean): void {
        if (show && this.content && !this.dropdownBoxRef) {
            this.dropdownBoxRef = this.dropdownService.add(this.component);
        } else if (!show && this.dropdownBoxRef) {
            this.dropdownService.remove(this.dropdownBoxRef);
            this.dropdownBoxRef = null;
        }
    }
}
