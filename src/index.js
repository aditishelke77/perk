import { createRoot} from "react-dom/client";

import HelloUser ,{GreetingBye,GreetingHRW} from "./App";

const root = createRoot(document.getElementById("root"));



root.render(<>
<h1>All Greetings</h1>
<HelloUser name="Tejal"/>
<HelloUser name="Mauu"/>

<GreetingBye/>
<GreetingBye/>
<GreetingHRW/>

</>)