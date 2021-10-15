import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {TUI_IS_ANDROID, TUI_IS_IOS, tuiPure} from '@taiga-ui/cdk';
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
    readonly isLanding$ = this.router.events.pipe(
        map(() => this.router.routerState.snapshot.url === '/'),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TUI_IS_ANDROID) readonly isAndroid: boolean,
        @Inject(TUI_IS_IOS) readonly isIos: boolean,
        @Inject(Router) private readonly router: Router,
        @Inject(LOCAL_STORAGE) localStorage: Storage,
    ) {
        const env = localStorage.getItem('env');

        if (env) {
            localStorage.removeItem('env');
            router.navigateByUrl(env.replace(/\/[A-z0-9]*\//, ''));
        }
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
