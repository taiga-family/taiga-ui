import {type OnDestroy, Pipe, type PipeTransform} from '@angular/core';

@Pipe({name: 'tuiFile'})
export class TuiFilePipe implements PipeTransform, OnDestroy {
    private url = '';

    public transform(value: File): string {
        URL.revokeObjectURL(this.url);
        this.url = URL.createObjectURL(value);

        return this.url;
    }

    public ngOnDestroy(): void {
        URL.revokeObjectURL(this.url);
    }
}
