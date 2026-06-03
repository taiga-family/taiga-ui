import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TUI_OPTIONS} from '@taiga-ui/core';
import {TuiSegmented} from '@taiga-ui/kit';
import {TuiDynamicHeader} from '@taiga-ui/layout';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {ListComponent} from './component';

@Component({
    imports: [PolymorpheusOutlet, TuiDynamicHeader, TuiPlatform, TuiSegmented],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly apis = inject(TUI_OPTIONS).apis;
    protected activeItemIndex = 0;
    protected readonly content = new PolymorpheusComponent(ListComponent);
}
