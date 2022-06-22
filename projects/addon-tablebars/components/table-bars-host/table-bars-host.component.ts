import {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TUI_PARENT_ANIMATION, TuiContextWithImplicit} from '@taiga-ui/cdk';
import {
    TUI_ANIMATION_OPTIONS,
    TUI_CLOSE_WORD,
    TUI_MEDIA,
    TuiBrightness,
    tuiIsMobile,
    TuiMedia,
    tuiSlideInTop,
} from '@taiga-ui/core';
import {Observable} from 'rxjs';

import {TableBar} from '../../classes/table-bar';
import {TuiTableBarsService} from '../../services/table-bars.service';

// TODO: Accessibility
// @dynamic
@Component({
    selector: 'tui-table-bars-host',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './table-bars-host.template.html',
    styleUrls: ['./table-bars-host.style.less'],
    animations: [tuiSlideInTop, TUI_PARENT_ANIMATION],
})
export class TuiTableBarsHostComponent {
    readonly animation = {
        value: '',
        ...this.options,
    } as const;

    constructor(
        @Inject(TuiTableBarsService) readonly service: TuiTableBarsService,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(TUI_MEDIA) private readonly media: TuiMedia,
        @Inject(WINDOW) private readonly windowRef: Window,
    ) {}

    get isMobile(): boolean {
        return tuiIsMobile(this.windowRef, this.media);
    }

    get closeIcon(): string {
        return this.isMobile ? 'tuiIconClose' : 'tuiIconRemoveLarge';
    }

    getMode(mode: TuiBrightness): TuiBrightness | null {
        return mode === 'onLight' ? 'onDark' : null;
    }

    onCloseClick(itemToRemove: TableBar): void {
        itemToRemove.close();
    }

    getItemContext(item: TableBar): TuiContextWithImplicit<() => void> {
        return {
            $implicit: () => item.close(),
        };
    }
}
