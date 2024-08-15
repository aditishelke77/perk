import { createRoot} from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const Chocolate =({name,emoji})=>{
    return(<>
    <h2>{name} - {emoji}</h2>
    <hr/>
    </>)
}

root.render(<>
<h1>All Chocolate</h1>
<Chocolate name ="Dairy Milk" emoji=""/>
<Chocolate name ="Happy" emoji="" />
<Chocolate name ="Sad" emoji="" />
<Chocolate name ="Doll" emoji="" />

</>)