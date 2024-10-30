import type {OnDestroy} from '@angular/core';
import {
    Directive,
    EventEmitter,
    inject,
    INJECTOR,
    Input,
    NgZone,
    Output,
    signal,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import type {TuiRectAccessor, TuiVehicle} from '@taiga-ui/core/classes';
import {tuiAsRectAccessor, tuiAsVehicle} from '@taiga-ui/core/classes';
import type {TuiPortalItem} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TUI_HINT_COMPONENT} from './hint.providers';
import {TuiHintService} from './hint.service';
import {TuiHintDriver} from './hint-driver.directive';
import {TuiHintHover} from './hint-hover.directive';
import type {TuiHintDirection} from './hint-options.directive';
import {TUI_HINT_OPTIONS} from './hint-options.directive';
import {TuiHintPosition} from './hint-position.directive';

@Directive({
    standalone: true,
    selector: '[tuiHint]:not(ng-container):not(ng-template)',
    providers: [
        tuiAsRectAccessor(TuiHintDirective),
        tuiAsVehicle(TuiHintDirective),
        {
            provide: PolymorpheusComponent,
            deps: [TUI_HINT_COMPONENT, INJECTOR],
            useClass: PolymorpheusComponent,
        },
    ],
    hostDirectives: [
        TuiHintDriver,
        {
            directive: TuiHintHover,
            inputs: ['tuiHintHideDelay', 'tuiHintShowDelay'],
        },
        {
            directive: TuiHintPosition,
            inputs: ['tuiHintDirection'],
        },
    ],
})
export class TuiHintDirective<C>
    implements OnDestroy, TuiPortalItem<C>, TuiRectAccessor, TuiVehicle
{
    private readonly service = inject(TuiHintService);
    private readonly zone: NgZone = inject(NgZone);

    @Input('tuiHintContext')
    public context?: C;

    @Input('tuiHintAppearance')
    public appearance = inject(TUI_HINT_OPTIONS).appearance;

    @Output('tuiHintDirectionChange')
    public readonly directionChange = new EventEmitter<TuiHintDirection>();

    public content = signal<PolymorpheusContent<C>>(null);
    public component = inject(PolymorpheusComponent<unknown>);
    public readonly el = tuiInjectElement();
    public readonly activeZone? = inject(TuiActiveZone, {optional: true});
    public readonly type = 'hint';

    constructor() {
        this.hintDirectionObserver();
    }

    @Input()
    public set tuiHint(content: PolymorpheusContent<C>) {
        this.content.set(content);

        if (!content) {
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
        if (show && this.content()) {
            this.service.add(this);
        } else {
            this.service.remove(this);
        }
    }

    public hintDirectionObserver(): void {
        this.service.hintDirection$
            .pipe(tuiZonefree(this.zone), takeUntilDestroyed())
            .subscribe((direction: TuiHintDirection) => {
                this.directionChange.emit(direction);
            });
    }
}
