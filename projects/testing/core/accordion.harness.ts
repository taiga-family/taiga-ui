import {TuiContentContainerComponentHarness} from '@taiga-ui/testing/utils';

export class TuiAccordionHarness extends TuiContentContainerComponentHarness {
    static hostSelector = `tui-accordion`;

    async hasRoundedCorners(): Promise<boolean> {
        return await (await this.locatorFor(`.t-group`)()).hasClass(`tui-group_rounded`);
    }
}
