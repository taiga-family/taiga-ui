import {JsonPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiReorder} from '@taiga-ui/addon-table';

@Component({
    imports: [JsonPipe, TuiReorder],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = inject<readonly string[]>('Pythons' as any);
    protected enabled = this.items;
}
