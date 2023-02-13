import React from 'react';

function Input({value, onChange}){
    return <input value={value} onInput={evt=>onChange(evt)}/>
}

export function TrademarkAddition() {
    const [text, setText] = React.useState('');
    const handleChange = event => {
        setText(event.target.value);
    };
    async function addTrademark() {
        await fetch('trademarks/add?trademark=' + text)
            .then(response => {
                if(response.status===500) {
                    alert(`Trademark "${text}" already exists!`);
                }
                else{
                    alert(`Trademark "${text}" added!`);
                }
                return response.json();
            });
    }
    return <>
        <Input text = {text} onChange={handleChange}/>
        <div>
            <button onClick={addTrademark}>Add trademark</button>
        </div>
    </>
}


    
    