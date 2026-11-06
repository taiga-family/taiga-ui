import {TestBed} from '@angular/core/testing';
import stackblitz from '@stackblitz/sdk';

import {TuiStackblitzService} from '../src/pages/app/stackblitz/stackblitz.service';
import {StackblitzDepsService} from '../src/pages/app/stackblitz/stackblitz-deps.service';
import {AbstractTuiStackblitzResourcesLoader} from '../src/pages/app/stackblitz/stackblitz-resources-loader';

describe('StackBlitz project', () => {
    afterEach(() => jest.restoreAllMocks());

    it('includes the toolchain required to build Angular and Less', async () => {
        const dependencies = await TestBed.inject(StackblitzDepsService).get();

        expect(dependencies).toEqual(
            expect.objectContaining({
                '@angular/build': dependencies['@angular/core'],
                '@angular/cli': dependencies['@angular/core'],
                '@angular/compiler-cli': dependencies['@angular/core'],
                less: expect.any(String),
            }),
        );
    });

    it.each(['starter', 'example'])(
        'runs the %s in WebContainers with dependencies in package.json',
        async (kind) => {
            const dependencies = {'@angular/core': '21.x.x', '@taiga-ui/core': '5.x.x'};
            const openProject = jest
                .spyOn(stackblitz, 'openProject')
                .mockImplementation();

            jest.spyOn(
                AbstractTuiStackblitzResourcesLoader,
                'getProjectFiles',
            ).mockResolvedValue({
                tsconfig: '{}',
                angularJson: '{}',
                mainTs: '',
                indexHtml: '',
                globalStyles: '',
            });

            TestBed.configureTestingModule({
                providers: [
                    TuiStackblitzService,
                    {
                        provide: StackblitzDepsService,
                        useValue: {get: async () => Promise.resolve(dependencies)},
                    },
                ],
            });

            const service = TestBed.inject(TuiStackblitzService);
            const styles =
                "@import '@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less';";

            if (kind === 'starter') {
                await service.openStarter({
                    title: 'Mobile styles',
                    description: '',
                    files: {'src/styles.less': styles},
                });
            } else {
                await service.edit('Mobile', '1', {
                    HTML: '<div></div>',
                    TypeScript: `
                    import {Component} from '@angular/core';

                    @Component({template: ''})
                    export default class Example {}
                `,
                    LESS: styles,
                });
            }

            const [project] = openProject.mock.calls[0]!;

            expect(project.template).toBe('node');
            expect(JSON.parse(project.files['package.json']!)).toEqual({
                name: 'taiga-ui-starter',
                private: true,
                scripts: {start: 'ng serve --host 0.0.0.0'},
                dependencies,
            });
            expect(
                project.files[
                    kind === 'starter' ? 'src/styles.less' : 'src/app/app.less'
                ],
            ).toBe(styles);
            expect(project.files['angular.json']).toBe('{}');
        },
    );
});
