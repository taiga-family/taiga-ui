import {CdkVirtualForOf} from '@angular/cdk/scrolling';
import {contentChild, Directive, effect, signal} from '@angular/core';
import {tuiAsAuxiliary, type TuiDataListAccessor} from '@taiga-ui/core';

@Directive({
    selector: '[withVirtualScroll]',
    providers: [tuiAsAuxiliary(WithVirtualScroll)],
})
export class WithVirtualScroll<T> implements TuiDataListAccessor<T> {
    private readonly virtualScroll = contentChild.required(CdkVirtualForOf);

    protected readonly $ = effect((onCleanup) => {
        const subscription = this.virtualScroll().dataStream.subscribe((items) =>
            this.options.set(items),
        );

        onCleanup(() => subscription.unsubscribe());
    });

    public readonly options = signal<readonly T[]>([]);
}
