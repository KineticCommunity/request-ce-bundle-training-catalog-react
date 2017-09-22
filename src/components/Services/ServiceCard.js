import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCardTop = props =>
  <div className="service-icon-wrapper">
    <div className="icn-frame">
      <i className={`fa fa-fw ${props.form.icon}`} />
    </div>
  </div>;

const ServiceCardBottom = props =>
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

export const ServiceCardLarge = props =>
  <div className="card-wrapper col-xs-12">
    <div className="service-card clearfix">
      <ServiceCardTop form={props.form} />
      <ServiceCardBottom form={props.form} categorySlug={props.categorySlug} />
    </div>
  </div>;

export const ServiceCardSmall = props =>
  <div className="clearfix submission">
    <ServiceCardTop form={props.form} />
    <ServiceCardBottom form={props.form} categorySlug={props.categorySlug} />
  </div>;
