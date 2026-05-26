import type { DefineComponent } from 'vue'

// ----------------------------------------------------------------
// Options
// ----------------------------------------------------------------

export interface WysiwygOptions {
  /** Minimum editor height in px. Default: 400 */
  height?: number
  /** Placeholder text shown when editor is empty. Default: 'Start typing...' */
  placeholder?: string
  /** Callback fired on every content change, receives the HTML string */
  onChange?: (html: string) => void
}

// ----------------------------------------------------------------
// Core class
// ----------------------------------------------------------------

export declare class WysiwygEditorCore {
  constructor(selector: string | HTMLElement, options?: WysiwygOptions)

  /** Returns the current HTML content */
  getHTML(): string

  /** Sets the editor HTML content */
  setHTML(html: string): this

  /** Returns the plain text content (no HTML tags) */
  getText(): string

  /** Focuses the editor */
  focus(): this

  /** Clears all content */
  clear(): this

  /**
   * Removes the editor from the DOM and restores the original element.
   * Always call this in onBeforeUnmount / cleanup.
   */
  destroy(): void

  /** Subscribe to an editor event */
  on(event: 'change', fn: (html: string) => void): this
  on(event: 'focus' | 'blur', fn: () => void): this

  /** Unsubscribe from an event */
  off(event: string, fn: Function): this
}

// ----------------------------------------------------------------
// Vue 3 component props / emits
// ----------------------------------------------------------------

export interface WysiwygEditorProps {
  /** v-model — HTML string */
  modelValue?: string
  /** Minimum editor height in px. Default: 400 */
  height?: number
  /** Placeholder text. Default: 'Start typing...' */
  placeholder?: string
  /** Disables editing and grays out the toolbar */
  disabled?: boolean
}

export interface WysiwygEditorEmits {
  /** v-model update */
  (e: 'update:modelValue', html: string): void
  /** Fired on every content change */
  (e: 'change', html: string): void
  /** Fired when the editor receives focus */
  (e: 'focus'): void
  /** Fired when the editor loses focus */
  (e: 'blur'): void
}

/** Methods exposed via template ref */
export interface WysiwygEditorExposed {
  focus: () => void
  clear: () => void
  getHTML: () => string
  getText: () => string
  setHTML: (html: string) => void
}

export declare const WysiwygEditor: DefineComponent<
  WysiwygEditorProps,
  WysiwygEditorExposed,
  unknown
>

// ----------------------------------------------------------------
// Default export (core class)
// ----------------------------------------------------------------

export default WysiwygEditorCore
