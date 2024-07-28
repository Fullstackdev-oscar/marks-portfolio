import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="bg-glass backdrop-blur-sm rounded-glass shadow-glass p-4 ">
          <>
            <h1 className=" font-ojuju text-8xl font-bold mb-3">Agba Dev,</h1>
            <h1 className=" font-ojuju text-8xl font-bold mb-3 bg-gradient-to-b from-red-300 to-blue-300 via-white">
              you don crash the app{" "}
            </h1>
            <h1 className=" font-ojuju text-8xl font-bold mb-3">oya rest.</h1>
          </>
          <h1 className=" font-ojuju text-8xl font-bold mb-3"></h1>
          <details style={{ whiteSpace: "pre-wrap" }} className="mt-2 text-3xl">
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
