import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    tuiFadeIn,
    tuiHeightCollapse,
    tuiSlideInRight,
    tuiToAnimationOptions,
} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import type {TuiPushOptions} from './push.options';
import {TuiPushAlertDirective} from './push-alert.directive';

@Component({
    selector: 'tui-push-alert',
    templateUrl: './push-alert.template.html',
    styleUrls: ['./push-alert.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn, tuiSlideInRight, tuiHeightCollapse],
    host: {
        role: 'alert',
        '[@tuiFadeIn]': 'options',
        '[@tuiSlideInRight]': 'options',
        '[@tuiHeightCollapse]': 'options',
    },
})
export class TuiPushAlertComponent {
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected readonly context = inject(POLYMORPHEUS_CONTEXT) as TuiPopover<
        TuiPushOptions,
        string
    >;

    protected get isDirective(): boolean {
        return this.context.content instanceof TuiPushAlertDirective;
    }
}
