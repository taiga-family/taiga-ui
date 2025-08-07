import {Directive, Input} from '@angular/core';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

/**
 * @deprecated: drop in v5.0 use {@link TuiCardLarge}
 * https://taiga-ui.dev/layout/card-large
 */
@Directive({
    standalone: true,
    selector: 'tui-island, a[tuiIsland]',
    host: {
        class: 'tui-island',
        '[class.tui-island_hoverable]': 'hoverable',
        '[class.tui-island_transparent]': 'transparent',
        '[class.tui-island_size_s]': 'sizeS',
        '[class.tui-island_size_m]': 'sizeM',
        '[class.tui-island_size_l]': 'sizeL',
        '[class.tui-island_text-align_left]': 'textAlignLeft',
        '[class.tui-island_text-align_center]': 'textAlignCenter',
        '[class.tui-island_text-align_right]': 'textAlignRight',
    },
})
export class TuiIslandDirective {
    @Input()
    public size: TuiSizeL | TuiSizeS = 'm';

    @Input()
    public textAlign: 'center' | 'left' | 'right' = 'left';

    @Input()
    public hoverable = false;

    @Input()
    public transparent = false;

    protected get sizeS(): boolean {
        return this.size === 's';
    }

    protected get sizeM(): boolean {
        return this.size === 'm';
    }

    protected get sizeL(): boolean {
        return this.size === 'l';
    }

    protected get textAlignLeft(): boolean {
        return this.textAlign === 'left';
    }

    protected get textAlignCenter(): boolean {
        return this.textAlign === 'center';
    }

    protected get textAlignRight(): boolean {
        return this.textAlign === 'right';
    }
}
