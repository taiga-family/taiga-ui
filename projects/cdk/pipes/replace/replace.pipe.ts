import {Pipe, type PipeTransform} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'tuiReplace',
})
export class TuiReplacePipe implements PipeTransform {
    public transform(
        value: string | null | undefined,
        search: RegExp | string,
        replaceValue: string | ((substring: string, ...args: unknown[]) => string),
    ): string {
        return (
            value?.replace(
                search,
                // TS bug: https://github.com/microsoft/TypeScript/issues/22378
                replaceValue as unknown as string,
            ) ?? ''
        );
    }
}
