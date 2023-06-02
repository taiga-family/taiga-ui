import {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDialog} from '@taiga-ui/cdk';
import {
    TUI_ANIMATION_OPTIONS,
    tuiFadeIn,
    tuiHeightCollapse,
    tuiSlideInRight,
} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import {TuiPushOptions} from './push.options';
// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TuiPushAlertDirective} from './push-alert.directive';

@Component({
    selector: 'tui-push-alert',
    templateUrl: './push-alert.template.html',
    styleUrls: ['./push-alert.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn, tuiSlideInRight, tuiHeightCollapse],
    host: {
        role: 'alert',
        '[@tuiFadeIn]': 'animation',
        '[@tuiSlideInRight]': 'animation',
        '[@tuiHeightCollapse]': 'animation',
    },
})
export class TuiPushAlertComponent {
    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) readonly animation: AnimationOptions,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<TuiPushOptions, string>,
    ) {}

    get isDirective(): boolean {
        return this.context.content instanceof TuiPushAlertDirective;
    }
}
