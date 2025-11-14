import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');
const COMPONENT = `
import {Component} from '@angular/core';

@Component({
    standalone: true,
    templateUrl: './test.html',
})
export class TestComponent {}
`;

describe('ng-update avatar', () => {
    it('replaces src attribute with tuiAvatar', async () => {
        const {template} = await runMigration({
            collection,
            component: COMPONENT,
            template: '<tui-avatar src="tuiIconUser"></tui-avatar>',
        });

        expect(template).toEqual('<span tuiAvatar="tuiIconUser"></span>');
    });

    it('replaces bound src attribute with bound tuiAvatar', async () => {
        const {template} = await runMigration({
            collection,
            component: COMPONENT,
            template: '<tui-avatar [src]="avatarUrl" size="m"></tui-avatar>',
        });

        expect(template).toEqual('<span [tuiAvatar]="avatarUrl" size="m"></span>');
    });

    it('adds tuiAvatar attribute when element wraps img', async () => {
        const templateBefore = `
<tui-avatar>
    <img [src]="avatarUrl" alt="User" />
</tui-avatar>
`;
        const templateAfter = `
<span tuiAvatar>
    <img [src]="avatarUrl" alt="User" />
</span>
`;

        const {template} = await runMigration({
            collection,
            component: COMPONENT,
            template: templateBefore,
        });

        expect(template).toEqual(templateAfter);
    });

    afterEach(() => resetActiveProject());
});
