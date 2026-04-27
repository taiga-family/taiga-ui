import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tui-doc-documentation to table[tuiDocAPI]', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces tui-doc-documentation tag with table and adds tuiDocAPI attribute',
        migrate({template: '<tui-doc-documentation></tui-doc-documentation>'}),
    );

    it(
        'handles self-closing tui-doc-documentation tag',
        migrate({template: '<tui-doc-documentation />'}),
    );

    it(
        'migrates input ng-template row to tr[tuiDocAPIItem] (happy path)',
        migrate({
            template: /* HTML */ `
                <tui-doc-documentation>
                    <ng-template
                        documentationPropertyMode="input"
                        documentationPropertyName="tuiSensitive"
                        documentationPropertyType="boolean"
                        [(documentationPropertyValue)]="sensitive"
                    >
                        Sensitive mode
                    </ng-template>
                </tui-doc-documentation>
            `,
        }),
    );

    it(
        'wraps input property name with square brackets',
        migrate({
            template: /* HTML */ `
                <tui-doc-documentation>
                    <ng-template
                        documentationPropertyMode="input"
                        documentationPropertyName="appearance"
                        documentationPropertyType="string"
                        [documentationPropertyValues]="appearances"
                        [(documentationPropertyValue)]="appearance"
                    >
                        Appearance of the confirming button
                    </ng-template>
                </tui-doc-documentation>
            `,
        }),
    );

    it(
        'wraps output property name with parentheses and strips documentationProperty export from template reference variable',
        migrate({
            template: /* HTML */ `
                <tui-doc-documentation>
                    <ng-template
                        #documentationPropertyReject="documentationProperty"
                        documentationPropertyMode="output"
                        documentationPropertyName="reject"
                        documentationPropertyType="TuiFileLike[]"
                    >
                        Emits files that were rejected.
                    </ng-template>
                </tui-doc-documentation>
            `,
        }),
    );

    it(
        'wraps input-output property name with two-way binding brackets',
        migrate({
            template: /* HTML */ `
                <tui-doc-documentation>
                    <ng-template
                        documentationPropertyMode="input-output"
                        documentationPropertyName="expanded"
                        documentationPropertyType="boolean"
                        [(documentationPropertyValue)]="expanded"
                    >
                        Expanded/collapsed state
                    </ng-template>
                </tui-doc-documentation>
            `,
        }),
    );

    it(
        'keeps property name bare when documentationPropertyMode is absent',
        migrate({
            template: /* HTML */ `
                <tui-doc-documentation>
                    <ng-template
                        documentationPropertyName="content"
                        documentationPropertyType="PolymorpheusContent"
                    >
                        Content of the confirm
                    </ng-template>
                </tui-doc-documentation>
            `,
        }),
    );

    it(
        'renames [documentationPropertyValues] to [items]',
        migrate({
            template: /* HTML */ `
                <tui-doc-documentation>
                    <ng-template
                        documentationPropertyMode="input"
                        documentationPropertyName="error"
                        documentationPropertyType="TuiValidationError | string | null"
                        [documentationPropertyValues]="errorVariants"
                        [(documentationPropertyValue)]="selectedError"
                    >
                        Error value
                    </ng-template>
                </tui-doc-documentation>
            `,
        }),
    );

    it(
        'renames one-way [documentationPropertyValue] + (documentationPropertyValueChange) to [value] + (valueChange)',
        migrate({
            template: /* HTML */ `
                <tui-doc-documentation>
                    <ng-template
                        documentationPropertyMode="input"
                        documentationPropertyName="multiple"
                        documentationPropertyType="boolean"
                        [documentationPropertyValue]="multiple"
                        (documentationPropertyValueChange)="multipleChange($event)"
                    >
                        Allows to upload several files
                    </ng-template>
                </tui-doc-documentation>
            `,
        }),
    );

    it(
        'migrates multiple ng-template rows inside a single tui-doc-documentation',
        migrate({
            template: /* HTML */ `
                <tui-doc-documentation>
                    <ng-template
                        documentationPropertyMode="input"
                        documentationPropertyName="total"
                        documentationPropertyType="number"
                        [(documentationPropertyValue)]="total"
                    >
                        Total amount of items
                    </ng-template>
                    <ng-template
                        documentationPropertyMode="input"
                        documentationPropertyName="size"
                        documentationPropertyType="number"
                        [(documentationPropertyValue)]="size"
                    >
                        Items per page
                    </ng-template>
                </tui-doc-documentation>
            `,
        }),
    );

    it(
        'extracts [heading] from tui-doc-documentation into a separate h3 above the table',
        migrate({
            template: /* HTML */ `
                <tui-doc-documentation heading="TuiInputFiles">
                    <ng-template
                        documentationPropertyName="disabled"
                        documentationPropertyType="boolean"
                        [(documentationPropertyValue)]="disabled"
                    >
                        Disabled state
                    </ng-template>
                </tui-doc-documentation>
            `,
        }),
    );

    it(
        'does not touch ng-template without documentationProperty attributes',
        migrate({
            template: /* HTML */ `
                <ng-template
                    #other
                    let-item
                >
                    {{ item }}
                </ng-template>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
