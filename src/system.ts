export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "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",
  openaiAPITemperature: 60,
  password: "ourongxing",
  systemRule: ""
}

export const message = `Powered by OpenAI
- 由微信c1949111开发，基于gpt-4模型。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
