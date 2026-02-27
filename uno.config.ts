import { defineConfig, presetIcons, presetWind3 } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcnV3 } from 'unocss-preset-shadcn/v3'

export default defineConfig({
  presets: [
    presetIcons(),
    presetWind3(),
    presetAnimations(),
    presetShadcnV3({
      color: 'neutral',
    }),
  ],
})
