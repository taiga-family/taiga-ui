/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone, ElementRef } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { DragRef, DragRefConfig } from './drag-ref';
import { DropListRef } from './drop-list-ref';
import { DragDropRegistry } from './drag-drop-registry';
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
export declare class DragDrop {
    private _document;
    private _ngZone;
    private _viewportRuler;
    private _dragDropRegistry;
    constructor(_document: any, _ngZone: NgZone, _viewportRuler: ViewportRuler, _dragDropRegistry: DragDropRegistry<DragRef, DropListRef>);
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    createDrag<T = any>(element: ElementRef<HTMLElement> | HTMLElement, config?: DragRefConfig): DragRef<T>;
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    createDropList<T = any>(element: ElementRef<HTMLElement> | HTMLElement): DropListRef<T>;
}
