import {Component, forwardRef} from '@angular/core';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/abstract-props-accessor';

@Component({
    imports: [TuiButton, TuiDemo, TuiDocDropdown, TuiDropdown],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => PageComponent),
        },
    ],
})
export default class PageComponent {
    protected positionVariants = ['selection', 'word', 'tag'] as const;

    protected position: 'selection' | 'tag' | 'word' = this.positionVariants[0];
}
