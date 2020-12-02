import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {TuiBaseColor, TuiColor, TuiSupportColor} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-legend-item',
    templateUrl: './legend-item.template.html',
    changeDetection,
})
export class ExampleTuiLegendItemComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    text = 'Текст внутри';

    active = false;

    readonly colorVariants: ReadonlyArray<TuiColor> = [
        TuiSupportColor.Feijoa,
        TuiBaseColor.Primary,
        TuiBaseColor.Secondary,
    ];

    color = '';
}
