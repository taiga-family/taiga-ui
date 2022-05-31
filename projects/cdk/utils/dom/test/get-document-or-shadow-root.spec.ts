import {getDocumentOrShadowRoot} from '../get-document-or-shadow-root';

describe('getDocumentOrShadowRoot', () => {
    it('Node not in body', () => {
        const element = document.createElement('div');

        expect(getDocumentOrShadowRoot(element)).toEqual(
            element.ownerDocument ,
        );
    });

    it('Node in body', () => {
        const element = document.createElement('div');

        document.body.appendChild(element);

        expect(getDocumentOrShadowRoot(element)).toEqual(
            element.getRootNode() as Document,
        );

        document.body.removeChild(element);
    });
});
