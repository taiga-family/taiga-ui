import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {TuiMapper} from '@taiga-ui/cdk';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-mapper',
    templateUrl: './mapper.template.html',
    styleUrls: ['./mapper.style.less'],
    changeDetection,
})
export class ExampleTuiMapperComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

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
