import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {TuiRipple} from '@taiga-ui/addon-mobile/directives/ripple';
import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {TuiButton} from '@taiga-ui/core/components/button';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {type TuiMobileDialogOptions} from './mobile-dialog.options';

@Component({
    selector: 'tui-mobile-dialog',
    imports: [PolymorpheusOutlet, TuiButton, TuiRipple],
    templateUrl: './mobile-dialog.template.html',
    styleUrl: './mobile-dialog.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._ios]': 'isIOS',
    },
})
export class TuiMobileDialog<I> {
    protected readonly isIOS = inject(WA_IS_IOS);
    protected readonly context =
        injectContext<TuiPortalContext<TuiMobileDialogOptions<I>, number>>();

    protected onAction(index: number): void {
        this.context.completeWith(index);
    }
}
