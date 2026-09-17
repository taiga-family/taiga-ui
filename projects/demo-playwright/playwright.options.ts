import {type test} from '@playwright/test';

// cspell:disable
export const TUI_PLAYWRIGHT_MOBILE_USER_AGENT =
    'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Mobile Safari/537.36';
// Samsung Galaxy Ace GT:
export const TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH = 375;
export const TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT = 480;
export const TUI_PLAYWRIGHT_MOBILE: Parameters<typeof test.use>[0] = {
    viewport: {
        width: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH,
        height: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT,
    },
    userAgent: TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
};
