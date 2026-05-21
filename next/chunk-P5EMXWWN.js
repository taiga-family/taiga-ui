import"./chunk-HU6DUUP4.js";var t=`import {CdkVirtualForOf} from '@angular/cdk/scrolling';
import {contentChild, Directive} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {tuiAsAuxiliary, type TuiDataListAccessor} from '@taiga-ui/core';
import {switchMap} from 'rxjs';

@Directive({
    selector: '[withVirtualScroll]',
    providers: [tuiAsAuxiliary(WithVirtualScroll)],
})
export class WithVirtualScroll<T> implements TuiDataListAccessor<T> {
    private readonly virtualScroll = contentChild.required(CdkVirtualForOf);

    public readonly options = toSignal(
        toObservable(this.virtualScroll).pipe(switchMap((x) => x.dataStream)),
        {initialValue: [] as readonly T[]},
    );
}
`;export{t as default};
