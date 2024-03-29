import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
import Btn from "../presentational/Btn.jsx";

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            seo_title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleClick() {
        console.log("CLICK")
    }

    render() {
        const { seo_title } = this.state;
        return (
            <form id="article-form">
                <Input
                    text="SEO title"
                    label="seo_title"
                    type="text"
                    id="seo_title"
                    value={seo_title}
                    handleChange={this.handleChange}
                />
                <Btn text="Guardar" handleClick={this.handleClick}/>
            </form>
        );
    }
}

export default FormContainer;