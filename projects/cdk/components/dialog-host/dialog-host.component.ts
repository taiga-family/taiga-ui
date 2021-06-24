import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk/constants';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {TUI_DIALOGS, TUI_POPSTATE_STREAM} from '@taiga-ui/cdk/tokens';
import {TuiDialog} from '@taiga-ui/cdk/types';
import {combineLatest, Observable} from 'rxjs';
import {map, pairwise, takeUntil, tap} from 'rxjs/operators';

const FAKE_IGNORE_HISTORY_STATE = {label: 'ignoreMe'} as const;

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
    private watchBrowserNavigation = false;

    readonly dialogs$ = combineLatest(this.dialogsByType).pipe(
        map(allTypesDialogs =>
            new Array<T>()
                .concat(...allTypesDialogs)
                .sort((a, b) => a.createdAt - b.createdAt),
        ),
        pairwise(),
        tap(dialogsStates => this.mutateBrowserHistory(dialogsStates)),
        map(([_, currentDialogState]) => currentDialogState),
        tap(dialogs => (this.lastDialogsStack = [...dialogs])),
    );

    constructor(
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TUI_DIALOGS)
        private readonly dialogsByType: Observable<readonly T[]>[],
        @Inject(Title) private readonly titleService: Title,
        @Inject(TUI_POPSTATE_STREAM) browserNavigation$: Observable<PopStateEvent>,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        browserNavigation$.pipe(takeUntil(destroy$)).subscribe(() => {
            if (this.watchBrowserNavigation) {
                this.closeLastDialog(this.lastDialogsStack);
            } else {
                this.watchBrowserNavigation = true;
            }
        });
    }

    private checkIsFakeHistoryStateOnTop(
        history: History = this.windowRef.history,
    ): boolean {
        return history.state?.label === FAKE_IGNORE_HISTORY_STATE.label;
    }

    private closeLastDialog(dialogs: ReadonlyArray<T>) {
        const [last] = dialogs.slice(-1);

        if (last) {
            last.$implicit.complete();
        }
    }

    private mutateBrowserHistory([prevDialogState, currentDialogState]: [
        ReadonlyArray<T>,
        ReadonlyArray<T>,
    ]) {
        const wasNewPopupOpened = currentDialogState.length > prevDialogState.length;
        const wasPopupClosed = currentDialogState.length < prevDialogState.length;

        if (wasNewPopupOpened) {
            this.watchBrowserNavigation = true;
            this.windowRef.history.pushState(
                FAKE_IGNORE_HISTORY_STATE,
                this.titleService.getTitle(),
            );
        } else if (
            wasPopupClosed &&
            this.checkIsFakeHistoryStateOnTop() &&
            !currentDialogState.length
        ) {
            this.watchBrowserNavigation = false;
            this.windowRef.history.back();
        }
    }
}
