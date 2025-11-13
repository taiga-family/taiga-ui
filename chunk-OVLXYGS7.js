import"./chunk-42JZD6NG.js";var o=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiCarousel, TuiPagination} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiCarousel, TuiPagination],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected index = 2;
    protected readonly items = inject<readonly string[]>('Pythons' as any);
}
`;export{o as default};
