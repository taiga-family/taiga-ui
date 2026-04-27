import * as fs from 'node:fs';
import * as path from 'node:path';

const STUBS_DIR = path.join(__dirname, '../stubs');

// Google Fonts serves different font formats based on User-Agent
const USER_AGENTS = [
    // Modern Chrome UA → .woff2
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    '', // Empty UA → .ttf (full charset, used by Angular's build-time font inlining)
];

function resolveUrls(cssText: string, cssUrl: string): string[] {
    const baseUrl = cssUrl.slice(0, cssUrl.lastIndexOf('/') + 1);

    return [...cssText.matchAll(/url\(['"]?([^'")]+)['"]?\)/g)].map((m) => {
        const raw = m[1]!;

        return raw.startsWith('http') ? raw : new URL(raw, baseUrl).href;
    });
}

export async function downloadFonts(cssUrl: string): Promise<void> {
    const cssTexts = await Promise.all(
        USER_AGENTS.map(async (ua) =>
            fetchWithRetry(cssUrl, {headers: {'User-Agent': ua}}).then(async (response) =>
                response.text(),
            ),
        ),
    );

    const fontUrls = [...new Set(cssTexts.flatMap((css) => resolveUrls(css, cssUrl)))];

    await Promise.allSettled(
        fontUrls.map(async (url) => {
            const filename = new URL(url).pathname.split('/').pop() ?? '';
            const response = await fetchWithRetry(url);
            const buffer = Buffer.from(await response.arrayBuffer());

            fs.writeFileSync(path.join(STUBS_DIR, filename), buffer);
        }),
    );

    fs.writeFileSync(path.join(STUBS_DIR, 'fonts.css'), cssTexts[0]!);
}

async function fetchWithRetry(
    url: string,
    options?: RequestInit,
    retries = 5,
): Promise<Response> {
    const response = await fetch(url, options).catch(() => null);

    if (response?.ok) {
        return response;
    }

    if (retries <= 0) {
        throw new Error(`Failed to fetch ${url}`);
    }

    return fetchWithRetry(url, options, retries - 1);
}
