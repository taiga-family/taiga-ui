import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as example3Html from '!!raw-loader!./examples/3/index.html';
import * as example3Ts from '!!raw-loader!./examples/3/index.ts';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {TuiNotification, TuiSizeXS, TuiSizeXXL, TuiSupportColor} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-avatar',
    templateUrl: './badged-content.template.html',
    changeDetection,
})
export class ExampleTuiBadgedContentComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    imageUrl = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';

    borderColor = '#fff';

    statusVariants: ReadonlyArray<
        TuiStatus | TuiSupportColor | TuiNotification | null
    > = [
        null,
        TuiStatus.Normal,
        TuiStatus.Error,
        TuiStatus.Success,
        TuiStatus.Light,
        TuiStatus.Gray,
        TuiStatus.Primary,
        TuiStatus.Secondary,
        TuiStatus.White,
        TuiStatus.Highlight,
        TuiStatus.Inherit,
        TuiNotification.Info,
        TuiNotification.Warning,
        TuiSupportColor.Mustard,
        TuiSupportColor.Texas,
        TuiSupportColor.Tan,
        TuiSupportColor.Salmon,
        TuiSupportColor.Sienna,
        TuiSupportColor.Bittersweet,
        TuiSupportColor.Pinkie,
        TuiSupportColor.Charm,
        TuiSupportColor.Amethist,
        TuiSupportColor.Helio,
        TuiSupportColor.Lilac,
        TuiSupportColor.Malibu,
        TuiSupportColor.Havelock,
        TuiSupportColor.Picton,
        TuiSupportColor.Mint,
        TuiSupportColor.Fountain,
        TuiSupportColor.Puertorico,
        TuiSupportColor.Bay,
        TuiSupportColor.Forest,
        TuiSupportColor.York,
        TuiSupportColor.Feijoa,
    ];

    text = 'daenerys targaryen';

    rounded = false;

    sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    size = this.sizeVariants[2];

    statusTop: TuiStatus | TuiNotification | TuiSupportColor | null = null;

    statusBottom: TuiStatus | TuiNotification | TuiSupportColor | null = null;

    contentTop: PolymorpheusContent | null = null;

    contentBottom: PolymorpheusContent | null = null;

    contentVariants = [1, 5, 155, 'tuiIconCheck', 'Шаблон', 'tuiIconCheckCircleLarge'];
}
