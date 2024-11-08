export default function UserInput({onChangeInput , userInput}) {
    
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label for="initialInvestment">INITIAL INVESTMENT</label>
                    <input required type="number" id="initialInvestment" value = {userInput.initialInvestment} onChange = {(event) => onChangeInput( 'initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label for="annualInvestment">ANNUAL INVESTMENT</label>
                    <input required type="number"  id="annualInvestment" value = {userInput.annualInvestment} onChange = {(event) => onChangeInput('annualInvestment', event.target.value)}/>
                </p>
                <p>
                    <label for="expectedReturn">EXPECTED RETURN</label>
                    <input required type="number"  id="expectedReturn" value = {userInput.expectedReturn} onChange = {(event) => onChangeInput('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label for="duration">DUARTION</label>
                    <input required type="number"  id="duration" value = {userInput.duration} onChange = {(event) => onChangeInput('duration', event.target.value)}/>  
                </p>
            </div>
        </section>
    )
}