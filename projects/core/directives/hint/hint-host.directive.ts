import {Directive, Input} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk';
import {tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/abstract';

@Directive({
    selector: '[tuiHint][tuiHintHost]',
    providers: [tuiAsRectAccessor(TuiHintHostDirective)],
})
export class TuiHintHostDirective extends TuiRectAccessor {
    @Input()
    public tuiHintHost?: HTMLElement;

    public readonly type = 'hint';

    public getClientRect(): ClientRect {
        return this.tuiHintHost?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
    }
}
