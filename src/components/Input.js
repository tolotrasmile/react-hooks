import React, { Fragment } from 'react';
import { useDocumentTitle, useInput } from '../hooks';
import Row from './Row';

export default function Input () {
  const name = useInput('Marry');
  const surname = useInput('Poppins');
  useDocumentTitle(name.value + ' ' + surname.value);
  return (
    <Fragment>
      <Row label="Name">
        <input {...name}/>
      </Row>
      <Row label="Surname">
        <input {...surname}/>
      </Row>
    </Fragment>
  );
}
