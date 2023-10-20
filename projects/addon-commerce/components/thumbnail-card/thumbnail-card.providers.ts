import {Provider} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk';

export interface TuiThumbnailCardPreset {
    readonly color: string;
    readonly background: string;
}

export const TUI_THUMBNAIL_CARD_PRESETS = tuiCreateToken<
    Record<string, TuiThumbnailCardPreset>
>({});

export function tuiThumbnailCardPresetsProvider(
    useValue: Record<string, TuiThumbnailCardPreset>,
): Provider {
    return {
        provide: TUI_THUMBNAIL_CARD_PRESETS,
        useValue,
    };
}
