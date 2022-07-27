import {
    AfterViewChecked,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    Injector,
    Input,
    OnDestroy,
} from '@angular/core';
import {
    TuiActiveZoneDirective,
    tuiDefaultProp,
    TuiNativeFocusableElement,
    TuiPortalService,
    tuiPure,
} from '@taiga-ui/cdk';
import {TuiDropdownBoxComponent} from '@taiga-ui/core/components/dropdown-box';
import {DEFAULT_MAX_HEIGHT, DEFAULT_MIN_HEIGHT} from '@taiga-ui/core/constants';
import {TuiDropdown} from '@taiga-ui/core/interfaces';
import {
    TuiDropdownWidthT,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core/types';
import {checkFixedPosition} from '@taiga-ui/core/utils/dom';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

// @bad TODO: Possibly refactor to make more abstract
@Directive()
export abstract class AbstractTuiDropdown
    implements TuiDropdown, AfterViewChecked, OnDestroy
{
    abstract refresh$: Observable<unknown>;

    @Input(`tuiDropdownContent`)
    @tuiDefaultProp()
    content: PolymorpheusContent = ``;

    @Input(`tuiDropdownHost`)
    @tuiDefaultProp()
    tuiDropdownHost: TuiNativeFocusableElement | HTMLElement | null = null;

    @Input(`tuiDropdownMinHeight`)
    @tuiDefaultProp()
    minHeight = DEFAULT_MIN_HEIGHT;

    @Input(`tuiDropdownMaxHeight`)
    @tuiDefaultProp()
    maxHeight = DEFAULT_MAX_HEIGHT;

    @Input(`tuiDropdownAlign`)
    @tuiDefaultProp()
    align: TuiHorizontalDirection = `left`;

    @Input(`tuiDropdownDirection`)
    @tuiDefaultProp()
    direction: TuiVerticalDirection | null = null;

    @Input(`tuiDropdownSided`)
    @tuiDefaultProp()
    sided = false;

    @Input(`tuiDropdownLimitWidth`)
    @tuiDefaultProp()
    limitMinWidth: TuiDropdownWidthT = `min`;

    dropdownBoxRef: ComponentRef<TuiDropdownBoxComponent> | null = null;

    protected constructor(
        private readonly componentFactoryResolver: ComponentFactoryResolver,
        private readonly injector: Injector,
        private readonly portalService: TuiPortalService,
        protected readonly elementRef: ElementRef<HTMLElement>,
        readonly activeZone: TuiActiveZoneDirective | null,
    ) {}

    ngOnDestroy(): void {
        this.closeDropdownBox();
    }

    ngAfterViewChecked(): void {
        // @awful TODO: This is probably wrong to call both but in TuiHostedDropdown some changes do not propagate otherwise
        if (this.dropdownBoxRef !== null) {
            this.dropdownBoxRef.changeDetectorRef.detectChanges();
            this.dropdownBoxRef.changeDetectorRef.markForCheck();
        }
    }

    get clientRect(): ClientRect {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }

    get host(): TuiNativeFocusableElement | HTMLElement {
        return this.tuiDropdownHost || this.elementRef.nativeElement;
    }

    @tuiPure
    get fixed(): boolean {
        return checkFixedPosition(this.elementRef.nativeElement);
    }

    @tuiPure
    protected toggleDropdown(value: boolean): void {
        if (value) {
            this.openDropdownBox();
        } else {
            this.closeDropdownBox();
        }
    }

    protected openDropdownBox(): void {
        if (this.dropdownBoxRef !== null) {
            return;
        }

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            TuiDropdownBoxComponent,
        );

        this.dropdownBoxRef = this.portalService.add(componentFactory, this.injector);
        this.dropdownBoxRef.changeDetectorRef.detectChanges();
    }

    protected closeDropdownBox(): void {
        if (this.dropdownBoxRef === null) {
            return;
        }

        this.portalService.remove(this.dropdownBoxRef);
        this.dropdownBoxRef = null;
    }
}
