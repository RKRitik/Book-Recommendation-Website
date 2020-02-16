import React, { Component } from 'react';
import {
    Button,
    Label,
    Form,
    Input,
    ButtonGroup,
    Col,
    Row
} from 'reactstrap';
class SearchBarComponent extends Component {
    //inauthor , inpublisher ,  subject ,  isbn
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            filterterm: "",
            touched: {
                search: false,
                filterterm: false
            },
            selected: null

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        // console.log(this.state.search, this.state.selected);
        this.props.getResults(this.state.search, this.state.selected, this.state.filterterm);
        // event.preventDefault();


    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }


    onCheckboxBtnClick(select) {
        this.setState({ selected: select });

    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }

    render() {

        return (
            <div className='col-12 '>
                <Form onSubmit={this.handleSubmit}>

                    <Row form>
                        <Label htmlFor="search" sm={2}>Search a book</Label>
                        <Col sm={6}>
                            <Input type="text" name="search" id="search" placeholder="Enter a name" innerRef={(input) => this.name = input}
                                onBlur={this.handleBlur('search')}
                                onChange={this.handleInputChange} />
                        </Col>
                    </Row>
                    <Row form className='mt-2 '>
                        <Label htmlFor="filterterm" sm={2}>Filter by </Label>
                        <Col sm={6}>
                            <Input type="text" name="filterterm" id="filterterm" placeholder="Enter something" innerRef={(input) => this.name = input}
                                onBlur={this.handleBlur('filterterm')}
                                onChange={this.handleInputChange} />
                        </Col>
                        <Col className='mr-auto'>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => this.onCheckboxBtnClick('inauthor')} active={this.state === 'inauthor'}>Author</Button>
                                <Button color="primary" onClick={() => this.onCheckboxBtnClick('inpublisher')} active={this.state === 'inpublisher'}>Publisher</Button>
                                <Button color="primary" onClick={() => this.onCheckboxBtnClick('subject')} active={this.state === 'subject'}>Subject</Button>
                                <Button color="primary" onClick={() => this.onCheckboxBtnClick('isbn')} active={this.state === 'isbn'}>Isbn</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </Row>




                </Form>

            </div >
        );
    }
}

export default SearchBarComponent;