import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: `tuiDocExampleGetTabs`})
export class TuiDocExampleGetTabsPipe implements PipeTransform {
    transform(content: Record<string, string>, defaultTab: string): string[] {
        return [defaultTab, ...Object.keys(content)];
    }
}
