import type {OnDestroy} from '@angular/core';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDemo} from '@demo/utils';
import {TuiThemeColorService} from '@taiga-ui/cdk';

@Component({
    standalone: true,
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
        'Expansive heading',
        'Card heading',
        'Customization',
    ];

    constructor() {
        this.theme.color = 'black';
    }

    public ngOnDestroy(): void {
        this.theme.color = '#ff7043';
    }
}
