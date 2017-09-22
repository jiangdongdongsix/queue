import React from 'react'


class QueueUp extends React.Component{
    constructor() {
        super();
    }
    render(){
        return <div>123{this.props.match.params.id}</div>;
    }
}

export default QueueUp;
