import {TuiValuePresentException} from '@taiga-ui/cdk/exceptions';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {map, type OperatorFunction} from 'rxjs';

export function tuiMustBePresent<T>(): OperatorFunction<T | null | undefined, T> {
    return map(value => {
        if (!tuiIsPresent(value)) {
            throw new TuiValuePresentException();
        }

        return value;
    });
}
