import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';
import {tuiExtractI18n} from '@taiga-ui/i18n';

/**
 * tui-preview i18n
 */
export const TUI_PREVIEW_TEXTS = tuiCreateTokenFromFactory(
    tuiExtractI18n(`previewTexts`),
);

/**
 * tui-preview zoom i18n
 */
export const TUI_PREVIEW_ZOOM_TEXTS = tuiCreateTokenFromFactory(
    tuiExtractI18n(`zoomTexts`),
);
