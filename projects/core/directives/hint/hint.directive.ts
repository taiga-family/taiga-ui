import type {OnChanges, OnDestroy} from '@angular/core';
import {Directive, inject, INJECTOR, Input} from '@angular/core';
import {TuiActiveZoneDirective, tuiInjectElement} from '@taiga-ui/cdk';
import type {TuiRectAccessor, TuiVehicle} from '@taiga-ui/core/classes';
import {tuiAsRectAccessor, tuiAsVehicle} from '@taiga-ui/core/classes';
import type {TuiPortalItem} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TUI_HINT_COMPONENT} from './hint.providers';
import {TuiHintService} from './hint.service';
import {TUI_HINT_OPTIONS} from './hint-options.directive';

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
})
export class TuiHintDirective<C>
    implements OnDestroy, OnChanges, TuiPortalItem<C>, TuiRectAccessor, TuiVehicle
{
    private readonly service = inject(TuiHintService);
    private readonly options = inject(TUI_HINT_OPTIONS);

    @Input('tuiHint')
    public content: PolymorpheusContent<C>;

    @Input('tuiHintContext')
    public context?: C;

    @Input()
    public tuiHintAppearance: string | null = null;

    public component = inject(PolymorpheusComponent<unknown>);
    public readonly el = tuiInjectElement();
    public readonly activeZone? = inject(TuiActiveZoneDirective, {optional: true});
    public readonly type = 'hint';

    public get appearance(): string {
        return this.tuiHintAppearance ?? this.options.appearance;
    }

    public ngOnChanges(): void {
        if (!this.content) {
            this.toggle(false);
        }
    }

    public ngOnDestroy(): void {
        this.toggle(false);
    }

    public getClientRect(): ClientRect {
        return this.el.getBoundingClientRect();
    }

    public toggle(show: boolean): void {
        if (show && this.content) {
            this.service.add(this);
        } else {
            this.service.remove(this);
        }
    }
}
