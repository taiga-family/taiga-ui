import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/abstract-props-accessor';
import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';
import {DropdownDocumentation} from '../../components/abstract/dropdown-documentation';

@Component({
    standalone: true,
    imports: [
        DropdownDocumentation,
        TuiActiveZone,
        TuiButton,
        TuiDemo,
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
        {name: 'Basic', content: 'html,ts,less'},
        {name: 'Interesting', content: 'html,ts,less'},
        {name: 'Change detection', content: 'html,ts'},
        {name: 'Appearance', content: 'html,ts,less'},
        {name: 'Manual', content: 'html,ts,less'},
        {name: 'Mobile', content: 'html,ts'},
    ] as const;

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
