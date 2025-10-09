import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {type TuiPortalContext, TuiPortalDirective} from '@taiga-ui/cdk/portals';
import {tuiInjectId} from '@taiga-ui/cdk/services';
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
    styleUrls: ['./push-alert.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
    host: {
        role: 'alert',
        '[style.grid-row]': 'row',
    },
})
export class TuiPushAlert {
    protected readonly context =
        injectContext<TuiPortalContext<TuiPushOptions, string>>();

    protected readonly row = 10000 + Number(tuiInjectId().replaceAll(/\D/g, ''));

    protected get isDirective(): boolean {
        return this.context.content instanceof TuiPortalDirective;
    }
}
