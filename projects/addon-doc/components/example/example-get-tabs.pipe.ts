import {Pipe, type PipeTransform} from '@angular/core';

@Pipe({name: 'tuiDocExampleGetTabs'})
export class TuiDocExampleGetTabsPipe implements PipeTransform {
    public transform(content: Record<string, string>, defaultTab: string): string[] {
        return [defaultTab, ...Object.keys(content)];
    }
}
