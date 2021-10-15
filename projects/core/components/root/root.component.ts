import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Optional,
} from '@angular/core';
import {TUI_DIALOGS, TUI_IS_MOBILE, tuiAssert} from '@taiga-ui/cdk';
import {VERSION} from '@taiga-ui/core/constants';
import {TuiNotificationsHostComponent} from '@taiga-ui/core/modules/notifications';
import {TUI_ANIMATIONS_DURATION, TUI_ASSERT_ENABLED} from '@taiga-ui/core/tokens';
import {merge, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

// @dynamic
@Component({
    selector: 'tui-root',
    templateUrl: 'root.template.html',
    styleUrls: ['./root.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'data-tui-version': VERSION,
        '[style.--tui-duration]': 'duration + "ms"',
    },
})
export class TuiRootComponent {
    readonly scrollbars$ =
        this.dialogs && !this.isMobile
            ? merge(...this.dialogs).pipe(map(({length}) => !length))
            : of(!this.isMobile);

    constructor(
        @Inject(TUI_ANIMATIONS_DURATION) readonly duration: number,
        @Inject(ElementRef) readonly elementRef: ElementRef<HTMLElement>,
        @Optional()
        @Inject(TUI_DIALOGS)
        readonly dialogs: readonly Observable<readonly unknown[]>[] | null,
        @Optional()
        @Inject(TuiNotificationsHostComponent)
        readonly notificationsHost: TuiNotificationsHostComponent,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TUI_ASSERT_ENABLED) enabled: boolean,
    ) {
        tuiAssert.enabled = enabled;
    }
}
