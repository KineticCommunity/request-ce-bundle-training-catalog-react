import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ActiveHelp = ({ positionX, positionY, handleClose, help }) => {
  const posX = positionX - 260;
  const posY = positionY - 15;
  return (
    <div style={{ left: posX, top: posY }} className="active-help-dialog">
      <div>
        <h4>Active Help</h4>
        <h4 className="float-right"><i className="fa fa-close" role="button" tabIndex="0" onClick={handleClose} /></h4>
      </div>
      <p className="ellipsis">{help}</p>
    </div>
  );
};

export class ServiceCardBottom extends Component {  // class that extends component
  constructor(props) {
    super(props);

    this.state = { // initialize state
      visable: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(event) {
    this.setState({
      visable: true,
      positionX: event.clientX,
      positionY: event.clientY,
    });
  }

  handleClose() {
    this.setState({
      visable: false,
    });
  }

  render() { // render method is required
    const { categorySlug, form } = this.props; // destructure categorySlug and form
    const { visable, positionY, positionX } = this.state;
    return ( // JSX returned from the render method
      <div className="service-details-wrapper">
        <h5 className="ellipsis">
          <Link
            to={
              categorySlug
                ? `/categories/${categorySlug}/${form.slug}`
                : `/forms/${form.slug}`
            }
          >
            {form.name}
          </Link>
          { form.help ?
            <i className="fa fa-question-circle 2x active-help-icon" title="Help" role="button" tabIndex="0" onClick={this.handleOpen} />
            : null }
        </h5>
        <p className="ellipsis">{form.description}</p>
        { visable ?
          <ActiveHelp
            positionX={positionX}
            positionY={positionY}
            handleClose={this.handleClose}
            help={form.help}
            // eslint-disable-next-line
          />
          : null}
      </div>
    );
  }
}
