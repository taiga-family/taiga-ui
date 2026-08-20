import {TuiTextfieldBaseComponent} from '../textfield.component';

interface CleanerContext {
    readonly accessor?: {setValue(value: null): void};
    readonly dropdown: {_content(): unknown};
    readonly dropdownOpen: {
        readonly nativeElement: HTMLElement;
        toggle(open: boolean): void;
    };
}

const onCleanerClick = (
    TuiTextfieldBaseComponent.prototype as unknown as {
        onCleanerClick(this: CleanerContext): void;
    }
).onCleanerClick;

describe('TuiTextfieldBaseComponent cleaner', () => {
    it('clears the value and opens an editable dropdown with content', () => {
        const setValue = jest.fn();
        const toggle = jest.fn();

        onCleanerClick.call({
            accessor: {setValue},
            dropdown: {_content: () => 'content'},
            dropdownOpen: {nativeElement: document.createElement('input'), toggle},
        });

        expect(setValue).toHaveBeenCalledWith(null);
        expect(toggle).toHaveBeenCalledWith(true);
    });

    it('does not open when dropdown content is absent', () => {
        const toggle = jest.fn();

        onCleanerClick.call({
            accessor: {setValue: jest.fn()},
            dropdown: {_content: () => null},
            dropdownOpen: {nativeElement: document.createElement('input'), toggle},
        });

        expect(toggle).not.toHaveBeenCalled();
    });

    it('does not open for a readonly dropdown host', () => {
        const input = document.createElement('input');
        const toggle = jest.fn();

        input.readOnly = true;
        onCleanerClick.call({
            accessor: {setValue: jest.fn()},
            dropdown: {_content: () => 'content'},
            dropdownOpen: {nativeElement: input, toggle},
        });

        expect(toggle).not.toHaveBeenCalled();
    });
});
