import {Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {TuiActiveZoneDirective, tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiHintService} from '@taiga-ui/core/services';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {AbstractHintOptions} from './abstract-hint-options';

@Directive()
export abstract class AbstractTuiHint implements OnDestroy {
    @Input('tuiHintMode')
    @tuiDefaultProp()
    mode: AbstractHintOptions['mode'] = this.options.mode;

    @Input('tuiHintDirection')
    @tuiDefaultProp()
    direction: AbstractHintOptions['direction'] = this.options.direction;

    content: PolymorpheusContent = '';

    constructor(
        protected readonly elementRef: ElementRef<HTMLElement>,
        protected readonly hintService: TuiHintService,
        readonly activeZone: TuiActiveZoneDirective | null,
        protected readonly options: AbstractHintOptions,
    ) {}

    abstract getElementClientRect(): ClientRect;

    ngOnDestroy() {
        this.hideTooltip();
    }

    protected showTooltip() {
        this.hintService.add(this);
    }

    protected hideTooltip() {
        this.hintService.remove(this);
    }
}
