import React from 'react';

export const ServiceCardTop = props =>
  <div className="service-icon-wrapper">
    <div className="icn-frame">
      <i className={`fa fa-fw ${props.form.icon}`} />
    </div>
  </div>;
