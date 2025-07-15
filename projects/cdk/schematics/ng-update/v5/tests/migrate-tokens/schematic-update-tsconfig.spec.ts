import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';

import type {TuiSchema} from '../../../../ng-add/schema';

const collectionPath = join(__dirname, '../../../../migration.json');

interface TsConfig {
    compilerOptions?: {
        typeRoots?: string[];
        types?: string[];
        [key: string]: any;
    };
    [key: string]: any;
}

describe('Update tsconfig.json', () => {
    const runTsConfigMigration = async (tsConfigContent: string): Promise<TsConfig> => {
        const host = new UnitTestTree(new HostTree());
        const runner = new SchematicTestRunner('schematics', collectionPath);

        host.create('tsconfig.json', tsConfigContent);
        host.create('package.json', '{}');
        host.create('test/app/tokens.ts', 'export const FOO = 1;');

        await runner.runSchematic(
            'updateToV5',
            {'skip-logs': true} as Partial<TuiSchema>,
            host,
        );

        return JSON.parse(host.readContent('tsconfig.json'));
    };

    it('should update tsconfig.json with required properties', async () => {
        const tsConfig = await runTsConfigMigration(`{
            "compilerOptions": {
                "baseUrl": "./"
            }
        }`);

        expect(tsConfig.compilerOptions?.typeRoots).toEqual([
            'node_modules/@types',
            'node_modules/@taiga-ui/tsconfig',
        ]);
        expect(tsConfig.compilerOptions?.types).toEqual(['node', 'ng-dev-mode']);
    });

    it('should not duplicate existing entries', async () => {
        const tsConfig = await runTsConfigMigration(`{
            "compilerOptions": {
                "typeRoots": ["node_modules/@types", "node_modules/@taiga-ui/tsconfig"],
                "types": ["node"]
            }
        }`);

        expect(tsConfig.compilerOptions?.typeRoots).toEqual([
            'node_modules/@types',
            'node_modules/@taiga-ui/tsconfig',
        ]);
        expect(tsConfig.compilerOptions?.types).toEqual(['node', 'ng-dev-mode']);
    });

    it('should create compilerOptions if not present', async () => {
        const tsConfig = await runTsConfigMigration('{}');

        expect(tsConfig.compilerOptions?.typeRoots).toEqual([
            'node_modules/@types',
            'node_modules/@taiga-ui/tsconfig',
        ]);
        expect(tsConfig.compilerOptions?.types).toEqual(['node', 'ng-dev-mode']);
    });

    it('should handle empty typeRoots and types arrays', async () => {
        const tsConfig = await runTsConfigMigration(`{
            "compilerOptions": {
                "typeRoots": [],
                "types": []
            }
        }`);

        expect(tsConfig.compilerOptions?.typeRoots).toEqual([
            'node_modules/@taiga-ui/tsconfig',
        ]);
        expect(tsConfig.compilerOptions?.types).toEqual(['node', 'ng-dev-mode']);
    });

    it('should preserve existing values', async () => {
        const tsConfig = await runTsConfigMigration(`{
            "compilerOptions": {
                "typeRoots": ["custom/typings"],
                "types": ["custom-type"]
            }
        }`);

        expect(tsConfig.compilerOptions?.typeRoots).toEqual([
            'custom/typings',
            'node_modules/@taiga-ui/tsconfig',
        ]);
        expect(tsConfig.compilerOptions?.types).toEqual([
            'custom-type',
            'node',
            'ng-dev-mode',
        ]);
    });

    it('should not modify tsconfig when already configured', async () => {
        const tsConfig = await runTsConfigMigration(`{
            "compilerOptions": {
                "typeRoots": ["node_modules/@types", "node_modules/@taiga-ui/tsconfig"],
                "types": ["node", "ng-dev-mode", "other"]
            }
        }`);

        expect(tsConfig.compilerOptions?.typeRoots).toEqual([
            'node_modules/@types',
            'node_modules/@taiga-ui/tsconfig',
        ]);
        expect(tsConfig.compilerOptions?.types).toEqual(['node', 'ng-dev-mode', 'other']);
    });
});
