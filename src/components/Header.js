import yellow_brand from '../Assets/yellow_brand.png'
export default function Header(){
    return(
        <header className='d-flex justify-content-center py-3'>
            <img  src ={yellow_brand} alt="logo"/>
        </header>
    );
}