import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {
    TUI_DOC_ICONS,
    TUI_DOC_LOGO,
    TUI_DOC_MENU_TEXT,
    TuiDocIcons,
} from '@taiga-ui/addon-doc/tokens';
import {ALWAYS_FALSE_HANDLER} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {distinctUntilChanged, map, merge, startWith, Subject} from 'rxjs';

@Component({
    selector: 'header[tuiDocHeader]',
    templateUrl: './header.template.html',
    styleUrls: ['./header.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocHeaderComponent {
    private readonly stream$ = new Subject<boolean>();

    readonly open$ = merge(
        this.router.events.pipe(map(ALWAYS_FALSE_HANDLER)),
        this.stream$,
    ).pipe(startWith(false), distinctUntilChanged());

    constructor(
        @Inject(TUI_DOC_ICONS) readonly icons: TuiDocIcons,
        @Inject(TUI_DOC_LOGO) readonly logo: PolymorpheusContent,
        @Inject(TUI_DOC_MENU_TEXT) readonly menu: string,
        @Inject(Router) private readonly router: Router,
    ) {}

    onClick(): void {
        this.stream$.next(true);
    }

    onActiveZone(active: boolean): void {
        if (!active) {
            this.stream$.next(false);
        }
    }
}
