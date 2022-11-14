import {tuiGetClipboardDataText} from '@taiga-ui/cdk';

// TODO: TypeError: Cannot read properties of undefined (reading 'ownerDocument')
xdescribe(`getClipboardDataText`, () => {
    it(`ClipboardData in event`, () => {
        const data = `copy!`;
        const clipboardData = new DataTransfer();

        clipboardData.setData(`text/plain`, data);

        const event = new ClipboardEvent(`copy`, {clipboardData});

        expect(tuiGetClipboardDataText(event)).toEqual(data);
    });

    it(`ClipboardData not in event`, () => {
        const event = new Event(`copy`) as unknown as ClipboardEvent;

        Object.defineProperty(event, `target`, {
            value: {
                ownerDocument: {defaultView: {clipboardData: {getData: () => `data`}}},
            },
        });

        expect(tuiGetClipboardDataText(event)).toEqual(`data`);
    });
});
