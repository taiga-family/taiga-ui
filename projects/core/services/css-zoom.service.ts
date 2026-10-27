import {Injectable} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {type TuiPoint} from '@taiga-ui/core/types';

/**
 * @internal
 * Converts client coordinates (getBoundingClientRect, TuiPositionService etc.)
 * into local CSS pixels of the host element, compensating CSS `zoom`
 */
@Injectable()
export class TuiCSSZoomService {
    private readonly el = tuiInjectElement();

    public descale(point: TuiPoint): TuiPoint;
    public descale(rect: DOMRect): DOMRect;
    public descale(value: DOMRect | TuiPoint): DOMRect | TuiPoint {
        const zoom = this.el.currentCSSZoom || 1;

        if (zoom === 1) {
            return value;
        }

        if (!('left' in value)) {
            return [value[0] / zoom, value[1] / zoom];
        }

        const {left, top, width, height} = value;

        return new DOMRect(left / zoom, top / zoom, width / zoom, height / zoom);
    }
}
