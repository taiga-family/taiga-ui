import {Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiHintService} from '@taiga-ui/core/services';
import {TuiDirection, TuiHintModeT} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Directive()
export abstract class AbstractTuiHint implements OnDestroy {
    @Input('tuiHintMode')
    @tuiDefaultProp()
    mode: TuiHintModeT | null = null;

    @Input('tuiHintDirection')
    @tuiDefaultProp()
    direction: TuiDirection = 'bottom-left';

    content: PolymorpheusContent = '';

    constructor(
        protected readonly elementRef: ElementRef<HTMLElement>,
        protected readonly hintService: TuiHintService,
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
