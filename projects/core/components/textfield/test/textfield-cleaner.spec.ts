import {TuiTextfieldBaseComponent} from '../textfield.component';

interface CleanerContext {
    readonly accessor?: {setValue(value: unknown): void};
    readonly dropdown: {_content(): unknown};
    readonly dropdownOpen: {
        readonly nativeElement: HTMLElement;
        toggle(open: boolean): void;
    };
}

const onCleanerClick = (
    TuiTextfieldBaseComponent.prototype as unknown as {
        onCleanerClick(this: CleanerContext, value: unknown): void;
    }
).onCleanerClick;

describe('TuiTextfieldBaseComponent cleaner', () => {
    it('forwards the cleaner value and opens an editable dropdown with content', () => {
        const setValue = jest.fn();
        const toggle = jest.fn();
        const value: unknown[] = [];

        onCleanerClick.call(
            {
                accessor: {setValue},
                dropdown: {_content: () => 'content'},
                dropdownOpen: {nativeElement: document.createElement('input'), toggle},
            },
            value,
        );

        expect(setValue).toHaveBeenCalledWith(value);
        expect(toggle).toHaveBeenCalledWith(true);
    });

    it('does not open when dropdown content is absent', () => {
        const toggle = jest.fn();

        onCleanerClick.call(
            {
                accessor: {setValue: jest.fn()},
                dropdown: {_content: () => null},
                dropdownOpen: {nativeElement: document.createElement('input'), toggle},
            },
            null,
        );

        expect(toggle).not.toHaveBeenCalled();
    });

    it('does not open for a readonly dropdown host', () => {
        const input = document.createElement('input');
        const toggle = jest.fn();

        input.readOnly = true;
        onCleanerClick.call(
            {
                accessor: {setValue: jest.fn()},
                dropdown: {_content: () => 'content'},
                dropdownOpen: {nativeElement: input, toggle},
            },
            null,
        );

        expect(toggle).not.toHaveBeenCalled();
    });
});
