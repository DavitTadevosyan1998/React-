import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import List from './List';
import PropTypes from 'prop-types';

export class OwelfinityTable extends Component {
    render() {
        return (
            < Table striped bordered hover variant = "dark" >
                <thead>
                    <tr>
                        <th > # </th> 
                        <th> First Name </th> 
                        <th> Last Name </th> 
                        <th> Profession </th> 
                    </tr> 
                </thead> 
                <tbody>
                    {this.props.data.map((d, i) => <List key={i} d={d} />)}
                </tbody> 
            </Table>
        )
    }
}

// PropTypes
OwelfinityTable.propTypes = {
    data: PropTypes.array.isRequired
}

export default OwelfinityTable
