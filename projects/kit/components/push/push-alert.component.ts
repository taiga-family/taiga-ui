import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    TuiButtonDirective,
    tuiFadeIn,
    tuiHeightCollapse,
    TuiIconComponent,
    TuiLink,
    tuiSlideInRight,
    tuiToAnimationOptions,
} from '@taiga-ui/core';
import {
    POLYMORPHEUS_CONTEXT,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';

import {TuiPushComponent} from './push.component';
import {TuiPushDirective} from './push.directive';
import type {TuiPushOptions} from './push.options';

@Component({
    standalone: true,
    imports: [
        NgIf,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiPushComponent,
        TuiIconComponent,
        TuiButtonDirective,
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
export class TuiPushAlertComponent {
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected readonly context = inject(POLYMORPHEUS_CONTEXT) as TuiPopover<
        TuiPushOptions,
        string
    >;

    protected get isDirective(): boolean {
        return this.context.content instanceof TuiPushDirective;
    }
}
