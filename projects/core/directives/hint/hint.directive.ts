import type {OnDestroy} from '@angular/core';
import {Directive, inject, INJECTOR, Input} from '@angular/core';
import {TuiActiveZone, tuiInjectElement} from '@taiga-ui/cdk';
import type {TuiRectAccessor, TuiVehicle} from '@taiga-ui/core/classes';
import {tuiAsRectAccessor, tuiAsVehicle} from '@taiga-ui/core/classes';
import type {TuiPortalItem} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TUI_HINT_COMPONENT} from './hint.providers';
import {TuiHintService} from './hint.service';
import {TuiHintDriverDirective} from './hint-driver.directive';
import {TuiHintHoverDirective} from './hint-hover.directive';
import {TUI_HINT_OPTIONS} from './hint-options.directive';
import {TuiHintPositionDirective} from './hint-position.directive';

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
        TuiHintDriverDirective,
        {
            directive: TuiHintHoverDirective,
            inputs: ['tuiHintHideDelay', 'tuiHintShowDelay'],
        },
        {
            directive: TuiHintPositionDirective,
            inputs: ['tuiHintDirection'],
        },
    ],
})
export class TuiHintDirective<C>
    implements OnDestroy, TuiPortalItem<C>, TuiRectAccessor, TuiVehicle
{
    private readonly service = inject(TuiHintService);
    private readonly options = inject(TUI_HINT_OPTIONS);

    @Input('tuiHintContext')
    public context?: C;

    @Input()
    public tuiHintAppearance: string | null = null;

    public content: PolymorpheusContent<C>;
    public component = inject(PolymorpheusComponent<unknown>);
    public readonly el = tuiInjectElement();
    public readonly activeZone? = inject(TuiActiveZone, {optional: true});
    public readonly type = 'hint';

    @Input()
    public set tuiHint(content: PolymorpheusContent<C>) {
        this.content = content;

        if (!content) {
            this.toggle(false);
        }
    }

    public get appearance(): string {
        return this.tuiHintAppearance ?? this.options.appearance;
    }

    public ngOnDestroy(): void {
        this.toggle(false);
    }

    public getClientRect(): DOMRect {
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
