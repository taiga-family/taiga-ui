import {Directive, ElementRef, Inject, Output} from '@angular/core';
import {tuiDragAndDropFrom, TuiDragStage} from '@taiga-ui/cdk/observables';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

/**
 * @deprecated not used anywhere
 */
@Directive({
    selector: '[tuiDragStart], [tuiDragContinues], [tuiDragEnd]',
})
export class TuiDragDirective {
    private readonly dragAndDropFrom$ = tuiDragAndDropFrom(this.elementRef.nativeElement);

    @Output('tuiDragStart')
    // eslint-disable-next-line @angular-eslint/no-output-native
    readonly start: Observable<MouseEvent> = this.dragAndDropFrom$.pipe(
        filter(({stage}) => stage === TuiDragStage.Start),
        map(({event}) => event),
    );

    @Output('tuiDragContinues')
    readonly continues: Observable<MouseEvent> = this.dragAndDropFrom$.pipe(
        filter(({stage}) => stage === TuiDragStage.Continues),
        map(({event}) => event),
    );

    @Output('tuiDragEnd')
    // eslint-disable-next-line @angular-eslint/no-output-native
    readonly end: Observable<MouseEvent> = this.dragAndDropFrom$.pipe(
        filter(({stage}) => stage === TuiDragStage.End),
        map(({event}) => event),
    );

    constructor(@Inject(ElementRef) private readonly elementRef: ElementRef<Element>) {}
}
