/**
 * @bogdan-dybo/wysiwyg — entry point
 *
 * Named exports:
 *   WysiwygEditorCore  — plain JS class, zero dependencies
 *   WysiwygEditor      — Vue 3 component (requires Vue as peer dep)
 *
 * CSS must be imported separately:
 *   import '@bogdan-dybo/wysiwyg/css'
 */

// Core JS class
export { default as WysiwygEditorCore } from './wysiwyg.js'

// Vue 3 component
export { default as WysiwygEditor } from './WysiwygEditor.vue'
