import"./chunk-HU6DUUP4.js";var t=`import {Component, inject, type OnDestroy} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDemo} from '@demo/utils';
import {TuiThemeColorService} from '@taiga-ui/addon-mobile';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Page implements OnDestroy {
    protected readonly theme = inject(TuiThemeColorService);
    protected readonly examples = [
        'Full',
        'Subheader compact',
        'Subheader object',
        'Customization',
        'InputSearch',
    ];

    constructor() {
        this.theme.color = 'black';
    }

    public ngOnDestroy(): void {
        this.theme.color = '#ff7043';
    }
}
`;export{t as default};
