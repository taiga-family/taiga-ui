import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {TuiSwipeService} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {merge, Subject} from 'rxjs';
import {distinctUntilChanged, filter, map, mapTo, startWith} from 'rxjs/operators';

import {TUI_DOC_MENU_TEXT} from '../../tokens/i18n';
import {TUI_DOC_LOGO} from '../../tokens/logo';

@Component({
    selector: `header[tuiDocHeader]`,
    templateUrl: `./header.template.html`,
    styleUrls: [`./header.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocHeaderComponent {
    private readonly stream$ = new Subject<boolean>();

    readonly open$ = merge(
        this.router.events.pipe(mapTo(false)),
        this.stream$,
        this.swipes$.pipe(
            filter(swipe => swipe.direction === `left` || swipe.direction === `right`),
            map(swipe => swipe.direction === `right`),
        ),
    ).pipe(startWith(false), distinctUntilChanged());

    constructor(
        @Inject(TUI_DOC_LOGO) readonly logo: PolymorpheusContent,
        @Inject(TUI_DOC_MENU_TEXT) readonly menu: string,
        @Inject(Router) private readonly router: Router,
        @Inject(TuiSwipeService) private readonly swipes$: TuiSwipeService,
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
