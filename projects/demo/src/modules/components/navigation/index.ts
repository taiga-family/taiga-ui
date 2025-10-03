import {Component, inject, type OnDestroy} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDemo} from '@demo/utils';
import {TuiThemeColorService} from '@taiga-ui/cdk';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
    ];

    constructor() {
        this.theme.color = 'black';
    }

    public ngOnDestroy(): void {
        this.theme.color = '#ff7043';
    }
}
