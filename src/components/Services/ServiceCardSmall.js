import React from 'react';

import { ServiceCardTop } from './ServiceCardTop';
import { ServiceCardBottom } from './ServiceCardBottom';

export const ServiceCardSmall = props =>
  <div className="clearfix submission">
    <ServiceCardTop form={props.form} />
    <ServiceCardBottom form={props.form} categorySlug={props.categorySlug} />
  </div>;
