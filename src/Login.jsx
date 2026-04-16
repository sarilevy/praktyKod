export const Login=({setName})=>{
return<>
<input type="name" onBlur={(event)=> setName(event.target.value)} placeholder="input name"></input>
</>
}
