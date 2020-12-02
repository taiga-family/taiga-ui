import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

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

    trousers = 'брюки';

    mapperVariants: ReadonlyArray<TuiMapper<string, string>> = [
        item => item,
        _item => 'элегантные шорты',
        (item, arg) => item.toUpperCase() + arg,
    ];

    mapper = this.mapperVariants[0];

    argsVariants: ReadonlyArray<string> = [
        '',
        '. У вас нет такого же, но с перламутровыми пуговицами?',
    ];

    args = this.argsVariants[0];
}
