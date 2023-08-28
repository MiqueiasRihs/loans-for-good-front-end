import './CustomForm.scss'

import CustomButton from '../CustomButton/CustomButton'

export default function CustomForm({children, ...atributes}) {

    return (
        <div className='form-container'>
            <h1>Análise de crédito</h1>
            {children}
        </div>
    )
}