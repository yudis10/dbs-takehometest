import { useDispatch, useSelector } from 'react-redux'
import { userAdded } from "../features/users/usersSlice";
import FormInputRef from '../components/FormInputRef'
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Form() {

    const users = useSelector((state) => state.users);
    
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const nameRef = useRef();
    const addrRef = useRef();
    const ektpRef = useRef();
    const jobRef = useRef();
    const birthdateRef = useRef();
    const phoneRef = useRef([]);
    const familyNameRef = useRef([]);
    const familyBirthdateRef = useRef([]);
    const familyRelationRef = useRef([]);


    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let name = nameRef.current.value;
        let addr = addrRef.current.value;
        let ektp = ektpRef.current.value;
        let job = jobRef.current.value;
        let birthdate = birthdateRef.current.value;
        let phone = [];
        let family = [];

        phoneRef.current.forEach(ref => {            
            if(ref.value == null || ref.value.trim().length === 0) return
            phone.push(ref.value.toString());
          });    
        
        familyNameRef.current.forEach((ref, index) => {    
            if(ref.value == null || ref.value.trim().length === 0) return
            if(familyBirthdateRef.current[index].value == null || familyBirthdateRef.current[index].value.trim().length === 0) return            
            if(familyRelationRef.current[index].value == "DEFAULT") return
            
            family.push(
                {
                    name: ref.value.toString(),
                    birthdate: familyBirthdateRef.current[index].value,
                    relation: familyRelationRef.current[index].value
                }
            );
          });    

        if (name && ektp && addr && job && birthdate) {
          dispatch(
            userAdded({              
              name,
              addr,
              ektp,
              job,
              birthdate,
              phone,
              family
            })
          );
    
          setError(null);
          navigate('/');          
        } else {
          setError(true);
        }       
      };

      const [addphone, setAddphone] = useState(1);
      const handleAddPhone = (e) => {
        e.preventDefault();
        if(addphone < 3) {
            setAddphone(addphone + 1)
        }
      }
          

      
      const [addfamily, setFamily] = useState(1);
      const handleAddFamily = (e) => {
        e.preventDefault();
        if(addfamily < 5) {
            setFamily(addfamily + 1)
        }
      }
      

  return (
    <>    
    {error && (
        <div className="alert alert-error shadow-lg mt-8">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Error! Fill in all fields</span>
            </div>
        </div>
    )}
    {/* FORM START */}
    <form onSubmit={handleSubmit} className='mt-16'>
        <h2 className='text-xl font-bold mb-4'>Create New User</h2>
        <div className='grid grid-cols-2 gap-8 items-start'>
            <div className='grid gap-3'>
                <FormInputRef id="name" label="Name" placeholder="Name" setRef={nameRef} />
                <FormInputRef id="addr" label="Address" placeholder="Address" type='textarea' setRef={addrRef} />        
                <FormInputRef id="ektp" label="eKTP" placeholder="eKTP" setRef={ektpRef} type='number' />
                <FormInputRef id="job" label="Job" placeholder="Job" setRef={jobRef} />                     
                <FormInputRef id="birthdate" label="Date of Birth" placeholder="Date of Birth" type='date' setRef={birthdateRef} />                
            </div>
            <div className="flex flex-col gap-3">
            {
            Array.from({ length: addphone }, (_, i) => {
                return (
                    <div key={i} className='flex items-start'>                        
                        <label htmlFor={`phone-${i}`} className="flex items-center w-28 h-12 flex-shrink-0">Phone</label>                        
                        <input type="number" id={`phone-${i}`} className="input input-bordered w-full max-w-xs" ref={elem => {phoneRef.current[i] = elem; }} />                        
                    </div>
                );
            })
            } 
            {addphone < 3 && (
                <button className='btn max-w-fit px-8 bg-[#ff3333] border-0' onClick={handleAddPhone}>Add Phone</button>
            )}    
              
            </div>
        </div>
        
        <div className='mt-12'>
            <h2 className='text-xl font-bold mb-4'>Family Member ({addfamily})</h2>
            <table className="table table-zebra w-full">
            
            <thead>
            <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Relationship Status</th>                
            </tr>
            </thead>
            <tbody>             
            {
            Array.from({ length: addfamily }, (_, i) => {
                return (
                    <tr key={i}>
                        <td>                            
                            <input type="text" className={`input input-bordered w-full max-w-xs`} ref={elem => {familyNameRef.current[i] = elem; }} />
                        </td>
                        <td><input type="date" className={`input input-bordered w-full max-w-xs`} ref={elem => {familyBirthdateRef.current[i] = elem; }} /></td>
                        <td>
                        <select className="select select-bordered w-full max-w-xs" defaultValue={'DEFAULT'} ref={elem => {familyRelationRef.current[i] = elem; }}>
                            <option disabled value="DEFAULT">Relationship Status</option>
                            <option value="brother">Brother</option>
                            <option value="sister">Sister</option>
                            <option value="parent">Parent</option>
                            <option value="child">Child</option>                    
                        </select>
                        </td>           
                    </tr>                    
                );
            })
            }             
            
            </tbody>
            </table>
            {addfamily < 5 && (                
                    <button className='btn bg-[#ff3333] border-0' onClick={handleAddFamily}>Add Family Member</button>                
            )}        
            
        </div>
        <div className='flex items-center mt-16 gap-8'>
            <button type='reset' className='btn bg-[#f3f3f3] text-[#2e2e2e] border-0 min-w-[150px] hover:text-white'>Cancel</button>
            <button type='submit' className='btn min-w-[200px] bg-[#ff3333] border-0'>Submit</button>
        </div>
    </form>
    </>
  )
}
export default Form