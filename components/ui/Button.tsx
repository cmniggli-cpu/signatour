'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef } from 'react'

type ButtonVariant = 'primary' | 'accent' | 'outline' | 'ghost' | 'white'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  children: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-900 text-white hover:bg-primary-800',
  accent: 'bg-accent-500 text-white hover:bg-accent-600 btn-glow',
  outline: 'border border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white',
  ghost: 'text-primary-900 hover:bg-primary-100',
  white: 'bg-white text-primary-900 hover:bg-primary-50 shadow-sm',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm rounded-full',
  md: 'px-7 py-3 text-sm rounded-full',
  lg: 'px-9 py-4 text-base rounded-full',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, className, children, ...props }, ref) => {
    const styles = cn(
      'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 cursor-pointer',
      variantStyles[variant],
      sizeStyles[size],
      className
    )

    if (href) {
      return (
        <Link href={href} className={styles}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={styles} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
