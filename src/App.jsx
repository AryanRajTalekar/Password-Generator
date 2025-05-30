import React from 'react'
import { useState,useCallback,useEffect,useRef} from 'react'

const App = () => {

  const [length, setLength] = useState(6);

  const [NumberAllowed, setNumberAllowed] = useState(false);

  const [CharacterAllowed, setCharacterAllowed] = useState(false);

  const [Password, setPassword] = useState('');


// useref hook
 const passwordRef = useRef(null);




  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(NumberAllowed) {
      str += "0123456789";
    }
    if(CharacterAllowed) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?";
    }

    for(let i =0;i<=length;i++){
    let char = Math.floor(Math.random() * str.length+1)

    pass += str.charAt(char);

  }

  setPassword(pass);
  },[length, NumberAllowed, CharacterAllowed,setPassword]);





  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    //now we can also optimise this even further by giving a range
    passwordRef.current?.setSelectionRange(0,100)//password till 20 length will be selected if 0 ,20 is provided
    window.navigator.clipboard.writeText(Password)
    //this is the only code we need for copying our password
    // then why did we use useRef?
    // because we want to focus on the input field after copying
    // we want to show some effect that the password has been copied
    // cvurrently its just wrking properly and evrything gets copied but user will not know that it has been copied\
    // he has to paste it somewhere then he will see that it has been copied
    // so we will use useRef to focus on the input field after copying


 
  },[Password])
  



useEffect(()=>{
  passwordGenerator();
},[
length, NumberAllowed, CharacterAllowed, passwordGenerator
])



  return (
    <div className='bg-gray-900 w-full h-screen flex items-center justify-center bg-gray-900 '>
      <div className='w-full max-w-[40vw] min-h-[6vw] mx-auto shadow-md rounded-lg bg-gray-700 '>
         <h1 className='text-white text-center text-2xl'>Password Generator</h1>
        <div className=' flex rounded-lg shadow overrflow-hidden mb-4 items-center'>
         
          <input type="text" 
          value={Password}
          className='overflow-hidden w-full py-2 px-3 bg-white border-2 rounded-lg mx-4 mt-4 text-gray-600'
          placeholder='Generated Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipBoard}
          className='bg-blue-500 rounded-lg h-[2.5vw] w-[6vw] mt-[1vw] shrink-0 outline-none'>
            copy
          </button>  
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-4 mb-4 mt-2 ml-6'>
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{
              setLength(e.target.value);
          }}
          />
          <label className='text-orange-500 font-semibold'>Length : {length}</label>
          <div>
          <input
           type="checkbox"
          defaultChecked={NumberAllowed}
          onChange={(e)=>{
            setNumberAllowed((prev)=>!prev);
          }}
           className='cursor-pointer'
           />
           <label className='text-orange-500 font-semibold'>Include Numbers</label>
        </div>
        <div>
          <input
           type="checkbox"
          defaultChecked={CharacterAllowed}
          onChange={(e)=>{
            setCharacterAllowed((prev)=>!prev);
          }}
           className='cursor-pointer'
           />
           <label className='text-orange-500 font-semibold'>Include Characters</label>
        </div>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default App