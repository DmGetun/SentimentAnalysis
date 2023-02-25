import './footer.scss'
import logo from '../../static/img/Logo_Polytech_rus_main.jpg'

function Footer () {

    const logoWhiteURL = 'https://mospolytech.ru/local/templates/main/dist/img/logos/mospolytech-logo-white.svg'
    const logoBlackURL = "https://mospolytech.ru/local/templates/main/dist/img/logos/mospolytech-logo-black.svg"

    return (
        <footer className="fixed bottom-0 border-t-4 w-screen content-center grid grid-cols-3 ">
            <div className='p-10'>
              <div className='text-3xl'>&#169; Гетун Дмитрий 224-322</div>
              <div className='text-3xl'> Информационная технология оценивания тональности текстов</div>
            </div>
        </footer>
    )
}

export default Footer