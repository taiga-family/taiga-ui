import {Directive, Input} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk';
import {tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';

@Directive({
    standalone: true,
    selector: '[tuiHint][tuiHintHost]',
    providers: [tuiAsRectAccessor(TuiHintHost)],
})
export class TuiHintHost extends TuiRectAccessor {
    @Input()
    public tuiHintHost?: HTMLElement;

    public readonly type = 'hint';

    public getClientRect(): ClientRect {
        return this.tuiHintHost?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
    }
}
