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

import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/abstract-props-accessor';
import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';
import {DropdownDocumentationComponent} from '../../components/abstract/dropdown-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiDropdownSelectionDirective,
        TuiDropdownDirective,
        TuiDropdownOptionsDirective,
        TuiButtonDirective,
        DropdownDocumentationComponent,
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
