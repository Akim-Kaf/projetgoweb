import ("./LongCheckBox.css")
export default function LongCheckBox({name, text, checked, onChange}){
    
    return (
        <div className='card'>
            <label className='card-text'>{text}</label>            
                <label className="custom-checkbox">
                    <input name={name} checked={checked} className="card-icon"  onChange={onChange} type="checkbox"/>                                    
                    <span className="checkmark"></span>                    
                </label>                                                               
        </div>
    )
}