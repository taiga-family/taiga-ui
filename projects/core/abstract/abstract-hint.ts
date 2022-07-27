import {Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {TuiActiveZoneDirective, tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiHintService} from '@taiga-ui/core/services';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiAbstractHintOptions} from './abstract-hint-options';

@Directive()
export abstract class AbstractTuiHint implements OnDestroy {
    @Input(`tuiHintMode`)
    @tuiDefaultProp()
    mode: TuiAbstractHintOptions['mode'] = this.options.mode;

    @Input(`tuiHintDirection`)
    @tuiDefaultProp()
    direction: TuiAbstractHintOptions['direction'] = this.options.direction;

    content: PolymorpheusContent = ``;

    protected constructor(
        protected readonly elementRef: ElementRef<HTMLElement>,
        protected readonly hintService: TuiHintService,
        readonly activeZone: TuiActiveZoneDirective | null,
        protected readonly options: TuiAbstractHintOptions,
    ) {}

    abstract getElementClientRect(): ClientRect;

    ngOnDestroy(): void {
        this.hideTooltip();
    }

    protected showTooltip(): void {
        this.hintService.add(this);
    }

    protected hideTooltip(): void {
        this.hintService.remove(this);
    }
}
