import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[APP_ERROR]', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-[#12071d] px-6 text-center text-white">
          <section className="max-w-xl">
            <h1 className="text-4xl font-black">Un problème est survenu</h1>
            <p className="mt-4 text-white/70">
              Impossible d’afficher cette page. Vos données n’ont pas été supprimées.
              Rechargez la page ou revenez dans quelques minutes.
            </p>
            <a
              href="/"
              className="mt-8 inline-flex rounded-xl bg-violet-200 px-6 py-3 font-bold text-violet-950"
            >
              Retour à l’accueil
            </a>
          </section>
        </main>
      )
    }

    return this.props.children
  }
}
