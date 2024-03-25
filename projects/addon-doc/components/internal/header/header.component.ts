import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {TUI_DOC_ICONS, TUI_DOC_LOGO, TUI_DOC_MENU_TEXT} from '@taiga-ui/addon-doc/tokens';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk';
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
    protected readonly icons = inject(TUI_DOC_ICONS);
    protected readonly logo = inject(TUI_DOC_LOGO);
    protected readonly menu = inject(TUI_DOC_MENU_TEXT);
    protected readonly open$ = merge(
        this.router.events.pipe(map(TUI_FALSE_HANDLER)),
        this.stream$,
    ).pipe(startWith(false), distinctUntilChanged());

    protected onClick(): void {
        this.stream$.next(true);
    }

    protected onActiveZone(active: boolean): void {
        if (!active) {
            this.stream$.next(false);
        }
    }
}
