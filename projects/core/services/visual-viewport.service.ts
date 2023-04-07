import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TUI_IS_WEBKIT} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core/types';

@Injectable({
    providedIn: `root`,
})
export class TuiVisualViewportService {
    constructor(
        @Inject(WINDOW) private readonly win: Window,
        @Inject(TUI_IS_WEBKIT) private readonly isWebkit: boolean,
    ) {}

    // https://bugs.webkit.org/show_bug.cgi?id=207089
    correct(point: TuiPoint): TuiPoint {
        return this.isWebkit
            ? [
                  point[0] + (this.win.visualViewport?.offsetTop ?? 0),
                  point[1] + (this.win.visualViewport?.offsetLeft ?? 0),
              ]
            : point;
    }
}
