import { BPClient } from 'blocking-proxy';
import { Navigation, promise as wdpromise, WebDriver, WebElement, WebElementPromise } from 'selenium-webdriver';
import { ExtendedWebDriver } from 'webdriver-js-extender';
import { DebugHelper } from './debugger';
import { ElementArrayFinder, ElementFinder } from './element';
import { ProtractorExpectedConditions } from './expectedConditions';
import { Locator, ProtractorBy } from './locators';
import { Plugins } from './plugins';
export declare class AbstractWebDriver {
}
export interface AbstractWebDriver extends WebDriver {
}
export declare class AbstractExtendedWebDriver extends AbstractWebDriver {
}
export interface AbstractExtendedWebDriver extends ExtendedWebDriver {
}
export interface ElementHelper extends Function {
    (locator: Locator): ElementFinder;
    all: (locator: Locator) => ElementArrayFinder;
}
/**
 * @alias browser
 * @constructor
 * @extends {webdriver_extensions.ExtendedWebDriver}
 * @param {webdriver.WebDriver} webdriver
 * @param {string=} opt_baseUrl A base URL to run get requests against.
 * @param {string|webdriver.promise.Promise<string>=} opt_rootElement  Selector element that has an
 *     ng-app in scope.
 * @param {boolean=} opt_untrackOutstandingTimeouts Whether Protractor should
 *     stop tracking outstanding $timeouts.
 */
export declare class ProtractorBrowser extends AbstractExtendedWebDriver {
    /**
     * @type {ProtractorBy}
     */
    static By: ProtractorBy;
    /**
     * @type {ExpectedConditions}
     */
    ExpectedConditions: ProtractorExpectedConditions;
    /**
     * The wrapped webdriver instance. Use this to interact with pages that do
     * not contain Angular (such as a log-in screen).
     *
     * @type {webdriver_extensions.ExtendedWebDriver}
     */
    driver: ExtendedWebDriver;
    /**
     * The client used to control the BlockingProxy. If unset, BlockingProxy is
     * not being used and Protractor will handle client-side synchronization.
     */
    bpClient: BPClient;
    /**
     * Helper function for finding elements.
     *
     * @type {function(webdriver.Locator): ElementFinder}
     */
    element: ElementHelper;
    /**
     * Shorthand function for finding elements by css.
     *
     * @type {function(string): ElementFinder}
     */
    $: (query: string) => ElementFinder;
    /**
     * Shorthand function for finding arrays of elements by css.
     *
     * @type {function(string): ElementArrayFinder}
     */
    $$: (query: string) => ElementArrayFinder;
    /**
     * All get methods will be resolved against this base URL. Relative URLs are =
     * resolved the way anchor tags resolve.
     *
     * @type {string}
     */
    baseUrl: string;
    /**
     * The css selector for an element on which to find Angular. This is usually
     * 'body' but if your ng-app is on a subsection of the page it may be
     * a subelement.
     *
     * This property is deprecated - please use angularAppRoot() instead.
     *
     * @deprecated
     * @type {string}
     */
    rootEl: string;
    private internalRootEl;
    /**
     * Set the css selector for an element on which to find Angular. This is usually
     * 'body' but if your ng-app is on a subsection of the page it may be
     * a subelement.
     *
     * The change will be made within WebDriver's control flow, so that commands after
     * this method is called use the new app root. Pass nothing to get a promise that
     * resolves to the value of the selector.
     *
     * @param {string|webdriver.promise.Promise<string>} value The new selector.
     * @returns A promise that resolves with the value of the selector.
     */
    angularAppRoot(value?: string | wdpromise.Promise<string>): wdpromise.Promise<string>;
    /**
     * If true, Protractor will not attempt to synchronize with the page before
     * performing actions. This can be harmful because Protractor will not wait
     * until $timeouts and $http calls have been processed, which can cause
     * tests to become flaky. This should be used only when necessary, such as
     * when a page continuously polls an API using $timeout.
     *
     * Initialized to `false` by the runner.
     *
     * This property is deprecated - please use waitForAngularEnabled instead.
     *
     * @deprecated
     * @type {boolean}
     */
    ignoreSynchronization: boolean;
    private internalIgnoreSynchronization;
    /**
     * Timeout in milliseconds to wait for pages to load when calling `get`.
     *
     * @type {number}
     */
    getPageTimeout: number;
    /**
     * An object that holds custom test parameters.
     *
     * @type {Object}
     */
    params: any;
    /**
     * Resolved when the browser is ready for use.  Resolves to the browser, so
     * you can do:
     *
     *   forkedBrowser = await browser.forkNewDriverInstance().ready;
     *
     * Set by the runner.
     *
     * @type {webdriver.promise.Promise.<ProtractorBrowser>}
     */
    ready: wdpromise.Promise<ProtractorBrowser>;
    plugins_: Plugins;
    /**
     * The reset URL to use between page loads.
     *
     * @type {string}
     */
    resetUrl: string;
    /**
     * If true, Protractor will track outstanding $timeouts and report them in the
     * error message if Protractor fails to synchronize with Angular in time.
     * @private {boolean}
     */
    trackOutstandingTimeouts_: boolean;
    allScriptsTimeout: number;
    /**
     * Information about mock modules that will be installed during every
     * get().
     *
     * @type {Array<{name: string, script: function|string, args:
     * Array.<string>}>}
     */
    mockModules_: {
        name: string;
        script: string | Function;
        args: any[];
    }[];
    /**
     * If specified, start a debugger server at specified port instead of repl
     * when running element explorer.
     * @public {number}
     */
    debuggerServerPort: number;
    /**
     * If true, Protractor will interpret any angular apps it comes across as
     * hybrid angular1/angular2 apps.
     *
     * @type {boolean}
     */
    ng12Hybrid: boolean;
    /**
     * A helper that manages debugging tests.
     */
    debugHelper: DebugHelper;
    [key: string]: any;
    constructor(webdriverInstance: WebDriver, opt_baseUrl?: string, opt_rootElement?: string | wdpromise.Promise<string>, opt_untrackOutstandingTimeouts?: boolean, opt_blockingProxyUrl?: string);
    /**
     * If set to false, Protractor will not wait for Angular $http and $timeout
     * tasks to complete before interacting with the browser. This can cause
     * flaky tests, but should be used if, for instance, your app continuously
     * polls an API with $timeout.
     *
     * Call waitForAngularEnabled() without passing a value to read the current
     * state without changing it.
     */
    waitForAngularEnabled(enabled?: boolean | wdpromise.Promise<boolean>): wdpromise.Promise<boolean>;
    /**
     * Get the processed configuration object that is currently being run. This
     * will contain the specs and capabilities properties of the current runner
     * instance.
     *
     * Set by the runner.
     *
     * @returns {webdriver.promise.Promise} A promise which resolves to the
     * capabilities object.
     */
    getProcessedConfig(): wdpromise.Promise<any>;
    /**
     * Fork another instance of browser for use in interactive tests.
     *
     * @example
     * // Running with control flow enabled
     * var fork = browser.forkNewDriverInstance();
     * fork.get('page1'); // 'page1' gotten by forked browser
     *
     * // Running with control flow disabled
     * var forked = await browser.forkNewDriverInstance().ready;
     * await forked.get('page1'); // 'page1' gotten by forked browser
     *
     * @param {boolean=} useSameUrl Whether to navigate to current url on creation
     * @param {boolean=} copyMockModules Whether to apply same mock modules on creation
     * @param {boolean=} copyConfigUpdates Whether to copy over changes to `baseUrl` and similar
     *   properties initialized to values in the the config.  Defaults to `true`
     *
     * @returns {ProtractorBrowser} A browser instance.
     */
    forkNewDriverInstance(useSameUrl?: boolean, copyMockModules?: boolean, copyConfigUpdates?: boolean): ProtractorBrowser;
    /**
     * Restart the browser.  This is done by closing this browser instance and creating a new one.
     * A promise resolving to the new instance is returned, and if this function was called on the
     * global `browser` instance then Protractor will automatically overwrite the global `browser`
     * variable.
     *
     * When restarting a forked browser, it is the caller's job to overwrite references to the old
     * instance.
     *
     * This function behaves slightly differently depending on if the webdriver control flow is
     * enabled.  If the control flow is enabled, the global `browser` object is synchronously
     * replaced. If the control flow is disabled, the global `browser` is replaced asynchronously
     * after the old driver quits.
     *
     * Set by the runner.
     *
     * @example
     * // Running against global browser, with control flow enabled
     * browser.get('page1');
     * browser.restart();
     * browser.get('page2'); // 'page2' gotten by restarted browser
     *
     * // Running against global browser, with control flow disabled
     * await browser.get('page1');
     * await browser.restart();
     * await browser.get('page2'); // 'page2' gotten by restarted browser
     *
     * // Running against forked browsers, with the control flow enabled
     * // In this case, you may prefer `restartSync` (documented below)
     * var forked = browser.forkNewDriverInstance();
     * fork.get('page1');
     * fork.restart().then(function(fork) {
     *   fork.get('page2'); // 'page2' gotten by restarted fork
     * });
     *
     * // Running against forked browsers, with the control flow disabled
     * var forked = await browser.forkNewDriverInstance().ready;
     * await fork.get('page1');
     * fork = await fork.restart();
     * await fork.get('page2'); // 'page2' gotten by restarted fork
     *
     * // Unexpected behavior can occur if you save references to the global `browser`
     * var savedBrowser = browser;
     * browser.get('foo').then(function() {
     *   console.log(browser === savedBrowser); // false
     * });
     * browser.restart();
     *
     * @returns {webdriver.promise.Promise<ProtractorBrowser>} A promise resolving to the restarted
     *   browser
     */
    restart(): wdpromise.Promise<ProtractorBrowser>;
    /**
     * Like `restart`, but instead of returning a promise resolving to the new browser instance,
     * returns the new browser instance directly.  Can only be used when the control flow is enabled.
     *
     * @example
     * // Running against global browser
     * browser.get('page1');
     * browser.restartSync();
     * browser.get('page2'); // 'page2' gotten by restarted browser
     *
     * // Running against forked browsers
     * var forked = browser.forkNewDriverInstance();
     * fork.get('page1');
     * fork = fork.restartSync();
     * fork.get('page2'); // 'page2' gotten by restarted fork
     *
     * @throws {TypeError} Will throw an error if the control flow is not enabled
     * @returns {ProtractorBrowser} The restarted browser
     */
    restartSync(): ProtractorBrowser;
    /**
     * Instead of using a single root element, search through all angular apps
     * available on the page when finding elements or waiting for stability.
     * Only compatible with Angular2.
     */
    useAllAngular2AppRoots(): void;
    /**
     * The same as {@code webdriver.WebDriver.prototype.executeScript},
     * but with a customized description for debugging.
     *
     * @private
     * @param {!(string|Function)} script The script to execute.
     * @param {string} description A description of the command for debugging.
     * @param {...*} var_args The arguments to pass to the script.
     * @returns {!webdriver.promise.Promise.<T>} A promise that will resolve to
     * the scripts return value.
     * @template T
     */
    executeScriptWithDescription(script: string | Function, description: string, ...scriptArgs: any[]): wdpromise.Promise<any>;
    /**
     * The same as {@code webdriver.WebDriver.prototype.executeAsyncScript},
     * but with a customized description for debugging.
     *
     * @private
     * @param {!(string|Function)} script The script to execute.
     * @param {string} description A description for debugging purposes.
     * @param {...*} var_args The arguments to pass to the script.
     * @returns {!webdriver.promise.Promise.<T>} A promise that will resolve to
     * the
     *    scripts return value.
     * @template T
     */
    private executeAsyncScript_(script, description, ...scriptArgs);
    /**
     * Instruct webdriver to wait until Angular has finished rendering and has
     * no outstanding $http or $timeout calls before continuing.
     * Note that Protractor automatically applies this command before every
     * WebDriver action.
     *
     * @param {string=} opt_description An optional description to be added
     *     to webdriver logs.
     * @returns {!webdriver.promise.Promise} A promise that will resolve to the
     *    scripts return value.
     */
    waitForAngular(opt_description?: string): wdpromise.Promise<any>;
    /**
     * Waits for Angular to finish rendering before searching for elements.
     * @see webdriver.WebDriver.findElement
     * @returns {!webdriver.WebElementPromise} A promise that will be resolved to
     *      the located {@link webdriver.WebElement}.
     */
    findElement(locator: Locator): WebElementPromise;
    /**
     * Waits for Angular to finish rendering before searching for elements.
     * @see webdriver.WebDriver.findElements
     * @returns {!webdriver.promise.Promise} A promise that will be resolved to an
     *     array of the located {@link webdriver.WebElement}s.
     */
    findElements(locator: Locator): wdpromise.Promise<WebElement[]>;
    /**
     * Tests if an element is present on the page.
     * @see webdriver.WebDriver.isElementPresent
     * @returns {!webdriver.promise.Promise} A promise that will resolve to whether
     *     the element is present on the page.
     */
    isElementPresent(locatorOrElement: Locator | WebElement | ElementFinder): wdpromise.Promise<any>;
    /**
     * Add a module to load before Angular whenever Protractor.get is called.
     * Modules will be registered after existing modules already on the page,
     * so any module registered here will override preexisting modules with the
     * same name.
     *
     * @example
     * browser.addMockModule('modName', function() {
     *   angular.module('modName', []).value('foo', 'bar');
     * });
     *
     * @param {!string} name The name of the module to load or override.
     * @param {!string|Function} script The JavaScript to load the module.
     *     Note that this will be executed in the browser context, so it cannot
     *     access variables from outside its scope.
     * @param {...*} varArgs Any additional arguments will be provided to
     *     the script and may be referenced using the `arguments` object.
     */
    addMockModule(name: string, script: string | Function, ...moduleArgs: any[]): void;
    /**
     * Clear the list of registered mock modules.
     */
    clearMockModules(): void;
    /**
     * Remove a registered mock module.
     *
     * @example
     * browser.removeMockModule('modName');
     *
     * @param {!string} name The name of the module to remove.
     */
    removeMockModule(name: string): void;
    /**
     * Get a list of the current mock modules.
     *
     * @returns {Array.<!string|Function>} The list of mock modules.
     */
    getRegisteredMockModules(): Array<string | Function>;
    /**
     * Add the base mock modules used for all Protractor tests.
     *
     * @private
     */
    private addBaseMockModules_();
    /**
     * @see webdriver.WebDriver.get
     *
     * Navigate to the given destination and loads mock modules before
     * Angular. Assumes that the page being loaded uses Angular.
     * If you need to access a page which does not have Angular on load, use
     * the wrapped webdriver directly.
     *
     * @example
     * browser.get('https://angularjs.org/');
     * expect(browser.getCurrentUrl()).toBe('https://angularjs.org/');
     *
     * @param {string} destination Destination URL.
     * @param {number=} opt_timeout Number of milliseconds to wait for Angular to
     *     start.
     */
    get(destination: string, timeout?: number): wdpromise.Promise<any>;
    /**
     * @see webdriver.WebDriver.refresh
     *
     * Makes a full reload of the current page and loads mock modules before
     * Angular. Assumes that the page being loaded uses Angular.
     * If you need to access a page which does not have Angular on load, use
     * the wrapped webdriver directly.
     *
     * @param {number=} opt_timeout Number of milliseconds to wait for Angular to start.
     */
    refresh(opt_timeout?: number): wdpromise.Promise<any>;
    /**
     * Mixin navigation methods back into the navigation object so that
     * they are invoked as before, i.e. driver.navigate().refresh()
     */
    navigate(): Navigation;
    /**
     * Browse to another page using in-page navigation.
     *
     * @example
     * browser.get('http://angular.github.io/protractor/#/tutorial');
     * browser.setLocation('api');
     * expect(browser.getCurrentUrl())
     *     .toBe('http://angular.github.io/protractor/#/api');
     *
     * @param {string} url In page URL using the same syntax as $location.url()
     * @returns {!webdriver.promise.Promise} A promise that will resolve once
     *    page has been changed.
     */
    setLocation(url: string): wdpromise.Promise<any>;
    /**
     * Deprecated, use `browser.getCurrentUrl()` instead.
     *
     * Despite its name, this function will generally return `$location.url()`, though in some
     * cases it will return `$location.absUrl()` instead.  This function is only here for legacy
     * users, and will probably be removed in Protractor 6.0.
     *
     * @deprecated Please use `browser.getCurrentUrl()`
     * @example
     * browser.get('http://angular.github.io/protractor/#/api');
     * expect(browser.getLocationAbsUrl())
     *     .toBe('http://angular.github.io/protractor/#/api');
     * @returns {webdriver.promise.Promise<string>} The current absolute url from
     * AngularJS.
     */
    getLocationAbsUrl(): wdpromise.Promise<any>;
    /**
     * Adds a task to the control flow to pause the test and inject helper
     * functions
     * into the browser, so that debugging may be done in the browser console.
     *
     * This should be used under node in debug mode, i.e. with
     * protractor debug <configuration.js>
     *
     * @example
     * While in the debugger, commands can be scheduled through webdriver by
     * entering the repl:
     *   debug> repl
     *   > element(by.input('user')).sendKeys('Laura');
     *   > browser.debugger();
     *   Press Ctrl + c to leave debug repl
     *   debug> c
     *
     * This will run the sendKeys command as the next task, then re-enter the
     * debugger.
     */
    debugger(): wdpromise.Promise<void>;
    /**
     * See browser.explore().
     */
    enterRepl(opt_debugPort?: number): void;
    /**
     * Beta (unstable) explore function for entering the repl loop from
     * any point in the control flow. Use browser.explore() in your test.
     * Does not require changes to the command line (no need to add 'debug').
     * Note, if you are wrapping your own instance of Protractor, you must
     * expose globals 'browser' and 'protractor' for pause to work.
     *
     * @example
     * element(by.id('foo')).click();
     * browser.explore();
     * // Execution will stop before the next click action.
     * element(by.id('bar')).click();
     *
     * @param {number=} opt_debugPort Optional port to use for the debugging
     * process
     */
    explore(opt_debugPort?: number): void;
    /**
     * Beta (unstable) pause function for debugging webdriver tests. Use
     * browser.pause() in your test to enter the protractor debugger from that
     * point in the control flow.
     * Does not require changes to the command line (no need to add 'debug').
     * Note, if you are wrapping your own instance of Protractor, you must
     * expose globals 'browser' and 'protractor' for pause to work.
     *
     * @example
     * element(by.id('foo')).click();
     * browser.pause();
     * // Execution will stop before the next click action.
     * element(by.id('bar')).click();
     *
     * @param {number=} opt_debugPort Optional port to use for the debugging
     * process
     */
    pause(opt_debugPort?: number): wdpromise.Promise<any>;
    /**
     * Determine if the control flow is enabled.
     *
     * @returns true if the control flow is enabled, false otherwise.
     */
    controlFlowIsEnabled(): any;
}
