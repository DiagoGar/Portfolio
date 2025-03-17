export const Header = () => {
    return(
        <header>
            <div className="LContainer. w-full h-full bg-gray-900 w-screen">
                <ul className="flex flex-row md:flex-row items-center justify-end h-[5rem] gap-7 mr-[3rem] text-xl">
                    <li>Inicio</li>
                    <li>proyectos</li>
                    <li>tecnologias</li>
                    <li>contacto</li>
                    <li className="w-5 h-5 rounded-full bg-red-900"></li>
                </ul>
            </div>
        </header>
    )
}