import {inject, Pipe, type PipeTransform, type Type} from '@angular/core';
import {TuiDocPage, tuiToKebab} from '@taiga-ui/addon-doc';

@Pipe({name: 'tuiComponent'})
export class TuiComponentPipe implements PipeTransform {
    private readonly page = inject(TuiDocPage);

    public async transform(index: number): Promise<Type<unknown>> {
        return import(
            `../pages/${this.page.type()}/${tuiToKebab(this.page.header())}/examples/${index}/index.ts`
        ).then((module) => module.default);
    }
}
