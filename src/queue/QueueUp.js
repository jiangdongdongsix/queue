import React from 'react'


class QueueUp extends React.Component{
    constructor(props) {
        super();
        console.log(props.match);
    }


    render(){
        return <div>123{this.props.match.params.id}</div>;
    }
}

export default QueueUp;
