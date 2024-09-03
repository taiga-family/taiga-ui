import {TuiComponentHarness} from '@taiga-ui/testing/utils';

export class TuiLinkHarness extends TuiComponentHarness {
    public static hostSelector = 'a[tuiLink], button[tuiLink]';

    public async isPseudo(): Promise<boolean> {
        return (
            (await (await this.host()).getAttribute('style'))?.includes(
                'text-decoration-line: underline',
            ) ?? false
        );
    }
}
