import './CustomForm.scss'

export default function CustomForm({children, ...atributes}) {

    return (
        <div className='form-container'>
            <h1>ANÁLISE DE CRÉDITO</h1>
            {children}
        </div>
    )
}