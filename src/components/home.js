import React from 'react';
import {Link} from 'react-router-dom';

class HomeChild extends React.Component {
    render() {
        return(
            <div>
                {/*<Link to = "/">
                    <li>Home</li>
                </Link>*/}
                <Link to = "/Hello-React/projects">
                    <li>Projects</li>
                </Link>
                <Link to = "/Hello-React/learn">
                    <li>React Practices</li>
                </Link>
            </div>
        );
    }
}
export default HomeChild;