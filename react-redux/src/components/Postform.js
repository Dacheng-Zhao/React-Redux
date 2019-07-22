import React, { Component } from 'react'

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
        }
    }

    render() {
        return (
            <div>
                <h1>Add posts</h1>
            </div>
        )
    }
}

export default Postform;