'use client'

import { ElementType, CSSProperties } from 'react'
import { useLang } from './LangContext'

type TranslationKey = Parameters<ReturnType<typeof useLang>['t']>[0]

interface Props {
  tKey: TranslationKey
  as?: ElementType
  className?: string
  style?: CSSProperties
  html?: boolean
}

export default function T({
  tKey,
  as: Tag = 'span',
  className = '',
  style,
  html = false,
}: Props) {
  const { lang, t } = useLang()

  if (html) {
    return (
      <Tag
        key={`${tKey}-${lang}`}
        className={`${className} lang-anim`.trim()}
        style={style}
        dangerouslySetInnerHTML={{ __html: t(tKey) }}
      />
    )
  }

  return (
    <Tag
      key={`${tKey}-${lang}`}
      className={`${className} lang-anim`.trim()}
      style={style}
    >
      {t(tKey)}
    </Tag>
  )
}