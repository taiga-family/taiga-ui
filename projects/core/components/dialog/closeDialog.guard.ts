import {Inject, Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {TUI_DIALOGS, TUI_POPSTATE_STREAM, TuiDialog} from '@taiga-ui/cdk';
import {TuiDialogOptions} from '@taiga-ui/core';
import {combineLatest, merge, Observable, ReplaySubject} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Injectable()
export class CloseDialogGuard implements CanDeactivate<unknown> {
    constructor(
        @Inject(TUI_POPSTATE_STREAM)
        private isBrowserNavigationLatest$: ReplaySubject<boolean>,
        @Inject(TUI_DIALOGS)
        private readonly dialogs: Observable<
            TuiDialog<TuiDialogOptions<unknown>, unknown>[]
        >[],
    ) {}

    canDeactivate(): Observable<boolean> {
        return combineLatest([
            this.isBrowserNavigationLatest$,
            merge(...this.dialogs),
        ]).pipe(
            take(1),
            map(([isBrowserNavigationLatest, dialogs]) => {
                if (dialogs.length && isBrowserNavigationLatest) {
                    dialogs[dialogs.length - 1].$implicit.complete();

                    return false;
                }

                return true;
            }),
        );
    }
}
