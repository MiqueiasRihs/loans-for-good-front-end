import './CustomForm.scss'

import CustomButton from '../CustomButton/CustomButton'
import request from '../../api/api'


export default function CustomForm({children, ...atributes}) {

    return (
        <div className='form-container'>
            <h1>Análise de crédito</h1>
            {children}

            <CustomButton>Click here</CustomButton>
        </div>
    )
}