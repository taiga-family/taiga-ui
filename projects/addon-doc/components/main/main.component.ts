import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    HostBinding,
    Inject,
    ViewEncapsulation,
} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {TuiThemeNightService, TuiThemeService} from '@taiga-ui/addon-doc/services';
import {TUI_DOC_ICONS, TuiDocIcons} from '@taiga-ui/addon-doc/tokens';
import {TuiSwipeService} from '@taiga-ui/cdk';
import {TuiBrightness, TuiModeDirective} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {
    delay,
    distinctUntilChanged,
    filter,
    map,
    share,
    shareReplay,
    startWith,
} from 'rxjs/operators';
import {TUI_ASIDE_TEXTS} from '@taiga-ui/kit';

@Component({
    selector: 'tui-doc-main',
    templateUrl: './main.template.html',
    styleUrls: ['./main.style.less'],
    encapsulation: ViewEncapsulation.None,
    // @note: This one was default on purpose so we can test demo in default mode.
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [
        {
            provide: TuiModeDirective,
            useExisting: forwardRef(() => TuiDocMainComponent),
        },
        TuiSwipeService,
    ],
})
export class TuiDocMainComponent {
    readonly aside$ = this.router.events.pipe(
        delay(0),
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() =>
            Array.from(this.doc.body.querySelectorAll('tui-doc-example[id]') ?? []).map(
                element => ({
                    id: element.id,
                    title: element.getAttribute('heading') || '',
                }),
            ),
        ),
        shareReplay({refCount: true, bufferSize: 1}),
    );

    readonly change$ = this.night;

    readonly night$ = this.change$.pipe(
        startWith(null),
        map(() => this.night.value),
        distinctUntilChanged(),
        share(),
    );

    constructor(
        @Inject(TUI_DOC_ICONS) private readonly icons: TuiDocIcons,
        @Inject(TuiThemeService) readonly theme: TuiThemeService,
        @Inject(TuiThemeNightService) readonly night: TuiThemeNightService,
        @Inject(Router) private readonly router: Router,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(TUI_ASIDE_TEXTS) readonly asideTexts$: Observable<Record<string, string>>,
    ) {}

    @HostBinding('attr.data-mode')
    get mode(): TuiBrightness | null {
        return this.night.value ? 'onDark' : null;
    }

    get icon(): string {
        return this.night.value ? this.icons.day : this.icons.night;
    }
}
