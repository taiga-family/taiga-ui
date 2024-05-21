import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import type {TuiContext} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
    TUI_MEDIA,
    TuiButtonDirective,
    tuiGetViewportWidth,
    tuiParentAnimation,
    tuiSlideInTop,
    tuiToAnimationOptions,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import type {TuiTableBar} from '../../classes/table-bar';
import {TuiTableBarsService} from '../../services/table-bars.service';

// TODO: Accessibility
@Component({
    standalone: true,
    selector: 'tui-table-bars-host',
    imports: [NgIf, AsyncPipe, TuiButtonDirective, PolymorpheusModule],
    templateUrl: './table-bars-host.template.html',
    styleUrls: ['./table-bars-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiParentAnimation],
})
export class TuiTableBarsHostComponent {
    private readonly media = inject(TUI_MEDIA);
    private readonly win = inject(WINDOW);
    public readonly service = inject(TuiTableBarsService);
    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    protected get isMobile(): boolean {
        return tuiGetViewportWidth(this.win) < this.media.mobile;
    }

    protected getMode(mode: string): string | null {
        return mode === 'onLight' ? 'dark' : null;
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
