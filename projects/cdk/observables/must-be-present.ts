import {isPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {OperatorFunction} from 'rxjs';
import {map} from 'rxjs/operators';

export function mustBePresent<T>(): OperatorFunction<T | undefined | null, T> {
    return map(value => {
        if (!isPresent(value)) {
            throw new Error('Value must present');
        }

        return value;
    });
}
