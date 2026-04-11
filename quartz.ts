import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { Explorer } from "@quartz-community/explorer"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

Explorer({
  filterFn: (node) => {
    // exclude files with the tag "exclude"
    return node.data?.tags?.includes("exclude") !== true
  },
})
