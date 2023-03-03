import {InjectionToken} from '@angular/core';
import {tuiExtractI18n} from '@taiga-ui/i18n';

/**
 * tui-preview i18n
 */
export const TUI_PREVIEW_TEXTS = new InjectionToken(`[TUI_PREVIEW_TEXTS]`, {
    factory: tuiExtractI18n(`previewTexts`),
});

/**
 * tui-preview zoom i18n
 */
export const TUI_PREVIEW_ZOOM_TEXTS = new InjectionToken(`[TUI_PREVIEW_ZOOM_TEXTS]`, {
    factory: tuiExtractI18n(`zoomTexts`),
});
