import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    getSourceFiles,
    resetActiveProject,
    setActiveProject,
} from 'ng-morph';

import {
    ALL_FILES,
    ALL_STYLE_FILES,
    ALL_TS_FILES,
    EXCLUDE_DIRECTORIES,
    PROJECT_JSON_FILES,
} from '../file-globs';

describe('file globs', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
    });

    describe('ALL_TS_FILES', () => {
        it('excludes nested ignored directories and template files', () => {
            host.create('/workspace/src/app.ts', '');
            host.create('/workspace/libs/lib-a/src/index.ts', '');

            host.create('/workspace/libs/lib-a/node_modules/pkg/index.ts', '');
            host.create('/workspace/libs/lib-a/coverage/generated.ts', '');
            host.create('/workspace/libs/lib-a/.nx/cache.ts', '');
            host.create('/workspace/dist/out.ts', '');

            host.create('/workspace/src/input__name@dasherize__.ts', '');
            host.create('/workspace/src/input__name@camelize__.ts', '');
            host.create('/workspace/src/input__name@underscore__.ts', '');
            host.create('/workspace/src/model.d.ts', '');

            setActiveProject(createProject(host, '/workspace', ALL_TS_FILES));

            expect(
                getSourceFiles('**/*.ts')
                    .map((file) => file.getFilePath())
                    .sort(),
            ).toEqual(['/workspace/libs/lib-a/src/index.ts', '/workspace/src/app.ts']);
        });

        it.each(EXCLUDE_DIRECTORIES)(
            'excludes "%s" directory for ALL_TS_FILES on any nesting level',
            (directory) => {
                host.create('/workspace/src/app.ts', '');

                host.create(`/workspace/${directory}/root.ts`, '');
                host.create(`/workspace/apps/demo/${directory}/nested.ts`, '');
                host.create(
                    `/workspace/apps/demo/src/features/profile/domain/${directory}/deep.ts`,
                    '',
                );

                setActiveProject(createProject(host, '/workspace', ALL_TS_FILES));

                expect(
                    getSourceFiles('**/*.ts')
                        .map((file) => file.getFilePath())
                        .sort(),
                ).toEqual(['/workspace/src/app.ts']);
            },
        );
    });

    describe('ALL_STYLE_FILES', () => {
        it('excludes nested ignored directories and template files', () => {
            host.create('/workspace/src/app.less', '');
            host.create('/workspace/libs/lib-a/src/card.scss', '');

            host.create('/workspace/libs/lib-a/coverage/generated.css', '');
            host.create('/workspace/libs/lib-a/.nx/cache.css', '');
            host.create('/workspace/tmp/temp.sass', '');

            host.create('/workspace/src/input__name@camelize__.scss', '');

            setActiveProject(createProject(host, '/workspace', ALL_STYLE_FILES));

            expect(
                getSourceFiles('**/*.{less,sass,scss,css}')
                    .map((file) => file.getFilePath())
                    .sort(),
            ).toEqual(['/workspace/libs/lib-a/src/card.scss', '/workspace/src/app.less']);
        });
    });

    describe('ALL_FILES', () => {
        it('excludes nested ignored directories and template files', () => {
            host.create('/workspace/src/app.html', '');
            host.create('/workspace/src/app.ts', '');
            host.create('/workspace/src/app.less', '');
            host.create('/workspace/src/config.json', '');

            host.create('/workspace/libs/lib-a/coverage/report.html', '');
            host.create('/workspace/libs/lib-a/.angular/cache.json', '');
            host.create('/workspace/libs/lib-a/node_modules/pkg/index.ts', '');

            host.create('/workspace/src/input__name@underscore__.html', '');
            host.create('/workspace/src/model.d.ts', '');

            setActiveProject(createProject(host, '/workspace', ALL_FILES));

            expect(
                getSourceFiles('**/*.{html,ts,less,sass,scss,css,json}')
                    .map((file) => file.getFilePath())
                    .sort(),
            ).toEqual([
                '/workspace/src/app.html',
                '/workspace/src/app.less',
                '/workspace/src/app.ts',
                '/workspace/src/config.json',
            ]);
        });
    });

    describe('PROJECT_JSON_FILES', () => {
        it('excludes project json files from nested ignored directories', () => {
            host.create('/workspace/project.json', '');
            host.create('/workspace/angular.json', '');
            host.create('/workspace/libs/lib-a/project.json', '');
            host.create('/workspace/libs/lib-b/angular.json', '');

            host.create('/workspace/libs/lib-a/coverage/project.json', '');
            host.create('/workspace/libs/lib-a/.nx/project.json', '');
            host.create('/workspace/dist/project.json', '');

            setActiveProject(createProject(host, '/workspace', PROJECT_JSON_FILES));

            expect(
                getSourceFiles('**/{project,angular}.json')
                    .map((file) => file.getFilePath())
                    .sort(),
            ).toEqual([
                '/workspace/angular.json',
                '/workspace/libs/lib-a/project.json',
                '/workspace/libs/lib-b/angular.json',
                '/workspace/project.json',
            ]);
        });
    });

    afterEach(() => {
        resetActiveProject();
    });
});
