import {TuiCheckboxHarness} from './checkbox.harness';

describe('TuiCheckboxHarness', () => {
    it('should have correct host selector', () => {
        expect(TuiCheckboxHarness.hostSelector).toBe('input[type="checkbox"][tuiCheckbox]');
    });

    it('should have static with method', () => {
        expect(typeof TuiCheckboxHarness.with).toBe('function');
    });

    it('should have all required public methods', () => {
        const harness = new TuiCheckboxHarness(null as any);

        expect(typeof harness.isChecked).toBe('function');
        expect(typeof harness.isIndeterminate).toBe('function');
        expect(typeof harness.isDisabled).toBe('function');
        expect(typeof harness.check).toBe('function');
        expect(typeof harness.uncheck).toBe('function');
        expect(typeof harness.toggle).toBe('function');
        expect(typeof harness.getSize).toBe('function');
    });
});