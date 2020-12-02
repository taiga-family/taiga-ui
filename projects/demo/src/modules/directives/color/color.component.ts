import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {TuiBaseColor, TuiColor, TuiSupportColor} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-color',
    templateUrl: './color.template.html',
    changeDetection,
})
export class ExampleTuiColorComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly variants: ReadonlyArray<TuiColor | string> = [
        TuiBaseColor.Primary,
        TuiBaseColor.Secondary,
        TuiBaseColor.Success,
        TuiBaseColor.Error,
        TuiSupportColor.York,
        TuiSupportColor.Forest,
        TuiSupportColor.Bay,
        TuiSupportColor.Puertorico,
        TuiSupportColor.Fountain,
        TuiSupportColor.Mint,
        TuiSupportColor.Picton,
        TuiSupportColor.Malibu,
        TuiSupportColor.Helio,
        TuiSupportColor.Amethist,
        TuiSupportColor.Charm,
        TuiSupportColor.Pinkie,
        TuiSupportColor.Bittersweet,
        TuiSupportColor.Sienna,
        TuiSupportColor.Salmon,
        TuiSupportColor.Tan,
        TuiSupportColor.Texas,
        TuiSupportColor.Mustard,
        TuiSupportColor.Lilac,
        TuiSupportColor.Feijoa,
        TuiSupportColor.Havelock,
        'base-01',
        'base-02',
        'base-03',
        'base-04',
        'base-05',
        'base-06',
        'base-07',
        'base-08',
        'base-09',
    ];

    tuiColor: TuiColor | string = '';

    tuiBackground: TuiColor | string = '';
}
