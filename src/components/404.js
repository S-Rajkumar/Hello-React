import React from 'react';
import {Link} from 'react-router-dom';

class NotFoundComponent extends React.Component {
    render() {
        return(
            <div>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <Link to = "/Hello-React/">
                    <h3>Home</h3>
                </Link>
            </div>
        )
    }
}

export default NotFoundComponent;