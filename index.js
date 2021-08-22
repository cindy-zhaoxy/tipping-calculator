import { registerRootComponent } from "expo"; // import package from expo
import App from './src/App'; // implement to app screen

registerRootComponent(App); // register app screen as the ROOT component, meaning the 
// componenet is the "home base", which means this is where react native configures this 
// as the source of all truth in your project