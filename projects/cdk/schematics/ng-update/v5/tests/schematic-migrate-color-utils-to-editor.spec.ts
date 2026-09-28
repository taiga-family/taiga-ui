import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update color/gradient utils moved from @taiga-ui/cdk to @taiga-ui/editor', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'remaps color/gradient utils imported from @taiga-ui/cdk',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {
                    tuiHexToRgb,
                    tuiParseColor,
                    tuiParseGradient,
                    tuiToGradient,
                    type TuiGradientDirection,
                    type TuiParsedGradient,
                } from '@taiga-ui/cdk';

                @Component({})
                export class TestComponent {
                    protected readonly rgb = tuiHexToRgb('#fff');
                    protected readonly color = tuiParseColor('#000');
                    protected readonly gradient: TuiParsedGradient = tuiParseGradient(
                        'linear-gradient(#fff, #000)',
                    );

                    protected readonly css = tuiToGradient(this.gradient);
                    protected readonly direction: TuiGradientDirection = 'to top';
                }
            `,
        }),
    );

    it(
        'remaps utils imported from the @taiga-ui/cdk/utils/color subpath',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {tuiIsValidHex, tuiRgbToHex} from '@taiga-ui/cdk/utils/color';

                @Component({})
                export class TestComponent {
                    protected readonly valid = tuiIsValidHex('#fff');
                    protected readonly hex = tuiRgbToHex([0, 0, 0]);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
