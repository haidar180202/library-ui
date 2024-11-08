import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import Button from '../components/Button';

function FormValidationDocumentation() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    username: yup.string().required('This field is required'),
    password: yup.string().required(),
    default_valid: yup.string().required(),
    default_invalid: yup.string().required('This field is required'),
    tooltip: yup.string().required('This field is required'),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        default_valid: 'Test',
        default_invalid: '',
        tooltip: '',
        username: 'Cisea123',
        password: '',
        terms: false
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <div className='container mt-4'>
            <h1>Form Validation Documentation</h1>

            <div className='mb-12'>
                <h4>Form Validation Default</h4>
                {/* <pre><code>
{`<Form.Group>
    <Form.Label>Default Valid</Form.Label>
    <InputGroup hasValidation>
        <Form.Control type="text" placeholder="Username" name="default_valid" value={values.default_valid} onChange={handleChange} isValid={touched.default_valid && !errors.default_valid} />
        <Form.Control.Feedback type='valid'>
        This field is Valid
        </Form.Control.Feedback>
    </InputGroup>
  </Form.Group>
  <Form.Group>
    <Form.Label>Default Invalid</Form.Label>
    <InputGroup hasValidation>
        <Form.Control type="text" placeholder="Username" name="default_invalid" value={values.default_invalid} onChange={handleChange} isInvalid={!!errors.default_invalid} />
        <Form.Control.Feedback type='invalid'>
        {errors.default_invalid}
        </Form.Control.Feedback>
    </InputGroup>
  </Form.Group>
  <Form.Group>
    <Form.Label>Tooltip Validation</Form.Label>
    <InputGroup hasValidation>
        <Form.Control type="text" placeholder="Username" name="tooltip" value={values.tooltip} onChange={handleChange} isInvalid={!!errors.tooltip} />
        <Form.Control.Feedback type='invalid' tooltip>
        {errors.tooltip}
        </Form.Control.Feedback>
    </InputGroup>
  </Form.Group>`}
                </code></pre> */}
                <Form.Group>
                    <Form.Label>Default Valid</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control type="text" placeholder="Username" name="default_valid" value={values.default_valid} onChange={handleChange} isValid={touched.default_valid && !errors.default_valid} />
                        <Form.Control.Feedback type='valid'>
                        This field is Valid
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Default Invalid</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control type="text" placeholder="Username" name="default_invalid" value={values.default_invalid} onChange={handleChange} isInvalid={!!errors.default_invalid} />
                        <Form.Control.Feedback type='invalid'>
                        {errors.default_invalid}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tooltip Validation</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control type="text" placeholder="Username" name="tooltip" value={values.tooltip} onChange={handleChange} isInvalid={!!errors.tooltip} />
                        <Form.Control.Feedback type='invalid' tooltip>
                        {errors.tooltip}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </div>
            

            <Form noValidate onSubmit={handleSubmit}>
            <div className="mb-4">
                <h4>Custom Form Validation</h4>
                <pre><code>
{`<Form.Group>
  <Form.Label>Username</Form.Label>
  <InputGroup hasValidation>
    <InputGroup.Text>@</InputGroup.Text>
    <Form.Control
    type="text"
    placeholder="Username"
    name="username"
    value={values.username}
    onChange={handleChange}
    isValid={touched.username && !errors.username}
    isInvalid={!!errors.username}
    />
    <Form.Control.Feedback type='valid'>
    Wow Good!
    </Form.Control.Feedback>
    <Form.Control.Feedback type='invalid'>{errors.username}</Form.Control.Feedback>
  </InputGroup>
  </Form.Group>`}
                </code></pre>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                      <InputGroup.Text>@</InputGroup.Text>
                      <Form.Control
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isValid={touched.username && !errors.username}
                      isInvalid={!!errors.username}
                      />
                      <Form.Control.Feedback type='valid'>
                      Wow Good!
                      </Form.Control.Feedback>
                      <Form.Control.Feedback type='invalid'>{errors.username}</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
            </div>
            <div className='mb-4'>
                <Form.Group>
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text>PW</InputGroup.Text>
                    <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                    {errors.password}
                    </Form.Control.Feedback>
                </InputGroup>
                </Form.Group>
            </div>
            <Form.Group className="mb-4">
                <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                />
            </Form.Group>
            <Button type='submit'>Submit</Button>
            </Form>
        </div>
      )}
    </Formik>
  );
}

export default FormValidationDocumentation;