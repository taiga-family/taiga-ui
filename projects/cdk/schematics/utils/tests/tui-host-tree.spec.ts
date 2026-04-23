import {normalize, virtualFs} from '@angular-devkit/core';
import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';

import {TuiHostTree} from '../host';

describe('TuiHostTree', () => {
    function getFiles(tree: UnitTestTree): string[] {
        const files: string[] = [];

        tree.visit((path) => {
            files.push(path);
        });

        return files;
    }

    function createHostWithFiles(files: Record<string, string>): HostTree {
        const memoryHost = new virtualFs.SimpleMemoryHost();
        const syncHost = new virtualFs.SyncDelegateHost(memoryHost);

        Object.entries(files).forEach(([path, content]) => {
            const normalizedPath = normalize(path);

            syncHost.write(normalizedPath, virtualFs.stringToFileBuffer(content));
        });

        return new HostTree(memoryHost);
    }

    it('should filter out node_modules directories', () => {
        const host = createHostWithFiles({
            'node_modules/package/index.ts': 'export const test = 1;',
            'src/app/node_modules/local-pkg/index.ts': 'export const pkg = 1;',
            'src/app/component.ts': 'export class Component {}',
        });

        const tree = new UnitTestTree(new TuiHostTree(host));
        const files = getFiles(tree);

        expect(files).not.toContain('/node_modules/package/index.ts');
        expect(files).not.toContain('/src/app/node_modules/local-pkg/index.ts');
        expect(files).toContain('/src/app/component.ts');
    });

    it('should filter out dist directories', () => {
        const host = createHostWithFiles({
            'dist/out.js': 'console.log("dist");',
            'project/dist/bundle.js': 'console.log("bundle");',
            'src/app/component.ts': 'export class Component {}',
        });

        const tree = new UnitTestTree(new TuiHostTree(host));
        const files = getFiles(tree);

        expect(files).not.toContain('/dist/out.js');
        expect(files).not.toContain('/project/dist/bundle.js');
        expect(files).toContain('/src/app/component.ts');
    });

    it('should filter out e2e directories', () => {
        const host = createHostWithFiles({
            'e2e/tests/spec.ts': 'describe("e2e", () => {});',
            'project/e2e/integration.ts': 'it("integration", () => {});',
            'src/app/component.ts': 'export class Component {}',
        });

        const tree = new UnitTestTree(new TuiHostTree(host));
        const files = getFiles(tree);

        expect(files).not.toContain('/e2e/tests/spec.ts');
        expect(files).not.toContain('/project/e2e/integration.ts');
        expect(files).toContain('/src/app/component.ts');
    });

    it('should filter out hidden directories', () => {
        const host = createHostWithFiles({
            '.git/config': '[core]',
            '.github/workflows/ci.yml': 'name: CI',
            '.husky/pre-commit': 'npm test',
            '.vscode/settings.json': '{}',
            '.idea/workspace.xml': '<project>',
            '.nx/cache/file.txt': 'cache',
            '.angular/cache.json': '{}',
            'src/app/component.ts': 'export class Component {}',
        });

        const tree = new UnitTestTree(new TuiHostTree(host));
        const files = getFiles(tree);

        expect(files).not.toContain('/.git/config');
        expect(files).not.toContain('/.github/workflows/ci.yml');
        expect(files).not.toContain('/.husky/pre-commit');
        expect(files).not.toContain('/.vscode/settings.json');
        expect(files).not.toContain('/.idea/workspace.xml');
        expect(files).not.toContain('/.nx/cache/file.txt');
        expect(files).not.toContain('/.angular/cache.json');
        expect(files).toContain('/src/app/component.ts');
    });

    it('should filter out tmp and temp directories', () => {
        const host = createHostWithFiles({
            'tmp/file.txt': 'temp',
            '.tmp/cache': 'cache',
            'temp/logs.txt': 'logs',
            'src/app/component.ts': 'export class Component {}',
        });

        const tree = new UnitTestTree(new TuiHostTree(host));
        const files = getFiles(tree);

        expect(files).not.toContain('/tmp/file.txt');
        expect(files).not.toContain('/.tmp/cache');
        expect(files).not.toContain('/temp/logs.txt');
        expect(files).toContain('/src/app/component.ts');
    });

    it('should filter out coverage and build directories', () => {
        const host = createHostWithFiles({
            'coverage/lcov.info': 'coverage data',
            'build/output.js': 'built',
            '.cache/webpack': 'cache',
            'src/app/component.ts': 'export class Component {}',
        });

        const tree = new UnitTestTree(new TuiHostTree(host));
        const files = getFiles(tree);

        expect(files).not.toContain('/coverage/lcov.info');
        expect(files).not.toContain('/build/output.js');
        expect(files).not.toContain('/.cache/webpack');
        expect(files).toContain('/src/app/component.ts');
    });

    it('should filter out other excluded directories', () => {
        const host = createHostWithFiles({
            'scripts/build.js': 'console.log("build");',
            'dll/bundle.dll': 'dll',
            '__build__/output.js': 'built',
            'allure-results/data.json': '{}',
            '.rpt2_cache/data': 'cache',
            '.devplatform/config': 'config',
            '.gitlab/ci.yml': 'ci',
            'src/app/component.ts': 'export class Component {}',
        });

        const tree = new UnitTestTree(new TuiHostTree(host));
        const files = getFiles(tree);

        expect(files).not.toContain('/scripts/build.js');
        expect(files).not.toContain('/dll/bundle.dll');
        expect(files).not.toContain('/__build__/output.js');
        expect(files).not.toContain('/allure-results/data.json');
        expect(files).not.toContain('/.rpt2_cache/data');
        expect(files).not.toContain('/.devplatform/config');
        expect(files).not.toContain('/.gitlab/ci.yml');
        expect(files).toContain('/src/app/component.ts');
    });

    it('should filter out log files', () => {
        const host = createHostWithFiles({
            'app.log': 'logs',
            'logs/error.log': 'error',
            'src/app/component.ts': 'export class Component {}',
        });

        const tree = new UnitTestTree(new TuiHostTree(host));
        const files = getFiles(tree);

        expect(files).not.toContain('/app.log');
        expect(files).not.toContain('/logs/error.log');
        expect(files).toContain('/src/app/component.ts');
    });

    it('should include valid source files', () => {
        const host = createHostWithFiles({
            'src/app/component.ts': 'export class Component {}',
            'src/app/component.html': '<div>Template</div>',
            'src/app/component.less': '.class { color: red; }',
            'src/app/component.spec.ts': 'describe("Component", () => {});',
            'libs/utils/helper.ts': 'export const helper = () => {};',
            'package.json': '{}',
            'angular.json': '{}',
        });

        const tree = new UnitTestTree(new TuiHostTree(host));
        const files = getFiles(tree);

        expect(files).toContain('/src/app/component.ts');
        expect(files).toContain('/src/app/component.html');
        expect(files).toContain('/src/app/component.less');
        expect(files).toContain('/src/app/component.spec.ts');
        expect(files).toContain('/libs/utils/helper.ts');
        expect(files).toContain('/package.json');
        expect(files).toContain('/angular.json');
    });

    it('should allow custom ignore patterns', () => {
        const customIgnores = [
            '**/custom/**',
            '**/ignored/**',
            '**/.git/**',
            '**/build/**',
            '**/.cache/**',
            '**/temp/**',
            '*.log',
            '**/*.log',
        ];

        const host = createHostWithFiles({
            'custom/file.ts': 'export const x = 1;',
            'ignored/file.ts': 'export const y = 2;',
            'src/app/component.ts': 'export class Component {}',
        });

        const tree = new UnitTestTree(new TuiHostTree(host, customIgnores));
        const files = getFiles(tree);

        expect(files).not.toContain('/custom/file.ts');
        expect(files).not.toContain('/ignored/file.ts');
        expect(files).toContain('/src/app/component.ts');
    });
});
