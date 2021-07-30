import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HISTORY, WINDOW} from '@ng-web-apis/common';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk/constants';
import {TUI_DIALOGS} from '@taiga-ui/cdk/tokens';
import {TuiDialog} from '@taiga-ui/cdk/types';
import {isInsideIframe} from '@taiga-ui/cdk/utils';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// TODO: remove in ivy compilation
export const FAKE_HISTORY_STATE = {label: 'ignoreMe'} as const;
// TODO: remove in ivy compilation
export const isFakeHistoryState = (
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
    /**
     * TODO enable this feature for iframes too
     * when the legacy frame manager (with an iframe inside) will be removed on all internal projects
     */
    private isCloseOnBackNavDisabled = isInsideIframe(this.windowRef);

    constructor(
        @Inject(TUI_DIALOGS) private readonly dialogsByType: Observable<readonly T[]>[],
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(HISTORY) private readonly historyRef: History,
        @Inject(Title) private readonly titleService: Title,
    ) {}

    closeLast(dialogs: readonly T[]) {
        if (this.isCloseOnBackNavDisabled) {
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

    onDialog({propertyName}: TransitionEvent, popupOpened: boolean) {
        if (this.isCloseOnBackNavDisabled || propertyName !== 'letter-spacing') {
            return;
        }

        if (popupOpened) {
            this.historyRef.pushState(FAKE_HISTORY_STATE, this.titleService.getTitle());
        } else if (isFakeHistoryState(this.historyRef.state)) {
            this.historyRef.back();
        }
    }
}
