import {extractExampleDescriptions} from '../scripts/llms/utils/file-system';

describe('extractExampleDescriptions', () => {
    it('reads @switch ($index) descriptions from a @for examples loop', () => {
        const content = `
            <tui-doc-page header="ComboBox">
                <ng-template pageTab>
                    Intro text.
                    @for (example of examples; track example) {
                        <tui-doc-example
                            [component]="$index + 1 | tuiComponent"
                            [content]="$index + 1 | tuiExample"
                            [description]="description"
                            [heading]="example"
                        />
                        <ng-template #description>
                            @switch ($index) {
                                @case (0) {
                                    First example description.
                                }
                                @case (1) {
                                    Second one with <code>code</code> and
                                    <a href="x">a link</a>.
                                }
                            }
                        </ng-template>
                    }
                </ng-template>
            </tui-doc-page>
        `;

        const result = extractExampleDescriptions(content);

        // Case N maps to example folder N + 1.
        expect(result['1']?.description).toBe('First example description.');
        expect(result['2']?.description).toBe('Second one with code and a link.');
    });

    it('reads headings from an inline @for array', () => {
        const content = `
            <tui-doc-page header="Accordion">
                <ng-template pageTab>
                    @for (example of ['Basic', 'Custom']; track example) {
                        <tui-doc-example
                            [content]="$index + 1 | tuiExample"
                            [description]="description"
                            [heading]="example"
                        />
                        <ng-template #description>
                            @switch ($index) {
                                @case (0) {
                                    Basic description.
                                }
                                @case (1) {
                                    Custom description.
                                }
                            }
                        </ng-template>
                    }
                </ng-template>
            </tui-doc-page>
        `;

        const result = extractExampleDescriptions(content);

        expect(result['1']?.heading).toBe('Basic');
        expect(result['2']?.heading).toBe('Custom');
        expect(result['1']?.description).toBe('Basic description.');
        expect(result['2']?.description).toBe('Custom description.');
    });

    it('unescapes HTML entities in descriptions', () => {
        const content = `
            <tui-doc-page header="ComboBox">
                <ng-template pageTab>
                    @for (example of examples; track example) {
                        <tui-doc-example
                            [content]="$index + 1 | tuiExample"
                            [description]="description"
                            [heading]="example"
                        />
                        <ng-template #description>
                            @switch ($index) {
                                @case (0) {
                                    Works with <code>&#64;angular/cdk/scrolling</code>
                                    and <code>&lt;tui-textfield /&gt;</code>.
                                }
                            }
                        </ng-template>
                    }
                </ng-template>
            </tui-doc-page>
        `;

        const result = extractExampleDescriptions(content);

        expect(result['1']?.description).toBe(
            'Works with @angular/cdk/scrolling and <tui-textfield />.',
        );
    });

    it('still reads static heading + inline description examples', () => {
        const content = `
            <tui-doc-page header="Button">
                <ng-template pageTab>
                    <tui-doc-example
                        heading="Basics"
                        [content]="1 | tuiExample"
                    >
                        <ng-template>
                            A plain button.
                        </ng-template>
                    </tui-doc-example>
                </ng-template>
            </tui-doc-page>
        `;

        const result = extractExampleDescriptions(content);

        expect(result['1']?.heading).toBe('Basics');
        expect(result['1']?.description).toBe('A plain button.');
    });
});
