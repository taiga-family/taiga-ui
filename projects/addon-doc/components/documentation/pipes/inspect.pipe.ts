import {Inject, Pipe, PipeTransform} from '@angular/core';
import {tuiInspectAny} from '@taiga-ui/addon-doc/utils';
import {TUI_IS_E2E} from '@taiga-ui/cdk';

@Pipe({name: `tuiInspectAny`})
export class TuiInspectPipe implements PipeTransform {
    constructor(@Inject(TUI_IS_E2E) private readonly isE2E: boolean) {}

    transform(value: unknown, depth: number = 2): string {
        if (this.isE2E && typeof value === `function`) {
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
