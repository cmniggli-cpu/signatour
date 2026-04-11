import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-primary-700">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-5 py-3.5 rounded-full border border-primary-200 bg-white text-primary-900',
            'focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent',
            'placeholder:text-primary-400 transition-all duration-200 text-sm',
            error && 'border-red-400 focus:ring-red-400',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500 pl-4">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-primary-700">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            'w-full px-5 py-3.5 rounded-2xl border border-primary-200 bg-white text-primary-900',
            'focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent',
            'transition-all duration-200 text-sm',
            error && 'border-red-400 focus:ring-red-400',
            className
          )}
          {...props}
        >
          <option value="">Bitte wählen</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-sm text-red-500 pl-4">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-primary-700">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          rows={4}
          className={cn(
            'w-full px-5 py-3.5 rounded-2xl border border-primary-200 bg-white text-primary-900',
            'focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent',
            'placeholder:text-primary-400 transition-all duration-200 resize-vertical text-sm',
            error && 'border-red-400 focus:ring-red-400',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500 pl-4">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
