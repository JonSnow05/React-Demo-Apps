const validation =(values) => {

    let errors= {}

    if(!values.namef){
        errors.namef = 'Name is required.'
    } else if(values.namef.length < 3){
        errors.namef = 'Name length must longer than 3 characters'
    }

    if(!values.username){
        errors.username = 'Username is required'
    } else if (values.username.length < 4){
        errors.username = 'Username must longer than 4 characters'
    }

    if(!values.password){
        errors.password='Password is required'
    } else if(values.password.length < 6){
        errors.password = 'Password must longer than 6 characters'
    }

    if(!values.passwordconf){
        errors.passwordconf = 'This field is required'
    } else if(values.password !== values.passwordconf){
        errors.passwordconf = 'Password is not matching'
    }

    if(!values.email){
        errors.email = 'Email is required'
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'Email is invalid'
    }

    if(!values.phoneNo){
        errors.phoneNo = 'Phone number is required'
    } else if(values.phoneNo.length !== 10){
        errors.phoneNo = 'Phone no. must be length of 10 digits'
    }

    if(!values.address){
        errors.address = 'Address is required'
    } else if(values.address.length < 8){
        errors.address = 'Address must longer than 8 characters'
    }

    return errors
}

export default validation