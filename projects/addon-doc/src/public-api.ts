/**
 * Public API Surface of @taiga-ui/addon-doc
 */

/* Components */
export * from './components/code/code.component';
export * from './components/code/code.module';
export * from './components/code/parse-code-block';
export * from './components/copy/copy.component';
export * from './components/copy/copy.module';
export * from './components/demo/demo.component';
export * from './components/demo/demo.module';
export * from './components/documentation/documentation.component';
export * from './components/documentation/documentation.module';
export * from './components/documentation/documentation-property-connector.directive';
export * from './components/example/example.component';
export * from './components/example/example.module';
export * from './components/main/main.component';
export * from './components/main/main.module';
export * from './components/navigation/navigation.component';
export * from './components/navigation/navigation.module';
export * from './components/page/page.component';
export * from './components/page/page.module';
export * from './components/page/page-tab.directive';

/* Directives */
export * from './directives/scroll-into-view/scroll-into-view.directive';
export * from './directives/scroll-into-view/scroll-into-view.module';

/* Interfaces */
export * from './interfaces/code-editor';
export * from './interfaces/page';
export * from './interfaces/source-code-path-options';

/* Languages */
export * from './languages/russian';

/* Tokens */
export * from './tokens/code-actions';
export * from './tokens/code-editor';
export * from './tokens/default-tabs';
export * from './tokens/example-content-processor';
export * from './tokens/i18n';
export * from './tokens/logo';
export * from './tokens/page-loaded';
export * from './tokens/pages';
export * from './tokens/see-also';
export * from './tokens/source-code';
export * from './tokens/title';

/* Types */
export * from './types/pages';

/* Utils */
export * from './addon-doc.module';
export * from './utils/coerce-value';
export * from './utils/generate-routes';
export * from './utils/raw-load';
export * from './utils/raw-load-record';
