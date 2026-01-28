// Configuration utilities
export * from './config';

// Route-based component extraction
export * from './routes';

// File system operations - exclude fileExists to avoid conflict
export {
    extractExampleDescriptions,
    extractRequiredDirectives,
    getAllFolders,
    getComponentApiFromTable,
    getComponentApiFromTemplates,
    getComponentDescription,
    getComponentExample,
    getComponentHeader,
    getComponentSourceFiles,
    getImportExamples,
    getMarkdownFiles,
    getUsageExamples,
    processMarkdownFile,
    readIndexHtml,
} from './file-system';
