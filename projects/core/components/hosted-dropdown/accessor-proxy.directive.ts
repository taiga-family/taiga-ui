import {Directive, Optional, SkipSelf} from '@angular/core';
import {TuiPositionAccessor} from '@taiga-ui/core/abstract';
import {TuiPoint} from '@taiga-ui/core/types';

@Directive({
    selector: '[tuiAccessorProxy]',
    providers: [
        {
            provide: TuiPositionAccessor,
            multi: true,
            deps: [
                [new Optional(), new SkipSelf(), TuiAccessorProxyDirective],
                TuiAccessorProxyDirective,
            ],
            useFactory: (
                accessor: TuiPositionAccessor | null,
                fallback: TuiPositionAccessor,
            ) => accessor || fallback,
        },
    ],
})
export class TuiAccessorProxyDirective extends TuiPositionAccessor {
    readonly type = 'dummy';

    getPosition(): TuiPoint {
        return [0, 0];
    }
}
