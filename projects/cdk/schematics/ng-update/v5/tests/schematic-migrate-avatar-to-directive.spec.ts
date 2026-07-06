import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration, runMigration} from '../../../utils/run-migration';

const COLLECTION = join(__dirname, '../../../migration.json');

describe('ng-update avatar', () => {
    const migrate = createMigration({collection: COLLECTION});

    it(
        'replaces src attribute with tuiAvatar',
        migrate({template: '<tui-avatar src="tuiIconUser"></tui-avatar>'}),
    );

    it(
        'replaces bound src attribute with bound tuiAvatar',
        migrate({template: '<tui-avatar [src]="avatarUrl" size="m"></tui-avatar>'}),
    );

    it('simulates content', migrate({template: '<tui-avatar>99+</tui-avatar>'}));

    it(
        'sometimes it has class and style',
        migrate({
            template:
                '<tui-avatar src="AI" class="text" [style.background]="\'AI\' | tuiAutoColor" />',
        }),
    );

    it(
        'adds tuiAvatar attribute when element wraps img',
        migrate({
            template: '<tui-avatar><img [src]="avatarUrl" alt="User" /></tui-avatar>',
        }),
    );

    it(
        'moves src value to tuiAvatar attribute on host element',
        migrate({template: '<a tuiAvatar src="avatar.png"></a>'}),
    );

    it(
        'tuiIcon binding is moved to tuiAvatar attribute',
        migrate({template: '<tui-avatar [src]="\'@tui.mastercard\' | tuiIcon" />'}),
    );

    it(
        'unwraps tuiFallbackSrc binding into tuiAvatar with image inside',
        migrate({
            template:
                "<a [tuiAvatar]=\"'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: '@tui.user' | async\"></a>",
        }),
    );

    it(
        'picture inside tui-avatar',
        migrate({
            template: /* HTML */ `
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
        }),
    );

    it(
        'complex templates',
        migrate({
            template: /* HTML */ `
                <section *ngFor="let size of sizes">
                    <tui-avatar [size]="size">{{ size | uppercase }}</tui-avatar>
                    <tui-avatar
                        src="@tui.user"
                        [size]="size"
                    />
                </section>
            `,
        }),
    );

    it('adds a SafeResourceUrl TODO for a raw dynamic [src] binding (issue #13823)', async () => {
        const {template} = await runMigration({
            collection: COLLECTION,
            template: '<tui-avatar [src]="safeUrl"></tui-avatar>',
        });

        expect(template).toContain('[tuiAvatar]="safeUrl"');
        expect(template).toContain('TODO: (Taiga UI migration)');
        expect(template).toContain('SafeResourceUrl');
    });

    it('does not add a SafeResourceUrl TODO for an icon binding', async () => {
        const {template} = await runMigration({
            collection: COLLECTION,
            template: '<tui-avatar [src]="\'@tui.mastercard\' | tuiIcon" />',
        });

        expect(template).not.toContain('SafeResourceUrl');
    });

    it('does not add a SafeResourceUrl TODO for a static string src', async () => {
        const {template} = await runMigration({
            collection: COLLECTION,
            template: '<tui-avatar src="@tui.user"></tui-avatar>',
        });

        expect(template).not.toContain('SafeResourceUrl');
    });

    it('does not add a SafeResourceUrl TODO for a bound string literal', async () => {
        const {template} = await runMigration({
            collection: COLLECTION,
            template: '<tui-avatar [src]="\'assets/avatar.png\'"></tui-avatar>',
        });

        expect(template).toContain('[tuiAvatar]="\'assets/avatar.png\'"');
        expect(template).not.toContain('SafeResourceUrl');
    });

    afterEach(() => resetActiveProject());
});
