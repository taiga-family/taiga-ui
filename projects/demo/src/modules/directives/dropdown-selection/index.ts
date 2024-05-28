import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TuiButtonDirective,
    TuiDropdownDirective,
    TuiDropdownOptionsDirective,
    TuiDropdownSelectionDirective,
} from '@taiga-ui/core';
import type {TuiDropdownPosition} from '@taiga-ui/kit';

import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';
import {DropdownDocumentationModule} from '../../components/abstract/dropdown-documentation/dropdown-documentation.module';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiDropdownSelectionDirective,
        TuiDropdownDirective,
        TuiDropdownOptionsDirective,
        TuiButtonDirective,
        DropdownDocumentationModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => PageComponent),
        },
    ],
})
export default class PageComponent extends AbstractExampleTuiDropdown {
    protected positionVariants: TuiDropdownPosition[] = ['selection', 'word', 'tag'];

    protected position = this.positionVariants[0];
}
