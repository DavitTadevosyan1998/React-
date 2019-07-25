import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import OwelfinityTable from './OwelfinityTable';
import { Data } from './../shared/Data'

export class Header extends Component {
    state = {
        data: Data,
    }
    render() {
        return (
            <Container>
                <h1 className="text-center mt-3">{ this.props.title }</h1>
                <OwelfinityTable data={this.state.data}/>
            </Container>
        )
    }
}

export default Header
