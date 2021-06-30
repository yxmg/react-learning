/*
 * @Description: 错误边界
 * @Author: 管铭钊
 * @Date: 2021/6/28
 */
import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

class Bug extends React.Component {
    render() {
        return this.props.test.map((item, index) => (<div>
            {index}
        </div>))
    }
}

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { test: [] };
        this.triggerError = this.triggerError.bind(this)
    }

    triggerError() {
        this.setState({ test: '' })
    }

    render() {
        return (
            <>
                <button onClick={this.triggerError}>trigger</button>
                <ErrorBoundary>
                    <Bug test={this.state.test} />
                </ErrorBoundary>
            </>
        )
    }
}

export default Index
