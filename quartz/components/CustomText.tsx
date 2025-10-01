import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface CustomTextOptions {
  text: string
  className?: string
}

const CustomText: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  const opts = (CustomText as any).options as CustomTextOptions

  return (
    <div class={classNames(displayClass, "custom-text", opts.className || "")}>
      <p>{opts.text}</p>
    </div>
  )
}

CustomText.css = `
.custom-text {
  margin: 0.25rem 0 0.25rem 0;
  font-family: var(--bodyFont);
}

.custom-text p {
  margin: 0;
  color: var(--darkgray);
  font-size: 0.9rem;
  line-height: 1.4;
}
`

export default ((opts: CustomTextOptions) => {
  const component = CustomText as any
  component.options = opts
  return component
}) satisfies QuartzComponentConstructor<CustomTextOptions>
