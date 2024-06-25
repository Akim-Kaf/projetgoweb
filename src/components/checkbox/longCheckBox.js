
export default function LongCheckBox({name, text, checked, onChange}){
    
    return (
        <div className='card'>
            <div className='card-text-frame'><label className='card-text'>{text}</label></div>
            <div className='card-icon-frame'>                                   
                <input name={name} checked={checked}  onChange={onChange} className='card-icon' type="checkbox"></input>
            </div>                            
        </div>
    )
}