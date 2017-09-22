import React from 'react';
// Add Link import from step 14 here.

const ServiceCardTop = props =>
  <div className="service-icon-wrapper">
    <div className="icn-frame">
      <i className={`fa fa-fw ${props.form.icon}`} />
    </div>
  </div>;

const ServiceCardBottom = props =>
  <div className="service-details-wrapper">
    {/* Add Link element from step 15 here. */}
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
