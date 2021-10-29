import {Injector, Input, Type} from '@angular/core';
import {
    Editor,
    NodeView,
    NodeViewProps,
    NodeViewRenderer,
    NodeViewRendererOptions,
    NodeViewRendererProps,
} from '@tiptap/core';
import type {Node as ProseMirrorNode} from 'prosemirror-model';
import type {Decoration} from 'prosemirror-view';

import {AngularRenderer} from './component-render';

/**
 * Copied from
 * {@link https://github.com/sibiraj-s/ngx-tiptap/blob/master/projects/ngx-tiptap/src/lib/NodeViewRenderer.ts ngx-tiptap}
 */
export class AngularNodeViewComponent implements NodeViewProps {
    @Input() editor!: NodeViewProps['editor'];
    @Input() node!: NodeViewProps['node'];
    @Input() decorations!: NodeViewProps['decorations'];
    @Input() selected!: NodeViewProps['selected'];
    @Input() extension!: NodeViewProps['extension'];
    @Input() getPos!: NodeViewProps['getPos'];
    @Input() updateAttributes!: NodeViewProps['updateAttributes'];
    @Input() deleteNode!: NodeViewProps['deleteNode'];
}

interface AngularNodeViewRendererOptions extends NodeViewRendererOptions {
    update?: ((node: ProseMirrorNode, decorations: Decoration[]) => boolean) | null;
    injector: Injector;
}

/**
 * Copied from
 * {@link https://github.com/sibiraj-s/ngx-tiptap/blob/master/projects/ngx-tiptap/src/lib/NodeViewRenderer.ts ngx-tiptap}
 */
class AngularNodeView extends NodeView<
    Type<AngularNodeViewComponent>,
    Editor,
    AngularNodeViewRendererOptions
> {
    renderer!: AngularRenderer<AngularNodeViewComponent, NodeViewProps>;
    contentDOMElement!: HTMLElement | null;

    mount() {
        const injector = this.options.injector as Injector;

        const props: NodeViewProps = {
            editor: this.editor,
            node: this.node,
            decorations: this.decorations,
            selected: false,
            extension: this.extension,
            getPos: () => this.getPos(),
            updateAttributes: (attributes = {}) => this.updateAttributes(attributes),
            deleteNode: () => this.deleteNode(),
        };

        // create renderer
        this.renderer = new AngularRenderer(this.component, injector, props);

        // Register drag handler
        if (this.extension.config.draggable) {
            this.renderer.elementRef.nativeElement.ondragstart = (e: DragEvent) => {
                this.onDragStart(e);
            };
        }

        this.contentDOMElement = this.node.isLeaf
            ? null
            : document.createElement(this.node.isInline ? 'span' : 'div');

        if (this.contentDOMElement) {
            // For some reason the whiteSpace prop is not inherited properly in Chrome and Safari
            // With this fix it seems to work fine
            // See: https://github.com/ueberdosis/tiptap/issues/1197
            this.contentDOMElement.style.whiteSpace = 'inherit';
            this.renderer.detectChanges();
        }
    }

    get dom() {
        return this.renderer.dom;
    }

    get contentDOM() {
        if (this.node.isLeaf) {
            return null;
        }

        this.maybeMoveContentDOM();

        return this.contentDOMElement;
    }

    private maybeMoveContentDOM(): void {
        const contentElement = this.dom.querySelector('[data-node-view-content]');

        if (
            this.contentDOMElement &&
            contentElement &&
            !contentElement.contains(this.contentDOMElement)
        ) {
            contentElement.appendChild(this.contentDOMElement);
        }
    }

    update(node: ProseMirrorNode, decorations: Decoration[]): boolean {
        if (this.options.update) {
            return this.options.update(node, decorations);
        }

        if (node.type !== this.node.type) {
            return false;
        }

        if (node === this.node && this.decorations === decorations) {
            return true;
        }

        this.node = node;
        this.decorations = decorations;
        this.renderer.updateProps({node, decorations});
        this.maybeMoveContentDOM();

        return true;
    }

    selectNode() {
        this.renderer.updateProps({selected: true});
    }

    deselectNode() {
        this.renderer.updateProps({selected: false});
    }

    destroy() {
        this.renderer.destroy();
    }
}

/**
 * Copied from
 * {@link https://github.com/sibiraj-s/ngx-tiptap/blob/master/projects/ngx-tiptap/src/lib/NodeViewRenderer.ts ngx-tiptap}
 */
export const AngularNodeViewRenderer = (
    component: Type<AngularNodeViewComponent>,
    options: Partial<AngularNodeViewRendererOptions>,
): NodeViewRenderer => {
    return (props: NodeViewRendererProps) => {
        return new AngularNodeView(component, props, options);
    };
};
