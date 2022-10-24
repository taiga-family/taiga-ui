import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';

import {tuiInspectAny} from '../../../utils/inspect';

@Pipe({name: `tuiInspectAny`})
export class TuiInspectPipe implements PipeTransform {
    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}

    transform(value: unknown, depth: number = 2): string {
        if (this.isCypress && typeof value === `function`) {
            /**
             * @description:
             * When developing in production mode the webpack bundler minify
             * functions in different ways, then due to which the string content
             * of the function may differ from build to build, which can be to
             * various problems when screenshot testing on e2e.
             */
            return `λ(x) => y`;
        }

        return tuiInspectAny(value, depth);
    }
}
