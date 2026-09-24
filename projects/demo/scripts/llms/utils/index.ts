// Configuration utilities
export * from './config';

// Path configuration utilities
export {getFoldersToScan, getPagesPath, setFoldersToScan, setPagesPath} from './paths';

// Route-based component extraction
export {
    buildFolderRouteMap,
    type ComponentInfo,
    DEFAULT_PATH_FILES,
    DEFAULT_ROUTE_FILES,
    extractComponentsFromRoutes,
    type PagesRoot,
    shouldIncludeComponent,
} from './routes';

// File system operations - exclude fileExists to avoid conflict
export {
    extractExampleDescriptions,
    getAllFolders,
    getComponentApiFromTable,
    getComponentApiFromTemplates,
    getComponentDescription,
    getComponentExample,
    getComponentHeader,
    getComponentSourceFiles,
    getContentObjectExamples,
    getImportExamples,
    getMarkdownFiles,
    getUsageExamples,
    processMarkdownFile,
    readIndexHtml,
} from './file-system';

// Prose-page markdown rendering
export {
    getComponentProse,
    getFirstTabProse,
    getInlineCodeSnippets,
    getPageProse,
    htmlToMarkdown,
    stripDuplicateExampleProse,
} from './page-prose';

// Colors/Typography token-table rendering
export {getDesignTokenTables} from './design-token-pages';
