import"./chunk-42JZD6NG.js";var t=`import {Component, forwardRef} from '@angular/core';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/abstract-props-accessor';
import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';

@Component({
    imports: [
        TuiActiveZone,
        TuiButton,
        TuiDemo,
        TuiDocDropdown,
        TuiDropdown,
        TuiObscured,
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
    protected readonly routes = DemoRoute;
    protected readonly examples = [
        'Basic',
        'Interesting',
        'Change detection',
        'Appearance',
        'Mobile',
    ];

    protected open = false;

    protected onClick(): void {
        this.open = !this.open;
    }

    protected onObscured(obscured: boolean): void {
        if (obscured) {
            this.open = false;
        }
    }

    protected onActiveZone(active: boolean): void {
        this.open = active && this.open;
    }
}
`;export{t as default};
