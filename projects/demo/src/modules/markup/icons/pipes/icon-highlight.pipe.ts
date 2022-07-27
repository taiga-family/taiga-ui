import {Pipe, PipeTransform} from '@angular/core';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';

@Pipe({name: `iconHighlight`})
export class IconHighlightPipe implements PipeTransform {
    transform(name: string, search: string): boolean {
        return search.length > 1 && TUI_DEFAULT_MATCHER(name, search);
    }
}
