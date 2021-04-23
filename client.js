let a  = 20;
function libfn(){
    console.log("Inside lib");
}
function libfn1(){
    console.log("Im inside libfn1");
}
module.exports={
    varname:a,
    fn:libfn

}