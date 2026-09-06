import {existsSync, readFileSync} from 'node:fs';
import {join} from 'node:path';

interface SchematicEntry {
    factory: string;
    schema?: string;
}

// Dangling entries (factory/schema whose source was deleted) load lazily, so they
// pass `ng add` and only fail when that schematic runs. Catch them up front.
describe('@taiga-ui/cdk collection.json references only existing files', () => {
    const schematicsDir = join(__dirname, '..');
    const collection: {schematics: Record<string, SchematicEntry>} = JSON.parse(
        readFileSync(join(schematicsDir, 'collection.json'), 'utf8'),
    );

    const entries = Object.entries(collection.schematics);

    const moduleExists = (modulePath: string): boolean =>
        ['.ts', '.js', '/index.ts', '/index.js'].some((suffix) =>
            existsSync(join(schematicsDir, `${modulePath}${suffix}`)),
        );

    it.each(entries)('"%s" points at an existing factory module', (_name, desc) => {
        expect(moduleExists(desc.factory.split('#')[0] ?? '')).toBe(true);
    });

    const schemaEntries = entries
        .map(([name, {schema}]) => ({name, schema}))
        .filter((entry): entry is {name: string; schema: string} =>
            Boolean(entry.schema),
        );

    it.each(schemaEntries)('"$name" points at an existing schema file', ({schema}) => {
        expect(existsSync(join(schematicsDir, schema))).toBe(true);
    });
});
