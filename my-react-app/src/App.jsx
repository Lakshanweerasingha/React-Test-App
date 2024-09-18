import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './student.jsx'

function App() {
 
  return(
    <>
    <Card/>
    <hr></hr>
    <Footer/>
    <hr></hr>
    <Button/>
    <hr></hr>
    <Student login={false} name = "Lakshan"/>
     </>
  );
}
export default App
