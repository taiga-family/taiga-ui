import {JsonPipe} from '@angular/common';
import {Component, Directive} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiProvide, TuiValueTransformer} from '@taiga-ui/cdk';
import {TUI_NUMBER_VALUE_TRANSFORMER, TuiInputRangeModule} from '@taiga-ui/legacy';

@Directive({
    standalone: true,
    selector: '[absTransformer]',
    providers: [tuiProvide(TUI_NUMBER_VALUE_TRANSFORMER, AbsTransformer)],
})
class AbsTransformer extends TuiValueTransformer<number | null, number | null> {
    public override fromControlValue(value: number | null): number | null {
        return value && Math.abs(value);
    }

    public override toControlValue(value: number | null): number | null {
        return value && -1 * Math.abs(value);
    }
}

@Component({
    standalone: true,
    imports: [AbsTransformer, TuiInputRangeModule, ReactiveFormsModule, JsonPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly control = new FormControl([-30, 0]);

    // See https://angular.io/api/common/I18nPluralPipe
    protected readonly pluralize = {
        '=-1': 'day ago',
        other: 'days ago',
    };
}
