import {TuiCheckedDirective} from '@taiga-ui/cdk';

describe(`TuiCheckedDirective`, () => {
    let directive: TuiCheckedDirective;
    let mockElement: HTMLInputElement;

    beforeEach(() => {
        directive = new TuiCheckedDirective();
        mockElement = document.createElement(`input`);
    });

    it(`should create an instance`, () => {
        expect(directive).toBeTruthy();
    });

    it(`should set checked to false by default`, () => {
        expect(directive.isChecked).toBe(false);
    });

    it(`should set indeterminate to false by default`, () => {
        expect(directive.isIndeterminate).toBe(false);
    });

    describe(`tuiChecked`, () => {
        it(`should set checked to true when input is true`, () => {
            directive.tuiChecked = true;
            expect(directive.isChecked).toBe(true);
        });
        it(`should set checked to false when input is false`, () => {
            directive.tuiChecked = false;
            expect(directive.isChecked).toBe(false);
        });

        it(`should set indeterminate to true when input is null`, () => {
            directive.tuiChecked = null;
            expect(directive.isIndeterminate).toBe(true);
        });

        it(`should set checked to false when input is null`, () => {
            directive.tuiChecked = null;
            expect(directive.isChecked).toBe(false);
        });
    });

    describe(`tuiCheckedChange`, () => {
        it(`should emit a boolean value when onChange is triggered with checked true`, () => {
            jest.spyOn(directive.tuiCheckedChange, `emit`);
            mockElement.checked = true;
            directive.onChange(mockElement);
            expect(directive.tuiCheckedChange.emit).toHaveBeenCalledWith(true);
        });
        it(`should emit a boolean value when onChange is triggered with checked false`, () => {
            jest.spyOn(directive.tuiCheckedChange, `emit`);
            mockElement.checked = false;
            directive.onChange(mockElement);
            expect(directive.tuiCheckedChange.emit).toHaveBeenCalledWith(false);
        });

        it(`should set indeterminate to false when onChange is triggered`, () => {
            mockElement.checked = true;
            directive.tuiChecked = null;
            directive.onChange(mockElement);
            expect(directive.isIndeterminate).toBe(false);
        });
    });
});
