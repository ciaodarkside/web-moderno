import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


ReactDOM.render(
    <div>
       <Pai nome ="Paulo" sobrenome ="Silva">
                {/* Como passo os Componentes Filhos aqui ? */}
                <Filho nome = "Pedro"/>
                <Filho nome = "Paulo" sobrenome ="Silva"/>
                <Filho nome = "Carla" />
       </Pai>
    </div>
, document.getElementById('root'))