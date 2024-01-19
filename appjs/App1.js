import React from 'react'
import Stylesheet from './components/Stylesheet'
import InlineCss from './InlineCss'
import './components/appStyles.css'
import style from './components/appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import ComponentUnmountA from './components/ComponentUnmountA'
import Colums from './components/Colums'

function App() {
  return (
    // <div>
    // <h1 className='error'>error</h1>
    // <h1 className={style.success}> Success</h1>
    //   <InlineCss/>
    //   <Stylesheet primary={true}/>
    // </div>
    
      // {/* <Form/> */}
      // {/* <LifecycleA/> */}
      // {/* <ComponentUnmountA/> */}

      <React.Fragment>
        <Colums/>
      </React.Fragment>
    
  )
}

export default App











// import { people } from "./Data";
// import { getImageUrl } from "./utils";



// function App() {
//   const chemists=people.filter(person=>person.profession === 'chemist');
//   const everyoneElse=people.filter(person=>person.profession !== 'chemist');


//   return (
//    <article>
//      <h1>Scientists</h1>
//      <h2>Chemists</h2>
//      <ul>
//        {
//          chemists.map(person => 
//           <li key={person.id}>
//             <img src={getImageUrl(person)} alt={person.name}/>
//             <p>
//               <b>{person.name} : </b>
//               {' '+ person.profession +' '}
//               Known for {person.accomplishment}
//             </p>
//           </li>
//          )
//        }
//      </ul>
//      <h2>Everyone Else</h2>
//      <ul>
//        {
//         everyoneElse.map(person => 
//           <li key={person.id}>
//             <img src={getImageUrl(person)} alt={person.name}/>
//             <p>
//               <b>{person.name} : </b>
//               {' '+ person.profession +' '}
//               Known for {person.accomplishment}
//             </p>
//           </li>
//          )
//        }
//      </ul>
//    </article>
//   );
// }

// export default App;
