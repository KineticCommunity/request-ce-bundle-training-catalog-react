import React from 'react';

import { ServiceCardBottom } from './ServiceCardBottom';

const ServiceCardTop = props =>
  <div className="service-icon-wrapper">
    <div className="icn-frame">
      <i className={`fa fa-fw ${props.form.icon}`} />
    </div>
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
