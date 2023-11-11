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

// eslint-disable-next-line import/no-cycle
import {TUI_HINT_COMPONENT} from './hint.providers';
import {TUI_HINT_OPTIONS, TuiHintOptions} from './hint-options.directive';

@Directive({
    selector: '[tuiHint]:not(ng-container)',
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
    @Input()
    tuiHint: PolymorpheusContent<C>;

    @Input()
    tuiHintContext?: C;

    @Input()
    tuiHintAppearance: string | null = null;

    readonly type = 'hint';

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(PolymorpheusComponent)
        readonly component: PolymorpheusComponent<unknown>,
        @Inject(TuiHintService) private readonly hintService: TuiHintService,
        @Inject(TUI_HINT_OPTIONS) private readonly options: TuiHintOptions,
        @Optional()
        @Inject(TuiActiveZoneDirective)
        readonly activeZone?: TuiActiveZoneDirective | null,
    ) {}

    /**
     * @deprecated: use {@link tuiHint}
     */
    set content(val: PolymorpheusContent<C>) {
        this.tuiHint = val;
    }

    /**
     * @deprecated: use {@link tuiHint}
     */
    get content(): PolymorpheusContent<C> {
        return this.tuiHint;
    }

    /**
     * @deprecated: use {@link tuiHintContext}
     */
    set context(val: C | undefined) {
        this.tuiHintContext = val;
    }

    /**
     * @deprecated: use {@link tuiHintContext}
     */
    get context(): C | undefined {
        return this.tuiHintContext;
    }

    get appearance(): string {
        return this.tuiHintAppearance ?? this.options.appearance;
    }

    ngOnChanges(): void {
        if (!this.tuiHint) {
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
        if (show && this.tuiHint) {
            this.hintService.add(this);
        } else {
            this.hintService.remove(this);
        }
    }
}
