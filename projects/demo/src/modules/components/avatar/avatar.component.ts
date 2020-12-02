import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-avatar',
    templateUrl: './avatar.template.html',
    changeDetection,
})
export class ExampleTuiAvatarComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    avatarUrlVariants: ReadonlyArray<string> = [
        'https://ng-web-apis.github.io/dist/assets/images/web-api.svg',
    ];

    avatarUrl = null;

    text = 'daenerys targaryen';

    rounded = false;

    autoColor = false;

    sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    size = this.sizeVariants[2];
}
