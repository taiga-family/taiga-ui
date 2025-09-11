import {Component, forwardRef} from '@angular/core';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiDropdown} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/abstract-props-accessor';

@Component({
    imports: [TuiDemo, TuiDocDropdown, TuiDropdown],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => PageComponent),
        },
    ],
})
export default class PageComponent {}
