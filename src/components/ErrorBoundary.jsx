import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("PageBuilder Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600">
            Please refresh the page or try again later.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
