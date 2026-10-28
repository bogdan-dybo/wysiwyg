import { ref as x, onMounted as L, onBeforeUnmount as E, watch as v, openBlock as T, createElementBlock as S, createElementVNode as N } from "vue";
/*!
 * WysiwygEditor v1.0.0
 * Lightweight WYSIWYG editor — zero dependencies
 * MIT License
 */
const f = {
  undo: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></svg>',
  redo: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg>',
  bold: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>',
  italic: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>',
  underline: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/><line x1="4" y1="21" x2="20" y2="21"/></svg>',
  strikethrough: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.3 4.9c-2.3-.6-4.4-1-6.2-.9-2.7 0-5.3.7-5.3 3.6 0 1.5 1.8 3.3 6 3.9h.5m6.8 3.1c.5.8.7 1.7.5 2.8C19 19 15.4 20 11.4 20c-2.1 0-5.3-.5-7.9-2"/><line x1="3" y1="12" x2="21" y2="12"/></svg>',
  color: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22z"/><circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="14" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="17" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>',
  alignLeft: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="11" x2="15" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/><line x1="3" y1="21" x2="13" y2="21"/></svg>',
  alignCenter: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="11" x2="18" y2="11"/><line x1="4" y1="16" x2="20" y2="16"/><line x1="7" y1="21" x2="17" y2="21"/></svg>',
  alignRight: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="9" y1="11" x2="21" y2="11"/><line x1="5" y1="16" x2="21" y2="16"/><line x1="11" y1="21" x2="21" y2="21"/></svg>',
  alignJustify: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="11" x2="21" y2="11"/><line x1="3" y1="16" x2="21" y2="16"/><line x1="3" y1="21" x2="21" y2="21"/></svg>',
  bulletList: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1.5" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="4" cy="18" r="1.5" fill="currentColor" stroke="none"/></svg>',
  orderedList: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4" stroke-linecap="round"/><path d="M4 10h2" stroke-linecap="round"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" stroke-linecap="round"/></svg>',
  table: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>',
  link: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  removeFormat: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/><line x1="3" y1="3" x2="21" y2="21"/></svg>',
  chevronDown: '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  viewSource: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
}, M = [
  "#000000",
  "#222222",
  "#555555",
  "#888888",
  "#aaaaaa",
  "#cccccc",
  "#e5e5e5",
  "#ffffff",
  "#c0392b",
  "#e67e22",
  "#f1c40f",
  "#27ae60",
  "#1abc9c",
  "#2980b9",
  "#8e44ad",
  "#e91e63",
  "#fde8e8",
  "#fef3e2",
  "#fefce8",
  "#ecfdf5",
  "#e0f7f4",
  "#e3f2fd",
  "#f3e8ff",
  "#fce7f3",
  "#7f1d1d",
  "#78350f",
  "#713f12",
  "#14532d",
  "#134e4a",
  "#1e3a5f",
  "#3b0764",
  "#500724"
], D = /* @__PURE__ */ new Set([
  "SCRIPT",
  "STYLE",
  "META",
  "LINK",
  "TITLE",
  "HEAD",
  "NOSCRIPT",
  "TEMPLATE",
  "IFRAME",
  "FRAME",
  "OBJECT",
  "EMBED",
  "SVG",
  "MATH",
  "FORM",
  "INPUT",
  "BUTTON",
  "TEXTAREA",
  "SELECT"
]), H = /* @__PURE__ */ new Set([
  "P",
  "BR",
  "DIV",
  "SPAN",
  "FONT",
  "HR",
  "B",
  "STRONG",
  "I",
  "EM",
  "U",
  "S",
  "STRIKE",
  "DEL",
  "SUB",
  "SUP",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "BLOCKQUOTE",
  "PRE",
  "CODE",
  "UL",
  "OL",
  "LI",
  "A",
  "IMG",
  "TABLE",
  "THEAD",
  "TBODY",
  "TFOOT",
  "TR",
  "TH",
  "TD"
]), A = [
  "color",
  "background-color",
  "text-align",
  "font-weight",
  "font-style",
  "text-decoration"
], k = /^(https?:|mailto:|tel:|#|\/)/i, R = /^(https?:|data:image\/(png|jpe?g|gif|webp);)/i;
function B(d) {
  const e = document.createElement("template");
  return e.innerHTML = d, C(e.content), e.innerHTML;
}
function C(d) {
  Array.from(d.childNodes).forEach((e) => {
    if (e.nodeType === Node.TEXT_NODE) return;
    if (e.nodeType !== Node.ELEMENT_NODE) {
      e.remove();
      return;
    }
    const t = e.tagName.toUpperCase();
    if (D.has(t)) {
      e.remove();
      return;
    }
    if (C(e), !H.has(t)) {
      e.replaceWith(...e.childNodes);
      return;
    }
    O(e, t), (t === "SPAN" || t === "FONT") && !e.attributes.length && e.replaceWith(...e.childNodes);
  });
}
function O(d, e) {
  Array.from(d.attributes).forEach(({ name: t, value: i }) => {
    if (t === "style") {
      const n = A.filter((o) => d.style.getPropertyValue(o)).map((o) => o + ": " + d.style.getPropertyValue(o));
      n.length ? d.setAttribute("style", n.join("; ")) : d.removeAttribute("style");
      return;
    }
    const s = i.trim();
    t === "href" && e === "A" && k.test(s) || t === "src" && e === "IMG" && R.test(s) || t === "alt" && e === "IMG" || t === "color" && e === "FONT" || (t === "colspan" || t === "rowspan") && (e === "TD" || e === "TH") || d.removeAttribute(t);
  });
}
function m(d) {
  return d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function I(d) {
  const e = d.trim();
  return e ? /^[a-z][a-z0-9+.-]*:/i.test(e) ? k.test(e) ? e : null : e[0] === "#" || e[0] === "/" ? e : /^[^\s/@]+@[^\s/@]+\.[^\s/@]+$/.test(e) ? "mailto:" + e : "https://" + e : null;
}
function b(d, e) {
  e ? (d.setAttribute("target", "_blank"), d.setAttribute("rel", "noopener noreferrer")) : (d.removeAttribute("target"), d.removeAttribute("rel"));
}
function l(d, e) {
  const t = document.createElement(d);
  if (!e) return t;
  for (const [i, s] of Object.entries(e))
    i === "innerHTML" ? t.innerHTML = s : i === "style" && typeof s == "string" ? t.style.cssText = s : t[i] = s;
  return t;
}
class j {
  /**
   * @param {string|HTMLElement} selector  CSS selector or element to replace
   * @param {object}             [options]
   * @param {number}             [options.height=400]        Min editor height (px)
   * @param {string}             [options.placeholder]       Placeholder text
   * @param {Function}           [options.onChange]          Called with HTML on every change
   */
  constructor(e, t) {
    if (this._target = typeof e == "string" ? document.querySelector(e) : e, !this._target)
      throw new Error("WysiwygEditor: element not found — " + e);
    this._opts = Object.assign({
      height: 400,
      placeholder: "Start typing...",
      onChange: null
    }, t || {}), this._activeColor = "#000000", this._listeners = {}, this._activeDropdown = null, this._isSourceMode = !1, this._disabled = !1, this._build();
  }
  /* ----------------------------------------------------------
     BUILD
     ---------------------------------------------------------- */
  _build() {
    this._wrapper = l("div", { className: "wysiwyg-wrapper" }), this._target.parentNode.insertBefore(this._wrapper, this._target), this._toolbar = this._buildToolbar(), this._wrapper.appendChild(this._toolbar), this._editor = l("div", {
      className: "wysiwyg-editor",
      contentEditable: "true",
      spellcheck: !0
    }), this._editor.style.minHeight = this._opts.height + "px", this._editor.setAttribute("data-placeholder", this._opts.placeholder), this._wrapper.appendChild(this._editor), this._sourceEl = l("textarea", { className: "wysiwyg-source", spellcheck: !1 }), this._sourceEl.style.minHeight = this._opts.height + "px", this._sourceEl.style.display = "none", this._wrapper.appendChild(this._sourceEl), this._status = l("div", { className: "wysiwyg-status" }), this._wordCount = l("span", { className: "wysiwyg-wordcount", textContent: "0 words" }), this._status.appendChild(this._wordCount), this._wrapper.appendChild(this._status), this._target.style.display = "none", this._wrapper.appendChild(this._target);
    const e = this._target.tagName === "TEXTAREA" ? this._target.value : this._target.innerHTML;
    e && e.trim() && (this._editor.innerHTML = e, this._updateWordCount()), this._bindEvents();
  }
  /* ----------------------------------------------------------
     TOOLBAR
     ---------------------------------------------------------- */
  _buildToolbar() {
    const e = l("div", { className: "wysiwyg-toolbar" }), t = [
      /* History */
      [
        this._btn("undo", "Undo (Ctrl+Z)", () => this._exec("undo")),
        this._btn("redo", "Redo (Ctrl+Y)", () => this._exec("redo"))
      ],
      /* Heading */
      [this._buildHeadingDropdown()],
      /* Text format */
      [
        this._btn("bold", "Bold (Ctrl+B)", () => this._exec("bold"), "bold", !0),
        this._btn("italic", "Italic (Ctrl+I)", () => this._exec("italic"), "italic", !0),
        this._btn("underline", "Underline (Ctrl+U)", () => this._exec("underline"), "underline", !0),
        this._btn("strikethrough", "Strikethrough", () => this._exec("strikeThrough"), "strikethrough", !0)
      ],
      /* Color */
      [this._buildColorDropdown()],
      /* Alignment */
      [
        this._btn("alignLeft", "Align Left", () => this._exec("justifyLeft"), "justifyleft", !0),
        this._btn("alignCenter", "Align Center", () => this._exec("justifyCenter"), "justifycenter", !0),
        this._btn("alignRight", "Align Right", () => this._exec("justifyRight"), "justifyright", !0),
        this._btn("alignJustify", "Justify", () => this._exec("justifyFull"), "justifyfull", !0)
      ],
      /* Lists */
      [
        this._btn("bulletList", "Bullet List", () => this._exec("insertUnorderedList"), "insertunorderedlist", !0),
        this._btn("orderedList", "Ordered List", () => this._exec("insertOrderedList"), "insertorderedlist", !0)
      ],
      /* Link + Table */
      [this._buildLinkDropdown(), this._buildTableDropdown()],
      /* Clear + Source */
      [
        this._btn("removeFormat", "Remove Formatting", () => this._exec("removeFormat")),
        this._viewSourceBtn = this._btn("viewSource", "View Source (HTML)", () => this._toggleSource())
      ]
    ];
    return t.forEach((i, s) => {
      const r = l("div", { className: "wysiwyg-toolbar-group" });
      i.forEach((n) => r.appendChild(n)), e.appendChild(r), s < t.length - 1 && e.appendChild(l("div", { className: "wysiwyg-divider" }));
    }), e;
  }
  /** Create a regular toolbar button */
  _btn(e, t, i, s, r) {
    const n = l("button", {
      className: "wysiwyg-btn",
      title: t,
      type: "button",
      innerHTML: f[e]
    });
    return s && (n.dataset.cmd = s), r && (n.dataset.toggle = "1"), n.addEventListener("mousedown", (o) => {
      o.preventDefault(), i();
    }), n;
  }
  /** Heading selector dropdown */
  _buildHeadingDropdown() {
    const e = l("div", { className: "wysiwyg-dropdown-wrap" }), t = l("button", {
      className: "wysiwyg-btn wysiwyg-heading-btn",
      type: "button"
    });
    t.innerHTML = '<span class="wysiwyg-heading-label">Normal</span>' + f.chevronDown, this._headingLabel = t.querySelector(".wysiwyg-heading-label");
    const i = l("div", { className: "wysiwyg-dropdown", style: "display:none" });
    return this._headingDropdown = i, [
      { tag: "P", label: "Normal" },
      { tag: "H1", label: "Heading 1" },
      { tag: "H2", label: "Heading 2" },
      { tag: "H3", label: "Heading 3" }
    ].forEach(({ tag: r, label: n }) => {
      const o = l("button", {
        className: "wysiwyg-dropdown-item",
        type: "button",
        textContent: n
      });
      o.dataset.tag = r, o.addEventListener("mousedown", (a) => {
        a.preventDefault(), this._exec("formatBlock", r), this._closeDropdowns(), this._updateState();
      }), i.appendChild(o);
    }), t.addEventListener("mousedown", (r) => {
      r.preventDefault(), this._toggleDropdown(i);
    }), e.appendChild(t), e.appendChild(i), e;
  }
  /** Color picker dropdown */
  _buildColorDropdown() {
    const e = l("div", { className: "wysiwyg-dropdown-wrap" }), t = l("button", {
      className: "wysiwyg-btn wysiwyg-color-btn",
      title: "Text Color",
      type: "button"
    });
    t.innerHTML = f.color + '<span class="wysiwyg-color-swatch"></span>', this._colorSwatch = t.querySelector(".wysiwyg-color-swatch");
    const i = l("div", { className: "wysiwyg-dropdown", style: "display:none" });
    this._colorDropdown = i;
    const s = l("div", { className: "wysiwyg-color-palette" });
    M.forEach((o) => {
      const a = l("div", { className: "wysiwyg-color-cell", title: o });
      a.style.background = o, a.addEventListener("mousedown", (c) => {
        c.preventDefault(), this._applyColor(o), this._closeDropdowns();
      }), s.appendChild(a);
    });
    const r = l("div", { className: "wysiwyg-color-custom" }), n = l("input", { type: "color", value: "#000000", title: "Custom color" });
    return n.addEventListener("input", (o) => this._applyColor(o.target.value)), n.addEventListener("mousedown", (o) => o.stopPropagation()), r.appendChild(n), r.appendChild(l("span", { textContent: "Custom color" })), s.appendChild(r), i.appendChild(s), t.addEventListener("mousedown", (o) => {
      o.preventDefault(), this._toggleDropdown(i);
    }), e.appendChild(t), e.appendChild(i), e;
  }
  /** Table grid picker dropdown */
  _buildTableDropdown() {
    const e = l("div", { className: "wysiwyg-dropdown-wrap" }), t = l("button", {
      className: "wysiwyg-btn",
      title: "Insert Table",
      type: "button",
      innerHTML: f.table
    }), i = l("div", { className: "wysiwyg-dropdown", style: "display:none" }), s = l("div", { className: "wysiwyg-table-picker" }), r = l("div", { className: "wysiwyg-table-picker-label", textContent: "Insert table" }), n = l("div", { className: "wysiwyg-table-grid" }), o = 8, a = 8, c = [];
    for (let h = 0; h < o; h++) {
      c[h] = [];
      for (let p = 0; p < a; p++) {
        const u = l("div", { className: "wysiwyg-table-cell-pick" });
        u.dataset.r = h + 1, u.dataset.c = p + 1, u.addEventListener("mouseover", () => {
          const w = +u.dataset.r, y = +u.dataset.c;
          r.textContent = w + " × " + y;
          for (let g = 0; g < o; g++)
            for (let _ = 0; _ < a; _++)
              c[g][_].classList.toggle("highlighted", g < w && _ < y);
        }), u.addEventListener("mousedown", (w) => {
          w.preventDefault(), this._insertTable(+u.dataset.r, +u.dataset.c);
          for (let y = 0; y < o; y++)
            for (let g = 0; g < a; g++)
              c[y][g].classList.remove("highlighted");
          r.textContent = "Insert table", this._closeDropdowns();
        }), n.appendChild(u), c[h][p] = u;
      }
    }
    return n.addEventListener("mouseleave", () => {
      for (let h = 0; h < o; h++)
        for (let p = 0; p < a; p++)
          c[h][p].classList.remove("highlighted");
      r.textContent = "Insert table";
    }), s.appendChild(r), s.appendChild(n), i.appendChild(s), t.addEventListener("mousedown", (h) => {
      h.preventDefault(), this._toggleDropdown(i);
    }), e.appendChild(t), e.appendChild(i), e;
  }
  /** Link form dropdown (URL, optional text, new tab) */
  _buildLinkDropdown() {
    const e = l("div", { className: "wysiwyg-dropdown-wrap" });
    this._linkBtn = this._btn("link", "Insert Link (Ctrl+K)", () => this._openLinkForm());
    const t = l("div", { className: "wysiwyg-dropdown", style: "display:none" }), i = l("div", { className: "wysiwyg-link-form" }), s = l("input", { type: "text", className: "wysiwyg-link-input", placeholder: "https://…" }), r = l("input", { type: "text", className: "wysiwyg-link-input", placeholder: "Link text (optional)" }), n = l("label", { className: "wysiwyg-link-newtab" }), o = l("input", { type: "checkbox" });
    n.appendChild(o), n.appendChild(l("span", { textContent: "Open in new tab" }));
    const a = l("div", { className: "wysiwyg-link-actions" }), c = l("button", { type: "button", className: "wysiwyg-link-remove", textContent: "Remove" }), h = l("button", { type: "button", className: "wysiwyg-link-apply", textContent: "Apply" });
    return a.appendChild(c), a.appendChild(h), [s, r].forEach((p) => {
      p.addEventListener("keydown", (u) => {
        u.key === "Enter" ? (u.preventDefault(), this._applyLink()) : u.key === "Escape" && (u.preventDefault(), this._closeDropdowns(), this._restoreLinkRange());
      });
    }), s.addEventListener("input", () => s.classList.remove("invalid")), h.addEventListener("click", () => this._applyLink()), c.addEventListener("click", () => this._removeLink()), i.appendChild(s), i.appendChild(r), i.appendChild(n), i.appendChild(a), t.appendChild(i), this._link = { dd: t, url: s, text: r, newTab: o, remove: c }, e.appendChild(this._linkBtn), e.appendChild(t), e;
  }
  /* ----------------------------------------------------------
     EVENTS
     ---------------------------------------------------------- */
  _bindEvents() {
    const e = this._editor;
    e.addEventListener("input", () => {
      this._syncTarget(), this._updateWordCount(), this._updateState(), this._notifyChange();
    }), this._sourceEl.addEventListener("input", () => {
      this._syncTarget(), this._notifyChange();
    }), e.addEventListener("keyup", () => this._updateState()), e.addEventListener("mouseup", () => this._updateState()), e.addEventListener("focus", () => {
      this._wrapper.classList.add("wysiwyg-focused"), this._emit("focus");
    }), e.addEventListener("blur", () => {
      this._wrapper.classList.remove("wysiwyg-focused"), this._emit("blur");
    }), e.addEventListener("keydown", (t) => this._onKeydown(t)), this._onDocumentMousedown = (t) => {
      this._wrapper.contains(t.target) || this._closeDropdowns();
    }, document.addEventListener("mousedown", this._onDocumentMousedown), e.addEventListener("paste", (t) => {
      t.preventDefault();
      const i = t.clipboardData.getData("text/html"), s = t.clipboardData.getData("text/plain");
      document.execCommand(
        "insertHTML",
        !1,
        i ? B(i) : m(s).replace(/\n/g, "<br>")
      );
    });
  }
  _onKeydown(e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault(), this._openLinkForm();
      return;
    }
    const t = this._currentTableCell();
    if (e.key === "Tab") {
      if (e.preventDefault(), t) {
        const i = t.closest("table"), s = Array.from(i.querySelectorAll("th, td")), r = s.indexOf(t), n = s[r + (e.shiftKey ? -1 : 1)];
        if (n)
          this._selectNodeContents(n);
        else if (!e.shiftKey) {
          const o = i.rows[0].cells.length, a = i.insertRow();
          for (let c = 0; c < o; c++) {
            const h = a.insertCell();
            h.innerHTML = "<br>";
          }
          this._selectNodeContents(a.cells[0]);
        }
      } else
        document.execCommand("insertHTML", !1, "    ");
      return;
    }
  }
  /* ----------------------------------------------------------
     COMMANDS
     ---------------------------------------------------------- */
  _exec(e, t) {
    this._editor.focus(), document.execCommand(e, !1, t !== void 0 ? t : null), this._updateState(), this._syncTarget(), this._notifyChange();
  }
  _openLinkForm() {
    const { dd: e, url: t, text: i, newTab: s, remove: r } = this._link;
    if (e.style.display !== "none") {
      this._closeDropdowns();
      return;
    }
    const n = window.getSelection();
    this._linkRange = n && n.rangeCount && this._editor.contains(n.getRangeAt(0).commonAncestorContainer) ? n.getRangeAt(0).cloneRange() : null, this._editingLink = this._closestInEditor("A");
    const o = this._editingLink;
    t.value = o && o.getAttribute("href") || "", s.checked = !!o && o.target === "_blank", i.value = "", i.style.display = !o && (!this._linkRange || this._linkRange.collapsed) ? "" : "none", r.style.display = o ? "" : "none", t.classList.remove("invalid"), this._toggleDropdown(e), t.focus(), t.select();
  }
  _applyLink() {
    const { url: e, text: t, newTab: i } = this._link, s = I(e.value);
    if (!s) {
      e.classList.add("invalid"), e.focus();
      return;
    }
    if (this._closeDropdowns(), this._restoreLinkRange(), this._editingLink)
      this._editingLink.setAttribute("href", s), b(this._editingLink, i.checked);
    else if (!this._linkRange || this._linkRange.collapsed) {
      const r = i.checked ? ' target="_blank" rel="noopener noreferrer"' : "", n = t.value.trim() || e.value.trim();
      document.execCommand(
        "insertHTML",
        !1,
        '<a href="' + m(s) + '"' + r + ">" + m(n) + "</a>"
      );
    } else {
      document.execCommand("createLink", !1, s);
      const r = window.getSelection();
      this._editor.querySelectorAll("a").forEach((n) => {
        n.getAttribute("href") === s && r.containsNode(n, !0) && b(n, i.checked);
      });
    }
    this._updateState(), this._syncTarget(), this._notifyChange();
  }
  _removeLink() {
    const e = this._editingLink;
    if (this._closeDropdowns(), !e) return;
    this._editor.focus();
    const t = document.createRange();
    t.selectNodeContents(e);
    const i = window.getSelection();
    i.removeAllRanges(), i.addRange(t), this._exec("unlink");
  }
  _restoreLinkRange() {
    if (this._editor.focus(), !this._linkRange) return;
    const e = window.getSelection();
    e.removeAllRanges(), e.addRange(this._linkRange);
  }
  _notifyChange() {
    const e = this.getHTML();
    this._emit("change", e), this._opts.onChange && this._opts.onChange(e);
  }
  _applyColor(e) {
    this._activeColor = e, this._colorSwatch.style.background = e, this._exec("foreColor", e);
  }
  _insertTable(e, t) {
    const i = document.createElement("table"), s = document.createElement("tbody");
    for (let a = 0; a < e; a++) {
      const c = document.createElement("tr");
      for (let h = 0; h < t; h++) {
        const p = document.createElement(a === 0 ? "th" : "td");
        p.innerHTML = "<br>", c.appendChild(p);
      }
      s.appendChild(c);
    }
    i.appendChild(s);
    const r = document.createElement("p");
    r.innerHTML = "<br>";
    const n = window.getSelection();
    if (n && n.rangeCount) {
      const a = n.getRangeAt(0);
      a.deleteContents();
      const c = document.createDocumentFragment();
      c.appendChild(i), c.appendChild(r), a.insertNode(c);
    } else
      this._editor.appendChild(i), this._editor.appendChild(r);
    const o = i.querySelector("th, td");
    o && this._selectNodeContents(o), this._syncTarget(), this._notifyChange();
  }
  /* ----------------------------------------------------------
     STATE / UI SYNC
     ---------------------------------------------------------- */
  _updateState() {
    this._toolbar.querySelectorAll(".wysiwyg-btn[data-toggle]").forEach((i) => {
      const s = i.dataset.cmd;
      if (s)
        try {
          i.classList.toggle("active", document.queryCommandState(s));
        } catch {
        }
    }), this._linkBtn && this._linkBtn.classList.toggle("active", !!this._closestInEditor("A"));
    let e = "";
    try {
      e = document.queryCommandValue("formatBlock").toUpperCase();
    } catch {
    }
    const t = { H1: "Heading 1", H2: "Heading 2", H3: "Heading 3", P: "Normal", DIV: "Normal", "": "Normal" };
    if (this._headingLabel && (this._headingLabel.textContent = t[e] || "Normal"), this._headingDropdown) {
      const i = e || "P";
      this._headingDropdown.querySelectorAll(".wysiwyg-dropdown-item").forEach((s) => {
        s.classList.toggle("active", s.dataset.tag === i);
      });
    }
  }
  _updateWordCount() {
    const e = (this._editor.innerText || "").trim(), t = e ? e.split(/\s+/).length : 0, i = (this._editor.innerText || "").length;
    this._wordCount.textContent = t + (t === 1 ? " word" : " words") + " · " + i + " chars";
  }
  _syncTarget() {
    this._target.tagName === "TEXTAREA" && (this._target.value = this.getHTML());
  }
  /* ----------------------------------------------------------
     DROPDOWN HELPERS
     ---------------------------------------------------------- */
  _toggleDropdown(e) {
    const t = e.style.display !== "none";
    this._closeDropdowns(), t || (e.style.display = "block", this._activeDropdown = e);
  }
  _closeDropdowns() {
    this._wrapper.querySelectorAll(".wysiwyg-dropdown").forEach((e) => {
      e.style.display = "none";
    }), this._activeDropdown = null;
  }
  /* ----------------------------------------------------------
     UTILITIES
     ---------------------------------------------------------- */
  _currentTableCell() {
    return this._closestInEditor("TD", "TH");
  }
  /** Nearest ancestor of the selection with one of the given tags, inside the editor */
  _closestInEditor(...e) {
    const t = window.getSelection();
    if (!t || !t.rangeCount) return null;
    let i = t.getRangeAt(0).commonAncestorContainer;
    for (; i && i !== this._editor; ) {
      if (i.nodeType === 1 && e.includes(i.tagName)) return i;
      i = i.parentNode;
    }
    return null;
  }
  _selectNodeContents(e) {
    const t = document.createRange();
    t.selectNodeContents(e), t.collapse(!1);
    const i = window.getSelection();
    i && (i.removeAllRanges(), i.addRange(t));
  }
  /* ----------------------------------------------------------
     EVENT SYSTEM
     ---------------------------------------------------------- */
  _emit(e, t) {
    (this._listeners[e] || []).forEach((i) => i(t));
  }
  on(e, t) {
    return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this;
  }
  off(e, t) {
    return this._listeners[e] && (this._listeners[e] = this._listeners[e].filter((i) => i !== t)), this;
  }
  /* ----------------------------------------------------------
     SOURCE MODE
     ---------------------------------------------------------- */
  _toggleSource() {
    this._isSourceMode = !this._isSourceMode, this._closeDropdowns(), this._isSourceMode ? (this._sourceEl.value = this._editor.innerHTML, this._editor.style.display = "none", this._sourceEl.style.display = "block", this._sourceEl.focus(), this._viewSourceBtn.classList.add("active"), this._toolbar.querySelectorAll('.wysiwyg-btn:not([title="View Source (HTML)"])').forEach((e) => e.disabled = !0)) : (this._editor.innerHTML = this._sourceEl.value, this._sourceEl.style.display = "none", this._editor.style.display = "block", this._editor.focus(), this._viewSourceBtn.classList.remove("active"), this._toolbar.querySelectorAll(".wysiwyg-btn").forEach((e) => e.disabled = !1), this._syncTarget(), this._updateWordCount(), this._updateState(), this._notifyChange());
  }
  /* ----------------------------------------------------------
     PUBLIC API
     ---------------------------------------------------------- */
  /** In source mode the textarea is the source of truth until toggled back */
  getHTML() {
    return this._isSourceMode ? this._sourceEl.value : this._editor.innerHTML;
  }
  getText() {
    return this._editor.innerText || "";
  }
  focus() {
    return (this._isSourceMode ? this._sourceEl : this._editor).focus(), this;
  }
  setHTML(e) {
    return this._editor.innerHTML = e || "", this._isSourceMode && (this._sourceEl.value = e || ""), this._syncTarget(), this._updateWordCount(), this;
  }
  clear() {
    return this.setHTML("");
  }
  setDisabled(e) {
    return this._disabled = !!e, this._editor.contentEditable = this._disabled ? "false" : "true", this._sourceEl.readOnly = this._disabled, this._wrapper.classList.toggle("wysiwyg-disabled", this._disabled), this._disabled && this._closeDropdowns(), this;
  }
  destroy() {
    document.removeEventListener("mousedown", this._onDocumentMousedown), this._target.style.display = "", this._wrapper.parentNode.insertBefore(this._target, this._wrapper), this._wrapper.remove();
  }
}
const P = {
  __name: "WysiwygEditor",
  props: {
    /** v-model binding — HTML string */
    modelValue: {
      type: String,
      default: ""
    },
    /** Minimum editor height in px */
    height: {
      type: Number,
      default: 400
    },
    /** Placeholder text */
    placeholder: {
      type: String,
      default: "Start typing..."
    },
    /** Disables editing and grays out the toolbar */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur"
  ],
  setup(d, { expose: e, emit: t }) {
    const i = d, s = t, r = x(null);
    let n = null;
    return L(() => {
      n = new j(r.value, {
        height: i.height,
        placeholder: i.placeholder,
        onChange(o) {
          s("update:modelValue", o), s("change", o);
        }
      }), i.modelValue && n.setHTML(i.modelValue), i.disabled && n.setDisabled(!0), n.on("focus", () => s("focus")), n.on("blur", () => s("blur"));
    }), E(() => {
      n == null || n.destroy(), n = null;
    }), v(
      () => i.modelValue,
      (o) => {
        n && n.getHTML() !== o && n.setHTML(o ?? "");
      }
    ), v(
      () => i.disabled,
      (o) => n == null ? void 0 : n.setDisabled(o)
    ), e({
      focus: () => n == null ? void 0 : n.focus(),
      clear: () => n == null ? void 0 : n.clear(),
      getHTML: () => (n == null ? void 0 : n.getHTML()) ?? "",
      getText: () => (n == null ? void 0 : n.getText()) ?? "",
      setHTML: (o) => n == null ? void 0 : n.setHTML(o)
    }), (o, a) => (T(), S("div", null, [
      N("div", {
        ref_key: "targetRef",
        ref: r
      }, null, 512)
    ]));
  }
};
export {
  P as WysiwygEditor,
  j as WysiwygEditorCore
};
