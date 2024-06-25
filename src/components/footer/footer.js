export function Footer ({logo}){
    return(
        <div className='bottom-frame'>
            <div className='bottom-logo-frame'>
                <div className="logo-layout">
                        <img className='logo' src={logo} alt='no icon'></img>
                </div>
            </div>                               
        </div>
    )
}