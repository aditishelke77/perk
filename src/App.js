import "./App.css";

const greetingByeByeStyle = {
    backgroundColor: "red",
    color: "white",
    margin: "10px",
    padding: "10px",
}

function HelloUser({ name }) {
    return (
        <div className="greeting-1">
            Hello,{name}

        </div>
    )
}

function GreetingBye() {
    return (
        <div className="greeting-2" >
            Bye Bye,see you soon...
        </div>
    )
}

function GreetingHRW() {
    return (
        <div style={{
            backgroundColor: "purple",
            color: "white",
            margin: "10px",
            padding: "10px",
            fontSize: "20px",
        }}>
            How are you?
        </div>
    )
}

export default HelloUser;
export { GreetingBye, GreetingHRW };


