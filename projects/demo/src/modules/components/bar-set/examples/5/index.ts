import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBarSetComponent} from '@taiga-ui/addon-charts';
import {TuiFormatNumberPipeModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiBarSetComponent, TuiFormatNumberPipeModule, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly value = [451, 302, 203, 124, 65];
    protected readonly sum = this.value.reduce((a, b) => a + b, 0);
}
