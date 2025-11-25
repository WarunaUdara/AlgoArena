import { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"
import styles from "./marquee.module.css"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        styles.marquee,
        "group flex overflow-hidden p-2",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
          [styles.marqueeContentPause]: pauseOnHover,
        },
        className
      )}
      style={{ 
        gap: 'var(--marquee-gap)',
        ['--marquee-duration' as string]: '40s',
        ['--marquee-gap' as string]: '1rem'
      } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around",
              {
                "flex-row": !vertical,
                "flex-col": vertical,
              },
              styles.marqueeContent,
              {
                [styles.marqueeContentVertical]: vertical,
                [styles.marqueeContentReverse]: reverse,
              }
            )}
            style={{ gap: 'var(--marquee-gap)' }}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
