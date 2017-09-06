import React from 'react';
import { Link } from 'react-router-dom';

export const ServiceCardBottom = props =>
  <div className="service-details-wrapper">
    <h5 className="ellipsis">
      <Link
        to={
          props.categorySlug
            ? `/categories/${props.categorySlug}/${props.form.slug}`
            : `/forms/${props.form.slug}`
        }
      >
        {props.form.name}
      </Link>
    </h5>
    <p className="ellipsis">{props.form.description}</p>
  </div>;
