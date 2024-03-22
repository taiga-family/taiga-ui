import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {TuiDocPageComponent} from '@taiga-ui/addon-doc';

import {toKebab} from './kebab.pipe';

@Pipe({name: 'tuiComponent', standalone: true})
export class TuiComponentPipe implements PipeTransform {
    private readonly page = inject(TuiDocPageComponent);

    public async transform(index: number): Promise<{readonly default: any}> {
        return import(
            `../modules/${this.page.type}/${toKebab(this.page.header)}/examples/${index}/index.ts`
        );
    }
}
