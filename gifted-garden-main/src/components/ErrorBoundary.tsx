import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('GiftedGardens error boundary caught an error:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.scrollTo({ top: 0 });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f8f4] text-[#1c2d20] px-6">
          <div className="max-w-md w-full text-center space-y-5">
            <div className="text-5xl">🌿</div>
            <h1 className="text-2xl font-bold text-[#0d2818]">
              Something went wrong on this page
            </h1>
            <p className="text-sm text-stone-600 leading-relaxed">
              A mistake slipped through our net while rendering this screen.
              Refresh, or head back to the estate and we'll take it from there.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={this.handleReset}
                className="px-5 py-2.5 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0f2417] font-bold text-sm transition-colors cursor-pointer"
              >
                Reload Page
              </button>
              <button
                onClick={() => {
                  this.handleReset();
                  window.location.href = '/';
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0f2818] text-white font-bold text-sm transition-colors cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}