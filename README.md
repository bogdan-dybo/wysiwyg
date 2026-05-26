# @bogdan-dybo/wysiwyg

Lightweight WYSIWYG editor — zero dependencies, Vue 3 component included.

## Install

```bash
# from npm
npm i @bogdan-dybo/wysiwyg

# directly from GitHub
npm i dybo/wysiwyg
```

## Setup

Import the CSS once in your app entry (e.g. `app.js` / `bootstrap.js`):

```js
import '@bogdan-dybo/wysiwyg/css'
```

---

## Usage — Vue 3 / Inertia

```vue
<script setup>
import { WysiwygEditor } from '@bogdan-dybo/wysiwyg'
import { useForm } from '@inertiajs/vue3'

const form = useForm({ content: '' })
</script>

<template>
  <form @submit.prevent="form.post('/articles')">
    <WysiwygEditor v-model="form.content" :height="450" />
    <button type="submit">Save</button>
  </form>
</template>
```

### Props

| Prop          | Type      | Default            | Description                         |
|---------------|-----------|--------------------|-------------------------------------|
| `modelValue`  | `string`  | `''`               | HTML content (v-model)              |
| `height`      | `number`  | `400`              | Minimum editor height in px         |
| `placeholder` | `string`  | `'Start typing...'`| Placeholder when empty              |
| `disabled`    | `boolean` | `false`            | Disables editing                    |

### Emits

| Event                | Payload  | Description                    |
|----------------------|----------|--------------------------------|
| `update:modelValue`  | `string` | Fired on every change (v-model)|
| `change`             | `string` | Same, for explicit listening   |
| `focus`              | —        | Editor focused                 |
| `blur`               | —        | Editor blurred                 |

### Template ref API

```vue
<WysiwygEditor ref="editorRef" v-model="content" />

<script setup>
const editorRef = ref(null)

editorRef.value.focus()
editorRef.value.clear()
editorRef.value.getHTML()  // → string
editorRef.value.getText()  // → string (no HTML)
editorRef.value.setHTML('<p>Hello</p>')
</script>
```

---

## Usage — Vanilla JS

```html
<link rel="stylesheet" href="node_modules/@bogdan-dybo/wysiwyg/dist/wysiwyg.css" />
<div id="editor"></div>
<script src="node_modules/@bogdan-dybo/wysiwyg/dist/wysiwyg.umd.js"></script>

<script>
  const editor = new DyboWysiwyg.WysiwygEditorCore('#editor', {
    height: 400,
    placeholder: 'Start typing...',
    onChange: (html) => console.log(html),
  })

  editor.getHTML()           // → string
  editor.setHTML('<p>Hi</p>')
  editor.getText()           // → plain text
  editor.focus()
  editor.clear()
  editor.destroy()

  // Event API
  editor.on('change', (html) => saveToServer(html))
</script>
```

---

## Toolbar features

| Feature             | Notes                                      |
|---------------------|--------------------------------------------|
| Undo / Redo         | Native browser history                     |
| Headings            | Normal, H1, H2, H3 — dropdown with preview|
| Bold / Italic / Underline / Strikethrough | Ctrl+B / I / U   |
| Text color          | 32-color palette + custom color picker     |
| Alignment           | Left, Center, Right, Justify               |
| Lists               | Bullet and ordered, nested                 |
| Tables              | Grid picker (up to 8×8), Tab navigation    |
| Remove formatting   | Clears all inline styles                   |
| View Source         | Toggle raw HTML editing                    |

---

## License

MIT © Bogdan
