import {inject, Injectable} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TUI_IS_WEBKIT} from '@taiga-ui/cdk/tokens';
import {type TuiPoint} from '@taiga-ui/core/types';

@Injectable({
    providedIn: 'root',
})
export class TuiVisualViewportService {
    private readonly isWebkit = inject(TUI_IS_WEBKIT);
    private readonly win = inject(WA_WINDOW);

    // https://bugs.webkit.org/show_bug.cgi?id=207089
    public correct(point: TuiPoint): TuiPoint {
        return this.isWebkit
            ? [
                  point[0] + (this.win.visualViewport?.offsetTop ?? 0),
                  point[1] + (this.win.visualViewport?.offsetLeft ?? 0),
              ]
            : point;
    }
}
