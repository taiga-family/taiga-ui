import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as example3Html from '!!raw-loader!./examples/3/index.html';
import * as example3Less from '!!raw-loader!./examples/3/index.less';
import * as example3Ts from '!!raw-loader!./examples/3/index.ts';

import * as example4Html from '!!raw-loader!./examples/4/index.html';
import * as example4Ts from '!!raw-loader!./examples/4/index.ts';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {
    TuiNotification,
    TuiSizeL,
    TuiSizeS,
    TuiSupportColor,
    TuiTextColor,
} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-badge',
    templateUrl: './badge.template.html',
    changeDetection,
})
export class ExampleTuiBadgeComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
    };

    readonly statusVariants: ReadonlyArray<TuiStatus | TuiSupportColor> = [
        TuiStatus.Normal,
        TuiStatus.Error,
        TuiStatus.Success,
        TuiStatus.Light,
        TuiStatus.Gray,
        TuiStatus.Primary,
        TuiStatus.Secondary,
        TuiStatus.TransparentDark,
        TuiStatus.TransparentLight,
        TuiStatus.White,
        TuiStatus.Highlight,
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
        TuiStatus.Inherit,
    ];

    status: TuiStatus | TuiSupportColor = this.statusVariants[0];

    readonly notificationVariants: ReadonlyArray<
        TuiNotification | TuiSupportColor | null
    > = [
        null,
        TuiNotification.Info,
        TuiNotification.Warning,
        TuiNotification.Error,
        TuiNotification.Success,
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

    notification: TuiNotification | TuiSupportColor | null = null;

    values: {[key: string]: string | number} = {
        Taiga: 'Taiga',
        '5': 5,
        '100': 100,
        '"100"': '100',
    };

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    size: TuiSizeS | TuiSizeL = this.sizeVariants[1];

    readonly textColorVariants: ReadonlyArray<TuiTextColor> = [
        TuiTextColor.Black,
        TuiTextColor.White,
    ];

    textColor: TuiTextColor | null = null;

    valueVariants: ReadonlyArray<string | number> = Object.keys(this.values);

    value: string | number = 'Taiga';

    hoverable = false;
}
