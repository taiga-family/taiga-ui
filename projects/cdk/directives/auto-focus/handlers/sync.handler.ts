import {AbstractTuiAutofocusHandler} from './abstract.handler';

export class TuiSynchronousAutofocusHandler extends AbstractTuiAutofocusHandler {
    public setFocus(): void {
        this.element.focus({preventScroll: true});
    }
}
