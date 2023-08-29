import {Directive, Inject} from '@angular/core';
import {TuiZoom} from '@taiga-ui/cdk/interfaces';
import {TuiZoomService} from '@taiga-ui/cdk/services';
import {Observable} from 'rxjs';

@Directive({
    selector: '[tuiZoom]',
    providers: [TuiZoomService],
    host: {
        '[style.touch-action]': '"none"',
    },
    outputs: ['tuiZoom'],
})
export class TuiZoomDirective {
    constructor(@Inject(TuiZoomService) readonly tuiZoom: Observable<TuiZoom>) {}
}
