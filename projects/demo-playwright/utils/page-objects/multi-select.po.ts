import {TuiInputTagPO} from './input-tag.po';

export class TuiMultiSelectPO extends TuiInputTagPO {
    protected readonly arrow = this.host.locator(
        '[automation-id="tui-multi-select__arrow"]',
    );
}
