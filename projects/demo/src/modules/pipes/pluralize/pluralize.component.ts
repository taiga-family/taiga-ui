import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiPluralize} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-pluralize',
    templateUrl: './pluralize.template.html',
    styleUrls: ['./pluralize.style.less'],
    changeDetection,
})
export class ExampleTuiPluralizeComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    index = 10;

    pluralizeVariants: readonly TuiPluralize[] = [
        [$localize`feature`, $localize`features`, $localize`features`],
        [$localize`bug`, $localize`bugs`, $localize`bugs`],
    ];

    pluralize = this.pluralizeVariants[0];
}
