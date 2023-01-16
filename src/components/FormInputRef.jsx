function FormInput({id, label, placeholder, type = "text", setRef}) {
  return (
    <div className='flex items-start'>
        <label htmlFor={id} className="flex items-center w-28 h-12 flex-shrink-0">{label}</label>
        
        {(type === "textarea")? <textarea id={id} className="textarea textarea-bordered w-full max-w-xs" placeholder={placeholder} ref={setRef}></textarea> 
        : <input type={type} id={id} placeholder={placeholder} className="input input-bordered w-full max-w-xs" ref={setRef} />}
        
    </div>
  )
}
export default FormInput