import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update color/gradient utils warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comments for removed color/gradient utils',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {
                    tuiGetGradientData,
                    tuiHexToRGBA,
                    tuiHsvToRgb,
                    tuiIsValidHex,
                    tuiIsValidRgba,
                    tuiParseColor,
                    tuiParseGradient,
                    tuiParseHex,
                    tuiRgbaToHex,
                    tuiRgbToHex,
                    tuiRgbToHsv,
                    tuiToGradient,
                    type TuiGradientDirection,
                    type TuiParsedGradient,
                } from '@taiga-ui/cdk';

                @Component({})
                export class TestComponent {
                    protected readonly gradient: TuiParsedGradient = tuiParseGradient(
                        'linear-gradient(#fff, #000)',
                    );

                    protected readonly direction: TuiGradientDirection = 'to top';
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
