import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    InjectionToken,
    OnInit,
    Self,
} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HISTORY} from '@ng-web-apis/common';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk/constants';
import { TuiDestroyService } from '@taiga-ui/cdk/services';
import {TUI_DIALOGS} from '@taiga-ui/cdk/tokens';
import {TuiDialog} from '@taiga-ui/cdk/types';
import {combineLatest, Observable, of} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

export const TUI_DIALOG_CLOSES_ON_BACK = new InjectionToken<Observable<boolean>>(
    'Is closing dialog on browser backward navigation enabled',
    {
        factory: () => of(false),
    },
);

// TODO: 3.0 remove in ivy compilation
export const FAKE_HISTORY_STATE = {label: 'ignoreMe'} as const;
// TODO: 3.0 remove in ivy compilation
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

    constructor(
        @Inject(TUI_DIALOG_CLOSES_ON_BACK)
        readonly isDialogClosesOnBack$: Observable<boolean>,
        @Inject(TUI_DIALOGS)
        private readonly dialogsByType: Array<Observable<readonly T[]>>,
        @Inject(HISTORY) private readonly historyRef: History,
        @Inject(Title) private readonly titleService: Title,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
        @Inject(DOCUMENT) private readonly doc: Document,
    ) {}

    ngOnInit(): void {
        // Due to this view being parallel to app content, `markForCheck` from `async` pipe
        // can happen after view was checked, so calling `detectChanges` instead
        combineLatest(this.dialogsByType)
            .pipe(
                map(arr =>
                    new Array<T>()
                        .concat(...arr)
                        .sort((a, b) => a.createdAt - b.createdAt),
                ),
                takeUntil(this.destroy$),
            )
            .subscribe(dialogs => {
                this.dialogs = dialogs;
                this.cdr.markForCheck();

                // TODO: Hack for mobile Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=1845264
                this.doc.documentElement.classList.toggle(
                    't-overscroll-none',
                    !!dialogs.length,
                );
            });
    }

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
        if (!isDialogClosesOnBack || propertyName !== 'letter-spacing') {
            return;
        }

        if (popupOpened) {
            this.historyRef.pushState(FAKE_HISTORY_STATE, this.titleService.getTitle());
        } else if (isFakeHistoryState(this.historyRef.state)) {
            this.historyRef.back();
        }
    }
}
