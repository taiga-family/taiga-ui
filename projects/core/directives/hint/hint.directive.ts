import {
    Directive,
    ElementRef,
    Inject,
    INJECTOR,
    Input,
    OnDestroy,
    Optional,
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
import {TUI_HINT_OPTIONS, TuiHintOptions} from './hint-options.directive';

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
    implements OnDestroy, TuiPortalItem<C>, TuiRectAccessor, TuiVehicle
{
    @Input()
    set tuiHint(content: PolymorpheusContent<C>) {
        this.content = content;

        if (!content) {
            this.toggle(false);
        }
    }

    @Input('tuiHintContext')
    context?: C;

    @Input()
    tuiHintAppearance: string | null = null;

    content: PolymorpheusContent<C>;

    readonly type = 'hint';

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(PolymorpheusComponent) public component: PolymorpheusComponent<unknown>,
        @Inject(TuiHintService) private readonly hintService: TuiHintService,
        @Inject(TUI_HINT_OPTIONS) private readonly options: TuiHintOptions,
        @Optional()
        @Inject(TuiActiveZoneDirective)
        readonly activeZone?: TuiActiveZoneDirective | null,
    ) {}

    get appearance(): string {
        return this.tuiHintAppearance ?? this.options.appearance;
    }

    ngOnDestroy(): void {
        this.toggle(false);
    }

    getClientRect(): ClientRect {
        return this.el.nativeElement.getBoundingClientRect();
    }

    toggle(show: boolean): void {
        if (show && this.content) {
            this.hintService.add(this);
        } else {
            this.hintService.remove(this);
        }
    }
}
