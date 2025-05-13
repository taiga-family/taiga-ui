import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiLink} from '@taiga-ui/core/components/link';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiPushComponent} from './push.component';
import {TuiPushDirective} from './push.directive';
import type {TuiPushOptions} from './push.options';

@Component({
    standalone: true,
    imports: [NgIf, PolymorpheusOutlet, TuiButton, TuiIcon, TuiLink, TuiPushComponent],
    templateUrl: './push-alert.template.html',
    styleUrls: ['./push-alert.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
    host: {
        role: 'alert',
    },
})
export class TuiPushAlert {
    protected readonly context = injectContext<TuiPopover<TuiPushOptions, string>>();

    protected get isDirective(): boolean {
        return this.context.content instanceof TuiPushDirective;
    }
}
