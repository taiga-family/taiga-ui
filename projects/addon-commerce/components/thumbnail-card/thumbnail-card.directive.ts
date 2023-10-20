import {Directive, HostBinding, Inject, Input} from '@angular/core';

import {
    TUI_THUMBNAIL_CARD_PRESETS,
    TuiThumbnailCardPreset,
} from './thumbnail-card.providers';

@Directive({
    selector: 'tui-thumbnail-card[preset]',
})
export class TuiThumbnailCardDirective {
    @Input()
    preset = '';

    constructor(
        @Inject(TUI_THUMBNAIL_CARD_PRESETS)
        private readonly presets: Record<string, TuiThumbnailCardPreset>,
    ) {}

    @HostBinding('style.color')
    get color(): string | undefined {
        return this.presets[this.preset]?.color;
    }

    @HostBinding('style.background')
    get background(): string | undefined {
        return this.presets[this.preset]?.background;
    }
}
