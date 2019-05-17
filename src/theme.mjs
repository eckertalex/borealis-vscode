export default colors => ({
  "name": "Borealis",
  "type": "dark",
  "colors": {
    // activityBar
    "activityBar.background": colors.color9,
    "activityBar.border": colors.color8,
    "activityBar.dropBackground": colors.color8,
    "activityBar.foreground": colors.color56,
    "activityBarBadge.background": colors.color51,
    "activityBarBadge.foreground": colors.color0,
    // badge
    "badge.background": colors.color51,
    "badge.foreground": colors.color0,
    // button
    "button.background": colors.color6,
    "button.foreground": colors.color56,
    "button.hoverBackground": colors.color49,
    // contrast
    "contrastActiveBorder": null,
    "contrastBorder": colors.color57,
    // debug
    "debugExceptionWidget.background": colors.color14,
    "debugExceptionWidget.border": colors.color38,
    "debugToolBar.background": colors.color14,
    // description
    "descriptionForeground": colors.color38,
    // diff
    "diffEditor.insertedTextBackground": colors.color24,
    "diffEditor.insertedTextBorder": colors.color25,
    "diffEditor.removedTextBackground": colors.color42,
    "diffEditor.removedTextBorder": colors.color43,
    // dropdown
    "dropdown.background": colors.color14,
    "dropdown.border": colors.color12,
    "dropdown.foreground": colors.color56,
    // editor
    // This is the main background color
    "editor.background": colors.color14,
    // this is the main text colour
    "editor.foreground": colors.color56,
    // Okay this part is confusing as heck!
    // Currently found item
    "editor.findMatchBackground": colors.color48,
    // Other Found Items int the document
    "editor.findMatchHighlightBackground": colors.color40,
    // WTF is this one for? I don't know
    "editor.findRangeHighlightBackground": colors.color19,
    // When you hover over something and a popup shows, this highlights that thing
    "editor.hoverHighlightBackground": colors.color52,
    // when you have something selected, but have lost focus on the editor
    "editor.inactiveSelectionBackground": colors.color3,
    // current line styles
    "editor.lineHighlightBackground": colors.color16,
    "editor.lineHighlightBorder": colors.color18,
    "editor.rangeHighlightBackground": colors.color16,
    // selected Text colours
    // This is the standard Select colour
    "editor.selectionBackground": colors.color4,
    // This is the colour of the other matching elements
    "editor.selectionHighlightBackground": colors.color5,
    // if you tab away you can colour it differently, but ill leave this one out
    // "editor.inactiveSelectionBackground": "",
    // Word Highlights! This happens when you move your cursor inside a variable
    // Strong is the one where your cursor currently is
    "editor.wordHighlightStrongBackground": colors.color59,
    // and this one is the rest of them
    "editor.wordHighlightBackground": colors.color59,
    "editorBracketMatch.background": colors.color8,
    "editorBracketMatch.border": colors.color54,
    "editorCodeLens.foreground": colors.color38,
    "editorCursor.foreground": colors.color51,
    "editorError.border": colors.color8,
    "editorError.foreground": colors.color36,
    // gutter
    "editorGutter.background": colors.color10,
    "editorGutter.addedBackground": colors.color28,
    "editorGutter.deletedBackground": colors.color36,
    "editorGutter.modifiedBackground": colors.color20,
    // editorGroup
    "editorGroup.background": colors.color36,
    "editorGroup.border": colors.color9,
    "editorGroup.dropBackground": colors.color11,
    // editorGroupHeader
    "editorGroupHeader.noTabsBackground": colors.color14,
    "editorGroupHeader.tabsBackground": colors.color14,
    "editorGroupHeader.tabsBorder": colors.color12,
    // editorHoverWidget
    "editorHoverWidget.background": colors.color12,
    "editorHoverWidget.border": colors.color8,
    "editorIndentGuide.background": colors.color26,
    "editorLineNumber.foreground": colors.color38,
    "editorLink.activeForeground": colors.color38,
    // editorMarkerNavigation
    "editorMarkerNavigation.background": colors.color27,
    "editorMarkerNavigationError.background": colors.color36,
    "editorMarkerNavigationWarning.background": colors.color51,
    // ruler
    "editorOverviewRuler.border": colors.color8,
    "editorOverviewRuler.commonContentForeground": colors.color53,
    "editorOverviewRuler.currentContentForeground": colors.color43,
    "editorOverviewRuler.incomingContentForeground": colors.color25,
    "editorRuler.foreground": colors.color16,
    // editorSuggestWidget
    "editorSuggestWidget.background": colors.color12,
    "editorSuggestWidget.border": colors.color12,
    "editorSuggestWidget.foreground": colors.color38,
    "editorSuggestWidget.highlightForeground": colors.color51,
    "editorSuggestWidget.selectedBackground": colors.color14,
    // editorWarning
    "editorWarning.border": colors.color57,
    "editorWarning.foreground": colors.color51,
    "editorWhitespace.foreground": colors.color58,
    "editorWidget.background": colors.color12,
    "editorWidget.border": colors.color8,
    "errorForeground": colors.color36,
    // extensionButton
    "extensionButton.prominentBackground": colors.color6,
    "extensionButton.prominentForeground": colors.color56,
    "extensionButton.prominentHoverBackground": colors.color49,
    "focusBorder": colors.color8,
    "foreground": colors.color38,
    // input
    "input.background": colors.color14,
    "input.border": colors.color8,
    "input.foreground": colors.color51,
    "input.placeholderForeground": colors.color38,
    "inputOption.activeBorder": colors.color33,
    "inputValidation.errorBackground": colors.color14,
    "inputValidation.errorBorder": colors.color51,
    "inputValidation.infoBackground": colors.color14,
    "inputValidation.infoBorder": colors.color8,
    "inputValidation.warningBackground": colors.color14,
    "inputValidation.warningBorder": colors.color51,
    // list
    "list.activeSelectionBackground": colors.color14,
    "list.activeSelectionForeground": colors.color38,
    "list.dropBackground": colors.color8,
    "list.focusBackground": colors.color8,
    "list.focusForeground": colors.color38,
    "list.highlightForeground": colors.color51,
    "list.hoverBackground": colors.color14,
    "list.hoverForeground": colors.color38,
    "list.inactiveSelectionBackground": colors.color8,
    "list.inactiveSelectionForeground": colors.color38,
    // menu
    "menu.background": colors.color9,
    // merge
    "merge.border": colors.color57,
    "merge.commonContentBackground": colors.color39,
    "merge.commonHeaderBackground": colors.color39,
    "merge.currentContentBackground": colors.color21,
    "merge.currentHeaderBackground": colors.color21,
    "merge.incomingContentBackground": colors.color13,
    "merge.incomingHeaderBackground": colors.color13,
    // notification colors - The colors below only apply for VS Code versions 1.21 and higher.
    "notificationCenter.border": colors.color51,
    "notificationCenterHeader.foreground": colors.color38,
    "notificationCenterHeader.background": colors.color9,
    "notificationToast.border": colors.color51,
    "notifications.foreground": colors.color38,
    "notifications.background": colors.color9,
    "notifications.border": colors.color51,
    "notificationLink.foreground": colors.color51,
    // notification - If you target VS Code versions before the 1.21 (February 2018) release, these are the old (no longer supported) colors:
    "notification.background": colors.color51,
    "notification.buttonBackground": colors.color6,
    "notification.buttonForeground": colors.color56,
    "notification.buttonHoverBackground": colors.color49,
    "notification.errorBackground": colors.color36,
    "notification.errorForeground": colors.color56,
    "notification.foreground": colors.color0,
    "notification.infoBackground": colors.color6,
    "notification.infoForeground": colors.color56,
    "notification.warningBackground": colors.color49,
    "notification.warningForeground": colors.color0,
    // panel
    "panel.background": colors.color9,
    "panel.border": colors.color51,
    "panelTitle.activeBorder": colors.color51,
    "panelTitle.activeForeground": colors.color51,
    "panelTitle.inactiveForeground": colors.color38,
    // "peekView
    "peekView.border": colors.color51,
    "peekViewEditor.background": colors.color14,
    "peekViewEditor.matchHighlightBackground": colors.color15,
    "peekViewEditorGutter.background": colors.color9,
    "peekViewResult.background": colors.color12,
    "peekViewResult.fileForeground": colors.color38,
    "peekViewResult.lineForeground": colors.color56,
    "peekViewResult.matchHighlightBackground": colors.color8,
    "peekViewResult.selectionBackground": colors.color8,
    "peekViewResult.selectionForeground": colors.color56,
    "peekViewTitle.background": colors.color12,
    "peekViewTitleDescription.foreground": colors.color38,
    "peekViewTitleLabel.foreground": colors.color51,
    // picker
    "pickerGroup.border": colors.color8,
    "pickerGroup.foreground": colors.color38,
    // progressBar
    "progressBar.background": colors.color51,
    // scrollbar
    "scrollbar.shadow": colors.color1,
    "scrollbarSlider.activeBackground": colors.color22,
    "scrollbarSlider.background": colors.color17,
    "scrollbarSlider.hoverBackground": colors.color29,
    // selection
    "selection.background": colors.color7,
    // sidebar
    "sideBar.background": colors.color12,
    "sideBar.border": colors.color8,
    "sideBar.foreground": colors.color38,
    "sideBarSectionHeader.background": colors.color14,
    "sideBarSectionHeader.foreground": colors.color38,
    "sideBarTitle.foreground": colors.color38,
    // statusBar
    "statusBar.background": colors.color12,
    "statusBar.border": colors.color8,
    "statusBar.debuggingBackground": colors.color12,
    "statusBar.debuggingBorder": colors.color51,
    "statusBar.debuggingForeground": colors.color51,
    "statusBar.foreground": colors.color38,
    "statusBar.noFolderBackground": colors.color12,
    "statusBar.noFolderBorder": colors.color8,
    "statusBar.noFolderForeground": colors.color38,
    "statusBarItem.activeBackground": colors.color6,
    "statusBarItem.hoverBackground": colors.color8,
    "statusBarItem.prominentBackground": colors.color12,
    "statusBarItem.prominentHoverBackground": colors.color8,
    // tab
    "tab.activeBackground": colors.color9,
    "tab.activeForeground": colors.color56,
    "tab.border": colors.color12,
    "tab.activeBorder": colors.color51,
    "tab.inactiveBackground": colors.color14,
    "tab.inactiveForeground": colors.color38,
    "tab.unfocusedActiveForeground": colors.color38,
    "tab.unfocusedInactiveForeground": colors.color38,
    // --- workbench: terminal
    "terminal.ansiBlack": colors.color0,
    "terminal.ansiRed": colors.color46,
    "terminal.ansiGreen": colors.color23,
    "terminal.ansiYellow": colors.color51,
    "terminal.ansiBlue": colors.color6,
    "terminal.ansiMagenta": colors.color45,
    "terminal.ansiCyan": colors.color31,
    "terminal.ansiWhite": colors.color56,
    "terminal.ansiBrightBlack": colors.color4,
    "terminal.ansiBrightRed": colors.color46,
    "terminal.ansiBrightGreen": colors.color23,
    "terminal.ansiBrightYellow": colors.color51,
    "terminal.ansiBrightBlue": colors.color6,
    "terminal.ansiBrightMagenta": colors.color45,
    "terminal.ansiBrightCyan": colors.color31,
    "terminal.ansiBrightWhite": colors.color14,
    "terminal.background": colors.color9,
    "terminal.foreground": colors.color56,
    "terminalCursor.background": colors.color51,
    "terminalCursor.foreground": colors.color51,
    // Git status colors in File Explorer
    "gitDecoration.modifiedResourceForeground": colors.color51,
    "gitDecoration.deletedResourceForeground": colors.color46,
    "gitDecoration.untrackedResourceForeground": colors.color23,
    "gitDecoration.ignoredResourceForeground": colors.color30,
    "gitDecoration.conflictingResourceForeground": colors.color47,
    // textBlockQuote
    "textBlockQuote.background": colors.color14,
    "textBlockQuote.border": colors.color6,
    "textCodeBlock.background": colors.color14,
    "textLink.activeForeground": colors.color6,
    "textLink.foreground": colors.color6,
    "textPreformat.foreground": colors.color51,
    "textSeparator.foreground": colors.color8,
    "titleBar.activeBackground": colors.color12,
    "titleBar.activeForeground": colors.color56,
    "titleBar.inactiveBackground": colors.color14,
    "titleBar.inactiveForeground": colors.color60,
    "walkThrough.embeddedEditorBackground": colors.color8,
    "welcomePage.buttonBackground": colors.color14,
    "welcomePage.buttonHoverBackground": colors.color8,
    "widget.shadow": colors.color2
  },
  "tokenColors": [
    {
      "name": "Comment",
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": {
        "fontStyle": "italic",
        "foreground": colors.color6
      }
    },
    {
      "name": "Constant",
      "scope": "constant",
      "settings": {
        "foreground": colors.color46
      }
    },
    {
      "name": "Entity",
      "scope": "entity",
      "settings": {
        "foreground": colors.color51
      }
    },
    {
      "name": "Invalid",
      "scope": "invalid",
      "settings": {
        "foreground": colors.color44
      }
    },
    {
      "name": "Storage Type Function",
      "scope": "storage.type.function",
      "settings": {
        "foreground": colors.color49
      }
    },
    {
      "name": "Keyword",
      "scope": "keyword, storage.type.class",
      "settings": {
        "foreground": colors.color49
      }
    },
    {
      "name": "Meta",
      "scope": "meta",
      "settings": {
        "foreground": colors.color35
      }
    },
    {
        "name": "Meta JSX",
        "scope": [
            "meta.jsx.children",
            "meta.jsx.children.js",
            "meta.jsx.children.tsx"
        ],
        "settings": {
            "foreground": colors.color56
        }
    },
    {
      "name": "Meta Brace",
      "scope": "meta.brace",
      "settings": {
        "foreground": colors.color41
      }
    },
    {
      "name": "Punctuation",
      "scope": "punctuation",
      "settings": {
        "foreground": colors.color41
      }
    },
    {
      "name": "Punctuation Parameters",
      "scope": "punctuation.definition.parameters",
      "settings": {
        "foreground": colors.color55
      }
    },
    {
      "name": "Punctuation Template Expression",
      "scope": "punctuation.definition.template-expression",
      "settings": {
        "foreground": colors.color55
      }
    },
    {
      "name": "Storage",
      "scope": "storage",
      "settings": {
        "foreground": colors.color51
      }
    },
    {
      "name": "Storage Type Arrow Function",
      "scope": "storage.type.function.arrow",
      "settings": {
        "foreground": colors.color51
      }
    },
    {
      "name": "String",
      "scope": ["string", "punctuation.definition.string"],
      "settings": {
        "foreground": colors.color37
      }
    },
    {
      "name": "String Template",
      "scope": ["string.template", "punctuation.definition.string.template"],
      "settings": {
        "foreground": colors.color23
      }
    },
    {
      "name": "Support",
      "scope": "support",
      "settings": {
        "foreground": colors.color32
      }
    },
    {
      "name": "Support Function",
      "scope": "support.function",
      "settings": {
        "foreground": colors.color49
      }
    },
    {
      "name": "Support Variable Property DOM",
      "scope": "support.variable.property.dom",
      "settings": {
        "foreground": colors.color41
      }
    },
    {
      "name": "Variable",
      "scope": "variable",
      "settings": {
        "foreground": colors.color41
      }
    },
    {
      "name": "[CSS] - Entity",
      "scope": ["source.css entity", "source.stylus entity"],
      "settings": {
        "foreground": colors.color23
      }
    },
    {
      "name": "[CSS] - ID Selector",
      "scope": "entity.other.attribute-name.id.css",
      "settings": {
        "foreground": colors.color50
      }
    },
    {
      "name": "[CSS] - Element Selector",
      "scope": "entity.name.tag",
      "settings": {
        "foreground": colors.color35
      }
    },
    {
      "name": "[CSS] - Support",
      "scope": ["source.css support", "source.stylus support"],
      "settings": {
        "foreground": colors.color37
      }
    },
    {
      "name": "[CSS] - Constant",
      "scope": [
        "source.css constant",
        "source.css support.constant",
        "source.stylus constant",
        "source.stylus support.constant"
      ],
      "settings": {
        "foreground": colors.color55
      }
    },
    {
      "name": "[CSS] - String",
      "scope": [
        "source.css string",
        "source.css punctuation.definition.string",
        "source.stylus string",
        "source.stylus punctuation.definition.string"
      ],
      "settings": {
        "foreground": colors.color55
      }
    },
    {
      "name": "[CSS] - Variable",
      "scope": ["source.css variable", "source.stylus variable"],
      "settings": {
        "foreground": colors.color35
      }
    },
    {
      "name": "[HTML] - Entity Name",
      "scope": "text.html.basic entity.name",
      "settings": {
        "foreground": colors.color35
      }
    },
    {
      "name": "[HTML] - ID value",
      "scope": "meta.toc-list.id.html",
      "settings": {
        "foreground": colors.color37
      }
    },
    {
      "name": "[HTML] - Entity Other",
      "scope": "text.html.basic entity.other",
      "settings": {
        "fontStyle": "italic",
        "foreground": colors.color51
      }
    },
    {
      "name": "[HTML] - Script Tag",
      "scope": "meta.tag.metadata.script.html entity.name.tag.html",
      "settings": {
        "foreground": colors.color51
      }
    },
    {
      "name":
        "[HTML] - Quotes. these are a slightly different colour because expand selection will then not include quotes",
      "scope":
        "punctuation.definition.string.begin, punctuation.definition.string.end",
      "settings": {
        "foreground": colors.color34
      }
    },
    {
      "name": "[INI] - Entity",
      "scope": "source.ini entity",
      "settings": {
        "foreground": colors.color41
      }
    },
    {
      "name": "[INI] - Keyword",
      "scope": "source.ini keyword",
      "settings": {
        "foreground": colors.color51
      }
    },
    {
      "name": "[INI] - Punctuation Definition",
      "scope": "source.ini punctuation.definition",
      "settings": {
        "foreground": colors.color55
      }
    },
    {
      "name": "[INI] - Punctuation Separator",
      "scope": "source.ini punctuation.separator",
      "settings": {
        "foreground": colors.color49
      }
    },
    {
      "name": "[JAVASCRIPT] - Storage Type Function",
      "scope": "source.js storage.type.function",
      "settings": {
        "foreground": colors.color45
      }
    },
    {
      "name": "[JAVASCRIPT] - Variable Language",
      "scope": "variable.language, entity.name.type.class.js",
      "settings": {
        "foreground": colors.color45
      }
    },
    {
      "name": "[JAVASCRIPT] - Inherited Component",
      "scope": "entity.other.inherited-class.js",
      "settings": {
        "foreground": "colors.color61"
      }
    },
    {
      "name": "[PYTHON] - Self Argument",
      "scope": "variable.parameter.function.language.special.self.python",
      "settings": {
        "foreground": colors.color45
      }
    },
    {
      "name": "[JSON] - Support",
      "scope": "source.json support",
      "settings": {
        "foreground": colors.color51
      }
    },
    {
      "name": "[JSON] - String",
      "scope": [
        "source.json string",
        "source.json punctuation.definition.string"
      ],
      "settings": {
        "foreground": colors.color41
      }
    },
    {
      "name": "[MARKDOWN] - Heading Punctuation",
      "scope": "punctuation.definition.heading.markdown",
      "settings": {
        "foreground": colors.color41
      }
    },
    {
      "name": "[MARKDOWN] - Heading Name Section",
      "scope": [
        "entity.name.section.markdown",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown"
      ],
      "settings": {
        "foreground": colors.color51,
        "fontStyle": "bold"
      }
    },
    {
      "name": "[MARKDOWN] - Paragraph",
      "scope": "meta.paragraph.markdown",
      "settings": {
        "foreground": colors.color41
      }
    },
    {
      "name": "[MARKDOWN] - Quote Punctuation",
      "scope": "beginning.punctuation.definition.quote.markdown",
      "settings": {
        "foreground": colors.color51
      }
    },
    {
      "name": "[MARKDOWN] - Quote Paragraph",
      "scope": "markup.quote.markdown meta.paragraph.markdown",
      "settings": {
        "fontStyle": "italic",
        "foreground": colors.color35
      }
    },
    {
      "name": "[MARKDOWN] - Separator",
      "scope": "meta.separator.markdown",
      "settings": {
        "foreground": colors.color51
      }
    },
    {
      "name": "[MARKDOWN] - Emphasis Bold",
      "scope": "markup.bold.markdown",
      "settings": {
        "fontStyle": "bold",
        "foreground": colors.color35
      }
    },
    {
      "name": "[MARKDOWN] - Emphasis Italic",
      "scope": "markup.italic.markdown",
      "settings": {
        "fontStyle": "italic",
        "foreground": colors.color35
      }
    },
    {
      "name": "[MARKDOWN] - Lists",
      "scope": "beginning.punctuation.definition.list.markdown",
      "settings": {
        "foreground": colors.color51
      }
    },
    {
      "name": "[MARKDOWN] - Link Title",
      "scope": "string.other.link.title.markdown",
      "settings": {
        "foreground": colors.color37
      }
    },
    {
      "name": "[MARKDOWN] - Link/Image Title",
      "scope": [
        "string.other.link.title.markdown",
        "string.other.link.description.markdown",
        "string.other.link.description.title.markdown"
      ],
      "settings": {
        "foreground": colors.color37
      }
    },
    {
      "name": "[MARKDOWN] - Link Address",
      "scope": [
        "markup.underline.link.markdown",
        "markup.underline.link.image.markdown"
      ],
      "settings": {
        "foreground": colors.color35
      }
    },
    {
      "name": "[MARKDOWN] - Inline Code",
      "scope": ["fenced_code.block.language", "markup.inline.raw.markdown"],
      "settings": {
        "foreground": colors.color35
      }
    },
    {
      "name": "[MARKDOWN] - Code Block",
      "scope": ["fenced_code.block.language", "markup.inline.raw.markdown"],
      "settings": {
        "foreground": colors.color35
      }
    },
    {
      "name": "[PUG] - Entity Name",
      "scope": "text.jade entity.name",
      "settings": {
        "foreground": colors.color35
      }
    },
    {
      "name": "[PUG] - Entity Attribute Name",
      "scope": "text.jade entity.other.attribute-name.tag",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "[PUG] - String Interpolated",
      "scope": "text.jade string.interpolated",
      "settings": {
        "foreground": colors.color55
      }
    },
    {
      "name": "[TYPESCRIPT] - Entity Name Type",
      "scope": "source.ts entity.name.type",
      "settings": {
        "foreground": colors.color32
      }
    },
    {
      "name": "[TYPESCRIPT] - Keyword",
      "scope": "source.ts keyword",
      "settings": {
        "foreground": colors.color51
      }
    },
    {
      "name": "[TYPESCRIPT] - Punctuation Parameters",
      "scope": "source.ts punctuation.definition.parameters",
      "settings": {
        "foreground": colors.color41
      }
    },
    {
      "name": "[TYPESCRIPT] - Punctuation Arrow Parameters",
      "scope": "meta.arrow.ts punctuation.definition.parameters",
      "settings": {
        "foreground": colors.color55
      }
    },
    {
      "name": "[TYPESCRIPT] - Storage",
      "scope": "source.ts storage",
      "settings": {
        "foreground": colors.color35
      }
    },
    {
      "name": "[TYPESCRIPT] - Variable Language",
      "scope": "variable.language, entity.name.type.class.ts, entity.name.type.class.tsx",
      "settings": {
        "foreground": colors.color45
      }
    },
    {
      "name": "[TYPESCRIPT] - Inherited Component",
      "scope": "entity.other.inherited-class.ts, entity.other.inherited-class.tsx",
      "settings": {
        "foreground": "colors.color61"
      }
    },
    {
      "name": "[PHP] - Entity",
      "scope": "source.php entity",
      "settings": {
        "foreground": colors.color35
      }
    },
    {
      "name": "[PHP] - Variables",
      "scope": "variable.other.php",
      "settings": {
        "foreground": colors.color51
      }
    },
    {
      "name": "[C#] - Annotations",
      "scope": "storage.type.cs",
      "settings": {
        "foreground": colors.color35
      }
    },
    {
      "name": "[C#] - Properties",
      "scope": "entity.name.variable.property.cs",
      "settings": {
        "foreground": colors.color35
      }
    },
    {
      "name": "[C#] - Storage modifiers",
      "scope": "storage.modifier.cs",
      "settings": {
        "foreground": colors.color32
      }
    },
    {
      "name": "Italicsify for Operator Mono",
      "scope": [
        "modifier",
        "this",
        "comment",
        "storage.modifier.js",
        "storage.modifier.ts",
        "storage.modifier.tsx",
        "entity.other.attribute-name.js",
        "entity.other.attribute-name.ts",
        "entity.other.attribute-name.tsx",
        "entity.other.attribute-name.html"
      ],
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "[CSHARP] - Modifiers and keyword types",
      "scope": "storage.modifier.cs, keyword.type.cs",
      "settings": {
        "foreground": colors.color45
      }
    },
    {
      "name": "[CSHARP] - Storage types",
      "scope": "storage.type.cs",
      "settings": {
        "foreground": colors.color32
      }
    },
    {
      "name": "[CSHARP] - Namespaces, parameters, field variables, properties",
      "scope": "entity.name.type.namespace.cs, entity.name.variable.parameter.cs, entity.name.variable.field.cs, entity.name.variable.property.cs",
      "settings": {
        "foreground": colors.color41
      }
    }
  ]
});
