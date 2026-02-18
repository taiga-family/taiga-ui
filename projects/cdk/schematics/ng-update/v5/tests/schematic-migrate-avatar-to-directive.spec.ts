import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update avatar', () => {
    async function migrate(template: string): Promise<string> {
        return (await runMigration({template, collection})).template;
    }

    it('replaces src attribute with tuiAvatar', async () => {
        expect(await migrate('<tui-avatar src="tuiIconUser"></tui-avatar>')).toEqual(
            '<span tuiAvatar="tuiIconUser"></span>',
        );
    });

    it('replaces bound src attribute with bound tuiAvatar', async () => {
        expect(
            await migrate('<tui-avatar [src]="avatarUrl" size="m"></tui-avatar>'),
        ).toEqual('<span [tuiAvatar]="avatarUrl" size="m"></span>');
    });

    it('simulates content', async () => {
        expect(await migrate('<tui-avatar>99+</tui-avatar>')).toEqual(
            '<span tuiAvatar>99+</span>',
        );
    });

    it('sometimes it has class and style', async () => {
        expect(
            await migrate(
                '<tui-avatar src="AI" class="text" [style.background]="\'AI\' | tuiAutoColor" />',
            ),
        ).toEqual(
            '<span tuiAvatar="AI" class="text" [style.background]="\'AI\' | tuiAutoColor" ></span>',
        );
    });

    it('adds tuiAvatar attribute when element wraps img', async () => {
        expect(
            await migrate(
                '<tui-avatar><img [src]="avatarUrl" alt="User" /></tui-avatar>',
            ),
        ).toEqual('<span tuiAvatar><img [src]="avatarUrl" alt="User" /></span>');
    });

    it('moves src value to tuiAvatar attribute on host element', async () => {
        expect(await migrate('<a tuiAvatar src="avatar.png"></a>')).toEqual(
            '<a tuiAvatar="avatar.png"></a>',
        );
    });

    it('tuiIcon binding is moved to tuiAvatar attribute', async () => {
        expect(
            await migrate('<tui-avatar [src]="\'@tui.mastercard\' | tuiIcon" />'),
        ).toEqual('<span [tuiAvatar]="\'@tui.mastercard\' | tuiIcon" ></span>');
    });

    it('unwraps tuiFallbackSrc binding into tuiAvatar with image inside', async () => {
        expect(
            await migrate(
                "<a [tuiAvatar]=\"'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: '@tui.user' | async\"></a>",
            ),
        ).toEqual(
            '<a tuiAvatar="@tui.user"><img [src]="\'https://avatars.githubusercontent.com/u/11832552\'" /></a>',
        );
    });

    it('picture inside tui-avatar', async () => {
        expect(
            await migrate(
                `
                <tui-avatar class="tui-space_horizontal-4">
                    <picture>
                        <source
                            media="(min-width: 600px)"
                            srcset="/assets/images/angular.svg"
                        />
                        <img
                            alt="Alex Inkin"
                            src="/assets/images/avatar.jpg"
                        />
                    </picture>
                </tui-avatar>
                `,
            ),
        ).toEqual(
            `
                <span tuiAvatar class="tui-space_horizontal-4">
                    <picture>
                        <source
                            media="(min-width: 600px)"
                            srcset="/assets/images/angular.svg"
                        />
                        <img
                            alt="Alex Inkin"
                            src="/assets/images/avatar.jpg"
                        />
                    </picture>
                </span>
                `,
        );
    });

    it('complex templates', async () => {
        expect(
            await migrate(
                `
                <section *ngFor="let size of sizes">
                    <tui-avatar [size]="size">{{ size | uppercase }}</tui-avatar>
                    <tui-avatar src="@tui.user" [size]="size" />
                </section>`,
            ),
        ).toEqual(
            `
                <section *ngFor="let size of sizes">
                    <span tuiAvatar [size]="size">{{ size | uppercase }}</span>
                    <span tuiAvatar="@tui.user" [size]="size" ></span>
                </section>`,
        );
    });

    afterEach(() => resetActiveProject());
});
