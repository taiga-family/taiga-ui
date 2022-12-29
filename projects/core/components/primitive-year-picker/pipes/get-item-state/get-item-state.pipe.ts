import {Pipe, PipeTransform} from '@angular/core';
import {ALWAYS_FALSE_HANDLER, TuiBooleanHandler, TuiYear} from '@taiga-ui/cdk';
import {TuiInteractiveState} from '@taiga-ui/core/enums';

@Pipe({
    name: `tuiGetItemState`,
})
export class TuiGetItemStatePipe implements PipeTransform {
    // eslint-disable-next-line complexity
    transform(
        item: number,
        disabledItemHandler: TuiBooleanHandler<number>,
        max: TuiYear,
        pressedItem: number | null,
        hoveredItem: number | null,
    ): TuiInteractiveState | null {
        if (
            max.year < item ||
            (disabledItemHandler !== ALWAYS_FALSE_HANDLER && disabledItemHandler(item))
        ) {
            return TuiInteractiveState.Disabled;
        }

        if (pressedItem === item) {
            return TuiInteractiveState.Active;
        }

        if (hoveredItem === item) {
            return TuiInteractiveState.Hover;
        }

        return null;
    }
}
