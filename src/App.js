import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class App extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <div className='app'>
                {children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default withRouter(connect(mapStateToProps)(App));