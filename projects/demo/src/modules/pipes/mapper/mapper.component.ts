import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {default as example1Ts} from '!!raw-loader!./examples/1/component.ts';
import {default as example1Html} from '!!raw-loader!./examples/1/template.html';

import {Component} from '@angular/core';
import {TuiMapper} from '@taiga-ui/cdk';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-mapper',
    templateUrl: './mapper.template.html',
    styleUrls: ['./mapper.style.less'],
    changeDetection,
})
export class ExampleTuiMapperComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    value = 5;

    mapperVariants: ReadonlyArray<TuiMapper<number, string>> = [
        item => String(item),
        _item => 'Hello!',
        (item, arg) => item * item + arg,
    ];

    mapper = this.mapperVariants[0];

    argsVariants: ReadonlyArray<string | number> = ['', 10];

    args = this.argsVariants[0];
}
