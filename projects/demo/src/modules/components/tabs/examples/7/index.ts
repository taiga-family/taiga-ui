import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbarComponent} from '@taiga-ui/core';
import {
    TuiTabDirective,
    TuiTabsHorizontalDirective,
    TuiTabsVerticalDirective,
} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiTabsHorizontalDirective,
        TuiTabDirective,
        TuiInputNumberModule,
        FormsModule,
        TuiScrollbarComponent,
        TuiTabsVerticalDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected horizontalActiveIndex = 9;
    protected verticalActiveIndex = 10;
}
