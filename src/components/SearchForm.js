import React from "react";
import { Form, Label, Input } from 'reactstrap';


export default function SearchForm(props) {

  return (
    <section className="search-form">
      <Form>
        <Label htmlFor='term'>Search: </Label>
        <Input 
          id='term'
          type='text'
          name='textfield'
          placeholder={props.placeholder}
          value={props.searchQuery}
          onChange={props.handleChange} />
      </Form>
    </section>
  );
}
