import {ChangeDetectionStrategy, Component, Inject, InjectionToken} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HISTORY} from '@ng-web-apis/common';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk/constants';
import {TUI_DIALOGS} from '@taiga-ui/cdk/tokens';
import {TuiDialog} from '@taiga-ui/cdk/types';
import {combineLatest, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

export const TUI_DIALOG_CLOSES_ON_BACK = new InjectionToken<Observable<boolean>>(
    `Is closing dialog on browser backward navigation enabled`,
    {
        factory: () => of(false),
    },
);

const FAKE_HISTORY_STATE = {label: `ignoreMe`} as const;
const isFakeHistoryState = (
    historyState: Record<string, unknown>,
): historyState is typeof FAKE_HISTORY_STATE =>
    historyState?.label === FAKE_HISTORY_STATE.label;

// @dynamic
@Component({
    selector: `tui-dialog-host`,
    templateUrl: `./dialog-host.template.html`,
    styleUrls: [`./dialog-host.style.less`],
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
        @Inject(TUI_DIALOG_CLOSES_ON_BACK)
        readonly isDialogClosesOnBack$: Observable<boolean>,
        @Inject(TUI_DIALOGS)
        private readonly dialogsByType: Array<Observable<readonly T[]>>,
        @Inject(HISTORY) private readonly historyRef: History,
        @Inject(Title) private readonly titleService: Title,
    ) {}

    closeLast(dialogs: readonly T[], isDialogClosesOnBack: boolean): void {
        if (!isDialogClosesOnBack) {
            return;
        }

        const [last] = dialogs.slice(-1);

        if (!last) {
            return;
        }

        if (dialogs.length > 1) {
            this.historyRef.pushState(FAKE_HISTORY_STATE, this.titleService.getTitle());
        }

        last.$implicit.complete();
    }

    onDialog(
        {propertyName}: TransitionEvent,
        popupOpened: boolean,
        isDialogClosesOnBack: boolean,
    ): void {
        if (!isDialogClosesOnBack || propertyName !== `letter-spacing`) {
            return;
        }

        if (popupOpened) {
            this.historyRef.pushState(FAKE_HISTORY_STATE, this.titleService.getTitle());
        } else if (isFakeHistoryState(this.historyRef.state)) {
            this.historyRef.back();
        }
    }
}
