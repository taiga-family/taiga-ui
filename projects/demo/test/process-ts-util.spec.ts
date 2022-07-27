import {processTs} from '../src/modules/app/utils/example-content-processor/typescript-processor';

describe(`Replacing a custom instructions in typescript`, () => {
    it(`relative path`, () => {
        const componentFile = `
                import {Component} from '@angular/core';
                import {changeDetection} from '../change-detection';
                import {encapsulation} from '../encapsulation';

                @Component({
                    selector: 'tui-example-1',
                    templateUrl: './index.html',
                    changeDetection,
                    encapsulation,
                })
                export class TuiAvatarExample1 {
                    avatar = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';
                }
        `;

        const preprocessed = processTs(componentFile);

        expect(
            preprocessed.includes(
                `import {ChangeDetectionStrategy, Component} from '@angular/core';`,
            ),
        ).toBeTruthy();

        expect(
            preprocessed.includes(`import {changeDetection} from '../change-detection';`),
        ).toBeFalsy();

        expect(
            preprocessed.includes(`import {encapsulation} from '../encapsulation';`),
        ).toBeFalsy();
    });

    it(`absolute path`, () => {
        const componentFile = `
                import {Component} from '@angular/core';
                import {changeDetection} from '@demo/emulate/change-detection';
                import {encapsulation} from '@demo/emulate/encapsulation';

                @Component({
                    selector: 'tui-example-1',
                    templateUrl: './index.html',
                    changeDetection,
                    encapsulation,
                })
                export class TuiAvatarExample1 {
                    avatar = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';
                }
        `;

        const preprocessed = processTs(componentFile);

        expect(
            preprocessed.includes(
                `import {ChangeDetectionStrategy, Component} from '@angular/core';`,
            ),
        ).toBeTruthy();

        expect(
            preprocessed.includes(
                `import {changeDetection} from '@demo/emulate/change-detection';`,
            ),
        ).toBeFalsy();

        expect(
            preprocessed.includes(
                `import {encapsulation} from '@demo/emulate/encapsulation';`,
            ),
        ).toBeFalsy();
    });
});
