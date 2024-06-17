import type {PipeTransform, Signal} from '@angular/core';
import {Pipe} from '@angular/core';
import {tuiInjectElement, TuiObservablePipe, tuiPure} from '@taiga-ui/cdk';
import {fromEvent, map, merge} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiFallbackSrc',
    pure: false,
})
export class TuiFallbackSrcPipe extends TuiObservablePipe implements PipeTransform {
    private readonly el = tuiInjectElement();
    private readonly error$ = merge(
        fromEvent(this.el, 'tui-icon-error'),
        fromEvent(this.el, 'error', {capture: true}),
    );

    public transform(src: string, fallback: string): string {
        return this.getSignal(src, fallback)();
    }

    @tuiPure
    private getSignal(src: string, fallback: string): Signal<string> {
        return this.toSignal(this.error$.pipe(map(() => fallback)), src);
    }
}
