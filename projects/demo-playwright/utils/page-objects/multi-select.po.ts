import {TuiInputTagPO} from './input-tag.po';

export class TuiMultiSelectPO extends TuiInputTagPO {
    readonly arrow = this.host.getByTestId('tui-multi-select__arrow');
}
