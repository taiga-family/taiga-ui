import {Directive} from '@angular/core';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';

import {TuiTextfieldBase} from '../textfield.directive';
import {tuiAsTextfieldAccessor} from '../textfield-accessor';

@Directive({
    standalone: true,
    selector: 'input[tuiInputChip]',
    providers: [tuiAsTextfieldAccessor(TuiTextfieldMultiDirective)],
    hostDirectives: [TuiNativeValidator],
    host: {
        '[id]': 'textfield.id',
        '[readOnly]': 'readOnly',
    },
})
export class TuiTextfieldMultiDirective<T> extends TuiTextfieldBase<T> {}

@Directive({
    standalone: true,
    hostDirectives: [
        {
            directive: TuiTextfieldMultiDirective,
            inputs: ['invalid', 'focused', 'readOnly', 'state'],
        },
    ],
})
export class TuiWithTextfieldMulti {}
