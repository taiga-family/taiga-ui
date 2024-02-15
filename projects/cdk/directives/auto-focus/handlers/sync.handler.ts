import {AbstractTuiAutofocusHandler} from './abstract.handler';

export class TuiSynchronousAutofocusHandler extends AbstractTuiAutofocusHandler {
    setFocus(): void {
        this.element.focus({preventScroll: true});
    }
}
