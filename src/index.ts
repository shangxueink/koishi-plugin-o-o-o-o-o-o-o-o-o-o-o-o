import { Context, h, Schema } from 'koishi'

export const name = 'o-o-o-o-o-o-o-o-o-o-o-o'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

/** 在文本元素的每个字符间插入 - */
function insertDashBetweenChars(elements: h[]) {
  for (const el of elements) {
    if (el.type === 'text' && el.attrs?.content != null) {
      el.attrs.content = String(el.attrs.content).split('').join('-')
    }
    if (el.children?.length) {
      insertDashBetweenChars(el.children)
    }
  }
}

export function apply(ctx: Context, config: Config) {
  ctx.on('before-send', (session) => {
    if (session.elements?.length) {
      insertDashBetweenChars(session.elements)
    }
  })
}
