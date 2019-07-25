import React, { Component } from 'react'

export class List extends Component {
    render() {  
        return (
           <tr>
                <td>{ this.props.d.id }</td>  
                <td>{ this.props.d.firstName }</td>  
                <td>{ this.props.d.lastName }</td>  
                <td>{ this.props.d.profession }</td>  
            </tr>      
        )
    }
}

export default List
