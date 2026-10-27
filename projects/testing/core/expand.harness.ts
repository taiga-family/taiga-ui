import {TuiContentContainerComponentHarness} from '@taiga-ui/testing/utils';

export class TuiExpandHarness extends TuiContentContainerComponentHarness {
    public static hostSelector = 'tui-expand';

    public async isExpanded(): Promise<boolean> {
        return (await this.host()).hasClass('_expanded');
    }
}
