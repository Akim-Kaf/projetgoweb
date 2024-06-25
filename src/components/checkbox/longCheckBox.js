
export default function LongCheckBox({name, text, checked, onChange}){
    
    return (
        <div className='card'>
            <div className='card-text-frame'><label className='card-text'>{text}</label></div>
            <div className='card-icon-frame'>
                <label className="custom-checkbox">
                    <input name={name} checked={checked} className="card-icon"  onChange={onChange} type="checkbox"/>                                    
                    <span className="checkmark"></span>                    
                </label>                                   
                
            </div>                            
        </div>
    )
}