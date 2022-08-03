import {
    Directive,
    ElementRef,
    Inject,
    INJECTOR,
    Input,
    OnChanges,
    OnDestroy,
    Optional,
} from '@angular/core';
import {TuiActiveZoneDirective, tuiDefaultProp} from '@taiga-ui/cdk';
import {
    tuiAsRectAccessor,
    tuiAsVehicle,
    TuiRectAccessor,
    TuiVehicle,
} from '@taiga-ui/core/abstract';
import {DESCRIBED_BY} from '@taiga-ui/core/constants';
import {TuiHint} from '@taiga-ui/core/interfaces';
import {TuiHintService} from '@taiga-ui/core/services';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_HINT_COMPONENT} from './hint.providers';

@Directive({
    selector: `[tuiHint]:not(ng-container)`,
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
export class TuiHintDirective
    implements OnDestroy, OnChanges, TuiHint, TuiRectAccessor, TuiVehicle
{
    @Input()
    @tuiDefaultProp()
    tuiHintId = ``;

    @Input(`tuiHint`)
    @tuiDefaultProp()
    content: PolymorpheusContent = ``;

    @Input(`tuiHintAppearance`)
    appearance = ``;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(PolymorpheusComponent)
        readonly component: PolymorpheusComponent<object, object>,
        @Optional()
        @Inject(TuiActiveZoneDirective)
        readonly activeZone: TuiActiveZoneDirective | null,
        @Inject(TuiHintService) private readonly hintService: TuiHintService,
    ) {
        this.hintService.register(this);
    }

    get id(): string | null {
        return this.tuiHintId ? this.tuiHintId + DESCRIBED_BY : null;
    }

    ngOnChanges(): void {
        if (!this.content) {
            this.toggle(false);
        }
    }

    ngOnDestroy(): void {
        this.toggle(false);
        this.hintService.unregister(this);
    }

    getClientRect(): ClientRect {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }

    toggle(show: boolean): void {
        if (show && this.content) {
            this.hintService.add(this);
        } else {
            this.hintService.remove(this);
        }
    }
}
