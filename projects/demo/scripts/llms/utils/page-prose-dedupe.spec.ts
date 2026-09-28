import {stripDuplicateExampleProse} from './page-prose';

const FENCE = '```';

describe('stripDuplicateExampleProse', () => {
    const usage = [
        '### Usage Examples',
        '',
        '#### Lazy loading dialog',
        '',
        '**HTML:**',
        `${FENCE}html`,
        '<button routerLink="path/to/lazy" tuiButton type="button">',
        '    Open dialog',
        '</button>',
        FENCE,
    ].join('\n');

    it('drops an empty prose section whose heading a usage example repeats', () => {
        const prose = '## Lazy loading dialog';

        expect(stripDuplicateExampleProse(prose, usage)).toBe('');
    });

    it('drops a section whose body is only demo markup the code block already shows', () => {
        // The Routable dialog renders "Open dialog" as prose and again in the HTML code.
        const prose = '## Lazy loading dialog\n\nOpen dialog';

        expect(stripDuplicateExampleProse(prose, usage)).toBe('');
    });

    it('keeps a section that carries its own code snippet', () => {
        const prose = [
            '## Lazy loading dialog',
            '',
            'Some setup that is not part of the demo:',
            '',
            `${FENCE}ts`,
            'export const provider = {};',
            FENCE,
        ].join('\n');

        expect(stripDuplicateExampleProse(prose, usage)).toBe(prose);
    });

    it('keeps a section with prose the usage block does not contain', () => {
        const prose =
            '## Lazy loading dialog\n\nThere are a few extra caveats worth knowing about.';

        expect(stripDuplicateExampleProse(prose, usage)).toBe(prose);
    });

    it('keeps sections whose heading no usage example matches', () => {
        const prose = '## Text\n\nColor tokens for text.';

        expect(stripDuplicateExampleProse(prose, usage)).toBe(prose);
    });

    it('preserves the intro preamble while dropping a redundant section', () => {
        const prose = 'Intro paragraph about the page.\n\n## Lazy loading dialog';

        expect(stripDuplicateExampleProse(prose, usage)).toBe(
            'Intro paragraph about the page.',
        );
    });

    it('returns prose unchanged when there is no usage block', () => {
        const prose = '## Lazy loading dialog\n\nOpen dialog';

        expect(stripDuplicateExampleProse(prose, '')).toBe(prose);
    });
});
