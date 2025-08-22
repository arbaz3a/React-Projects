import { useEffect,useState, useCallback, useRef} from 'react'

function App() {

  const [number, setNumber] = useState(false)
  const [length, setLength] = useState(12)
  const [pass, setPass] = useState('')
  const [special, setSpecial] = useState(false);

  // let passgen = ()=>{ // testing to generate password by using button
  //   generator();
  //   }

  let pass_ref = useRef(null);
  
  const CopyPassword = useCallback(()=>{
    pass_ref.current?.select();
    // pass_ref.current?.setSelectionRange(3, 7); // get pass on your need
    // pass_ref.current?.setSelectionRange(length);  //get pass by using actual length
    window.navigator.clipboard.writeText(pass);
  }, [pass])

  // pass generator function shittt
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialchar = "!@#$%^&*()_+[]{}|;:,.<>?";
  
  let generator = useCallback(()=>{
    let password = '';
    
    let allchars = upper+lower;
    if(number) allchars +=numbers
    if(special) allchars += specialchar
    
    for(let i = 0; i<length; i++){
      password += allchars[Math.floor(Math.random()*allchars.length)];
    }
    
    setPass(password);
    
  }, [number, length, special, setPass])


  useEffect(()=>{
    generator();
  }, [number, special, length, generator])


  return (
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-black">
        <h1 className='text-white text-center my-3'>Random Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input ref={pass_ref} type="text" value={pass} className="outline-none w-full py-1 px-3 bg-white" placeholder="Password" readOnly />
          <button onClick={CopyPassword} className='hover:bg-rose-300 cursor-pointer outline-none bg-rose-400 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex text-center gap-x-1'>
            <input className='cursor-pointer' type="range" min={12} max={26} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
            <label className='text-white'>Length ({length})</label>
          </div>
          <div className='flex text-center gap-x-1'>
            <input type="checkbox" defaultChecked = {number} onChange={()=>{setNumber(prev => !prev)}}/>
            <label className='text-white'>Numbers</label>
          </div>
          <div className='flex text-center gap-x-1'>
            <input type="checkbox" defaultChecked = {special} onChange={()=>{setSpecial(prev => !prev)}}/>
            <label className='text-white'>SpecialChars</label>
          </div>
        </div>
        
        {/* button testing to generate password by clicking */}
        {/* <div className='items-center flex my-3 justify-center'>
          <button className="bg-rose-300 hover:bg-rose-400 text-white text-sm font-medium px-2 py-1 rounded-md shadow-sm" 
            onClick={passgen}>Get Password</button>
        </div> */}

      </div>
  )
}

export default App
