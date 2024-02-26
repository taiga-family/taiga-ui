import {CommonModule, DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiFocusTrapModule, TuiOverscrollModule, TuiPopover} from '@taiga-ui/cdk';
import {tuiHost} from '@taiga-ui/core/animations';
import {TuiScrollControlsComponent} from '@taiga-ui/core/components/scroll-controls';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {Observable, tap} from 'rxjs';

import {TUI_DIALOGS} from './dialog.tokens';

@Component({
    standalone: true,
    selector: 'tui-dialogs',
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiScrollControlsComponent,
        TuiFocusTrapModule,
        TuiOverscrollModule,
    ],
    templateUrl: './dialogs.template.html',
    styleUrls: ['./dialogs.style.less'],
    // So that we do not force OnPush on custom dialogs
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    animations: [tuiHost],
})
export class TuiDialogsComponent {
    private readonly doc = inject(DOCUMENT);

    protected readonly dialogs$: Observable<ReadonlyArray<TuiPopover<any, any>>> = inject(
        TUI_DIALOGS,
    ).pipe(
        tap(({length}) => {
            this.doc.defaultView?.document.documentElement.classList.toggle(
                't-overscroll-none',
                !!length,
            );
        }),
    );
}
