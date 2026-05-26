<template>
  <div ref="containerRef"></div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

/**
 * WysiwygEditor Vue 3 component
 *
 * Requires wysiwyg.js and wysiwyg.css to be available globally.
 * Add to your layout / app entry:
 *   import '/path/to/wysiwyg.css'
 *   import '/path/to/wysiwyg.js'
 *
 * Usage:
 *   <WysiwygEditor v-model="form.content" />
 *   <WysiwygEditor v-model="form.content" :height="500" placeholder="Scrie ceva..." />
 */

// ---- Props ----------------------------------------------------------------

const props = defineProps({
  /** v-model binding — HTML string */
  modelValue: {
    type: String,
    default: '',
  },
  /** Minimum editor height in px */
  height: {
    type: Number,
    default: 400,
  },
  /** Placeholder text */
  placeholder: {
    type: String,
    default: 'Start typing...',
  },
  /** Disable the editor */
  disabled: {
    type: Boolean,
    default: false,
  },
})

// ---- Emits ----------------------------------------------------------------

const emit = defineEmits([
  /** v-model update */
  'update:modelValue',
  /** Emitted on every content change, payload: html string */
  'change',
  /** Emitted when editor receives focus */
  'focus',
  /** Emitted when editor loses focus */
  'blur',
])

// ---- Internal state -------------------------------------------------------

const containerRef = ref(null)

/** @type {import('./wysiwyg.js').WysiwygEditor | null} */
let editor = null

// ---- Lifecycle ------------------------------------------------------------

onMounted(() => {
  if (!window.WysiwygEditor) {
    console.error('[WysiwygEditor.vue] window.WysiwygEditor not found. Make sure wysiwyg.js is loaded before this component.')
    return
  }

  editor = new window.WysiwygEditor(containerRef.value, {
    height:      props.height,
    placeholder: props.placeholder,
    onChange(html) {
      emit('update:modelValue', html)
      emit('change', html)
    },
  })

  // Set initial value
  if (props.modelValue) {
    editor.setHTML(props.modelValue)
  }

  // Disable if needed
  if (props.disabled) {
    _setDisabled(true)
  }

  // Forward focus / blur events from the inner editor div
  const inner = containerRef.value?.querySelector('.wysiwyg-editor')
  if (inner) {
    inner.addEventListener('focus', () => emit('focus'))
    inner.addEventListener('blur',  () => emit('blur'))
  }
})

onBeforeUnmount(() => {
  editor?.destroy()
  editor = null
})

// ---- Watchers -------------------------------------------------------------

/**
 * Sync external v-model changes into the editor.
 * Guards against echo loops (editor fires onChange → parent updates
 * modelValue → watcher fires → setHTML → onChange again).
 */
watch(
  () => props.modelValue,
  (newVal) => {
    if (editor && editor.getHTML() !== newVal) {
      editor.setHTML(newVal ?? '')
    }
  },
)

watch(
  () => props.disabled,
  (val) => _setDisabled(val),
)

// ---- Helpers --------------------------------------------------------------

function _setDisabled(disabled) {
  const inner = containerRef.value?.querySelector('.wysiwyg-editor')
  if (inner) {
    inner.contentEditable = disabled ? 'false' : 'true'
  }
  const toolbar = containerRef.value?.querySelector('.wysiwyg-toolbar')
  if (toolbar) {
    toolbar.style.opacity        = disabled ? '0.5' : ''
    toolbar.style.pointerEvents  = disabled ? 'none' : ''
  }
}

// ---- Exposed API ----------------------------------------------------------

/**
 * Expose editor methods so parent components can call them via template ref:
 *   const editorRef = ref(null)
 *   editorRef.value.focus()
 *   editorRef.value.clear()
 *   editorRef.value.getHTML()
 */
defineExpose({
  focus:   () => editor?.focus(),
  clear:   () => editor?.clear(),
  getHTML: () => editor?.getHTML() ?? '',
  getText: () => editor?.getText() ?? '',
  setHTML: (html) => editor?.setHTML(html),
})
</script>
