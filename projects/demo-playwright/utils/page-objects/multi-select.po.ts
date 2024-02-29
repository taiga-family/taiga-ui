import {TuiInputTagPO} from './input-tag.po';

export class TuiMultiSelectPO extends TuiInputTagPO {
    public readonly arrow = this.host.locator(
        '[automation-id="tui-multi-select__arrow"]',
    );
}
