import './conditionsList.css'
export default function ConditionsList(){

    return (
        <div >
            <div className='condition-element'>
                <input id="checkbox-1" name="checkbox-1" className='card-icon' type="checkbox"></input>
                <label className='label-checkbox'>J’accepte les <a href="http://localhost:3000/" target="_blank" rel="noreferrer" >conditions générales d’utilisation du service</a></label>
            </div>
            <div className='condition-element'>
                <input id="checkbox-2" name="checkbox-2" className='card-icon' type="checkbox"></input>
                <label className='label-checkbox' >J’ai bien pris connaissance des <a href="http://localhost:3000/" target="_blank" rel="noreferrer">dispositions relatives au droit de rétractation</a></label>
            </div>                                
            <div className='condition-element'>
                <input id="checkbox-3" name="checkbox-3" className='card-icon' type="checkbox"></input>    
                <label className='label-checkbox' >Je souhaite recevoir par voie électronique des offres commerciales personnalisées</label>
            </div> 
        </div>
    )
}