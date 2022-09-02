import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import {tuiIsString} from '@taiga-ui/cdk';
import {tuiCapitalizeFirstLetter} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Pipe({name: `tuiDocExampleCapitalize`})
export class TuiDocExampleCapitalizePipe implements PipeTransform {
    transform(content: PolymorpheusContent): PolymorpheusContent {
        return tuiIsString(content) ? tuiCapitalizeFirstLetter(content) : content;
    }
}
