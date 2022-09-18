import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

import {TuiComponentHarness} from '../utils/helpers';

export class TuiIslandHarness extends TuiComponentHarness {
    static hostSelector = `tui-island`;

    async getSize(): Promise<TuiSizeL | TuiSizeS> {
        if (await this.isSizeL()) {
            return `l`;
        }

        if (await this.isSizeM()) {
            return `m`;
        }

        return `s`;
    }

    async getTextAlign(): Promise<'left' | 'right' | 'center'> {
        if (await this.istextAlignLeft()) {
            return `left`;
        }

        if (await this.istextAlignCenter()) {
            return `center`;
        }

        return `right`;
    }

    async isHoverable(): Promise<boolean> {
        return await (await this.host()).hasClass(`tui-island_hoverable`);
    }

    private async istextAlignLeft(): Promise<boolean> {
        return await (await this.host()).hasClass(`tui-island_text-align_left`);
    }

    private async istextAlignCenter(): Promise<boolean> {
        return await (await this.host()).hasClass(`tui-island_text-align_center`);
    }

    private async isSizeM(): Promise<boolean> {
        return await (await this.host()).hasClass(`tui-island_size_m`);
    }

    private async isSizeL(): Promise<boolean> {
        return await (await this.host()).hasClass(`tui-island_size_l`);
    }
}
