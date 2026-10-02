import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk';
import {tuiIsObscured} from '@taiga-ui/core/utils/miscellaneous';

describe('tuiIsObscured', () => {
    let host: HTMLElement;
    let popups: HTMLElement;

    beforeEach(() => {
        host = document.createElement('button');
        popups = document.createElement('tui-popups');
        document.body.append(host, popups);
        jest.spyOn(host, 'getBoundingClientRect').mockReturnValue({
            ...EMPTY_CLIENT_RECT,
            right: 40,
            bottom: 40,
            width: 40,
            height: 40,
        });
    });

    afterEach(() => {
        host.remove();
        popups.remove();
        jest.restoreAllMocks();
    });

    it.each(['tui-hint', 'tui-dropdown'])('ignores %s popup content', (tag) => {
        obscureWith(tag);

        expect(tuiIsObscured(host)).toBe(false);
    });

    it('considers a modal backdrop as an obscurer', () => {
        obscureWith('tui-modal');

        expect(tuiIsObscured(host)).toBe(true);
    });

    it('considers dialog content as an obscurer', () => {
        const modal = obscureWith('tui-modal');
        const dialog = document.createElement('tui-dialog');

        modal.append(dialog);
        jest.mocked(document.elementFromPoint).mockReturnValue(dialog);

        expect(tuiIsObscured(host)).toBe(true);
    });

    it('does not consider a modal containing the host as an obscurer', () => {
        obscureWith('tui-modal').append(host);

        expect(tuiIsObscured(host)).toBe(false);
    });

    function obscureWith(tag: string): HTMLElement {
        const element = document.createElement(tag);

        popups.append(element);
        jest.spyOn(document, 'elementFromPoint').mockReturnValue(element);

        return element;
    }
});
