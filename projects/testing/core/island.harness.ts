import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiComponentHarness} from '@taiga-ui/testing/utils';

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

    async getTextAlign(): Promise<'center' | 'left' | 'right'> {
        if (await this.isTextAlignLeft()) {
            return `left`;
        }

        if (await this.isTextAlignCenter()) {
            return `center`;
        }

        return `right`;
    }

    async isHoverable(): Promise<boolean> {
        return (await this.host()).hasClass(`tui-island_hoverable`);
    }

    private async isTextAlignLeft(): Promise<boolean> {
        return (await this.host()).hasClass(`tui-island_text-align_left`);
    }

    private async isTextAlignCenter(): Promise<boolean> {
        return (await this.host()).hasClass(`tui-island_text-align_center`);
    }

    private async isSizeM(): Promise<boolean> {
        return (await this.host()).hasClass(`tui-island_size_m`);
    }

    private async isSizeL(): Promise<boolean> {
        return (await this.host()).hasClass(`tui-island_size_l`);
    }
}
