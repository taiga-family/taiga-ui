import {TuiXmlParsingException} from '@taiga-ui/cdk';

/**
 * @internal
 */
export function innerHTML(documentRef: Document): void {
    const svg = documentRef.createElementNS('http://www.w3.org/2000/svg', 'svg');

    if (svg.innerHTML !== undefined) {
        return;
    }

    const serializer = new XMLSerializer();
    const parser = new DOMParser();

    Object.defineProperty(SVGElement.prototype, 'innerHTML', {
        get: function (this: SVGElement): string {
            const result: string[] = [];
            let childNode: any = this.firstChild;

            while (childNode) {
                result.push(serializer.serializeToString(childNode));
                childNode = childNode.nextSibling;
            }

            return result.join('');
        },
        set: function (this: SVGElement, text: string) {
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }

            try {
                const svgDocElement = parser.parseFromString(
                    text,
                    'image/svg+xml',
                ).documentElement;

                if (this.ownerDocument) {
                    this.appendChild(this.ownerDocument.importNode(svgDocElement, true));
                }
            } catch (e) {
                throw new TuiXmlParsingException();
            }
        },
    });
}
