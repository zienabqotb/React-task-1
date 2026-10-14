import './two-face.css';
import Button from "./Button";
export default function TwoFace() {
   const faces = [{name:"20+ Years Experience",description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",className:"first"},{name:"Who We Are",description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",className:"second"}]
    return (
      <div className="content-two-face" >
       {faces.map((face,i)=>(
       <div className={face.className} key={i} >
         <h2 >{face.name}</h2>
        <p>{face.description}</p>
        <Button/>
       </div>
       ))}
        
      </div>
  )
}
