import logo from '../Assets/logo.png'
export default function Header(){
    const img_style={
        width:"100%",
        maxWidth:"250px",
    }
    return(
        <header className="d-flex justify-content-center pt-4">
            <img style={img_style} src ={logo} alt="logo"/>
        </header>
    );
}