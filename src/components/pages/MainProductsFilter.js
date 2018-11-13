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
        className="form-row my-4 d-flex justify-content-center align-items-center text-center">
        <div className="col-12 col-sm-6 col-md-3 px-5">
          <label>Orden ascendente</label>
          <Field component="select" name="sortBy" className="form-control">
            <option value>Sin orden</option>
            <option value={'quantity'}>> Cantidad</option>
            <option value={'available'}>> Disponibilidad</option>
            <option value={'price'}>> Precio</option>
          </Field>
        </div>
        <div className="col-12 col-sm-6 col-md-3 px-5">
          <label>Disponibilidad</label>
          <Field component="select" name="availability" className="form-control">
            <option value="Todos">Todos</option>
            <option value={true}>Disponibles</option>
            <option value={false}>No disponibles</option>
          </Field>
        </div>
        <div className="col-12 col-sm-6 col-md-3 px-5">
          <label>Precios</label>
          <Field
            component={InputRange}
            props={{
              minValue: 0,
              maxValue: 50000
            }}
            name="priceRange" />
        </div>
        <div className="col-12 col-sm-6 col-md-3 px-5">
          <label>stock</label>
          <Field
            component={InputRange}
            props={{
              minValue: 0,
              maxValue: 1000
            }}
            name="stockRange" />
        </div>
        <div className="col-12 px-5 py-4">
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