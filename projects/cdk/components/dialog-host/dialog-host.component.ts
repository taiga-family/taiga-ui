import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiBackNavigationBlockService} from '@taiga-ui/cdk/components/dialog-host/tui-back-navigation-block.service';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk/constants';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {TUI_DIALOGS} from '@taiga-ui/cdk/tokens';
import {TuiDialog} from '@taiga-ui/cdk/types';
import {combineLatest, Observable} from 'rxjs';
import {map, pairwise, takeUntil, tap} from 'rxjs/operators';

// @dynamic
@Component({
    selector: 'tui-dialog-host',
    templateUrl: './dialog-host.template.html',
    styleUrls: ['./dialog-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [TUI_PARENT_ANIMATION],
})
export class TuiDialogHostComponent<T extends TuiDialog<unknown, unknown>> {
    private lastDialogsStack: T[] = [];

    readonly dialogs$ = combineLatest(this.dialogsByType).pipe(
        map(allTypesDialogs =>
            new Array<T>()
                .concat(...allTypesDialogs)
                .sort((a, b) => a.createdAt - b.createdAt),
        ),
        pairwise(),
        tap(dialogsStates => this.manageBrowserNavigation(dialogsStates)),
        map(([_, currentDialogState]) => currentDialogState),
        tap(dialogs => (this.lastDialogsStack = [...dialogs])),
    );

    constructor(
        @Inject(TUI_DIALOGS) private readonly dialogsByType: Observable<readonly T[]>[],
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        private readonly backNavigationBlockService: TuiBackNavigationBlockService,
    ) {
        backNavigationBlockService.browserNavigationStream$
            .pipe(takeUntil(destroy$))
            .subscribe(() => this.closeLastDialog(this.lastDialogsStack));
    }

    private closeLastDialog(dialogs: ReadonlyArray<T>) {
        const [last] = dialogs.slice(-1);

        if (last) {
            last.$implicit.complete();
        }
    }

    private manageBrowserNavigation([prevDialogState, currentDialogState]: [
        ReadonlyArray<T>,
        ReadonlyArray<T>,
    ]) {
        const wasNewPopupOpened = currentDialogState.length > prevDialogState.length;
        const wasPopupClosed = currentDialogState.length < prevDialogState.length;
        const activeBlockCount = this.backNavigationBlockService.getActiveBlockCount();

        if (wasNewPopupOpened) {
            this.backNavigationBlockService.blockOnce();
        } else if (wasPopupClosed && activeBlockCount > currentDialogState.length) {
            this.backNavigationBlockService.cancelLastBlock();
        }
    }
}
