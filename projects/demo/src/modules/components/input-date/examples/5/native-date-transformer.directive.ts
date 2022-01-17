import {Directive} from '@angular/core';
import {AbstractTuiControlValueTransformer, TuiDay} from '@taiga-ui/cdk';
import {TUI_DATE_VALUE_TRANSFORMER} from '@taiga-ui/kit';

type From = TuiDay | null;

type To = Date | null;

class ExampleTransformer extends AbstractTuiControlValueTransformer<From, To> {
    fromControlValue(controlValue: To): From {
        return controlValue && TuiDay.fromLocalNativeDate(controlValue);
    }

    toControlValue(componentValue: From): To {
        return componentValue && componentValue.toLocalNativeDate();
    }
}

@Directive({
    selector: 'tui-input-date[toNativeDate]',
    providers: [
        {
            provide: TUI_DATE_VALUE_TRANSFORMER,
            useValue: new ExampleTransformer(),
        },
    ],
})
export class ExampleNativeDateTransformerDirective {}
