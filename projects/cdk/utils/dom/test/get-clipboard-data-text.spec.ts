import {getClipboardDataText} from '../get-clipboard-data-text';

describe(`getClipboardDataText`, () => {
    it(`ClipboardData in event`, () => {
        const data = `copy!`;
        const clipboardData = new DataTransfer();

        clipboardData.setData(`text/plain`, data);

        const event = new ClipboardEvent(`copy`, {clipboardData: clipboardData});

        expect(getClipboardDataText(event)).toEqual(data);
    });

    it(`ClipboardData not in event`, () => {
        const event = new Event(`copy`) as unknown as ClipboardEvent;

        Object.defineProperty(event, `target`, {
            value: {
                ownerDocument: {defaultView: {clipboardData: {getData: () => `data`}}},
            },
        });

        expect(getClipboardDataText(event)).toEqual(`data`);
    });
});
