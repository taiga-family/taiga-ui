import {Component, forwardRef} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiActiveZoneDirective, TuiObscuredDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDropdownModule,
    TuiLinkDirective,
    TuiNotificationComponent,
} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/abstract-props-accessor';
import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';
import {DropdownDocumentationComponent} from '../../components/abstract/dropdown-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiDropdownModule,
        TuiNotificationComponent,
        TuiActiveZoneDirective,
        TuiButtonDirective,
        TuiObscuredDirective,
        DropdownDocumentationComponent,
        TuiLinkDirective,
        RouterLink,
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
        'Manual',
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
