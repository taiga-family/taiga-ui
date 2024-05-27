import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TuiButtonDirective,
    TuiDropdownDirective,
    TuiDropdownHoverDirective,
    TuiDropdownOptionsDirective,
} from '@taiga-ui/core';

import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';
import {DropdownDocumentationModule} from '../../components/abstract/dropdown-documentation/dropdown-documentation.module';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiDropdownHoverDirective,
        TuiDropdownDirective,
        TuiDropdownOptionsDirective,
        TuiButtonDirective,
        DropdownDocumentationModule,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => PageComponent),
        },
    ],
})
export default class PageComponent extends AbstractExampleTuiDropdown {
    protected showDelay = 200;

    protected hideDelay = 500;
}
