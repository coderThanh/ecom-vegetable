import toast, { ToastOptions } from 'react-hot-toast'

export const notifySuccess = (message: string, options?: ToastOptions) =>
  toast.success(message, options)

export const notifyError = (message: string, options?: ToastOptions) =>
  toast.error(message, options)

export const notifyLoading = (message: string, options?: ToastOptions) =>
  toast.loading(message, options)

export const notifyInfo = (message: string, options?: ToastOptions) =>
  toast(message, {
    ...options,
    icon: '👋',
  })

export const notifyWarning = (message: string, options?: ToastOptions) =>
  toast(message, {
    ...options,
    icon: '⚠️',
  })
