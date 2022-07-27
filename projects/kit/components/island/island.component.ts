import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: `tui-island, a[tuiIsland]`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: `./island.template.html`,
    styleUrls: [`./island.style.less`],
    host: {
        class: `tui-island`,
    },
})
export class TuiIslandComponent {
    @Input()
    @tuiDefaultProp()
    size: TuiSizeL | TuiSizeS = `m`;

    @Input()
    @tuiDefaultProp()
    textAlign: 'left' | 'right' | 'center' = `left`;

    @Input()
    @HostBinding(`class.tui-island_hoverable`)
    @tuiDefaultProp()
    hoverable = false;

    @Input()
    @HostBinding(`class.tui-island_transparent`)
    @tuiDefaultProp()
    transparent = false;

    @HostBinding(`class.tui-island_size_s`)
    get sizeS(): boolean {
        return this.size === `s`;
    }

    @HostBinding(`class.tui-island_size_m`)
    get sizeM(): boolean {
        return this.size === `m`;
    }

    @HostBinding(`class.tui-island_size_l`)
    get sizeL(): boolean {
        return this.size === `l`;
    }

    @HostBinding(`class.tui-island_text-align_left`)
    get textAlignLeft(): boolean {
        return this.textAlign === `left`;
    }

    @HostBinding(`class.tui-island_text-align_center`)
    get textAlignCenter(): boolean {
        return this.textAlign === `center`;
    }

    @HostBinding(`class.tui-island_text-align_right`)
    get textAlignRight(): boolean {
        return this.textAlign === `right`;
    }
}
