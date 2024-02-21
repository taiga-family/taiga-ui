import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {TUI_DOC_ICONS, TUI_DOC_LOGO, TUI_DOC_MENU_TEXT} from '@taiga-ui/addon-doc/tokens';
import {ALWAYS_FALSE_HANDLER} from '@taiga-ui/cdk';
import {distinctUntilChanged, map, merge, startWith, Subject} from 'rxjs';

@Component({
    selector: 'header[tuiDocHeader]',
    templateUrl: './header.template.html',
    styleUrls: ['./header.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocHeaderComponent {
    private readonly stream$ = new Subject<boolean>();
    private readonly router = inject(Router);
    readonly icons = inject(TUI_DOC_ICONS);
    readonly logo = inject(TUI_DOC_LOGO);
    readonly menu = inject(TUI_DOC_MENU_TEXT);
    readonly open$ = merge(
        this.router.events.pipe(map(ALWAYS_FALSE_HANDLER)),
        this.stream$,
    ).pipe(startWith(false), distinctUntilChanged());

    onClick(): void {
        this.stream$.next(true);
    }

    onActiveZone(active: boolean): void {
        if (!active) {
            this.stream$.next(false);
        }
    }
}
