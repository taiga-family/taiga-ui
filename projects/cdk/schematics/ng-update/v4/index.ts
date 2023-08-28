// eslint-disable-next-line @typescript-eslint/naming-convention
import {chain, Rule} from '@angular-devkit/schematics';
import {performance} from 'perf_hooks';

import {TAIGA_VERSION} from '../../ng-add/constants/versions';
import {TuiSchema} from '../../ng-add/schema';
import {FINISH_SYMBOL, START_SYMBOL, titleLog} from '../../utils/colored-log';
import {getExecutionTime} from '../../utils/get-execution-time';
import {replaceThumbnailCard} from './steps/replace-thumbnail-card';

export function updateToV4(options: TuiSchema): Rule {
    const t0 = performance.now();

    !options[`skip-logs`] &&
        titleLog(
            `\n\n${START_SYMBOL} Your packages will be updated to @taiga-ui/*@${TAIGA_VERSION}\n`,
        );

    return chain([
        replaceThumbnailCard(options),
        () => {
            const executionTime = getExecutionTime(t0, performance.now());

            !options[`skip-logs`] &&
                titleLog(
                    `${FINISH_SYMBOL} We migrated packages to @taiga-ui/*@${TAIGA_VERSION} in ${executionTime}. \n`,
                );
        },
    ]);
}
