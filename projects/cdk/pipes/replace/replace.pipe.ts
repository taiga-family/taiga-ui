import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: `tuiReplace`})
export class TuiReplacePipe implements PipeTransform {
    transform(
        value: string | null | undefined,
        search: RegExp | string,
        replaceValue: string | ((substring: string, ...args: any[]) => string),
    ): string {
        return (
            value?.replace(
                search,
                // TS bug: https://github.com/microsoft/TypeScript/issues/22378
                replaceValue as unknown as string,
            ) ?? ``
        );
    }
}
