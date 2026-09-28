import fs from 'node:fs/promises';
import path from 'node:path';

import {getColorsMarkdown, getTypographyMarkdown} from './design-token-pages';

const COLORS = path.resolve(process.cwd(), 'projects/demo/src/pages/markup/colors');
const TYPOGRAPHY = path.resolve(
    process.cwd(),
    'projects/demo/src/pages/markup/typography',
);

async function html(folder: string): Promise<string> {
    return fs.readFile(path.join(folder, 'index.html'), 'utf-8');
}

describe('design token pages', () => {
    it('rebuilds the colors table with light and dark values per tab', async () => {
        const md = (await getColorsMarkdown(await html(COLORS), COLORS)) ?? '';

        expect(md).toContain('## Text');
        expect(md).toContain('## Backgrounds');
        // Opaque rgba collapses to hex; alpha and inherited (dark = light) values stay verbatim.
        expect(md).toContain('| `--tui-text-primary` | #1b1f3b | #ffffff |');
        expect(md).toContain(
            '| `--tui-text-secondary` | rgba(27, 31, 59, 0.65) | rgba(255, 255, 255, 0.72) |',
        );
        expect(md).toContain('| `--tui-text-primary-on-accent-1` | #fff | #fff |');
    });

    it('renders the theme-less Charts tab as a single Value column', async () => {
        const md = (await getColorsMarkdown(await html(COLORS), COLORS)) ?? '';

        expect(md).toContain('## Charts');
        expect(md).toContain('| `--tui-chart-categorical-01` | #ea97c4 |');
    });

    it('rebuilds the typography table with computed sizes', async () => {
        const md =
            (await getTypographyMarkdown(await html(TYPOGRAPHY), TYPOGRAPHY)) ?? '';

        expect(md).toContain('## Headings');
        expect(md).toContain('| Section titles | Variable name |');
        expect(md).toContain(
            '| `--tui-typography-heading-h1` | Bold | 50px | 56px (1.12) |',
        );
        expect(md).toContain(
            '| `--tui-typography-heading-h2` | Bold | 44px | 48px (1.09) |',
        );
    });

    it('returns null for pages without token tables', async () => {
        expect(
            await getColorsMarkdown('<tui-doc-page></tui-doc-page>', COLORS),
        ).toBeNull();
        expect(
            await getTypographyMarkdown('<tui-doc-page></tui-doc-page>', TYPOGRAPHY),
        ).toBeNull();
    });
});
