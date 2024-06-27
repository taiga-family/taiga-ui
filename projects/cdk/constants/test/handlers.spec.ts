import {TUI_FALSE_HANDLER, TUI_TRUE_HANDLER} from '@taiga-ui/cdk';

describe('Handler functions', () => {
    it('always false', () => {
        expect(TUI_FALSE_HANDLER()).toBe(false);
    });

    it('always true', () => {
        expect(TUI_TRUE_HANDLER()).toBe(true);
    });
});
