import type {Page} from '@playwright/test';

const DEFAULT_MOCKS = [
    {
        patterns: [
            /.*avatar.jpg/,
            /.*avatars.githubusercontent.com.*/,
            /https:\/\/github.com\/.*.png.*/,
            /https:\/\/yandex.ru\/map-widget.*/,
            /https:\/\/m.media-amazon.com\/.*.jpg.*/,
            /.*bf2e94ae58ee713717faf397958a8e3d.jpg/, // filename - MD5 hash value of file content (waterplea avatar)
        ],
        mockImage: `${__dirname}/../stubs/github-avatar.jpeg`,
    },
    {
        patterns: [
            /.*ng-web-apis.github.io.*.svg$/,
            /.*youtube.com.*/,
            /.*flaticon.com.*/,
            /.*.mp4/,
        ],
        mockImage: `${__dirname}/../stubs/web-api.svg`,
    },
] as const;

export async function tuiMockImages(
    page: Page,
    imagesMocks: ReadonlyArray<{
        patterns: readonly RegExp[];
        mockImage: string;
    }> = DEFAULT_MOCKS,
): Promise<void> {
    for (const {patterns, mockImage} of imagesMocks) {
        const pattern = new RegExp(patterns.map((reg) => reg.source).join('|'));

        await page.route(pattern, async (route) => route.fulfill({path: mockImage}));
    }
}
