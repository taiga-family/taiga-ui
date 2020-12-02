import {ElementRef, Input, OnDestroy} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiHintMode} from '@taiga-ui/core/enums';
import {TuiHintService} from '@taiga-ui/core/services';
import {TuiDirection} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export abstract class AbstractTuiHint implements OnDestroy {
    @Input('tuiHintMode')
    @tuiDefaultProp()
    mode: TuiHintMode | null = null;

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
