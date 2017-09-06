import React from 'react';

import { ServiceCardTop } from './ServiceCardTop';
import { ServiceCardBottom } from './ServiceCardBottom';

export const ServiceCardLarge = ({ form, categorySlug }) =>
  <div className="card-wrapper col-xs-12">
    <div className="service-card clearfix">
      <ServiceCardTop form={form} />
      <ServiceCardBottom form={form} categorySlug={categorySlug} />
    </div>
  </div>;
