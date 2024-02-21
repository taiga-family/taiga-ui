import {Directive, inject, Output} from '@angular/core';
import {TuiDestroyService, TuiFocusVisibleService} from '@taiga-ui/cdk/services';

/**
 * Directive to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
@Directive({
    selector: '[tuiFocusVisibleChange]',
    providers: [TuiDestroyService, TuiFocusVisibleService],
})
export class TuiFocusVisibleDirective {
    @Output()
    readonly tuiFocusVisibleChange = inject(TuiFocusVisibleService);
}
