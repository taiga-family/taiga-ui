import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    NgZone,
    Optional,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TUI_DIALOGS, TUI_IS_MOBILE, tuiAssert, tuiZoneOptimized} from '@taiga-ui/cdk';
import {VERSION} from '@taiga-ui/core/constants';
import {TuiMedia} from '@taiga-ui/core/interfaces';
import {TuiNotificationsHostComponent} from '@taiga-ui/core/modules/notifications';
import {
    TUI_ANIMATIONS_DURATION,
    TUI_ASSERT_ENABLED,
    TUI_MEDIA,
} from '@taiga-ui/core/tokens';
import {fromEvent, merge, Observable, of} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

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
    @HostBinding('$.class._mobile')
    @HostListener('$.class._mobile')
    readonly mobile$ = fromEvent(this.windowRef, 'resize').pipe(
        startWith(null),
        map(() => this.windowRef.innerWidth < this.media.mobile),
        distinctUntilChanged(),
        tuiZoneOptimized(this.ngZone),
    );

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
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TUI_MEDIA) private readonly media: TuiMedia,
        @Inject(NgZone) private readonly ngZone: NgZone,
    ) {
        tuiAssert.enabled = enabled;
    }
}
