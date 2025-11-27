import {coerceArray} from '@angular/cdk/coercion';
import {
    type AfterViewChecked,
    ChangeDetectorRef,
    type ComponentRef,
    Directive,
    inject,
    INJECTOR,
    Input,
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
    type TuiRectAccessor,
    type TuiVehicle,
} from '@taiga-ui/core/classes';
import {TuiPopupService} from '@taiga-ui/core/directives/popup';
import {tuiCheckFixedPosition} from '@taiga-ui/core/utils';
import {
    PolymorpheusComponent,
    type PolymorpheusContent,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';
import {Subject, throttleTime} from 'rxjs';

import {TuiDropdownDriver, TuiDropdownDriverDirective} from './dropdown.driver';
import {TUI_DROPDOWN_COMPONENT} from './dropdown.providers';
import {TuiDropdownPosition} from './dropdown-position.directive';

@Directive({
    selector: '[tuiDropdown]:not(ng-container):not(ng-template)',
    providers: [tuiAsVehicle(TuiDropdownDirective)],
    exportAs: 'tuiDropdown',
    hostDirectives: [
        TuiDropdownDriverDirective,
        {
            directive: TuiDropdownPosition,
            outputs: ['tuiDropdownDirectionChange'],
        },
    ],
    host: {
        '[class.tui-dropdown-open]': 'ref()',
    },
})
export class TuiDropdownDirective
    implements AfterViewChecked, OnDestroy, TuiRectAccessor, TuiVehicle
{
    readonly #refresh$ = new Subject<void>();
    readonly #service = inject(TuiPopupService);
    readonly #cdr = inject(ChangeDetectorRef);

    // TODO: think of a better solution later
    readonly #drivers = coerceArray(
        inject(TuiDropdownDriver, {self: true, optional: true}),
    );

    protected readonly sub = this.#refresh$
        .pipe(throttleTime(0, tuiZonefreeScheduler()), takeUntilDestroyed())
        .subscribe(() => {
            this.ref()?.changeDetectorRef.detectChanges();
            this.ref()?.changeDetectorRef.markForCheck();
        });

    public readonly el = tuiInjectElement();
    public readonly type = 'dropdown';
    public readonly component = new PolymorpheusComponent(
        inject(TUI_DROPDOWN_COMPONENT),
        inject(INJECTOR),
    );

    public ref = signal<ComponentRef<unknown> | null>(null);
    // TODO(v5): rename to `content`
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public readonly _content = signal<PolymorpheusContent<TuiContext<() => void>>>(null);

    @Input()
    public set tuiDropdown(content: PolymorpheusContent<TuiContext<() => void>>) {
        this._content.set(
            content instanceof TemplateRef
                ? new PolymorpheusTemplate(content, this.#cdr)
                : content,
        );

        if (!this._content()) {
            this.toggle(false);
        }
    }

    public get position(): 'absolute' | 'fixed' {
        return tuiCheckFixedPosition(this.el) ? 'fixed' : 'absolute';
    }

    // TODO(v5): delete
    public get content(): PolymorpheusContent<TuiContext<() => void>> {
        return this._content();
    }

    // TODO(v5): delete
    public set content(x: PolymorpheusContent<TuiContext<() => void>>) {
        this._content.set(x);
    }

    public ngAfterViewChecked(): void {
        this.#refresh$.next();
    }

    public ngOnDestroy(): void {
        this.toggle(false);
    }

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }

    public toggle(show: boolean): void {
        const ref = this.ref();

        if (show && this._content() && !ref) {
            this.ref.set(this.#service.add(this.component));
        } else if (!show && ref) {
            this.ref.set(null);
            ref.destroy();
        }

        this.#drivers.forEach((driver) => driver?.next(show));

        // TODO: Remove in v5, only needed in Angular 16
        this.#cdr.markForCheck();
    }
}
