import {TuiTextfieldWithDataListPO} from '@demo-playwright/utils';

export class TuiComboBoxPO extends TuiTextfieldWithDataListPO {
    readonly comboboxTextfield = this.host
        .page()
        .getByTestId(`tui-combo-box__textfield`)
        .getByTestId(`tui-primitive-textfield__native-input`);
}
