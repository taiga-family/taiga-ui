import {Inject, Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {TUI_POPSTATE_STREAM} from '@taiga-ui/cdk/tokens';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class TuiBackNavigationBlockService {
    browserNavigationStream$ = this.popstateEvent$.pipe(
        map(event => {
            this.activeBlockCount = Math.max(0, this.activeBlockCount - 1);

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
    private activeBlockCount = 0;

    constructor(
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TUI_POPSTATE_STREAM)
        private readonly popstateEvent$: Observable<PopStateEvent>,
        @Inject(Title) private readonly titleService: Title,
    ) {}

    blockOnce(): void {
        this.activeBlockCount++;
        this.watchBrowserNavigation = true;

        this.windowRef.history.pushState(
            this.FAKE_IGNORE_HISTORY_STATE,
            this.titleService.getTitle(),
        );
    }

    cancelLastBlock(): void {
        if (this.activeBlockCount) {
            this.watchBrowserNavigation = false;
            this.windowRef.history.back();
        }
    }

    getActiveBlockCount(): number {
        return this.activeBlockCount;
    }
}
