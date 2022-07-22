import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-format-phone',
    templateUrl: './format-phone.template.html',
    styleUrls: ['./format-phone.style.less'],
    changeDetection,
})
export class ExampleTuiFormatPhoneComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
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
