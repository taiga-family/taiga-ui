import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimesPipe} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [NgForOf, TuiRepeatTimesPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
