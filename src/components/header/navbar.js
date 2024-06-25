
export function NavBar({Logo, text}){
    return (
        <div className="nav-bar">
            <div className='logo-frame'>
                <div className="logo-layout">
                    <img className='logo' src={Logo} alt='no icon'></img>
                </div>                
            </div>
            <div className='contact-frame'>
                <label className='contact-text'>{text}</label><label className='red-text'>.</label>
            </div>
        </div>
    )
}