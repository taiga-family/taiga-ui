import {Pipe, PipeTransform} from '@angular/core';
import {tuiIsString} from '@taiga-ui/cdk';
import {tuiCapitalizeFirstLetter} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Pipe({name: 'tuiDocExampleCapitalize'})
export class TuiDocExampleCapitalizePipe implements PipeTransform {
    transform(content: PolymorpheusContent): PolymorpheusContent {
        return tuiIsString(content) ? tuiCapitalizeFirstLetter(content) : content;
    }
}
