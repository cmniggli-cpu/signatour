import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'outline'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest',
        variant === 'default' && 'bg-primary-100 text-primary-800',
        variant === 'accent' && 'bg-accent-100 text-accent-700',
        variant === 'outline' && 'border border-primary-300 text-primary-600',
        className
      )}
    >
      {children}
    </span>
  )
}
