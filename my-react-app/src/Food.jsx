function Food() {

    const food1 = "orange"; 
    const food2 = "banana";

    return(
        
        <ul>
        <li>{food1.toLocaleUpperCase()}</li>
        <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food