import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {type TuiPortalContext, TuiPortalDirective} from '@taiga-ui/cdk/portals';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiLink} from '@taiga-ui/core/components/link';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiPushComponent} from './push.component';
import {type TuiPushOptions} from './push.options';

@Component({
    selector: 'tui-push-alert',
    imports: [PolymorpheusOutlet, TuiButton, TuiIcon, TuiLink, TuiPushComponent],
    templateUrl: './push-alert.template.html',
    styleUrl: './push-alert.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
    host: {
        role: 'alert',
    },
})
export class TuiPushAlert {
    protected readonly context =
        injectContext<TuiPortalContext<TuiPushOptions, string>>();

    protected get isDirective(): boolean {
        return this.context.content instanceof TuiPortalDirective;
    }
}
