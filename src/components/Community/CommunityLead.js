import React from 'react';
import { Grid, Column } from '../Grid';

export default ({ name, position, department }) => (
  <Grid className="community-lead" background="gray-10">
    <Column lg="12" md="8">
      <div className="bx--type-expressive-heading-04">
        <strong className="community-lead__heading">{name}</strong>
        <br />
        <span className="community-lead__heading">
          {position},
          <br />
          {department}
          <br />
          <span className="community-lead__arrow">↓</span>
        </span>
      </div>
    </Column>
  </Grid>
);
