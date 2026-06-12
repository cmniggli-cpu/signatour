'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/constants'
import Button from '@/components/ui/Button'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary-900/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[300px] bg-cream z-50 lg:hidden shadow-2xl overflow-y-auto"
          >
            <div className="p-6 pt-20">
              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full px-4 py-3 text-primary-700 hover:text-primary-900 hover:bg-white rounded-xl transition-colors"
                        >
                          <span className="font-medium text-sm">{item.label}</span>
                          <ChevronDown
                            className={cn(
                              'w-4 h-4 transition-transform',
                              expandedItem === item.label && 'rotate-180'
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {expandedItem === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-1">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={onClose}
                                    className={cn(
                                      'block px-4 py-2.5 text-sm text-primary-500 hover:text-primary-900 hover:bg-white rounded-xl transition-colors',
                                      pathname === child.href && 'text-primary-900 bg-white font-medium'
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          'block px-4 py-3 font-medium text-sm text-primary-700 hover:text-primary-900 hover:bg-white rounded-xl transition-colors',
                          pathname === item.href && 'text-primary-900 bg-white'
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-8 px-4">
                <Button href="/kontakt" variant="primary" size="md" className="w-full">
                  Kostenlose Beratung
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
