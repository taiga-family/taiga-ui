import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {TUI_DOC_ICONS, TUI_DOC_LOGO, TUI_DOC_MENU_TEXT} from '@taiga-ui/addon-doc/tokens';
import {TuiSidebar} from '@taiga-ui/addon-mobile/directives/sidebar';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiButton} from '@taiga-ui/core/components/button';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import {distinctUntilChanged, map, merge, startWith, Subject} from 'rxjs';

import {TuiDocNavigation} from '../../navigation/navigation.component';

@Component({
    standalone: true,
    selector: 'header[tuiDocHeader]',
    imports: [
        TuiButton,
        TuiActiveZone,
        TuiSidebar,
        AsyncPipe,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiDocNavigation,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocHeader {
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
