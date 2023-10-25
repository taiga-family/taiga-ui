import {chain, Rule} from '@angular-devkit/schematics';

import {TuiSchema} from '../../ng-add/schema';
import {FINISH_SYMBOL, titleLog} from '../../utils/colored-log';
import {restoreTuiMapper} from '../v4/steps/restore-tui-mapper';
import {restoreTuiMatcher} from '../v4/steps/restore-tui-matcher';

// eslint-disable-next-line @typescript-eslint/naming-convention
export function updateToV3_51(options: TuiSchema): Rule {
    return chain([
        restoreTuiMapper(options),
        restoreTuiMatcher(options),
        () => {
            !options[`skip-logs`] &&
                titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
        },
    ]);
}
