import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiFadeIn, tuiHeightCollapse, tuiSlideInRight} from '@taiga-ui/core/animations';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils/miscellaneous';
import {
    POLYMORPHEUS_CONTEXT,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';

import {TuiPush} from './push.component';
import {TuiPushDirective} from './push.directive';
import type {TuiPushOptions} from './push.options';

@Component({
    standalone: true,
    imports: [
        NgIf,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiPush,
        TuiIcon,
        TuiButton,
        TuiLink,
    ],
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
export class TuiPushAlert {
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected readonly context = inject(POLYMORPHEUS_CONTEXT) as TuiPopover<
        TuiPushOptions,
        string
    >;

    protected get isDirective(): boolean {
        return this.context.content instanceof TuiPushDirective;
    }
}
