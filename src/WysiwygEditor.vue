<template>
  <!--
    The core moves its target inside the .wysiwyg-wrapper it creates, so the
    target must not be the component root — otherwise the editor ends up
    outside the component's DOM.
  -->
  <div>
    <div ref="targetRef"></div>
  </div>
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

const targetRef = ref(null)

/** @type {WysiwygEditorCore | null} */
let editor = null

// ---- Lifecycle ------------------------------------------------------------

onMounted(() => {
  editor = new WysiwygEditorCore(targetRef.value, {
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
    editor.setDisabled(true)
  }

  editor.on('focus', () => emit('focus'))
  editor.on('blur',  () => emit('blur'))
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
  (val) => editor?.setDisabled(val),
)

// ---- Exposed API ----------------------------------------------------------

defineExpose({
  focus:   () => editor?.focus(),
  clear:   () => editor?.clear(),
  getHTML: () => editor?.getHTML() ?? '',
  getText: () => editor?.getText() ?? '',
  setHTML: (html) => editor?.setHTML(html),
})
</script>
