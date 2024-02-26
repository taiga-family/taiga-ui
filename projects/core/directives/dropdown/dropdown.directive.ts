import {
    AfterViewChecked,
    ChangeDetectorRef,
    ComponentRef,
    Directive,
    ElementRef,
    inject,
    INJECTOR,
    Input,
    OnChanges,
    OnDestroy,
    TemplateRef,
} from '@angular/core';
import {
    TuiActiveZoneDirective,
    TuiContext,
    TuiDestroyService,
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
import {
    PolymorpheusComponent,
    PolymorpheusContent,
    PolymorpheusTemplate,
} from '@tinkoff/ng-polymorpheus';
import {Subject, takeUntil, throttleTime} from 'rxjs';

import {TuiDropdownDriverDirective} from './dropdown.driver';
import {TUI_DROPDOWN_COMPONENT} from './dropdown.providers';
import {TuiDropdownService} from './dropdown.service';
import {TuiDropdownPositionDirective} from './dropdown-position.directive';

@Directive({
    standalone: true,
    selector: '[tuiDropdown]:not(ng-container):not(ng-template)',
    providers: [
        TuiDestroyService,
        tuiAsRectAccessor(TuiDropdownDirective),
        tuiAsVehicle(TuiDropdownDirective),
    ],
    exportAs: 'tuiDropdown',
    hostDirectives: [TuiDropdownDriverDirective, TuiDropdownPositionDirective],
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
    private readonly service = inject(TuiDropdownService);
    private readonly cdr = inject(ChangeDetectorRef);

    @Input()
    public set tuiDropdown(
        content: PolymorpheusContent<TuiContext<TuiActiveZoneDirective>>,
    ) {
        this.content =
            content instanceof TemplateRef
                ? new PolymorpheusTemplate(content, this.cdr)
                : content;
    }

    public readonly el: HTMLElement = inject(ElementRef).nativeElement;
    public readonly type = 'dropdown';
    public readonly component = new PolymorpheusComponent(
        inject(TUI_DROPDOWN_COMPONENT),
        inject(INJECTOR),
    );

    public dropdownBoxRef: ComponentRef<unknown> | null = null;
    public content: PolymorpheusContent<TuiContext<TuiActiveZoneDirective>>;

    protected readonly sub = this.refresh$
        .pipe(throttleTime(0), takeUntil(inject(TuiDestroyService, {self: true})))
        .subscribe(() => {
            this.dropdownBoxRef?.changeDetectorRef.detectChanges();
            this.dropdownBoxRef?.changeDetectorRef.markForCheck();
        });

    @tuiPure
    public get position(): 'absolute' | 'fixed' {
        return tuiCheckFixedPosition(this.el) ? 'fixed' : 'absolute';
    }

    public ngAfterViewChecked(): void {
        this.refresh$.next();
    }

    public ngOnChanges(): void {
        if (!this.content) {
            this.toggle(false);
        }
    }

    public ngOnDestroy(): void {
        this.toggle(false);
    }

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }

    public toggle(show: boolean): void {
        if (show && this.content && !this.dropdownBoxRef) {
            this.dropdownBoxRef = this.service.add(this.component);
        } else if (!show && this.dropdownBoxRef) {
            this.service.remove(this.dropdownBoxRef);
            this.dropdownBoxRef = null;
        }
    }
}
