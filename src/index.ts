import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@codemirror/highlight"

export const EXAMPLELanguage = LRLanguage.define({
    parser: parser.configure({
      props: [
        indentNodeProp.add({
          Application: delimitedIndent({closing: ")", align: false})
        }),
        foldNodeProp.add({
          Application: foldInside
        }),
        styleTags({
          Type: t.className,
          Attr: t.variableName,
          String: t.string,
          Keyword: t.keyword,
          Query: t.keyword,
          LineComment: t.lineComment,
          "{ }": t.paren
        })
      ]
    }),
    languageData: {
      commentTokens: {line: ""}
    }
  })
  
  export function EXAMPLE() {
    return new LanguageSupport(EXAMPLELanguage)
  }