import {TuiComponentHarness} from '../utils';

export class TuiLinkHarness extends TuiComponentHarness {
    public static hostSelector = 'a[tuiLink], button[tuiLink]';

    public async isPseudo(): Promise<boolean> {
        return (
            (await (await this.host()).getCssValue('text-decoration-line')) ===
            'underline'
        );
    }
}
