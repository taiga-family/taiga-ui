import {inject, Pipe, type PipeTransform, type Type} from '@angular/core';
import {TuiDocPage} from '@taiga-ui/addon-doc';

import {toKebab} from './kebab.pipe';

@Pipe({
    standalone: true,
    name: 'tuiComponent',
})
export class TuiComponentPipe implements PipeTransform {
    private readonly page = inject(TuiDocPage);

    public async transform(index: number): Promise<Type<unknown>> {
        return import(
            `../modules/${this.page.type()}/${toKebab(this.page.header())}/examples/${index}/index.ts`
        ).then((module) => module.default);
    }
}
