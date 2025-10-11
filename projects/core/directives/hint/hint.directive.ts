import {
    type ComponentRef,
    Directive,
    inject,
    INJECTOR,
    input,
    type OnChanges,
    type OnDestroy,
    output,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    tuiAsRectAccessor,
    tuiAsVehicle,
    type TuiRectAccessor,
    type TuiVehicle,
} from '@taiga-ui/core/classes';
import {TuiPopupService} from '@taiga-ui/core/directives';
import {PolymorpheusComponent, type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TUI_HINT_COMPONENT} from './hint.providers';
import {TuiHintDriver} from './hint-driver.directive';
import {TuiHintHover} from './hint-hover.directive';
import {TUI_HINT_OPTIONS} from './hint-options.directive';
import {TuiHintPosition} from './hint-position.directive';

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
    hostDirectives: [
        TuiHintDriver,
        {
            directive: TuiHintHover,
            inputs: ['tuiHintHideDelay', 'tuiHintShowDelay'],
        },
        {
            directive: TuiHintPosition,
            inputs: ['tuiHintDirection'],
            outputs: ['tuiHintDirectionChange'],
        },
    ],
})
export class TuiHintDirective<C>
    implements OnDestroy, OnChanges, TuiRectAccessor, TuiVehicle
{
    private readonly service = inject(TuiPopupService);
    private ref?: ComponentRef<unknown>;

    public readonly content = input<PolymorpheusContent<C>>(null, {alias: 'tuiHint'});
    public readonly context = input<C>(undefined, {alias: 'tuiHintContext'});
    public readonly appearance = input(inject(TUI_HINT_OPTIONS).appearance, {
        alias: 'tuiHintAppearance',
    });

    public readonly visible = output<boolean>({alias: 'tuiHintVisible'});

    public component = inject(PolymorpheusComponent<unknown>);
    public readonly el = tuiInjectElement();
    public readonly type = 'hint';

    public ngOnChanges(): void {
        if (!this.content()) {
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
        if (show && this.content() && !this.ref) {
            this.ref = this.service.add(this.component);
            this.visible.emit(true);
        } else if (this.ref) {
            this.ref.destroy();
            this.ref = undefined;
            this.visible.emit(false);
        }
    }
}
