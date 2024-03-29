toggleSwitch(){
    const previous_state = this.state.isEnabled;
    const theme = !this.state.isEnabled?'dark':'light';

    const auth = getAuth();
    const user = auth.currentUser;

    if (user){
        var updates={}
        updates['users/'+user.uid+'/current_theme']=theme

        const dsref = ref(db,'/')
        update(dbRef,updates)

        this.setState({isEnabled:!previous_state,light_theme:previous_state})
    }
}