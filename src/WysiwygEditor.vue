<template>
  <div ref="containerRef"></div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import WysiwygEditorCore from './wysiwyg.js'

/**
 * @bogdan-dybo/wysiwyg — Vue 3 component
 *
 * Usage:
 *   import { WysiwygEditor } from '@bogdan-dybo/wysiwyg'
 *   import '@bogdan-dybo/wysiwyg/css'
 *
 *   <WysiwygEditor v-model="form.content" />
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
  /** Disables editing and grays out the toolbar */
  disabled: {
    type: Boolean,
    default: false,
  },
})

// ---- Emits ----------------------------------------------------------------

const emit = defineEmits([
  'update:modelValue',
  'change',
  'focus',
  'blur',
])

// ---- Internal state -------------------------------------------------------

const containerRef = ref(null)

/** @type {WysiwygEditorCore | null} */
let editor = null

// ---- Lifecycle ------------------------------------------------------------

onMounted(() => {
  editor = new WysiwygEditorCore(containerRef.value, {
    height:      props.height,
    placeholder: props.placeholder,
    onChange(html) {
      emit('update:modelValue', html)
      emit('change', html)
    },
  })

  if (props.modelValue) {
    editor.setHTML(props.modelValue)
  }

  if (props.disabled) {
    _setDisabled(true)
  }

  // Forward focus / blur from the inner contenteditable div
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

watch(
  () => props.modelValue,
  (newVal) => {
    // Guard against echo loop: editor → onChange → v-model → watcher → setHTML → onChange
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
    toolbar.style.opacity       = disabled ? '0.5' : ''
    toolbar.style.pointerEvents = disabled ? 'none' : ''
  }
}

// ---- Exposed API ----------------------------------------------------------

defineExpose({
  focus:   () => editor?.focus(),
  clear:   () => editor?.clear(),
  getHTML: () => editor?.getHTML() ?? '',
  getText: () => editor?.getText() ?? '',
  setHTML: (html) => editor?.setHTML(html),
})
</script>
