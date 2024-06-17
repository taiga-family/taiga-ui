import type {PipeTransform, Signal} from '@angular/core';
import {inject, INJECTOR, Pipe, untracked} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiFormatDateService} from '@taiga-ui/core/services';
import {Subject, takeUntil} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiFormatDate',
    pure: false,
})
export class TuiFormatDatePipe implements PipeTransform {
    private readonly service = inject(TuiFormatDateService);
    private readonly destroy$ = new Subject<void>();
    private readonly injector = inject(INJECTOR);

    public transform(timestampOrDate: Date | number): string | null {
        return this.format(timestampOrDate)();
    }

    @tuiPure
    private format(timestampOrDate: Date | number): Signal<string | null> {
        this.destroy$.next();

        return untracked(() =>
            toSignal(
                this.service
                    .format(timestampOrDate.valueOf())
                    .pipe(takeUntil(this.destroy$)),
                {
                    initialValue: null,
                    injector: this.injector,
                },
            ),
        );
    }
}
