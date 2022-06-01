import {
    Component,
    Inject,
    InjectFlags,
    Injector,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TUI_IS_ANDROID,
    TUI_IS_CYPRESS,
    TUI_IS_IOS,
    TuiDestroyService,
    tuiPure,
} from '@taiga-ui/cdk';
import {Metrika} from 'ng-yandex-metrika';
import {Observable} from 'rxjs';
import {distinctUntilChanged, filter, map, takeUntil} from 'rxjs/operators';

import {environment} from '../../environments/environment';

// @dynamic
@Component({
    selector: 'app',
    templateUrl: './app.template.html',
    styleUrls: ['./app.style.less'],
    host: {'[class._is-cypress-mode]': 'isCypress'},
    encapsulation: ViewEncapsulation.None,
    providers: [TuiDestroyService],
    changeDetection,
})
export class AppComponent implements OnInit {
    readonly isLanding$ = this.router.events.pipe(
        map(() => this.router.routerState.snapshot.url === '/'),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TUI_IS_ANDROID) readonly isAndroid: boolean,
        @Inject(TUI_IS_IOS) readonly isIos: boolean,
        @Inject(Router) private readonly router: Router,
        @Inject(TUI_IS_CYPRESS) readonly isCypress: boolean,
        @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
        private readonly injector: Injector,
    ) {}

    ngOnInit(): void {
        this.enableYandexMetrika();
    }

    @tuiPure
    get isChristmas(): boolean {
        const today = new Date();

        return (
            (!today.getMonth() && today.getDate() < 14) ||
            (today.getMonth() === 11 && today.getDate() > 24)
        );
    }

    private enableYandexMetrika(): void {
        if (!environment.production || this.isCypress) {
            console.info('Yandex.Metrika disabled for non-production mode.');

            return;
        }

        try {
            const metrika = this.injector.get(Metrika, null, InjectFlags.Optional);

            this.router.events
                .pipe(
                    filter(
                        (event): event is NavigationEnd => event instanceof NavigationEnd,
                    ),
                    takeUntil(this.destroy$),
                )
                .subscribe(event => {
                    // eslint-disable-next-line
                    metrika?.hit(event.urlAfterRedirects, {referer: event.url});
                });
        } catch {
            console.error('You forgot to import MetrikaModule!');
        }
    }
}
