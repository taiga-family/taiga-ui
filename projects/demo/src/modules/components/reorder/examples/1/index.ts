import {JsonPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {ITEMS} from '@demo/tokens';
import {TuiReorder} from '@taiga-ui/addon-table';

@Component({
    standalone: true,
    imports: [JsonPipe, TuiReorder],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = inject(ITEMS);
    protected enabled = this.items;
}
