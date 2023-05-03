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
    Type,
} from '@angular/core';
import {
    TuiActiveZoneDirective,
    TuiContextWithImplicit,
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

// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TUI_DROPDOWN_COMPONENT} from './dropdown.providers';

@Directive({
    selector: '[tuiDropdown]:not(ng-container)',
    exportAs: 'tuiDropdown',
    providers: [
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
    @Input('tuiDropdown')
    content: PolymorpheusContent<TuiContextWithImplicit<TuiActiveZoneDirective>>;

    dropdownBoxRef: ComponentRef<unknown> | null = null;

    readonly type = 'dropdown';

    readonly component = new PolymorpheusComponent(this.hapica, this.injector);

    constructor(
        @Inject(ElementRef) readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_DROPDOWN_COMPONENT) private readonly hapica: Type<unknown>,
        @Inject(INJECTOR) private readonly injector: Injector,
        @Inject(TuiDropdownPortalService)
        private readonly dropdownService: TuiDropdownPortalService,
    ) {}

    @tuiPure
    get position(): 'absolute' | 'fixed' {
        return tuiCheckFixedPosition(this.el.nativeElement) ? 'fixed' : 'absolute';
    }

    ngAfterViewChecked(): void {
        this.dropdownBoxRef?.changeDetectorRef.detectChanges();
        this.dropdownBoxRef?.changeDetectorRef.markForCheck();
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
