
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90 active:bg-primary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-primary active:bg-accent/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70",
        ghost: "hover:bg-accent hover:text-primary active:bg-accent/80",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Improve click handling for mobile
    const handleButtonAction = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
      // Stop propagation and prevent default to avoid double-tap issues
      e.stopPropagation();
      
      // If there's an onClick handler in props, call it
      if ('onClick' in props && typeof props.onClick === 'function') {
        props.onClick(e as React.MouseEvent<HTMLButtonElement>);
      }
    };
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "touch-manipulation")}
        ref={ref}
        style={{
          WebkitTapHighlightColor: "transparent", // Remove default mobile tap highlight
          touchAction: "manipulation", // Improve touch handling
          userSelect: "none", // Prevent text selection during rapid clicks
          ...props.style
        }}
        {...props}
        // Override onClick and onTouchStart with our improved handlers
        onClick={handleButtonAction}
        onTouchStart={(e) => {
          // Prevent ghost clicks
          e.preventDefault();
          handleButtonAction(e);
          
          // Call original onTouchStart if it exists
          if (props.onTouchStart) {
            props.onTouchStart(e);
          }
        }}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
