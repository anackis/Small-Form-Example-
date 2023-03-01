
import { useFormik } from "formik";  /// For using useFormic Hoox. But we can use Formik Component


const validate = values => {   /// Own validation. We can use this ot Yup result will be the same but Yup counts more comfortable to use.
    const errors = {};
    if (!values.name) {
        errors.name = 'Required!';
    } else if (values.name.length < 2) {
        errors.name = 'Min length is 2!';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { 
        errors.email = 'Invalid Email!';
    }
    return errors;
}




const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false,
        },
        validate,   /// Own validation. We can use this ot Yup result will be the same but Yup counts more comfortable to use.
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    })

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Send a donation please ;)</h2>
            <label htmlFor="name">your name</label>
            <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}      /// {... formik.getFieldProps('name')}  /// It can replace all 3 props 
                onChange={formik.handleChange}  /// {... formik.getFieldProps('name')}  /// It can replace all 3 props 
                onBlur={formik.handleBlur}      /// {... formik.getFieldProps('name')}  /// It can replace all 3 props 
            />
            {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
            <label htmlFor="email">Your mail</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}
            <label htmlFor="amount">Quantity</label>
            <input
                id="amount"
                name="amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.amount && formik.touched.amount ? <div className="error">{formik.errors.amount}</div> : null}
            <label htmlFor="currency">Currency</label>
            <select
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}>
                    <option value="">Select the currency</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="EUR">EUR</option>
            </select>
            {formik.errors.currency && formik.touched.currency ? <div className="error">{formik.errors.currency}</div> : null}
            <label htmlFor="text">your message</label>
            <textarea 
                id="text"
                name="text"
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.text && formik.touched.text ? <div className="error">{formik.errors.text}</div> : null}
            <label className="checkbox">
                <input 
                    name="terms" 
                    type="checkbox" 
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                Agree with the confidentiality policy?
            </label>
            {formik.errors.terms && formik.touched.terms ? <div className="error">{formik.errors.terms}</div> : null}
            <button type="submit">Отправить</button>
        </form>
    )
}

export default Form;