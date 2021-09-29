import {Component, Inject} from '@angular/core';
import {TuiSheet} from '@taiga-ui/addon-mobile/components';
import {TUI_ANIMATIONS_DURATION, tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core';
import {TuiSheetService} from '../sheet.service';

@Component({
    selector: 'tui-sheets-host',
    templateUrl: 'sheets-host.template.html',
    styleUrls: ['sheets-host.style.less'],
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiSheetsHostComponent {
    readonly animation = {
        params: {
            duration: this.duration,
        },
    } as const;

    constructor(
        @Inject(TUI_ANIMATIONS_DURATION) private readonly duration: number,
        @Inject(TuiSheetService) readonly service: TuiSheetService,
    ) {}

    onOverlay([item]: TuiSheet<unknown>[]) {
        if (item && item.closeable) {
            item.$implicit.complete();
        }
    }
}
