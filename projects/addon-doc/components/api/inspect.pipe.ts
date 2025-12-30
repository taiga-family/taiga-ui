import {inject, Pipe, type PipeTransform, TemplateRef} from '@angular/core';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {tuiInspect} from '@taiga-ui/addon-doc/utils';

@Pipe({
    name: 'tuiInspect',
})
export class TuiInspectPipe implements PipeTransform {
    private readonly isE2E = inject(WA_IS_E2E);

    public transform(value: unknown, depth = 2): string {
        if (this.isE2E && typeof value === 'function') {
            /**
             * @description:
             * When developing in production mode the webpack bundler minify
             * functions in different ways, then due to which the string content
             * of the function may differ from build to build, which can be to
             * various problems when screenshot testing on e2e.
             */
            return 'λ(x) => y';
        }

        return value instanceof TemplateRef ? 'TemplateRef' : tuiInspect(value, depth);
    }
}
