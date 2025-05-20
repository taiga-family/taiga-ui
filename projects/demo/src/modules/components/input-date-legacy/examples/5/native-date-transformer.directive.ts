import {Directive, Injectable} from '@angular/core';
import {TuiDay, TuiValueTransformer} from '@taiga-ui/cdk';
import {TUI_DATE_VALUE_TRANSFORMER} from '@taiga-ui/kit';

type From = TuiDay | null;

type To = Date | null;

@Injectable()
class ExampleTransformer extends TuiValueTransformer<From, To> {
    public fromControlValue(controlValue: To): From {
        return controlValue && TuiDay.fromLocalNativeDate(controlValue);
    }

    public toControlValue(componentValue: From): To {
        return componentValue?.toLocalNativeDate() || null;
    }
}

@Directive({
    standalone: true,
    selector: 'tui-input-date[toNativeDate]',
    providers: [
        {
            provide: TUI_DATE_VALUE_TRANSFORMER,
            useClass: ExampleTransformer,
        },
    ],
})
export class ExampleNativeDateTransformer {}
