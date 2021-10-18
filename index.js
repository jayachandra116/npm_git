function isNullOrEmpty(input){
    //return true if the input is either undefined,null,ore empty, false otherwise
    return (input===undefined || input===null || input==='');
}
//Export to make the function available to other packages
module.exports=isNullOrEmpty;