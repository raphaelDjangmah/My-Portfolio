import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Web Design',
        id_ID: 'web_design',
      },
    },
    {
      id: 2,
      title: {
        en: 'UI/UX',
        id_ID: 'ui_ux_design',
      },
    },
    {
      id: 3,
      title: {
        en: 'Trading Bots',
        id_ID: 'ui_ux_design',
      },
    },
  ]
})
