
// alert("rating: " + event.target.rating.value + " review: " + event.target.review.value);
// const review = {
//     review: event.target.review.value,
//     rating: event.target.rating.value,
//     bookId: this.props.bookId,
//     userName: this.props.userName
// }
// console.log(review);
// // this.props.addReview(review);import React, { Component } from 'react';
import React, { Component }
    from 'react';
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

class AddReviewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            touched: {
                review: false
            },
            review: '',
            rating: null
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
        event.preventDefault();
        this.toggleModal();
        const review = {
            review: this.state.review,
            rating: this.state.rating,
            bookId: this.props.bookId,
            userId: this.props.userId,
            userName: this.props.userName
        }
        console.log(review);
        this.props.addReview(review);

        // this.props.postComment(event.target.rating.value, event.target.review.value);


    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        console.log(name);
        this.setState({
            [name]: target.value
        });
    }
    validate(review) {

        const errors = {
            review: ''
        };

        if (this.state.touched.review && review.length < 3)
            errors.review = 'Review should be >= 3 characters';

        return errors;
    }


    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }

    render() {
        const errors = this.validate(this.state.review);
        // console.log(errors);
        return (
            <div>
                <Button color="primary" onClick={this.toggleModal}> <i className=' fa fa-pencil '></i> Add Review</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="number" id="rating" name="rating"
                                    innerRef={(input) => this.rating = input}
                                    onBlur={this.handleBlur('rating')}
                                    onChange={this.handleInputChange}
                                />

                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="review">Review</Label>
                                <Input type="text" id="review" name="review"
                                    innerRef={(input) => this.review = input}
                                    valid={errors.review === ''}
                                    invalid={errors.review !== ''}
                                    onBlur={this.handleBlur('review')}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>

                    </ModalBody>

                </Modal>
            </div >
        );
    }
}
export default AddReviewForm;
