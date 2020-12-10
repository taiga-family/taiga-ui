import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {TUI_DOC_LOGO, TUI_DOC_MENU_TEXT} from '@taiga-ui/addon-doc';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {merge, Subject} from 'rxjs';
import {distinctUntilChanged, mapTo, startWith} from 'rxjs/operators';

@Component({
    selector: 'header[tuiDocHeader]',
    templateUrl: './header.template.html',
    styleUrls: ['./header.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocHeaderComponent {
    private readonly stream$ = new Subject<boolean>();

    readonly open$ = merge(this.router.events.pipe(mapTo(false)), this.stream$).pipe(
        startWith(false),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TUI_DOC_LOGO) readonly logo: PolymorpheusContent,
        @Inject(TUI_DOC_MENU_TEXT) readonly menu: string,
        @Inject(Router) private readonly router: Router,
    ) {}

    onClick() {
        this.stream$.next(true);
    }

    onActiveZone(active: boolean) {
        if (!active) {
            this.stream$.next(false);
        }
    }
}
