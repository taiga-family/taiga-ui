import {coerceArray} from '@angular/cdk/coercion';
import {
    type AfterViewChecked,
    ChangeDetectorRef,
    type ComponentRef,
    Directive,
    effect,
    ElementRef,
    inject,
    INJECTOR,
    input,
    type OnDestroy,
    signal,
    TemplateRef,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiZonefreeScheduler} from '@taiga-ui/cdk/observables';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAsVehicle,
    type TuiRectAccessor,
    type TuiVehicle,
} from '@taiga-ui/core/classes';
import {TuiPopupService} from '@taiga-ui/core/portals/popup';
import {tuiCheckFixedPosition} from '@taiga-ui/core/utils/dom';
import {
    PolymorpheusComponent,
    type PolymorpheusContent,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';
import {Subject, throttleTime} from 'rxjs';

import {TuiDropdownDriver, TuiDropdownDriverDirective} from './dropdown.driver';
import {TUI_DROPDOWN_COMPONENT, TUI_DROPDOWN_HOST} from './dropdown.providers';
import {TuiDropdownA11y} from './dropdown-a11y.directive';
import {TuiDropdownPosition} from './dropdown-position.directive';

@Directive({
    selector: '[tuiDropdown]:not(ng-container):not(ng-template)',
    providers: [
        tuiAsVehicle(TuiDropdownDirective),
        tuiProvide(TUI_DROPDOWN_HOST, ElementRef),
    ],
    exportAs: 'tuiDropdown',
    hostDirectives: [
        TuiDropdownDriverDirective,
        {directive: TuiDropdownA11y, inputs: ['tuiDropdownRole']},
        {
            directive: TuiDropdownPosition,
            outputs: ['tuiDropdownDirectionChange'],
        },
    ],
    host: {'[class.tui-dropdown-open]': 'ref()'},
})
export class TuiDropdownDirective
    implements AfterViewChecked, OnDestroy, TuiRectAccessor, TuiVehicle
{
    private readonly refresh$ = new Subject<void>();
    private readonly service = inject(TuiPopupService);
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly drivers = coerceArray(
        inject(TuiDropdownDriver, {self: true, optional: true}),
    );

    protected readonly sub = this.refresh$
        .pipe(throttleTime(0, tuiZonefreeScheduler()), takeUntilDestroyed())
        .subscribe(() => {
            this.ref()?.changeDetectorRef.detectChanges();
            this.ref()?.changeDetectorRef.markForCheck();
        });

    protected readonly autoClose = effect(() => {
        if (!this.content()) {
            this.toggle(false);
        }
    });

    public readonly id = tuiGenerateId();
    public readonly ref = signal<ComponentRef<unknown> | null>(null);
    public readonly el = tuiInjectElement();
    public readonly type = 'dropdown';
    public readonly component = new PolymorpheusComponent(
        inject(TUI_DROPDOWN_COMPONENT),
        inject(INJECTOR),
    );

    public readonly content = input(null, {
        alias: 'tuiDropdown',
        transform: (
            content: PolymorpheusContent<TuiContext<() => void>>,
        ): PolymorpheusContent<TuiContext<() => void>> =>
            content instanceof TemplateRef
                ? new PolymorpheusTemplate(content, this.cdr)
                : content,
    });

    public get position(): 'absolute' | 'fixed' {
        return tuiCheckFixedPosition(this.el) ? 'fixed' : 'absolute';
    }

    public ngAfterViewChecked(): void {
        if (this.ref()) {
            this.refresh$.next();
        }
    }

    public ngOnDestroy(): void {
        this.toggle(false);
    }

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }

    public toggle(show: boolean): void {
        const ref = this.ref();

        if (show && this.content() && !ref) {
            this.ref.set(this.service.add(this.component));
        } else if (!show && ref) {
            this.ref.set(null);
            ref.destroy();
        }

        this.ref()?.location.nativeElement.setAttribute('id', this.id);
        this.drivers.forEach((driver) => driver?.next(show));
    }
}
