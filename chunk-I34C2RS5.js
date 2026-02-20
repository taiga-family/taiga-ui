import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiAvatar, TuiBadgedContent, TuiBadgeNotification} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiBadgedContent, TuiBadgeNotification, TuiDemo, TuiHeader],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected radiusVariants = ['0.75rem', '50%'];
    protected radius = this.radiusVariants[0]!;

    protected readonly examples = [
        'Basic',
        'Rounded content',
        'With different components',
        'With image',
    ];
}
`;export{i as default};
