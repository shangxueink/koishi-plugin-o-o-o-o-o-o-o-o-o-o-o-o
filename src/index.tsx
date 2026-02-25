import { Context, Schema, h } from 'koishi'
import { } from '@koishijs/plugin-notifier'

export const name = 'o-o-o-o-o-o-o-o-o-o-o-o'

export const inject = ['notifier']

export const reusable = true

export const filter = false
export const usage = `---

开启插件看看？

---`

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

function buildContent(): h[] {
  return [
    h('div', {
      style: [
        'text-align: center',
        'padding: 16px 24px',
        'background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        'border: 3px solid #e94560',
        'border-radius: 8px',
        'box-shadow: 0 0 20px #e94560, 0 0 40px #e9456066',
        'font-family: "Impact", "Arial Black", sans-serif',
      ].join('; '),
    },
      h('div', {
        style: [
          'font-size: 64px',
          'font-weight: 900',
          'color: #fff',
          'text-shadow: -3px -3px 0 #e94560, 3px -3px 0 #e94560, -3px 3px 0 #e94560, 3px 3px 0 #e94560, 0 0 20px #ff6b6b',
          'transform: rotate(-5deg) skewX(-8deg)',
          'display: inline-block',
          'letter-spacing: 8px',
          'line-height: 1',
          'margin-bottom: 8px',
        ].join('; '),
      }, `唔嗯哦哦❤？！呜齁噗吼、呜咿噗噫喔噢噢噢噢噢噢噢噢————❤！！！
唔……❤嗯啊……❤呜咕呼……❤唔噗……❤喔……❤呜咕❤”
嗯喔啊……❤唔噢噢……
呜咕唔咿哦、噗喔哦噢噢噢噢——❤！！
嗯啾……唔噗滋……噗噜……啾……唔嗯噗噜噜噜噜噜~~~❤`),

    ),
  ]
}

export async function apply(ctx: Context, _config: Config) {
  const notifier = ctx.notifier.create(buildContent())

  try {
    await ctx.sleep(0.7 * 1000)
  } catch {
    return
  }

  notifier.dispose()

  ctx.scope.dispose()
}
