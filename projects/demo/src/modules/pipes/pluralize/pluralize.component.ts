import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {TuiPluralize} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-pluralize',
    templateUrl: './pluralize.template.html',
    styleUrls: ['./pluralize.style.less'],
    changeDetection,
})
export class ExampleTuiPluralizeComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    index = 10;

    pluralizeVariants: ReadonlyArray<TuiPluralize> = [
        [$localize`feature`, $localize`features`, $localize`features`],
        [$localize`bug`, $localize`bugs`, $localize`bugs`],
    ];

    pluralize = this.pluralizeVariants[0];
}
