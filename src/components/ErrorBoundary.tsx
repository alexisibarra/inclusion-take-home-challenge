import React, { Component, ReactNode, ErrorInfo } from "react";

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // We want to know what happened
    // eslint-disable-next-line no-console
    console.log({ error, errorInfo });

    this.setState({ hasError: true });
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <h2>
          We could not process your request successfully. Please, refresh the
          page and try again
        </h2>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
