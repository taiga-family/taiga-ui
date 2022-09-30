import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';
import {TuiDestroyService, TuiHoveredService} from '@taiga-ui/cdk';
import {tuiFadeIn, TuiHintComponent, TuiPositionService} from '@taiga-ui/core';

@Component({
    selector: `tui-line-clamp-box`,
    template: `
        <ng-container *polymorpheusOutlet="content as text">{{ text }}</ng-container>
    `,
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
