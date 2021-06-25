import {Inject, Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {TUI_POPSTATE_STREAM} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class TuiBackNavigationBlockService {
    browserNavigationStream$ = this.popstateEvent$.pipe(
        map(event => {
            if (this.watchBrowserNavigation) {
                return event;
            }

            this.watchBrowserNavigation = true;

            return null;
        }),
        filter(Boolean),
    );

    private readonly FAKE_IGNORE_HISTORY_STATE = {label: 'ignoreMe'} as const;
    private watchBrowserNavigation = false;

    constructor(
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TUI_POPSTATE_STREAM)
        private readonly popstateEvent$: Observable<PopStateEvent>,
        @Inject(Title) private readonly titleService: Title,
    ) {}

    blockOnce(): void {
        this.watchBrowserNavigation = true;
        this.windowRef.history.pushState(
            this.FAKE_IGNORE_HISTORY_STATE,
            this.titleService.getTitle(),
        );
    }

    cancelLastBlock(): void {
        this.watchBrowserNavigation = false;
        this.windowRef.history.back();
    }

    checkAnyBlockActive(history: History = this.windowRef.history): boolean {
        return history.state?.label === this.FAKE_IGNORE_HISTORY_STATE.label;
    }
}
