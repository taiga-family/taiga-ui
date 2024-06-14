import {TuiContentContainerHarness} from '@taiga-ui/testing/utils';

import {TuiButtonHarness} from './button.harness';

export class TuiDialogHarness extends TuiContentContainerHarness {
    public static hostSelector = 'tui-dialog';

    public async getCloseButton(): Promise<TuiButtonHarness | null> {
        return this.locatorForOptional(
            TuiButtonHarness.with({
                selector: '[automation-id=tui-dialog__close]',
            }),
        )();
    }
}
