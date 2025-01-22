import type {test} from '@playwright/test';

// cspell:disable
export const TUI_PLAYWRIGHT_MOBILE_USER_AGENT =
    'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
// Samsung Galaxy Ace GT:
export const TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH = 320;
export const TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT = 480;

export const TUI_PLAYWRIGHT_MOBILE: Parameters<typeof test.use>[0] = {
    viewport: {
        width: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH,
        height: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT,
    },
    userAgent: TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
};
