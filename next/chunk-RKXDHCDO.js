import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';

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
})
export default class PageComponent {
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
