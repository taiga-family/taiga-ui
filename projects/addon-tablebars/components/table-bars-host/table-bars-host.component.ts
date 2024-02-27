import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiContext} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
    TUI_MEDIA,
    TUI_PARENT_ANIMATION,
    TuiBrightness,
    tuiIsMobile,
    tuiSlideInTop,
    tuiToAnimationOptions,
} from '@taiga-ui/core';

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
    private readonly media = inject(TUI_MEDIA);
    private readonly win = inject(WINDOW);
    protected readonly service = inject(TuiTableBarsService);
    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    protected get isMobile(): boolean {
        return tuiIsMobile(this.win, this.media);
    }

    protected getMode(mode: TuiBrightness): TuiBrightness | null {
        return mode === 'onLight' ? 'onDark' : null;
    }

    protected onCloseClick(itemToRemove: TuiTableBar): void {
        itemToRemove.close();
    }

    protected getItemContext(item: TuiTableBar): TuiContext<() => void> {
        return {
            $implicit: () => item.close(),
        };
    }
}
