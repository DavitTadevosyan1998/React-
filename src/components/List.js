import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

List.propTypes = {
    d: PropTypes.object.isRequired
}

export default List
