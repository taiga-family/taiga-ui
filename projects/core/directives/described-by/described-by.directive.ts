import {Directive, HostBinding, Inject, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {DESCRIBED_BY} from '@taiga-ui/core/constants';
import {TuiHintService} from '@taiga-ui/core/services';
import {Observable} from 'rxjs';

import {
    TUI_DESCRIBED_BY_PROVIDERS,
    TUI_DESCRIBED_BY_SHOW,
} from './described-by.providers';

/**
 * A directive linking focusable elements and hints for accessibility
 */
@Directive({
    selector: '[tuiDescribedBy]:not(ng-container)',
    providers: TUI_DESCRIBED_BY_PROVIDERS,
})
export class TuiDescribedByDirective {
    @Input()
    @tuiDefaultProp()
    tuiDescribedBy = '';

    constructor(
        @Inject(TuiHintService) hintService: TuiHintService,
        @Inject(TUI_DESCRIBED_BY_SHOW) visibility$: Observable<boolean>,
    ) {
        visibility$.subscribe(visible => {
            if (!this.tuiDescribedBy) {
                return;
            }

            if (visible) {
                hintService.showHintForId(this.tuiDescribedBy);
            } else {
                hintService.hideHintForId(this.tuiDescribedBy);
            }
        });
    }

    @HostBinding('attr.aria-describedby')
    get computedDescribedBy(): string | null {
        return this.tuiDescribedBy ? this.tuiDescribedBy + DESCRIBED_BY : null;
    }
}
