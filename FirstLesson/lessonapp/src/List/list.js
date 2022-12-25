
function list(){

        const list= ['Jose , Karla, Mario'];

return (

    <ul>{
    list.map(lists => (

        <li key={lists}>-{lists}</li>
    


        ))}</ul>

);

}

export {list}