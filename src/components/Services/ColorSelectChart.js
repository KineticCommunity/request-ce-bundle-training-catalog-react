import React, { Component } from 'react';
import { CoreFormModal } from 'react-kinetic-core';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

export class ColorSelectChart extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  openForm() {
    this.setState({ open: true });
  }

  closeForm() {
    this.setState({ open: false });
    this.props.fetchSubmissions();
  }

  render() {
    return (
      <div>
        <BarChart width={730} height={250} data={this.props.data} >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
        <CoreFormModal
          form="color-select"
          kapp="services"
          dismissed={this.closeForm}
          completed={this.closeForm}
        />
        <button className="btn btn-default" onClick={this.openForm}>Open Form</button>
      </div>
    );
  }
}
