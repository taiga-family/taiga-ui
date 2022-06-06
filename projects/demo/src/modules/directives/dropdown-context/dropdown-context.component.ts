import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidthT,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';

import {ExampleTuiDropdown} from '../../components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.component';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-dropdown-context',
    templateUrl: './dropdown-context.component.html',
    styleUrls: ['./dropdown-context.component.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiDropdownContextComponent),
        },
    ],
})
export class ExampleTuiDropdownContextComponent implements ExampleTuiDropdown {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.txt');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.txt');

    readonly exampleBasic: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly exampleContextMenu: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
    };

    readonly exampleReportMistakeForm: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
        LESS: import('!!raw-loader!./examples/3/index.less'),
    };

    readonly dropdownAlignVariants: readonly TuiHorizontalDirection[] = ['left', 'right'];

    readonly dropdownDirectionVariants: readonly TuiVerticalDirection[] = [
        'bottom',
        'top',
    ];

    readonly dropdownLimitWidthVariants: readonly TuiDropdownWidthT[] = [
        'min',
        'auto',
        'fixed',
    ];

    dropdownAlign = this.dropdownAlignVariants[0];
    dropdownDirection: TuiVerticalDirection | null = null;
    dropdownMinHeight = DEFAULT_MIN_HEIGHT;
    dropdownMaxHeight = DEFAULT_MAX_HEIGHT;
    dropdownLimitWidth: TuiDropdownWidthT = this.dropdownLimitWidthVariants[0];
    dropdownSided = false;
}
