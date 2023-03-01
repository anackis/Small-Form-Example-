
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// const validate = values => {   /// Own validation. We can use this ot Yup result will be the same but Yup counts more comfortable to use.
//     const errors = {};
//     if (!values.name) {
//         errors.name = 'Required!';
//     } else if (values.name.length < 2) {
//         errors.name = 'Min length is 2!';
//     }
//     if (!values.email) {
//         errors.email = 'Required';
//     } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { 
//         errors.email = 'Invalid Email!';
//     }
//     return errors;
// }


const CustomForm = () => {

    return (
        <Formik
            initialValues= {{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false,
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                        .min(2, 'Minimum 2 symbols !')
                        .required('Required area !'),
                email: Yup.string()
                        .email('Invalid Email !')
                        .required('Required area !'),
                amount: Yup.number()
                        .min(2, 'Minimum 2 symbols !')
                        .required('Required !'),
                currency: Yup.string().required('Choose Currency !'),
                text: Yup.string()
                        .min(10, 'Minimum 10 symbols !'),
                terms: Yup.boolean()
                        .required('Required to agree with terms !')
                        .oneOf([true], 'Required to agree with terms !'),
            })}
            onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <h2>Send a donation please ;)</h2>
                <label htmlFor="name">your name</label>
                <Field
                    id="name"
                    name="name"
                    type="text"

                    /// Yhis All already setted in Field Component 
                    // value={formik.values.name}      /// {... formik.getFieldProps('name')}  /// It can replace all 3 props   
                    // onChange={formik.handleChange}  /// {... formik.getFieldProps('name')}  /// It can replace all 3 props 
                    // onBlur={formik.handleBlur}      /// {... formik.getFieldProps('name')}  /// It can replace all 3 props 
                />

                {/* {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null} /// Same functional as in <ErrorMessage/> Component  */}
                <ErrorMessage className='error' name="name" component="div"/>
                {/* <ErrorMessage className='error' name="name">{msg => <div>{msg}</div>}</ErrorMessage>  /// If we dont want to use component="div"  */}

                <label htmlFor="email">Your mail</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage className='error' name="email" component="div"/>
                <label htmlFor="amount">Quantity</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                />
                <ErrorMessage className='error' name="amount" component="div"/>
                <label htmlFor="currency">Currency</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select"        /// Important not to forgot this!
                    >
                        <option value="">Select the currency</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="EUR">EUR</option>
                </Field>
                <ErrorMessage className='error' name="currency" component="div"/>
                <label htmlFor="text">your message</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className='error' name="text" component="div"/>
                <label className="checkbox">
                    <Field 
                        name="terms" 
                        type="checkbox" 
                    />
                    Agree with the confidentiality policy?
                </label>
                <ErrorMessage className='error' name="terms" component="div"/>
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;