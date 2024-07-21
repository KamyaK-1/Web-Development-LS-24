import './App.css';
import Greet from './components/Greet';
import React from 'react';

// function main()
// {
   

//     return (
//     <div class="App">
//         <Greet></Greet>
//     </div>
//     )

// }
class main extends React.Component {
    render() {
        return (
            <div className="App">
                <Greet></Greet>
            </div>
        )
    }
}
export default main;