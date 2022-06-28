import {TuiValuePresentException} from '@taiga-ui/cdk/exceptions';
import {isPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {OperatorFunction} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * @deprecated: use {@link tuiMustBePresent} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function mustBePresent<T>(): OperatorFunction<T | undefined | null, T> {
    return map(value => {
        if (!isPresent(value)) {
            throw new TuiValuePresentException();
        }

        return value;
    });
}

export const tuiMustBePresent = mustBePresent;
