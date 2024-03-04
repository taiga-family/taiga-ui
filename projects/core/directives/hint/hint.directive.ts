import {
    Directive,
    ElementRef,
    inject,
    INJECTOR,
    Input,
    type OnChanges,
    type OnDestroy,
} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    tuiAsRectAccessor,
    tuiAsVehicle,
    type TuiRectAccessor,
    type TuiVehicle,
} from '@taiga-ui/core/abstract';
import {type TuiPortalItem} from '@taiga-ui/core/interfaces';
import {TuiHintService} from '@taiga-ui/core/services';
import {PolymorpheusComponent, type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
    public content: PolymorpheusContent<C>;

    @Input('tuiHintContext')
    public context?: C;

    @Input()
    public tuiHintAppearance: string | null = null;

    public component = inject(PolymorpheusComponent<unknown>);
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
            this.hintService.add(this);
        } else {
            this.hintService.remove(this);
        }
    }
}
