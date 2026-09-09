import {htmlToMarkdown} from './page-prose';

describe('htmlToMarkdown', () => {
    it('renders headings and inline code', () => {
        const md = htmlToMarkdown(
            '<h2 tuiHeader="h6"><div tuiTitle>Tokens</div></h2><p>Hello <code>world</code>.</p>',
        );

        expect(md).toContain('## Tokens');
        expect(md).toContain('Hello `world`.');
    });

    it('keeps a static href as a link but drops a bound [href] to plain text', () => {
        const md = htmlToMarkdown(
            '<a href="https://x.dev">X</a> and <a [href]="y">Y</a>',
        );

        expect(md).toContain('[X](https://x.dev)');
        expect(md).not.toContain('](y)');
        expect(md).toContain('Y');
    });

    it('decodes entities and inline emphasis', () => {
        const md = htmlToMarkdown(
            '<p>All <em>deps</em> use <code>&#64;taiga-ui/cdk</code></p>',
        );

        expect(md).toContain('_deps_');
        expect(md).toContain('`@taiga-ui/cdk`');
        expect(md).not.toContain('&#64;');
    });

    it('renders list items and checkbox labels on the bullet line', () => {
        const list = htmlToMarkdown('<ul><li>One</li><li>Two</li></ul>');

        expect(list).toContain('- One');
        expect(list).toContain('- Two');

        const checklist = htmlToMarkdown(
            '<label tuiLabel><input tuiCheckbox type="checkbox" /> Do the thing</label>',
        );

        expect(checklist).toBe('- Do the thing');
    });

    it('turns a tui-doc-example heading into a section', () => {
        const md = htmlToMarkdown(
            '<tui-doc-example heading="Before you update" [preview]="false"><p>body</p></tui-doc-example>',
        );

        expect(md).toContain('## Before you update');
        expect(md).toContain('body');
    });

    it('preserves fenced code blocks and strips interpolations', () => {
        const md = htmlToMarkdown(
            '<p>Version {{ tuiMajor }} config:</p>\n```json\n{"a": 1}\n```',
        );

        expect(md).toContain('```json');
        expect(md).toContain('{"a": 1}');
        expect(md).not.toContain('{{');
        expect(md).not.toContain('FENCE');
    });

    it('flattens card-style anchors into list items', () => {
        const md = htmlToMarkdown(
            '<a href="https://maskito.dev" tuiCardLarge><h3>Maskito</h3><div>Input masks.</div></a>',
        );

        expect(md).toContain('- **Maskito**');
        expect(md).toContain('Input masks.');
        expect(md).toContain('(https://maskito.dev)');
    });
});
