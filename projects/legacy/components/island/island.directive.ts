import {Directive, HostBinding, Input} from '@angular/core';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Directive({
    standalone: true,
    selector: 'tui-island, a[tuiIsland]',
    host: {
        class: 'tui-island',
    },
})
export class TuiIslandDirective {
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
    protected get sizeS(): boolean {
        return this.size === 's';
    }

    @HostBinding('class.tui-island_size_m')
    protected get sizeM(): boolean {
        return this.size === 'm';
    }

    @HostBinding('class.tui-island_size_l')
    protected get sizeL(): boolean {
        return this.size === 'l';
    }

    @HostBinding('class.tui-island_text-align_left')
    protected get textAlignLeft(): boolean {
        return this.textAlign === 'left';
    }

    @HostBinding('class.tui-island_text-align_center')
    protected get textAlignCenter(): boolean {
        return this.textAlign === 'center';
    }

    @HostBinding('class.tui-island_text-align_right')
    protected get textAlignRight(): boolean {
        return this.textAlign === 'right';
    }
}
