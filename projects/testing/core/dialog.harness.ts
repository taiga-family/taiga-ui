import {TuiContentContainerComponentHarness} from '@taiga-ui/testing/utils';

import {TuiButtonHarness} from './button.harness';

export class TuiDialogHarness extends TuiContentContainerComponentHarness {
    protected static hostSelector = 'tui-dialog';

    protected async getCloseButton(): Promise<TuiButtonHarness | null> {
        return this.locatorForOptional(
            TuiButtonHarness.with({
                selector: '[automation-id=tui-dialog__close]',
            }),
        )();
    }
}
