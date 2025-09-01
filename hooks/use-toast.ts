"use client"

import type React from "react"

import { useState, useCallback } from "react"

export interface Toast {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "destructive"
}

interface ToastState {
  toasts: Toast[]
}

const initialState: ToastState = {
  toasts: [],
}

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

export function useToast() {
  const [state, setState] = useState<ToastState>(initialState)

  const toast = useCallback(({ ...props }: Omit<Toast, "id">) => {
    const id = genId()

    const newToast: Toast = {
      id,
      ...props,
    }

    setState((prevState) => ({
      ...prevState,
      toasts: [...prevState.toasts, newToast],
    }))

    return {
      id,
      dismiss: () => {
        setState((prevState) => ({
          ...prevState,
          toasts: prevState.toasts.filter((t) => t.id !== id),
        }))
      },
      update: (props: Partial<Omit<Toast, "id">>) => {
        setState((prevState) => ({
          ...prevState,
          toasts: prevState.toasts.map((t) => (t.id === id ? { ...t, ...props } : t)),
        }))
      },
    }
  }, [])

  const dismiss = useCallback((toastId?: string) => {
    setState((prevState) => ({
      ...prevState,
      toasts: toastId ? prevState.toasts.filter((t) => t.id !== toastId) : [],
    }))
  }, [])

  return {
    ...state,
    toast,
    dismiss,
  }
}
