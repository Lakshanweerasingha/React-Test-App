function Student(props) {

const age = 26

if (age<15)
    return <h2 className="age">your age is {age}. and your name is {props.name}</h2>
    else {
       return  <h2 className="name"> you are {props.name}</h2>
    }
}
export default Student