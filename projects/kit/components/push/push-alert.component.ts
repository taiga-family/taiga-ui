import type {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import type {TuiDialog} from '@taiga-ui/cdk';
import {
    TUI_ANIMATION_OPTIONS,
    tuiFadeIn,
    tuiHeightCollapse,
    tuiSlideInRight,
} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import type {TuiPushOptions} from './push.options';
import {TuiPushAlertDirective} from './push-alert.directive';

@Component({
    selector: `tui-push-alert`,
    templateUrl: `./push-alert.template.html`,
    styleUrls: [`./push-alert.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn, tuiSlideInRight, tuiHeightCollapse],
    host: {role: `alert`},
})
export class TuiPushAlertComponent {
    @HostBinding(`@tuiFadeIn`)
    @HostBinding(`@tuiSlideInRight`)
    @HostBinding(`@tuiHeightCollapse`)
    readonly animation = {value: ``, ...this.options} as const;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<TuiPushOptions, string>,
    ) {}

    get isDirective(): boolean {
        // noinspection SuspiciousTypeOfGuard
        return this.context.content instanceof TuiPushAlertDirective;
    }
}
