import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiFormatPhonePipe, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiInputModule,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiFormatPhonePipe,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
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
