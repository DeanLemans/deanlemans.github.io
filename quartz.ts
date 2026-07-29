import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  filterFn: (node) => {
    return node.data?.tags?.includes("_excluded") !== true
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
