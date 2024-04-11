import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TUI_IS_WEBKIT} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core/types';

@Injectable({
    providedIn: 'root',
})
export class TuiVisualViewportService {
    constructor(
        @Inject(WINDOW) private readonly win: Window,
        @Inject(TUI_IS_WEBKIT) private readonly isWebkit: boolean,
    ) {}

    // https://bugs.webkit.org/show_bug.cgi?id=207089
    correct([y, x]: TuiPoint): TuiPoint {
        return [this.correctY(y), this.correctX(x)];
    }

    correctX(x: number): number {
        return this.isWebkit ? x + (this.win.visualViewport?.offsetLeft ?? 0) : x;
    }

    correctY(y: number): number {
        return this.isWebkit ? y + (this.win.visualViewport?.offsetTop ?? 0) : y;
    }
}
