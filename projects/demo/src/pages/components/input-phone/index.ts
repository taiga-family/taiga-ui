import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiDocAppearance} from '@demo/components/appearance';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiInputPhone} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocAppearance,
        TuiDocControl,
        TuiDocIcons,
        TuiDocTextfield,
        TuiInputPhone,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class PageComponent {
    protected phoneMasks = [
        '+7 (###) ###-##-##',
        '+850 (####)-#############',
        '+1 ### ###-####',
    ];

    protected filler = '';
    protected phoneMask = this.phoneMasks[0]!;

    public control = new FormControl('', [Validators.required, Validators.minLength(12)]);

    public readonly examples = [
        'Basic',
        'With autocomplete',
        'Value transformer',
        'With flag',
    ];
}
