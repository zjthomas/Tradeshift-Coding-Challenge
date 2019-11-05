import React from 'react';
import { Button } from 'react-tradeshift-ui/dist/components';

const Warning = ({closeModal}) => (
  <main data-ts="Main">
    <h1>
      Triangles Need Three Sides
    </h1>
    
    <Button className="ts-primary" onClick={closeModal} >
      <span>Got it</span>
    </Button>
    
  </main>
);

export default Warning;