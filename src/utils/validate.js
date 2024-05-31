export const checkValidData = (email,password) =>{
    
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid && !isPasswordValid) return "Email and Password are not valid"
    if(!isEmailValid) return "Email Id is not Valid"
    if(!isPasswordValid) return "Password is not valid"

    return null
}