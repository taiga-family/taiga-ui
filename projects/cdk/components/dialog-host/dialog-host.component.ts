import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk/constants';
import {TUI_DIALOGS} from '@taiga-ui/cdk/tokens';
import {TuiDialog} from '@taiga-ui/cdk/types';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const FAKE_HISTORY_STATE = {label: 'ignoreMe'} as const;
const isFakeHistoryState = (
    historyState: Record<string, unknown>,
): historyState is typeof FAKE_HISTORY_STATE =>
    historyState?.label === FAKE_HISTORY_STATE.label;

// @dynamic
@Component({
    selector: 'tui-dialog-host',
    templateUrl: './dialog-host.template.html',
    styleUrls: ['./dialog-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [TUI_PARENT_ANIMATION],
})
export class TuiDialogHostComponent<T extends TuiDialog<unknown, unknown>> {
    readonly dialogs$ = combineLatest(this.dialogsByType).pipe(
        map(allTypesDialogs =>
            new Array<T>()
                .concat(...allTypesDialogs)
                .sort((a, b) => a.createdAt - b.createdAt),
        ),
    );

    constructor(
        @Inject(TUI_DIALOGS) private readonly dialogsByType: Observable<readonly T[]>[],
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(Title) private readonly titleService: Title,
    ) {}

    closeLast(dialogs: readonly T[]) {
        const [last] = dialogs.slice(-1);

        if (!last) {
            return;
        }

        if (dialogs.length > 1) {
            this.windowRef.history.pushState(
                FAKE_HISTORY_STATE,
                this.titleService.getTitle(),
            );
        }

        last.$implicit.complete();
    }

    onDialog({propertyName}: TransitionEvent, popupOpened: boolean) {
        if (propertyName !== 'letter-spacing') {
            return;
        }

        if (popupOpened) {
            this.windowRef.history.pushState(
                FAKE_HISTORY_STATE,
                this.titleService.getTitle(),
            );
        } else if (isFakeHistoryState(this.windowRef.history.state)) {
            this.windowRef.history.back();
        }
    }
}
