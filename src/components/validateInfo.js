export default function validateInfo(values){
    let errors = {}

    // Email
    if (!values.email.trim()) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.phone.trim()){
        errors.phone = "Phone number required";
    } else if ((/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(values.phone)) || values.phone.length != 10){
        errors.phone = "Phone number is invalid";
    }

    if (!values.report){
        errors.report = "Report required";
    } else if (values.report.length < 10){
        errors.report = "Please add more detail to your report";
    }

    return errors;
}