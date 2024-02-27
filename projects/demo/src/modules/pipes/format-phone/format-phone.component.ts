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
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected index = '+78005557778';

    protected readonly countryCodes = [undefined, '+850', '+1', '+52'];
    protected countryCode = this.countryCodes[0];

    protected readonly phoneMasks = [
        undefined,
        '####-#############',
        '### ###-####',
        '### ###-####',
    ];

    protected phoneMask = this.phoneMasks[0];

    protected get maxLength(): number {
        return !this.countryCode || !this.phoneMask
            ? 12
            : this.countryCode.length + this.phoneMask.length - 2;
    }
}
