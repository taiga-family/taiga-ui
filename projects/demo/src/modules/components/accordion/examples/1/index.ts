import {KeyValuePipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAccordion} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [KeyValuePipe, NgForOf, TuiAccordion],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = {
        'Taiga UI cdk':
            'Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities',
        'Taiga UI core':
            'Basic elements needed to develop components, directives and more using Taiga UI design system',
        'Taiga UI kit':
            'The main set of components used to build Taiga UI based Angular applications',
    };
}
