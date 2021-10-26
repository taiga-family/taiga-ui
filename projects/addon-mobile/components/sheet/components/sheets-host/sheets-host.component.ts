import {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_WINDOW_HEIGHT} from '@taiga-ui/cdk';
import {TUI_ANIMATION_OPTIONS, tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {TuiSheet} from '../../sheet';
import {TuiSheetService} from '../../sheet.service';
import {TUI_SHEET_OFFSET} from '../sheet/sheet.providers';

// @dynamic
@Component({
    selector: 'tui-sheets-host',
    templateUrl: 'sheets-host.template.html',
    styleUrls: ['sheets-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiSheetsHostComponent {
    constructor(
        @Inject(TUI_SHEET_OFFSET) private readonly offset: number,
        @Inject(TUI_ANIMATION_OPTIONS) readonly options: AnimationOptions,
        @Inject(TuiSheetService) readonly service: TuiSheetService,
        @Inject(TUI_WINDOW_HEIGHT) readonly height$: Observable<number>,
    ) {}

    close({closeable, $implicit}: TuiSheet<unknown>) {
        if (closeable) {
            $implicit.complete();
        }
    }

    getHeight(height: number | null): number {
        return (height ?? 0) - this.offset;
    }
}
