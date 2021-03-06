import './App.css'
import React from 'react'

import First from './components/basics/First'
import ComParametro from './components/basics/ComParametro'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './components/layout/Card'
import Family from './components/basics/Family'
import FamilyMember from  './components/basics/FamilyMember'
import ListStudents from './components/repetition/ListStudents'
import TableProducts from './components/repetition/TableProducts'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import UserInfo from './components/conditional/UserInfo'
import DirectFather from './components/communication/DirectFather'
import IndirectFather from './components/communication/IndirectFather'
import Input from './components/form/Input'
import Counter from './components/counter/Counter'

// eslint-disable-next-line import/no-anonymous-default-export
export default _ => {

    const number = parseInt(Math.random() * (100 - 1)) + 1

    return (
        <div className="app">
            <h1>Fundamentos React (Arrow)</h1>
            {/* <Card title="Exemplo de Card"/> */}

            <div className="cards">
                <Card title="#13 - Contador" color="#609ba8">
                    <Counter numberInitial={10}></Counter>
                </Card>

                <Card title="#12 - Componente Controlado (Input)" color="#6E8B3D">
                    <Input></Input>
                </Card>

                <Card title="#11 - Comunicação Indireta" color="#ffb2c1">
                    <IndirectFather></IndirectFather>
                </Card>

                <Card title="#10 - Comunicação Direta" color="#e89a80">
                    <DirectFather></DirectFather>
                </Card>

                <Card title="#09 - Renderização Condicional com If Else" color="#F7A440">
                    <UserInfo user={{ name: 'Daniel'}}></UserInfo>
                </Card>

                <Card title="#08 - Renderização Condicional" color="#7B6079">
                    <EvenOrOdd number={ number }></EvenOrOdd>
                </Card>

                <Card title="#07 - Desafio Repetição" color="#7CD1B8">
                    <TableProducts></TableProducts>
                </Card>

                <Card title="#06 - Repetição" color="#557C55">
                    <ListStudents></ListStudents>
                </Card>

                <Card title="#05 - Componente com Filhos" color="#FE7E6D">
                    <Family lastName="Hidalgo">
                        <FamilyMember name="Daniel"/>
                        <FamilyMember name="Chloe"/>
                        <FamilyMember name="Ketlyn"/>
                    </Family>
                </Card>

                <Card title="#04 - Desafio valor aleatório" color="#9B72AA">
                    <Random min={1} max={31}></Random>
                </Card>

                <Card title="#03 - Fragmento" color="#57837B">
                    <Fragment></Fragment>
                </Card>

                <Card title="#02 - Com Parâmetro" color="#DF711B">
                    <ComParametro
                        title="Situação do Aluno"
                        name="Daniel Santos"
                        note={9.4} />
                </Card>

                <Card title="#01 - Primeiro Componente" color="#B85C38">
                    <First></First>
                </Card>
            </div>
        </div>
    )
}
//função mais reduzida