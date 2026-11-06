import {Directive, input} from '@angular/core';

@Directive({
    selector: 'input[tuiSlider][maxValue]',
    host: {'[attr.max]': 'maxValue()'},
})
export class TuiSliderMaxValue {
    public readonly maxValue = input.required<number>();
}

@Directive({
    selector: 'input[tuiSlider][minValue]',
    host: {'[attr.min]': 'minValue()'},
})
export class TuiSliderMinValue {
    public readonly minValue = input.required<number>();
}
