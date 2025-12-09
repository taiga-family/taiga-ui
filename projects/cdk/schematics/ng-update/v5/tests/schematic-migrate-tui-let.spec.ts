import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update tuiLet', () => {
    async function migrate(template: string): Promise<ReturnType<typeof runMigration>> {
        return runMigration({
            template,
            component: `
                import {Component} from '@angular/core';
                import {TuiLet} from '@taiga-ui/cdk';

                @Component({
                    standalone: true,
                    templateUrl: './test.html',
                    imports: [TuiLet],
                })
                export class Test {
                    readonly value = 'foo';
                }
            `,
            collection,
        });
    }

    it('migrates simple structural directive', async () => {
        const {template, component} = await migrate(`
                <test *tuiLet="value as val">
                    {{ val }}
                </test>
            `);

        expect(template).toEqual(`
                @let val = value;
                <test>
                    {{ val }}
                </test>
            `);

        expect(component).toEqual(`
                import {Component} from '@angular/core';

                @Component({
                    standalone: true,
                    templateUrl: './test.html',
                    imports: [],
                })
                export class Test {
                    readonly value = 'foo';
                }
            `);
    });

    it('migrates nested case with additional attributes', async () => {
        const {template} = await migrate(`
                    <div>
                        <test *tuiLet="value as val2" foo>
                            {{ val2 }}
                        </test>
                    </div>
                `);

        expect(template).toEqual(`
                    <div>
                        @let val2 = value;
                        <test foo>
                            {{ val2 }}
                        </test>
                    </div>
                `);
    });

    it('migrates ng-container with tuiLet', async () => {
        const {template} = await migrate(`
                <ng-container *tuiLet="value as val"></ng-container>
                <div>
                    <ng-container *tuiLet="value as val2"></ng-container>
                </div>
                <ng-container *tuiLet="value as val3">
                    {{ val3 }}
                </ng-container>
        `);

        expect(template).toEqual(`
                @let val = value;
                ${''}
                <div>
                    @let val2 = value;
                    ${''}
                </div>
                @let val3 = value;
                ${''}
                    {{ val3 }}
                ${''}
        `);
    });

    afterEach(() => resetActiveProject());
});
