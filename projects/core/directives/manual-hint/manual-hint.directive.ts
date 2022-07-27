import {Directive, ElementRef, Inject, Input, Optional} from '@angular/core';
import {TuiActiveZoneDirective, tuiDefaultProp, tuiRequiredSetter} from '@taiga-ui/cdk';
import {AbstractTuiHint} from '@taiga-ui/core/abstract';
import {TuiHintService} from '@taiga-ui/core/services';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_MANUAL_HINT_OPTIONS, TuiManualHintOptions} from './manual-hint-options';

@Directive({
    selector: `[tuiManualHint]:not(ng-container)`,
})
export class TuiManualHintDirective extends AbstractTuiHint {
    @Input(`tuiManualHint`)
    @tuiDefaultProp()
    content: PolymorpheusContent = ``;

    @Input()
    @tuiRequiredSetter()
    set tuiManualHintShow(show: boolean) {
        if (show) {
            this.showTooltip();
        } else {
            this.hideTooltip();
        }
    }

    constructor(
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(TuiHintService) hintService: TuiHintService,
        @Optional()
        @Inject(TuiActiveZoneDirective)
        activeZone: TuiActiveZoneDirective | null,
        @Inject(TUI_MANUAL_HINT_OPTIONS) protected readonly options: TuiManualHintOptions,
    ) {
        super(elementRef, hintService, activeZone, options);
    }

    getElementClientRect(): ClientRect {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }
}
