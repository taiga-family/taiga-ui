import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiButton, TuiOption} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [NgForOf, TuiAppearance, TuiButton, TuiOption],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly appearances = [
        'primary',
        'secondary',
        'destructive',
        'neutral',
        'flat',
        'link',
        'accent',
        'opposite',
        'floating',
        'textfield',
        'whiteblock',
        'outline',
        'error',
        'success',
        'warning',
        'info',
        'glass',
        'icon',
    ] as const;
}
