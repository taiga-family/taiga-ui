import {tuiGetDocumentOrShadowRoot} from '@taiga-ui/cdk';

describe('getDocumentOrShadowRoot', () => {
    it('node not in body', () => {
        const element = document.createElement('div');

        expect(tuiGetDocumentOrShadowRoot(element)).toEqual(element.ownerDocument);
    });

    it('node in body', () => {
        const element = document.createElement('div');

        document.body.appendChild(element);

        expect(tuiGetDocumentOrShadowRoot(element)).toEqual(
            element.getRootNode() as Document,
        );

        document.body.removeChild(element);
    });
});
