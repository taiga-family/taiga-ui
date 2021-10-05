import {Directive, ElementRef, Inject, Output} from '@angular/core';
import {TuiHoveredService} from '@taiga-ui/cdk/services';
import {Observable} from 'rxjs';

@Directive({
    selector: '[tuiHoveredChange]',
})
export class TuiHoveredDirective {
    @Output()
    readonly tuiHoveredChange: Observable<boolean>;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(TuiHoveredService) hoveredService: TuiHoveredService,
    ) {
        this.tuiHoveredChange = hoveredService.createHovered$(nativeElement);
    }
}
