/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventSelector, PrebootOptions, PrebootAppData, PrebootData, PrebootWindow, ServerClientRoot, PrebootSelection } from '../common/preboot.interfaces';
/**
 * Called right away to initialize preboot
 *
 * @param opts All the preboot options
 * @param win
 */
export declare function initAll(opts: PrebootOptions, win?: PrebootWindow): () => void;
/**
 * Start up preboot by going through each app and assigning the appropriate
 * handlers. Normally this wouldn't be called directly, but we have set it up so
 * that it can for older versions of Universal.
 *
 * @param prebootData Global preboot data object that contains options and will
 * have events
 * @param win Optional param to pass in mock window for testing purposes
 */
export declare function start(prebootData: PrebootData, win?: PrebootWindow): void;
/**
 * Create an overlay div and add it to the DOM so it can be used
 * if a freeze event occurs
 *
 * @param _document The global document object (passed in for testing purposes)
 * @returns Element The overlay node is returned
 */
export declare function createOverlay(_document: Document): HTMLElement | undefined;
/**
 * Get references to the current app root node based on input options. Users can
 * initialize preboot either by specifying appRoot which is just one or more
 * selectors for apps. This section option is useful for people that are doing their own
 * buffering (i.e. they have their own client and server view)
 *
 * @param _document The global document object used to attach the overlay
 * @param opts Options passed in by the user to init()
 * @param serverNode The server node serving as application root
 * @returns ServerClientRoot An array of root info for the current app
 */
export declare function getAppRoot(_document: Document, opts: PrebootOptions, serverNode: HTMLElement): ServerClientRoot;
/**
 * Under given server root, for given selector, record events
 *
 * @param _document
 * @param prebootData
 * @param appData
 * @param eventSelector
 */
export declare function handleEvents(_document: Document, prebootData: PrebootData, appData: PrebootAppData, eventSelector: EventSelector): void;
/**
 * Create handler for events that we will record
 */
export declare function createListenHandler(_document: Document, prebootData: PrebootData, eventSelector: EventSelector, appData: PrebootAppData): EventListener;
/**
 * Get the selection data that is later used to set the cursor after client view
 * is active
 */
export declare function getSelection(node: HTMLInputElement): PrebootSelection;
/**
 * Create buffer for a given node
 *
 * @param root All the data related to a particular app
 * @returns Returns the root client node.
 */
export declare function createBuffer(root: ServerClientRoot): HTMLElement;
