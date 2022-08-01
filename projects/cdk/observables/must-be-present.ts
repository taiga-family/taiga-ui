import {TuiValuePresentException} from '@taiga-ui/cdk/exceptions';
import {isPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {OperatorFunction} from 'rxjs';
import {map} from 'rxjs/operators';

export function tuiMustBePresent<T>(): OperatorFunction<T | undefined | null, T> {
    return map(value => {
        if (!isPresent(value)) {
            throw new TuiValuePresentException();
        }

        return value;
    });
}
