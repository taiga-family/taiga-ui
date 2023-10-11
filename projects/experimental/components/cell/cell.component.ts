import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TUI_PLATFORM, TuiPlatform} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: '[tuiCell]',
    templateUrl: './cell.template.html',
    styleUrls: ['./cell.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size',
        '[attr.data-platform]': 'platform',
    },
})
export class TuiCellComponent {
    @Input()
    size: TuiSizeL | TuiSizeS = 'l';

    constructor(@Inject(TUI_PLATFORM) readonly platform: TuiPlatform) {}
}
