import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiPluralize} from '@taiga-ui/core';

import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

@Component({
    selector: 'example-tui-pluralize',
    templateUrl: './pluralize.template.html',
    styleUrls: ['./pluralize.style.less'],
    changeDetection,
})
export class ExampleTuiPluralizeComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    index = 10;

    pluralizeVariants: ReadonlyArray<TuiPluralize> = [
        [$localize`feature`, $localize`features`, $localize`features`],
        [$localize`bug`, $localize`bugs`, $localize`bugs`],
    ];

    pluralize = this.pluralizeVariants[0];
}
