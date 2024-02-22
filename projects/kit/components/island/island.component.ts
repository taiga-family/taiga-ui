import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'tui-island, a[tuiIsland]',
    templateUrl: './island.template.html',
    styleUrls: ['./island.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-island',
    },
})
export class TuiIslandComponent {
    @Input()
    public size: TuiSizeL | TuiSizeS = 'm';

    @Input()
    public textAlign: 'center' | 'left' | 'right' = 'left';

    @Input()
    @HostBinding('class.tui-island_hoverable')
    public hoverable = false;

    @Input()
    @HostBinding('class.tui-island_transparent')
    public transparent = false;

    @HostBinding('class.tui-island_size_s')
    public get sizeS(): boolean {
        return this.size === 's';
    }

    @HostBinding('class.tui-island_size_m')
    public get sizeM(): boolean {
        return this.size === 'm';
    }

    @HostBinding('class.tui-island_size_l')
    public get sizeL(): boolean {
        return this.size === 'l';
    }

    @HostBinding('class.tui-island_text-align_left')
    public get textAlignLeft(): boolean {
        return this.textAlign === 'left';
    }

    @HostBinding('class.tui-island_text-align_center')
    public get textAlignCenter(): boolean {
        return this.textAlign === 'center';
    }

    @HostBinding('class.tui-island_text-align_right')
    public get textAlignRight(): boolean {
        return this.textAlign === 'right';
    }
}
