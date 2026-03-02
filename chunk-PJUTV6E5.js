import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiScrollbar} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    imports: [PolymorpheusOutlet, TuiDemo, TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly example1 = import('./examples/1').then(
        ({default: component}) => new PolymorpheusComponent(component),
    );

    protected readonly example2 = import('./examples/2').then(
        ({default: component}) => new PolymorpheusComponent(component),
    );
}
`;export{t as default};
