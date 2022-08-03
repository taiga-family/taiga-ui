import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';
import {TuiDestroyService, TuiHoveredService} from '@taiga-ui/cdk';
import {TuiHintComponent, TuiPositionService} from '@taiga-ui/core';
import {tuiFadeIn} from '@taiga-ui/core/animations';

@Component({
    selector: `tui-line-clamp-box`,
    templateUrl: `./line-clamp-box.template.html`,
    styleUrls: [`./line-clamp-box.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, TuiPositionService, TuiHoveredService],
    animations: [tuiFadeIn],
})
export class TuiLineClampBoxComponent extends TuiHintComponent {
    @HostBinding(`style.minWidth.px`)
    get width(): number {
        return this.accessor.getClientRect().width;
    }
}
