import {Pipe, PipeTransform} from '@angular/core';
import {capitalize} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Pipe({name: 'tuiDocExampleCapitalize'})
export class TuiDocExampleCapitalizePipe implements PipeTransform {
    transform(content: PolymorpheusContent): PolymorpheusContent {
        return typeof content === 'string' ? capitalize(content) : content;
    }
}
