import {ChangeDetectorRef, Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {TUI_IS_ANDROID, TUI_IS_IOS, tuiPure, watch} from '@taiga-ui/cdk';
import {VERSION} from '@taiga-ui/core';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {changeDetection} from '../../change-detection-strategy';

// @dynamic
@Component({
    selector: 'app',
    templateUrl: 'app.template.html',
    styleUrls: ['app.style.less'],
    changeDetection,
})
export class AppComponent {
    landing = false;

    readonly version = VERSION;

    constructor(
        @Inject(TUI_IS_ANDROID) readonly isAndroid: boolean,
        @Inject(TUI_IS_IOS) readonly isIos: boolean,
        @Inject(Router) router: Router,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        router.events
            .pipe(
                map(() => router.routerState.snapshot.url === '/'),
                distinctUntilChanged(),
                watch(changeDetectorRef),
            )
            .subscribe(landing => {
                this.landing = landing;
            });
    }

    @tuiPure
    get isChristmas(): boolean {
        const today = new Date();

        return (
            (!today.getMonth() && today.getDate() < 14) ||
            (today.getMonth() === 11 && today.getDate() > 25)
        );
    }
}
