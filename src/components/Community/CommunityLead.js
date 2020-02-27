import React from 'react';
import { Grid, Column } from '../Grid';

export default ({ name, position, department }) => (
  <Grid className="community-lead" background="gray-10">
    <Column lg="12" md="8" sm="3">
      <p className="community-lead__heading page-p--xl bx--type-expressive-paragraph-01">
        <strong className="">{name}</strong>
        <br />
        <span className="community-lead__heading">
          {position},
          <br />
          {department}
          <br />
          <span className="community-lead__arrow">↓</span>
        </span>
      </p>
    </Column>
  </Grid>
);
