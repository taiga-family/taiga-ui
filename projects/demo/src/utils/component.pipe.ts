import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {TuiDocPageComponent} from '@taiga-ui/addon-doc';

import {toKebab} from './example.pipe';

@Pipe({name: 'tuiComponent', standalone: true})
export class TuiComponentPipe implements PipeTransform {
    protected docPage = inject(TuiDocPageComponent);

    public async transform(index: number): Promise<{readonly default: any}> {
        return import(
            `../modules/${this.docPage.type}/${toKebab(this.docPage.header)}/examples/${index}/index.ts`
        );
    }
}
