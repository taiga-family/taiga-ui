import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {TUI_DOC_ICONS, TUI_DOC_LOGO, TUI_DOC_MENU_TEXT} from '@taiga-ui/addon-doc/tokens';
import {TuiSidebarComponent, TuiSidebarDirective} from '@taiga-ui/addon-mobile';
import {TUI_FALSE_HANDLER, TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {distinctUntilChanged, map, merge, startWith, Subject} from 'rxjs';

import {TuiDocNavigationComponent} from '../../navigation/navigation.component';

@Component({
    standalone: true,
    selector: 'header[tuiDocHeader]',
    imports: [
        TuiButtonDirective,
        TuiActiveZoneDirective,
        TuiSidebarComponent,
        TuiSidebarDirective,
        AsyncPipe,
        PolymorpheusModule,
        TuiDocNavigationComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
