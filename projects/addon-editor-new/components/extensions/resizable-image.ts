import {Attribute, Command} from '@tiptap/core';
import Image from '@tiptap/extension-image';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        resizableImage: {
            /**
             * Add an image
             */
            setResizableImage: (options: {
                src: string;
                alt?: string;
                title?: string;
            }) => ReturnType;
        };
    }
}

export const ResizableImage = Image.extend({
    name: 'resizableImage',
    addAttributes(): {[key: string]: Partial<Attribute>} {
        return {
            src: {
                default: null,
            },
            alt: {
                default: null,
            },
            title: {
                default: null,
            },
            width: {
                default: '10em',
            },
        };
    },
    addNodeView(): any {
        return ({editor, node, getPos, HTMLAttributes}: Record<any, any>) => {
            const dom = document.createElement('span');

            dom.setAttribute('style', `width: ${HTMLAttributes.width}`);
            dom.style.position = 'relative';
            dom.style.display = 'inline-block';

            const handle = document.createElement('span');

            handle.style.position = 'absolute';
            handle.style.bottom = '0px';
            handle.style.right = '0px';
            handle.style.width = '10px';
            handle.style.height = '10px';
            handle.style.border = '3px solid black';
            handle.style.borderTop = 'none';
            handle.style.borderLeft = 'none';
            handle.style.cursor = 'nwse-resize';

            const img = document.createElement('img');

            img.setAttribute('src', HTMLAttributes.src);
            img.setAttribute('style', `width: 100%`);

            dom.appendChild(img);
            dom.appendChild(handle);

            handle.onmousedown = (e: MouseEvent) => {
                e.preventDefault();

                const startX = e.pageX;

                const fontSize = 16;

                const startWidth = parseFloat(node.attrs.width.match(/(.+)em/)[1]);

                const onMouseMove = (e: MouseEvent) => {
                    const currentX = e.pageX;

                    const diffInPx = currentX - startX;
                    const diffInEm = diffInPx / fontSize;

                    dom.style.width = `${startWidth + diffInEm}em`;
                };

                const onMouseUp = (e: MouseEvent) => {
                    e.preventDefault();

                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);

                    const pos = typeof getPos === 'function' ? getPos() : 0;

                    const transaction = editor.view.state.tr
                        .setNodeMarkup(pos, undefined, {
                            src: node.attrs.src,
                            width: dom.style.width,
                        })
                        .setSelection(editor.view.state.selection);

                    editor.view.dispatch(transaction);
                };

                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            };

            return {
                dom,
            };
        };
    },
    addCommands(): {setResizableImage: (options: any) => Command} {
        return {
            setResizableImage: options => ({commands}) => {
                return commands.insertContent({
                    type: this.name,
                    attrs: options,
                });
            },
        };
    },
});
