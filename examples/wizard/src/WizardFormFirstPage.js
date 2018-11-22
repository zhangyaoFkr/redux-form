import React from 'react'
import { Field, reduxForm } from 'caicloud-redux-form'
import validate from './validate'
import renderField from './renderField'

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
    </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: false, // <------ unregister fields on unmount
  shouldValidIgnoreRegisterCount: true,
  validate
})(WizardFormFirstPage)
