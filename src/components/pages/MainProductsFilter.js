import React from 'react';
import { Field, reduxForm } from 'redux-form';

import InputRange from "../inputRange/InputRange";

class MainProductsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}
        className="form-row my-5 d-flex justify-content-center align-items-center text-center">
        <div className="col-3 px-5">
          <Field component="select" name="availability">
            <option value="Todos">Todos</option>
            <option value={true}>Disponibles</option>
            <option value={false}>No disponibles</option>
          </Field>
        </div>
        <div className="col-3 px-5">
          <label>Precios</label>
          <Field
            component={InputRange}
            props={{
              minValue: 0,
              maxValue: 50000
            }}
            name="priceRange" />
        </div>
        <div className="col-3 px-5">
          <label>stock</label>
          <Field
            component={InputRange}
            props={{
              minValue: 0,
              maxValue: 1000
            }}
            name="stockRange" />
        </div>
        <div className="col-3 px-5">
          <button className="btn btn-primary">Filtrar</button>
        </div>
      </form>
    );
  }
}


export default reduxForm({
  form: 'productsFilter',
  initialValues: {
    availability: "Todos",
    priceRange: {
      min: 0,
      max: 49999
    },
    stockRange: {
      min: 0,
      max: 999
    }
  }
})(MainProductsFilter);