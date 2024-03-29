import firebase from "firebase"
registerUser = (email,password,comfirmPassword,first_name,last_name)=>{
    if(password==comfirmPassword){
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then((userCredential)=>{
            Alert.alert("User registered!!");
        })
        .catch(error=>{
            Alert.alert(error.message);
        });
    }else{
        Alert.alert("Passwords don't match!");
    }
};