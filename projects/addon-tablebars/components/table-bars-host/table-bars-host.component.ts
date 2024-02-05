import {ChangeDetectionStrategy, Component, Inject, inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiContext} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
    TUI_MEDIA,
    TUI_PARENT_ANIMATION,
    TuiBrightness,
    TuiCommonIcons,
    tuiIsMobile,
    TuiMedia,
    tuiSlideInTop,
    tuiToAnimationOptions,
} from '@taiga-ui/core';
import {Observable} from 'rxjs';

import {TuiTableBar} from '../../classes/table-bar';
import {TuiTableBarsService} from '../../services/table-bars.service';

// TODO: Accessibility
@Component({
    selector: 'tui-table-bars-host',
    templateUrl: './table-bars-host.template.html',
    styleUrls: ['./table-bars-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, TUI_PARENT_ANIMATION],
})
export class TuiTableBarsHostComponent {
    readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    constructor(
        @Inject(TuiTableBarsService) readonly service: TuiTableBarsService,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(TUI_COMMON_ICONS) readonly icons: TuiCommonIcons,
        @Inject(TUI_MEDIA) private readonly media: TuiMedia,
        @Inject(WINDOW) private readonly win: Window,
    ) {}

    get isMobile(): boolean {
        return tuiIsMobile(this.win, this.media);
    }

    getMode(mode: TuiBrightness): TuiBrightness | null {
        return mode === 'onLight' ? 'onDark' : null;
    }

    onCloseClick(itemToRemove: TuiTableBar): void {
        itemToRemove.close();
    }

    getItemContext(item: TuiTableBar): TuiContext<() => void> {
        return {
            $implicit: () => item.close(),
        };
    }
}
