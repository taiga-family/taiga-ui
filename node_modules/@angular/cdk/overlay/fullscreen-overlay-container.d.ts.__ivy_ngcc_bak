/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OnDestroy } from '@angular/core';
import { OverlayContainer } from './overlay-container';
import { Platform } from '@angular/cdk/platform';
/**
 * Alternative to OverlayContainer that supports correct displaying of overlay elements in
 * Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 *
 * Should be provided in the root component.
 */
export declare class FullscreenOverlayContainer extends OverlayContainer implements OnDestroy {
    private _fullScreenEventName;
    private _fullScreenListener;
    constructor(_document: any, 
    /**
     * @deprecated `platform` parameter to become required.
     * @breaking-change 10.0.0
     */
    platform?: Platform);
    ngOnDestroy(): void;
    protected _createContainer(): void;
    private _adjustParentForFullscreenChange;
    private _addFullscreenChangeListener;
    private _getEventName;
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     */
    getFullscreenElement(): Element;
}
