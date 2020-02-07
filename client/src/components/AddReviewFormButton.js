import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    Label,
    Form,
    Input,
    FormGroup,
    FormFeedback
} from 'reactstrap';

// The author field should at least be three characters long.
// The author field should be less than or equal to 15 characters.

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            touched: {
                name: false
            },
            name: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(event) {
        this.toggleModal();
        alert("rating: " + this.rating.value + " name: " + this.name.value
            + " comment: " + this.comment.value);
        event.preventDefault();

    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }
    validate(name) {

        const errors = {
            name: ''
        };

        if (this.state.touched.name && name.length < 3)
            errors.name = 'First Name should be >= 3 characters';
        else if (this.state.touched.name && name.length > 10)
            errors.name = 'First Name should be <= 15 characters';

        return errors;
    }


    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }

    render() {
        const errors = this.validate(this.state.name);
        return (
            <div>
                <Button color="primary" onClick={this.toggleModal}> <i class=' fa fa-pencil '></i> Add Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="number" id="rating" name="rating"
                                    innerRef={(input) => this.rating = input}
                                />

                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Your name</Label>
                                <Input type="text" id="name" name="name"
                                    innerRef={(input) => this.name = input}
                                    valid={errors.name === ''}
                                    invalid={errors.name !== ''}
                                    onBlur={this.handleBlur('name')}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Input type="textarea" id="comment" name="comment"
                                    innerRef={(input) => this.comment = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>

                    </ModalBody>

                </Modal>
            </div >
        );
    }
}
export default CommentForm;
