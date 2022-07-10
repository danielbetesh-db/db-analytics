


function KeyGenerator(){
    const KEY_LENGTH = 10;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < KEY_LENGTH; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


function fieldsToObject(fields){
    let result = []
    fields.map(x => result.push('"' + x.name + '":"' +  x.state.value + '"'))
    return JSON.parse("{" + result.join(',') + "}")
}

export { KeyGenerator, fieldsToObject }