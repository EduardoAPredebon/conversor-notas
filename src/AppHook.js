import { useState } from "react";

const AppHook = () => {
    const [score, setScore] = useState('')
    const [subSelect, setSelecionarSub] = useState('G1')
    const [subLabel, setSelecionarG2] = useState('G2')
    const [result, setResult] = useState('')
    const [scoreCalcular, setScoreCalcular] = useState('')

    const changeLabel = (event) => {
        if (event === 'G1') {
            setSelecionarSub('G1')
            setSelecionarG2('G2')
        } else {
            setSelecionarSub('G2')
            setSelecionarG2('G1')
        }
        setResult('')
    }

    const calcular = () => {
        if (subSelect === 'G1') {
            setScoreCalcular(21 - (score * 2))
            setResult(`Sua nota na sub ${subLabel} deverá ser ${scoreCalcular}`)
        } else {
            setScoreCalcular((21 - score) / 2)
            setResult(`Sua nota na sub ${subLabel} deverá ser ${scoreCalcular}`)
        }
    }

    return (
        <div>
            <h1> Calculadora de Sub </h1>

            <input type='radio' name='subSelect' value="G1" checked={subSelect === 'G1'} 
            onChange={event => changeLabel(event.target.value)} /> Sub G1
            <input type='radio' name='subSelect' value="G2" checked={subSelect === 'G2'} 
            onChange={event => changeLabel(event.target.value)} /> Sub G2
            <br />
            <br />
            
            Nota {subLabel}:
            <br />
            <input type='number' name='score' onChange={event => setScore(event.target.value)} />
            <br />
            <input type='button' name='calcular' value='Calcular' onClick={calcular} />
            <br />

            {result}
        </div>
    )
}

export default AppHook