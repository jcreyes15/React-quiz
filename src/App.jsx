import Avatar from "./atoms/avatar";
import Header from "./atoms/header"; 
import Footer from "./atoms/footer";
import Badge from "./atoms/badge";
import Card from "./atoms/card";
import './App.css';
import cohete from './cohete.png'

function App() {
    return (
        <div className="App">   
            <Header title="React Beginner's Quiz" />
            <div className="card-container">
                <Card title="Card 1" content="This is the first card." />
                <Card title="Card 2" content="This is the second card." />
                <Card title="Card 3" content="This is the third card." />
            <Avatar imageSrc={cohete} description="My own avatar" />
            <Badge label="New!" />
            </div>
            <Footer content="Created with ❤️ by [Juan Carlos]" />
            </div>
    );
}

export default App;









