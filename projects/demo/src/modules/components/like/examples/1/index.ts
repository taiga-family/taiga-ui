import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLike} from '@taiga-ui/kit';

@Component({
    imports: [TuiLike],
    templateUrl: './index.html',
    styles: [':host { display: flex; gap: 1rem; align-items: center; }'],
    encapsulation,
    changeDetection,
})
export default class Example {}
