import {TuiContentContainerComponentHarness} from '../utils';
import {TuiButtonHarness} from './button.harness';

export class TuiDialogHarness extends TuiContentContainerComponentHarness {
    static hostSelector = `tui-dialog`;

    async getCloseButton(): Promise<TuiButtonHarness | null> {
        return this.locatorForOptional(
            TuiButtonHarness.with({
                selector: `[automation-id=tui-dialog__close]`,
            }),
        )();
    }
}
