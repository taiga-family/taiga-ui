import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-format-phone',
    templateUrl: './format-phone.template.html',
    styleUrls: ['./format-phone.style.less'],
    changeDetection,
})
export class ExampleTuiFormatPhoneComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    index = '+78005557778';

    readonly countryCodes = [undefined, '+850', '+1', '+52'];
    countryCode = this.countryCodes[0];

    readonly phoneMasks = [
        undefined,
        '####-#############',
        '### ###-####',
        '### ###-####',
    ];

    phoneMask = this.phoneMasks[0];

    get maxLength(): number {
        return !this.countryCode || !this.phoneMask
            ? 12
            : this.countryCode.length + this.phoneMask.length - 2;
    }
}
