import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
    TuiLinkDirective,
    TuiOptGroupDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {
    TuiChevronDirective,
    TuiDataListDropdownManagerDirective,
    TuiLineClampComponent,
} from '@taiga-ui/kit';

function randomString(len: number): string {
    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < len; i++) {
        const randomPoz = Math.floor(Math.random() * charSet.length);

        // eslint-disable-next-line unicorn/prefer-string-slice
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }

    return randomString;
}

@Component({
    standalone: true,
    imports: [
        TuiChevronDirective,
        TuiLinkDirective,
        TuiDropdownOptionsDirective,
        TuiDropdownDirective,
        TuiDropdownOpenDirective,
        TuiDataListDropdownManagerDirective,
        TuiActiveZoneDirective,
        TuiOptGroupDirective,
        NgForOf,
        TuiOptionComponent,
        TuiLineClampComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected open = false;
    protected texts = [
        randomString(100),
        // eslint-disable-next-line @typescript-eslint/quotes
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        randomString(500),
    ];
}
