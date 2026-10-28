/*!
 * WysiwygEditor v1.0.0
 * Lightweight WYSIWYG editor — zero dependencies
 * MIT License
 */
'use strict';

/* ============================================================
   SVG Icons (Feather-style, 16×16)
   ============================================================ */
const ICONS = {
  undo:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></svg>',
  redo:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg>',
  bold:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>',
  italic:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>',
  underline:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/><line x1="4" y1="21" x2="20" y2="21"/></svg>',
  strikethrough:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.3 4.9c-2.3-.6-4.4-1-6.2-.9-2.7 0-5.3.7-5.3 3.6 0 1.5 1.8 3.3 6 3.9h.5m6.8 3.1c.5.8.7 1.7.5 2.8C19 19 15.4 20 11.4 20c-2.1 0-5.3-.5-7.9-2"/><line x1="3" y1="12" x2="21" y2="12"/></svg>',
  color:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22z"/><circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="14" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="17" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>',
  alignLeft:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="11" x2="15" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/><line x1="3" y1="21" x2="13" y2="21"/></svg>',
  alignCenter:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="11" x2="18" y2="11"/><line x1="4" y1="16" x2="20" y2="16"/><line x1="7" y1="21" x2="17" y2="21"/></svg>',
  alignRight:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="9" y1="11" x2="21" y2="11"/><line x1="5" y1="16" x2="21" y2="16"/><line x1="11" y1="21" x2="21" y2="21"/></svg>',
  alignJustify:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="11" x2="21" y2="11"/><line x1="3" y1="16" x2="21" y2="16"/><line x1="3" y1="21" x2="21" y2="21"/></svg>',
  bulletList:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1.5" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="4" cy="18" r="1.5" fill="currentColor" stroke="none"/></svg>',
  orderedList:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4" stroke-linecap="round"/><path d="M4 10h2" stroke-linecap="round"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" stroke-linecap="round"/></svg>',
  table:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>',
  link:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  removeFormat:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/><line x1="3" y1="3" x2="21" y2="21"/></svg>',
  chevronDown:
    '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  viewSource:
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
};

/* ============================================================
   Color palette (4 rows × 8 cols = 32 colors)
   ============================================================ */
const COLORS = [
  '#000000', '#222222', '#555555', '#888888', '#aaaaaa', '#cccccc', '#e5e5e5', '#ffffff',
  '#c0392b', '#e67e22', '#f1c40f', '#27ae60', '#1abc9c', '#2980b9', '#8e44ad', '#e91e63',
  '#fde8e8', '#fef3e2', '#fefce8', '#ecfdf5', '#e0f7f4', '#e3f2fd', '#f3e8ff', '#fce7f3',
  '#7f1d1d', '#78350f', '#713f12', '#14532d', '#134e4a', '#1e3a5f', '#3b0764', '#500724',
];

/* ============================================================
   Paste sanitizing
   ============================================================ */
// Tags removed together with their content
const PASTE_DROP_TAGS = new Set([
  'SCRIPT', 'STYLE', 'META', 'LINK', 'TITLE', 'HEAD', 'NOSCRIPT', 'TEMPLATE',
  'IFRAME', 'FRAME', 'OBJECT', 'EMBED', 'SVG', 'MATH',
  'FORM', 'INPUT', 'BUTTON', 'TEXTAREA', 'SELECT',
]);

// Tags kept as-is; anything else is unwrapped (children kept)
const PASTE_ALLOWED_TAGS = new Set([
  'P', 'BR', 'DIV', 'SPAN', 'FONT', 'HR',
  'B', 'STRONG', 'I', 'EM', 'U', 'S', 'STRIKE', 'DEL', 'SUB', 'SUP',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BLOCKQUOTE', 'PRE', 'CODE',
  'UL', 'OL', 'LI', 'A', 'IMG',
  'TABLE', 'THEAD', 'TBODY', 'TFOOT', 'TR', 'TH', 'TD',
]);

const PASTE_ALLOWED_STYLES = [
  'color', 'background-color', 'text-align', 'font-weight', 'font-style', 'text-decoration',
];

const SAFE_HREF = /^(https?:|mailto:|tel:|#|\/)/i;
const SAFE_SRC  = /^(https?:|data:image\/(png|jpe?g|gif|webp);)/i;

function sanitizeHTML(html) {
  const tpl = document.createElement('template'); // inert: no scripts run, no images load
  tpl.innerHTML = html;
  cleanChildren(tpl.content);
  return tpl.innerHTML;
}

function cleanChildren(parent) {
  Array.from(parent.childNodes).forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) return;
    if (node.nodeType !== Node.ELEMENT_NODE) { node.remove(); return; } // comments etc.

    const tag = node.tagName.toUpperCase();
    if (PASTE_DROP_TAGS.has(tag)) { node.remove(); return; }

    cleanChildren(node);

    if (!PASTE_ALLOWED_TAGS.has(tag)) { node.replaceWith(...node.childNodes); return; }

    cleanAttributes(node, tag);

    // Word / Docs leave lots of empty <span>s behind once their styles are stripped
    if ((tag === 'SPAN' || tag === 'FONT') && !node.attributes.length) {
      node.replaceWith(...node.childNodes);
    }
  });
}

function cleanAttributes(node, tag) {
  Array.from(node.attributes).forEach(({ name, value }) => {
    if (name === 'style') {
      const kept = PASTE_ALLOWED_STYLES
        .filter(prop => node.style.getPropertyValue(prop))
        .map(prop => prop + ': ' + node.style.getPropertyValue(prop));
      if (kept.length) node.setAttribute('style', kept.join('; '));
      else node.removeAttribute('style');
      return;
    }

    const v = value.trim();
    const keep =
      (name === 'href'  && tag === 'A'   && SAFE_HREF.test(v)) ||
      (name === 'src'   && tag === 'IMG' && SAFE_SRC.test(v))  ||
      (name === 'alt'   && tag === 'IMG') ||
      (name === 'color' && tag === 'FONT') ||
      ((name === 'colspan' || name === 'rowspan') && (tag === 'TD' || tag === 'TH'));

    if (!keep) node.removeAttribute(name);
  });
}

function escapeHTML(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Turns user input into a safe href, or null if it can't be one.
 * "example.com" → "https://example.com", "a@b.ro" → "mailto:a@b.ro",
 * "javascript:…" / "data:…" → null
 */
function normalizeUrl(raw) {
  const v = raw.trim();
  if (!v) return null;
  if (/^[a-z][a-z0-9+.-]*:/i.test(v)) return SAFE_HREF.test(v) ? v : null;
  if (v[0] === '#' || v[0] === '/') return v;
  if (/^[^\s/@]+@[^\s/@]+\.[^\s/@]+$/.test(v)) return 'mailto:' + v;
  return 'https://' + v;
}

function setLinkTarget(a, newTab) {
  if (newTab) {
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  } else {
    a.removeAttribute('target');
    a.removeAttribute('rel');
  }
}

/* ============================================================
   Helpers
   ============================================================ */
function el(tag, props) {
  const node = document.createElement(tag);
  if (!props) return node;
  for (const [k, v] of Object.entries(props)) {
    if (k === 'innerHTML') node.innerHTML = v;
    else if (k === 'style' && typeof v === 'string') node.style.cssText = v;
    else node[k] = v;
  }
  return node;
}

/* ============================================================
   WysiwygEditor class
   ============================================================ */
class WysiwygEditor {
  /**
   * @param {string|HTMLElement} selector  CSS selector or element to replace
   * @param {object}             [options]
   * @param {number}             [options.height=400]        Min editor height (px)
   * @param {string}             [options.placeholder]       Placeholder text
   * @param {Function}           [options.onChange]          Called with HTML on every change
   */
  constructor(selector, options) {
    this._target = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;

    if (!this._target) {
      throw new Error('WysiwygEditor: element not found — ' + selector);
    }

    this._opts = Object.assign({
      height: 400,
      placeholder: 'Start typing...',
      onChange: null,
    }, options || {});

    this._activeColor    = '#000000';
    this._listeners      = {};
    this._activeDropdown = null;
    this._isSourceMode   = false;
    this._disabled       = false;

    this._build();
  }

  /* ----------------------------------------------------------
     BUILD
     ---------------------------------------------------------- */

  _build() {
    // Outer wrapper
    this._wrapper = el('div', { className: 'wysiwyg-wrapper' });
    this._target.parentNode.insertBefore(this._wrapper, this._target);

    // Toolbar
    this._toolbar = this._buildToolbar();
    this._wrapper.appendChild(this._toolbar);

    // Editor area
    this._editor = el('div', {
      className: 'wysiwyg-editor',
      contentEditable: 'true',
      spellcheck: true,
    });
    this._editor.style.minHeight = this._opts.height + 'px';
    this._editor.setAttribute('data-placeholder', this._opts.placeholder);
    this._wrapper.appendChild(this._editor);

    // Source textarea (hidden by default)
    this._sourceEl = el('textarea', { className: 'wysiwyg-source', spellcheck: false });
    this._sourceEl.style.minHeight = this._opts.height + 'px';
    this._sourceEl.style.display = 'none';
    this._wrapper.appendChild(this._sourceEl);

    // Status bar
    this._status    = el('div', { className: 'wysiwyg-status' });
    this._wordCount = el('span', { className: 'wysiwyg-wordcount', textContent: '0 words' });
    this._status.appendChild(this._wordCount);
    this._wrapper.appendChild(this._status);

    // Hide original element and keep it in DOM for form sync
    this._target.style.display = 'none';
    this._wrapper.appendChild(this._target);

    // Load initial content
    const initHTML = this._target.tagName === 'TEXTAREA'
      ? this._target.value
      : this._target.innerHTML;
    if (initHTML && initHTML.trim()) {
      this._editor.innerHTML = initHTML;
      this._updateWordCount();
    }

    this._bindEvents();
  }

  /* ----------------------------------------------------------
     TOOLBAR
     ---------------------------------------------------------- */

  _buildToolbar() {
    const bar = el('div', { className: 'wysiwyg-toolbar' });

    const groups = [
      /* History */
      [
        this._btn('undo', 'Undo (Ctrl+Z)', () => this._exec('undo')),
        this._btn('redo', 'Redo (Ctrl+Y)', () => this._exec('redo')),
      ],
      /* Heading */
      [this._buildHeadingDropdown()],
      /* Text format */
      [
        this._btn('bold',          'Bold (Ctrl+B)',      () => this._exec('bold'),         'bold',                true),
        this._btn('italic',        'Italic (Ctrl+I)',    () => this._exec('italic'),        'italic',              true),
        this._btn('underline',     'Underline (Ctrl+U)', () => this._exec('underline'),     'underline',           true),
        this._btn('strikethrough', 'Strikethrough',      () => this._exec('strikeThrough'), 'strikethrough',       true),
      ],
      /* Color */
      [this._buildColorDropdown()],
      /* Alignment */
      [
        this._btn('alignLeft',    'Align Left',    () => this._exec('justifyLeft'),   'justifyleft',    true),
        this._btn('alignCenter',  'Align Center',  () => this._exec('justifyCenter'), 'justifycenter',  true),
        this._btn('alignRight',   'Align Right',   () => this._exec('justifyRight'),  'justifyright',   true),
        this._btn('alignJustify', 'Justify',       () => this._exec('justifyFull'),   'justifyfull',    true),
      ],
      /* Lists */
      [
        this._btn('bulletList',  'Bullet List',  () => this._exec('insertUnorderedList'), 'insertunorderedlist', true),
        this._btn('orderedList', 'Ordered List', () => this._exec('insertOrderedList'),   'insertorderedlist',   true),
      ],
      /* Link + Table */
      [this._buildLinkDropdown(), this._buildTableDropdown()],
      /* Clear + Source */
      [
        this._btn('removeFormat', 'Remove Formatting', () => this._exec('removeFormat')),
        (this._viewSourceBtn = this._btn('viewSource', 'View Source (HTML)', () => this._toggleSource())),
      ],
    ];

    groups.forEach((group, i) => {
      const g = el('div', { className: 'wysiwyg-toolbar-group' });
      group.forEach(b => g.appendChild(b));
      bar.appendChild(g);
      if (i < groups.length - 1) {
        bar.appendChild(el('div', { className: 'wysiwyg-divider' }));
      }
    });

    return bar;
  }

  /** Create a regular toolbar button */
  _btn(iconKey, title, onClick, queryCmd, isToggle) {
    const b = el('button', {
      className: 'wysiwyg-btn',
      title,
      type: 'button',
      innerHTML: ICONS[iconKey],
    });
    if (queryCmd) b.dataset.cmd    = queryCmd;
    if (isToggle) b.dataset.toggle = '1';

    b.addEventListener('mousedown', (e) => {
      e.preventDefault(); // preserve selection
      onClick();
    });
    return b;
  }

  /** Heading selector dropdown */
  _buildHeadingDropdown() {
    const wrap = el('div', { className: 'wysiwyg-dropdown-wrap' });

    const btn = el('button', {
      className: 'wysiwyg-btn wysiwyg-heading-btn',
      type: 'button',
    });
    btn.innerHTML =
      '<span class="wysiwyg-heading-label">Normal</span>' + ICONS.chevronDown;
    this._headingLabel = btn.querySelector('.wysiwyg-heading-label');

    const dd = el('div', { className: 'wysiwyg-dropdown', style: 'display:none' });
    this._headingDropdown = dd;

    const ITEMS = [
      { tag: 'P',  label: 'Normal'    },
      { tag: 'H1', label: 'Heading 1' },
      { tag: 'H2', label: 'Heading 2' },
      { tag: 'H3', label: 'Heading 3' },
    ];

    ITEMS.forEach(({ tag, label }) => {
      const item = el('button', {
        className: 'wysiwyg-dropdown-item',
        type: 'button',
        textContent: label,
      });
      item.dataset.tag = tag;
      item.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this._exec('formatBlock', tag);
        this._closeDropdowns();
        this._updateState();
      });
      dd.appendChild(item);
    });

    btn.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this._toggleDropdown(dd);
    });

    wrap.appendChild(btn);
    wrap.appendChild(dd);
    return wrap;
  }

  /** Color picker dropdown */
  _buildColorDropdown() {
    const wrap = el('div', { className: 'wysiwyg-dropdown-wrap' });

    const btn = el('button', {
      className: 'wysiwyg-btn wysiwyg-color-btn',
      title: 'Text Color',
      type: 'button',
    });
    btn.innerHTML = ICONS.color + '<span class="wysiwyg-color-swatch"></span>';
    this._colorSwatch = btn.querySelector('.wysiwyg-color-swatch');

    const dd = el('div', { className: 'wysiwyg-dropdown', style: 'display:none' });
    this._colorDropdown = dd;

    const palette = el('div', { className: 'wysiwyg-color-palette' });

    COLORS.forEach(color => {
      const cell = el('div', { className: 'wysiwyg-color-cell', title: color });
      cell.style.background = color;
      cell.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this._applyColor(color);
        this._closeDropdowns();
      });
      palette.appendChild(cell);
    });

    // Custom color input
    const customRow = el('div', { className: 'wysiwyg-color-custom' });
    const customInput = el('input', { type: 'color', value: '#000000', title: 'Custom color' });
    customInput.addEventListener('input', (e) => this._applyColor(e.target.value));
    customInput.addEventListener('mousedown', (e) => e.stopPropagation());
    customRow.appendChild(customInput);
    customRow.appendChild(el('span', { textContent: 'Custom color' }));
    palette.appendChild(customRow);

    dd.appendChild(palette);

    btn.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this._toggleDropdown(dd);
    });

    wrap.appendChild(btn);
    wrap.appendChild(dd);
    return wrap;
  }

  /** Table grid picker dropdown */
  _buildTableDropdown() {
    const wrap = el('div', { className: 'wysiwyg-dropdown-wrap' });

    const btn = el('button', {
      className: 'wysiwyg-btn',
      title: 'Insert Table',
      type: 'button',
      innerHTML: ICONS.table,
    });

    const dd     = el('div', { className: 'wysiwyg-dropdown', style: 'display:none' });
    const picker = el('div', { className: 'wysiwyg-table-picker' });
    const label  = el('div', { className: 'wysiwyg-table-picker-label', textContent: 'Insert table' });
    const grid   = el('div', { className: 'wysiwyg-table-grid' });

    const ROWS = 8, COLS = 8;
    const cells = [];

    for (let r = 0; r < ROWS; r++) {
      cells[r] = [];
      for (let c = 0; c < COLS; c++) {
        const cell = el('div', { className: 'wysiwyg-table-cell-pick' });
        cell.dataset.r = r + 1;
        cell.dataset.c = c + 1;

        cell.addEventListener('mouseover', () => {
          const row = +cell.dataset.r;
          const col = +cell.dataset.c;
          label.textContent = row + ' × ' + col;
          for (let rr = 0; rr < ROWS; rr++) {
            for (let cc = 0; cc < COLS; cc++) {
              cells[rr][cc].classList.toggle('highlighted', rr < row && cc < col);
            }
          }
        });

        cell.addEventListener('mousedown', (e) => {
          e.preventDefault();
          this._insertTable(+cell.dataset.r, +cell.dataset.c);
          for (let rr = 0; rr < ROWS; rr++) {
            for (let cc = 0; cc < COLS; cc++) {
              cells[rr][cc].classList.remove('highlighted');
            }
          }
          label.textContent = 'Insert table';
          this._closeDropdowns();
        });

        grid.appendChild(cell);
        cells[r][c] = cell;
      }
    }

    grid.addEventListener('mouseleave', () => {
      for (let rr = 0; rr < ROWS; rr++) {
        for (let cc = 0; cc < COLS; cc++) {
          cells[rr][cc].classList.remove('highlighted');
        }
      }
      label.textContent = 'Insert table';
    });

    picker.appendChild(label);
    picker.appendChild(grid);
    dd.appendChild(picker);

    btn.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this._toggleDropdown(dd);
    });

    wrap.appendChild(btn);
    wrap.appendChild(dd);
    return wrap;
  }

  /** Link form dropdown (URL, optional text, new tab) */
  _buildLinkDropdown() {
    const wrap = el('div', { className: 'wysiwyg-dropdown-wrap' });

    this._linkBtn = this._btn('link', 'Insert Link (Ctrl+K)', () => this._openLinkForm());

    const dd   = el('div', { className: 'wysiwyg-dropdown', style: 'display:none' });
    const form = el('div', { className: 'wysiwyg-link-form' });

    const url  = el('input', { type: 'text', className: 'wysiwyg-link-input', placeholder: 'https://…' });
    const text = el('input', { type: 'text', className: 'wysiwyg-link-input', placeholder: 'Link text (optional)' });

    const newTabRow = el('label', { className: 'wysiwyg-link-newtab' });
    const newTab    = el('input', { type: 'checkbox' });
    newTabRow.appendChild(newTab);
    newTabRow.appendChild(el('span', { textContent: 'Open in new tab' }));

    const actions = el('div', { className: 'wysiwyg-link-actions' });
    const remove  = el('button', { type: 'button', className: 'wysiwyg-link-remove', textContent: 'Remove' });
    const apply   = el('button', { type: 'button', className: 'wysiwyg-link-apply',  textContent: 'Apply' });
    actions.appendChild(remove);
    actions.appendChild(apply);

    [url, text].forEach(input => {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this._applyLink();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          this._closeDropdowns();
          this._restoreLinkRange();
        }
      });
    });
    url.addEventListener('input', () => url.classList.remove('invalid'));
    apply.addEventListener('click',  () => this._applyLink());
    remove.addEventListener('click', () => this._removeLink());

    form.appendChild(url);
    form.appendChild(text);
    form.appendChild(newTabRow);
    form.appendChild(actions);
    dd.appendChild(form);

    this._link = { dd, url, text, newTab, remove };

    wrap.appendChild(this._linkBtn);
    wrap.appendChild(dd);
    return wrap;
  }

  /* ----------------------------------------------------------
     EVENTS
     ---------------------------------------------------------- */

  _bindEvents() {
    const editor = this._editor;

    editor.addEventListener('input', () => {
      this._syncTarget();
      this._updateWordCount();
      this._updateState();
      this._notifyChange();
    });

    // Keep form value / v-model in sync while editing raw HTML too
    this._sourceEl.addEventListener('input', () => {
      this._syncTarget();
      this._notifyChange();
    });

    editor.addEventListener('keyup',   () => this._updateState());
    editor.addEventListener('mouseup', () => this._updateState());

    editor.addEventListener('focus', () => {
      this._wrapper.classList.add('wysiwyg-focused');
      this._emit('focus');
    });
    editor.addEventListener('blur', () => {
      this._wrapper.classList.remove('wysiwyg-focused');
      this._emit('blur');
    });

    editor.addEventListener('keydown', (e) => this._onKeydown(e));

    // Stored so destroy() can remove it
    this._onDocumentMousedown = (e) => {
      if (!this._wrapper.contains(e.target)) this._closeDropdowns();
    };
    document.addEventListener('mousedown', this._onDocumentMousedown);

    editor.addEventListener('paste', (e) => {
      e.preventDefault();
      const html = e.clipboardData.getData('text/html');
      const text = e.clipboardData.getData('text/plain');
      document.execCommand('insertHTML', false,
        html ? sanitizeHTML(html) : escapeHTML(text).replace(/\n/g, '<br>'));
    });
  }

  _onKeydown(e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      this._openLinkForm();
      return;
    }

    const cell = this._currentTableCell();

    if (e.key === 'Tab') {
      e.preventDefault();
      if (cell) {
        const table    = cell.closest('table');
        const allCells = Array.from(table.querySelectorAll('th, td'));
        const idx      = allCells.indexOf(cell);
        const next     = allCells[idx + (e.shiftKey ? -1 : 1)];

        if (next) {
          this._selectNodeContents(next);
        } else if (!e.shiftKey) {
          const colCount = table.rows[0].cells.length;
          const newRow   = table.insertRow();
          for (let i = 0; i < colCount; i++) {
            const td = newRow.insertCell();
            td.innerHTML = '<br>';
          }
          this._selectNodeContents(newRow.cells[0]);
        }
      } else {
        document.execCommand('insertHTML', false, '    ');
      }
      return;
    }
  }

  /* ----------------------------------------------------------
     COMMANDS
     ---------------------------------------------------------- */

  _exec(cmd, value) {
    this._editor.focus();
    document.execCommand(cmd, false, value !== undefined ? value : null);
    this._updateState();
    this._syncTarget();
    this._notifyChange();
  }

  _openLinkForm() {
    const { dd, url, text, newTab, remove } = this._link;

    if (dd.style.display !== 'none') {
      this._closeDropdowns();
      return;
    }

    // Focus moves to the form inputs, so remember where the selection was
    const sel = window.getSelection();
    this._linkRange = sel && sel.rangeCount && this._editor.contains(sel.getRangeAt(0).commonAncestorContainer)
      ? sel.getRangeAt(0).cloneRange()
      : null;
    this._editingLink = this._closestInEditor('A');

    const a = this._editingLink;
    url.value        = a ? a.getAttribute('href') || '' : '';
    newTab.checked   = !!a && a.target === '_blank';
    text.value       = '';
    // Text field only makes sense when there is nothing selected to wrap
    text.style.display   = !a && (!this._linkRange || this._linkRange.collapsed) ? '' : 'none';
    remove.style.display = a ? '' : 'none';
    url.classList.remove('invalid');

    this._toggleDropdown(dd);
    url.focus();
    url.select();
  }

  _applyLink() {
    const { url, text, newTab } = this._link;
    const href = normalizeUrl(url.value);
    if (!href) {
      url.classList.add('invalid');
      url.focus();
      return;
    }

    this._closeDropdowns();
    this._restoreLinkRange();

    if (this._editingLink) {
      this._editingLink.setAttribute('href', href);
      setLinkTarget(this._editingLink, newTab.checked);
    } else if (!this._linkRange || this._linkRange.collapsed) {
      const attrs = newTab.checked ? ' target="_blank" rel="noopener noreferrer"' : '';
      const label = text.value.trim() || url.value.trim();
      document.execCommand('insertHTML', false,
        '<a href="' + escapeHTML(href) + '"' + attrs + '>' + escapeHTML(label) + '</a>');
    } else {
      document.execCommand('createLink', false, href);
      const sel = window.getSelection();
      this._editor.querySelectorAll('a').forEach(a => {
        if (a.getAttribute('href') === href && sel.containsNode(a, true)) {
          setLinkTarget(a, newTab.checked);
        }
      });
    }

    this._updateState();
    this._syncTarget();
    this._notifyChange();
  }

  _removeLink() {
    const a = this._editingLink;
    this._closeDropdowns();
    if (!a) return;
    this._editor.focus();
    const range = document.createRange();
    range.selectNodeContents(a);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    this._exec('unlink');
  }

  _restoreLinkRange() {
    this._editor.focus();
    if (!this._linkRange) return;
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(this._linkRange);
  }

  _notifyChange() {
    const html = this.getHTML();
    this._emit('change', html);
    if (this._opts.onChange) this._opts.onChange(html);
  }

  _applyColor(color) {
    this._activeColor = color;
    this._colorSwatch.style.background = color;
    this._exec('foreColor', color);
  }

  _insertTable(rows, cols) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    for (let r = 0; r < rows; r++) {
      const tr = document.createElement('tr');
      for (let c = 0; c < cols; c++) {
        const cell = document.createElement(r === 0 ? 'th' : 'td');
        cell.innerHTML = '<br>';
        tr.appendChild(cell);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    const after = document.createElement('p');
    after.innerHTML = '<br>';

    const sel = window.getSelection();
    if (sel && sel.rangeCount) {
      const range = sel.getRangeAt(0);
      range.deleteContents();
      const frag = document.createDocumentFragment();
      frag.appendChild(table);
      frag.appendChild(after);
      range.insertNode(frag);
    } else {
      this._editor.appendChild(table);
      this._editor.appendChild(after);
    }

    const firstCell = table.querySelector('th, td');
    if (firstCell) this._selectNodeContents(firstCell);

    this._syncTarget();
    this._notifyChange();
  }

  /* ----------------------------------------------------------
     STATE / UI SYNC
     ---------------------------------------------------------- */

  _updateState() {
    this._toolbar.querySelectorAll('.wysiwyg-btn[data-toggle]').forEach(btn => {
      const cmd = btn.dataset.cmd;
      if (!cmd) return;
      try {
        btn.classList.toggle('active', document.queryCommandState(cmd));
      } catch (_) { /* ignore */ }
    });

    if (this._linkBtn) {
      this._linkBtn.classList.toggle('active', !!this._closestInEditor('A'));
    }

    let block = '';
    try { block = document.queryCommandValue('formatBlock').toUpperCase(); } catch (_) {}
    const headingNames = { H1: 'Heading 1', H2: 'Heading 2', H3: 'Heading 3', P: 'Normal', DIV: 'Normal', '': 'Normal' };
    if (this._headingLabel) {
      this._headingLabel.textContent = headingNames[block] || 'Normal';
    }

    if (this._headingDropdown) {
      const active = block || 'P';
      this._headingDropdown.querySelectorAll('.wysiwyg-dropdown-item').forEach(item => {
        item.classList.toggle('active', item.dataset.tag === active);
      });
    }
  }

  _updateWordCount() {
    const text  = (this._editor.innerText || '').trim();
    const words = text ? text.split(/\s+/).length : 0;
    const chars = (this._editor.innerText || '').length;
    this._wordCount.textContent = words + (words === 1 ? ' word' : ' words') + ' · ' + chars + ' chars';
  }

  _syncTarget() {
    if (this._target.tagName === 'TEXTAREA') {
      this._target.value = this.getHTML();
    }
  }

  /* ----------------------------------------------------------
     DROPDOWN HELPERS
     ---------------------------------------------------------- */

  _toggleDropdown(dd) {
    const isOpen = dd.style.display !== 'none';
    this._closeDropdowns();
    if (!isOpen) {
      dd.style.display = 'block';
      this._activeDropdown = dd;
    }
  }

  _closeDropdowns() {
    this._wrapper.querySelectorAll('.wysiwyg-dropdown').forEach(d => {
      d.style.display = 'none';
    });
    this._activeDropdown = null;
  }

  /* ----------------------------------------------------------
     UTILITIES
     ---------------------------------------------------------- */

  _currentTableCell() {
    return this._closestInEditor('TD', 'TH');
  }

  /** Nearest ancestor of the selection with one of the given tags, inside the editor */
  _closestInEditor(...tags) {
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return null;
    let node = sel.getRangeAt(0).commonAncestorContainer;
    while (node && node !== this._editor) {
      if (node.nodeType === 1 && tags.includes(node.tagName)) return node;
      node = node.parentNode;
    }
    return null;
  }

  _selectNodeContents(node) {
    const range = document.createRange();
    range.selectNodeContents(node);
    range.collapse(false);
    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

  /* ----------------------------------------------------------
     EVENT SYSTEM
     ---------------------------------------------------------- */

  _emit(event, data) {
    (this._listeners[event] || []).forEach(fn => fn(data));
  }

  on(event, fn) {
    if (!this._listeners[event]) this._listeners[event] = [];
    this._listeners[event].push(fn);
    return this;
  }

  off(event, fn) {
    if (this._listeners[event]) {
      this._listeners[event] = this._listeners[event].filter(f => f !== fn);
    }
    return this;
  }

  /* ----------------------------------------------------------
     SOURCE MODE
     ---------------------------------------------------------- */

  _toggleSource() {
    this._isSourceMode = !this._isSourceMode;
    this._closeDropdowns();

    if (this._isSourceMode) {
      this._sourceEl.value = this._editor.innerHTML;
      this._editor.style.display = 'none';
      this._sourceEl.style.display = 'block';
      this._sourceEl.focus();
      this._viewSourceBtn.classList.add('active');
      this._toolbar.querySelectorAll('.wysiwyg-btn:not([title="View Source (HTML)"])').forEach(b => b.disabled = true);
    } else {
      this._editor.innerHTML = this._sourceEl.value;
      this._sourceEl.style.display = 'none';
      this._editor.style.display = 'block';
      this._editor.focus();
      this._viewSourceBtn.classList.remove('active');
      this._toolbar.querySelectorAll('.wysiwyg-btn').forEach(b => b.disabled = false);
      this._syncTarget();
      this._updateWordCount();
      this._updateState();
      this._notifyChange();
    }
  }

  /* ----------------------------------------------------------
     PUBLIC API
     ---------------------------------------------------------- */

  /** In source mode the textarea is the source of truth until toggled back */
  getHTML()       { return this._isSourceMode ? this._sourceEl.value : this._editor.innerHTML; }
  getText()       { return this._editor.innerText || ''; }
  focus()         { (this._isSourceMode ? this._sourceEl : this._editor).focus(); return this; }

  setHTML(html) {
    this._editor.innerHTML = html || '';
    if (this._isSourceMode) this._sourceEl.value = html || '';
    this._syncTarget();
    this._updateWordCount();
    return this;
  }

  clear() {
    return this.setHTML('');
  }

  setDisabled(disabled) {
    this._disabled = !!disabled;
    this._editor.contentEditable = this._disabled ? 'false' : 'true';
    this._sourceEl.readOnly      = this._disabled;
    this._wrapper.classList.toggle('wysiwyg-disabled', this._disabled);
    if (this._disabled) this._closeDropdowns();
    return this;
  }

  destroy() {
    document.removeEventListener('mousedown', this._onDocumentMousedown);
    this._target.style.display = '';
    this._wrapper.parentNode.insertBefore(this._target, this._wrapper);
    this._wrapper.remove();
  }
}

export default WysiwygEditor;
