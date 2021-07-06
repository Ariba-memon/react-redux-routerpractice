
function Button({name,getData}){
    console.log(getData)
    return(
        <button onClick={()=> getData ()}>{name}</button>
    )
}
export default Button;