import {coerceArray} from '@angular/cdk/coercion';
import {
    type AfterViewChecked,
    ChangeDetectorRef,
    type ComponentRef,
    Directive,
    effect,
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
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    tuiAsVehicle,
    tuiInjectAccessor,
    TuiPositionAccessor,
    TuiRectAccessor,
    type TuiVehicle,
} from '@taiga-ui/core/classes';
import {
    tuiAddAnchoredPopup,
    TuiPopupService,
} from '@taiga-ui/core/portals/popup';
import {TUI_ANCHOR_SUPPORT, TUI_VIEWPORT} from '@taiga-ui/core/tokens';
import {tuiCheckFixedPosition} from '@taiga-ui/core/utils/dom';
import {
    PolymorpheusComponent,
    type PolymorpheusContent,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';
import {Subject, throttleTime} from 'rxjs';

import {TUI_DROPDOWN_COMPONENT} from './dropdown.component';
import {TuiDropdownDriver, TuiDropdownDriverDirective} from './dropdown.driver';
import {TuiDropdownA11y} from './dropdown-a11y.directive';
import {TuiDropdownAnchor} from './dropdown-anchor.directive';
import {TuiDropdownPosition} from './dropdown-position.directive';

@Directive({
    selector: '[tuiDropdown]:not(ng-container):not(ng-template)',
    providers: [tuiAsVehicle(TuiDropdownDirective)],
    exportAs: 'tuiDropdown',
    hostDirectives: [
        TuiDropdownAnchor,
        TuiDropdownDriverDirective,
        {directive: TuiDropdownA11y, inputs: ['tuiDropdownRole']},
        {directive: TuiDropdownPosition, outputs: ['tuiDropdownDirectionChange']},
    ],
    host: {'[class.tui-dropdown-open]': 'ref()'},
})
export class TuiDropdownDirective
    implements AfterViewChecked, OnDestroy, TuiRectAccessor, TuiVehicle
{
    private readonly injector = inject(INJECTOR);
    private readonly refresh$ = new Subject<void>();
    private readonly service = inject(TuiPopupService);
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly positionAccessor = tuiInjectAccessor(
        TuiPositionAccessor,
        'dropdown',
    );
    private readonly anchored =
        inject(TUI_ANCHOR_SUPPORT) &&
        'position' in this.positionAccessor &&
        inject(TUI_VIEWPORT).type === 'window';
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

    /** @deprecated remove in v6 */
    public get accessor(): TuiRectAccessor {
        const accessors = this.injector.get(TuiRectAccessor, null, {
            self: true,
        }) as readonly TuiRectAccessor[] | null;

        return (
            [...(accessors || [])].reverse().find(({type}) => type === 'dropdown') || this
        );
    }

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
            this.ref.set(
                this.anchored
                    ? tuiAddAnchoredPopup(this.service, this.component)
                    : this.service.add(this.component),
            );
        } else if (!show && ref) {
            this.ref.set(null);
            ref.destroy();
        }

        this.drivers.forEach((driver) => driver?.next(show));
    }
}
