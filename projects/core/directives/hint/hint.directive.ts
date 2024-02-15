import {
    Directive,
    ElementRef,
    inject,
    INJECTOR,
    Input,
    OnChanges,
    OnDestroy,
} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    tuiAsRectAccessor,
    tuiAsVehicle,
    TuiRectAccessor,
    TuiVehicle,
} from '@taiga-ui/core/abstract';
import {TuiPortalItem} from '@taiga-ui/core/interfaces';
import {TuiHintService} from '@taiga-ui/core/services';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_HINT_COMPONENT} from './hint.providers';
import {TUI_HINT_OPTIONS} from './hint-options.directive';

@Directive({
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
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly hintService = inject(TuiHintService);
    private readonly options = inject(TUI_HINT_OPTIONS);

    @Input('tuiHint')
    content: PolymorpheusContent<C>;

    @Input('tuiHintContext')
    context?: C;

    @Input()
    tuiHintAppearance: string | null = null;

    component = inject(PolymorpheusComponent<unknown>);
    readonly activeZone? = inject(TuiActiveZoneDirective, {optional: true});
    readonly type = 'hint';

    get appearance(): string {
        return this.tuiHintAppearance ?? this.options.appearance;
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
        return this.el.getBoundingClientRect();
    }

    toggle(show: boolean): void {
        if (show && this.content) {
            this.hintService.add(this);
        } else {
            this.hintService.remove(this);
        }
    }
}
