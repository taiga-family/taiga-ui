import {Directive, Inject} from '@angular/core';
import {TuiDestroyService, TuiFocusVisibleService} from '@taiga-ui/cdk/services';
import {Observable} from 'rxjs';

/**
 * Directive to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 * @dynamic
 */
@Directive({
    selector: `[tuiFocusVisibleChange]`,
    outputs: [`tuiFocusVisibleChange`],
    providers: [TuiDestroyService, TuiFocusVisibleService],
})
export class TuiFocusVisibleDirective {
    constructor(
        @Inject(TuiFocusVisibleService)
        readonly tuiFocusVisibleChange: Observable<boolean>,
    ) {}
}
