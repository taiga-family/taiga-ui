import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwipeDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiPreview, TuiPreviewDialogDirective} from '@taiga-ui/kit';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiPreview,
        TuiSwipeDirective,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiPreviewDialogDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected index = 0;
    protected length = 2;
    protected titles = ['pic_1.jpg', 'pic_2.jpg'];
    protected content = [
        'https://picsum.photos/600/500',
        'https://picsum.photos/500/600',
    ];
}
