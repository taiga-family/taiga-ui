import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Basic',
        'Custom',
        'Autoclose',
        'Dynamic actions',
        'Fallback for desktop',
        'Onboarding',
    ];
}
