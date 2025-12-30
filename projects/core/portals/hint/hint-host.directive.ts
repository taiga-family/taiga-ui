import {Directive, input} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';

@Directive({
    selector: '[tuiHint][tuiHintHost]',
    providers: [tuiAsRectAccessor(TuiHintHost)],
})
export class TuiHintHost extends TuiRectAccessor {
    public readonly tuiHintHost = input<HTMLElement>();
    public readonly type = 'hint';

    public getClientRect(): DOMRect {
        return this.tuiHintHost()?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
    }
}
