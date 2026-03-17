import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update avatar', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

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
            template: `
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
            template: `
                <section *ngFor="let size of sizes">
                    <tui-avatar [size]="size">{{ size | uppercase }}</tui-avatar>
                    <tui-avatar src="@tui.user" [size]="size" />
                </section>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
