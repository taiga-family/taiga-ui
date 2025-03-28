import {KeyValuePipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [KeyValuePipe, NgForOf, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly appearances = {
        Primary: ['primary', 'primary-destructive', 'primary-grayscale'],
        Secondary: ['secondary', 'secondary-destructive', 'secondary-grayscale'],
        Flat: ['flat', 'flat-destructive', 'flat-grayscale'],
        Outline: ['outline', 'outline-destructive', 'outline-grayscale'],
        Action: ['action', 'action-destructive', 'action-grayscale'],
        Status: ['neutral', 'negative', 'positive', 'warning', 'info'],
        Others: ['icon', 'floating', 'textfield', 'glass', 'accent'],
    };

    protected asIs(): number {
        return 0;
    }
}
