import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'tuiDocExampleGetTabs',
})
export class TuiDocExampleGetTabsPipe implements PipeTransform {
    public transform(content: Record<string, string>, defaultTab: string): string[] {
        return [defaultTab, ...Object.keys(content).filter((tab) => content[tab])];
    }
}
