import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_WINDOW_HEIGHT} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_DURATION, tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {TuiSheet} from '../sheet';
import {TuiSheetService} from '../sheet.service';

@Component({
    selector: 'tui-sheets-host',
    templateUrl: 'sheets-host.template.html',
    styleUrls: ['sheets-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
        @Inject(TUI_WINDOW_HEIGHT) readonly height$: Observable<number>,
    ) {}

    close({closeable, $implicit}: TuiSheet<unknown>) {
        if (closeable) {
            $implicit.complete();
        }
    }
}
