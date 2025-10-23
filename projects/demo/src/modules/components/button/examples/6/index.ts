import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiAvatar, TuiBlock, TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiBlock, TuiButton, TuiFade],
    templateUrl: './index.html',
    styles: ':host { display: flex; gap: 1rem; align-items: flex-start; }',
    encapsulation,
    changeDetection,
})
export default class Example {}
