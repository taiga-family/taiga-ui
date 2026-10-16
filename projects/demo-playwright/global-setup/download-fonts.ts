import {createHash} from 'node:crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as tls from 'node:tls';

import {Agent, fetch, type RequestInit, type Response} from 'undici';

const STUBS_DIR = path.join(__dirname, '../stubs');
const FONT_MANIFEST = path.join(STUBS_DIR, 'fonts.json');

// Google Fonts serves different font formats based on User-Agent
const USER_AGENTS = [
    // Modern Chrome UA → .woff2
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    '', // Empty UA → .ttf (full charset, used by Angular's build-time font inlining)
];

interface FontStub {
    filename: string;
    contentType: string;
}

function getFontFilename(url: string): string {
    const {pathname, search} = new URL(url);
    const filename = pathname.split('/').pop() ?? '';

    return search
        ? `${filename}-${createHash('sha256').update(url).digest('hex')}`
        : filename;
}

function resolveUrls(cssText: string, cssUrl: string): string[] {
    const baseUrl = cssUrl.slice(0, cssUrl.lastIndexOf('/') + 1);

    return [...cssText.matchAll(/url\(['"]?([^'")]+)['"]?\)/g)].map((m) => {
        const raw = m.at(1)!;

        return raw.startsWith('http') ? raw : new URL(raw, baseUrl).href;
    });
}

async function createDispatcher(caUrl: string): Promise<Agent> {
    const response = await fetchWithRetry({url: caUrl});
    const caBundle = await response.text();

    return new Agent({connect: {ca: [...tls.rootCertificates, caBundle]}});
}

export async function downloadFonts(
    cssUrl: string,
    {
        ca,
    }: {
        /**
         * URL of a PEM bundle with root CAs to trust in addition to Node's defaults
         * (for CDNs signed by CAs missing from Node's bundle).
         * The bundle itself is downloaded with default certificate verification.
         */
        ca?: string;
    } = {},
): Promise<void> {
    const dispatcher = ca ? await createDispatcher(ca) : undefined;
    const cssTexts = await Promise.all(
        USER_AGENTS.map(async (ua) =>
            fetchWithRetry({
                url: cssUrl,
                options: {headers: {'User-Agent': ua}, dispatcher},
            }).then(async (response) => response.text()),
        ),
    );

    const fontUrls = [...new Set(cssTexts.flatMap((css) => resolveUrls(css, cssUrl)))];
    const manifest: Record<string, FontStub> = {};

    await Promise.allSettled(
        fontUrls.map(async (url) => {
            const filename = getFontFilename(url);
            const response = await fetchWithRetry({url, options: {dispatcher}});
            const buffer = Buffer.from(await response.arrayBuffer());

            fs.writeFileSync(path.join(STUBS_DIR, filename), buffer);
            manifest[url] = {
                filename,
                contentType:
                    response.headers.get('content-type') ?? 'application/octet-stream',
            };
        }),
    );

    fs.writeFileSync(FONT_MANIFEST, JSON.stringify(manifest));
    fs.writeFileSync(path.join(STUBS_DIR, 'fonts.css'), cssTexts.at(0)!);
}

interface FetchWithRetryOptions {
    url: string;
    options?: RequestInit;
    retries?: number;
    attempt?: number;
}

async function fetchWithRetry({
    url,
    options,
    retries = 5,
    attempt = 0,
}: FetchWithRetryOptions): Promise<Response> {
    const response = await fetch(url, options).catch(() => null);

    if (response?.ok) {
        return response;
    }

    if (retries <= 0) {
        throw new Error(`Failed to fetch ${url}`);
    }

    const delay = 1_000 * 2 ** attempt;

    // exponential backoff: 1s, 2s, 4s, 8s, 16s (~31s total max for 5 retries)
    await new Promise((resolve) => setTimeout(resolve, delay));

    return fetchWithRetry({url, options, retries: retries - 1, attempt: attempt + 1});
}
