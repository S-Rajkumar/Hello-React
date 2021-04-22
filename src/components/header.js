import React from 'react';

class Header extends React.Component {
    render(){
        return(
            <div>
                <Logo />
                <Nav />
            </div>
        );
    }
}

class Logo extends React.Component {
    render() {
        return(
            <div>
                
            </div>
        )
    }
}

class Nav extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello React</h1>
            </div>
        )
    }
}

export default Header;