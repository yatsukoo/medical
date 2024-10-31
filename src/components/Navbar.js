import "../styles/nav.css"
function Navbar() {
    return(
        
        <div className="bacground">
            <div className="menu">
                <div className="icon_account"></div>
                <div className="icon_menu"></div>
            </div>
            <div className="blocks">
                <div className="block1">
                <h1 className="title-block2">Отслеживание своих записей</h1>
                <div className="icon-calendar"></div>
                </div>
                <div className="block2">
                 <h1 className="title-block2">Запись на прием к врачу</h1>
                 <div className="icon-search"></div>
                </div>
                <div className="block3">
                 <h1 className="title-block2">Платежи ОСМС</h1>
                 <div className="icon-osms"></div>
                 </div>
            </div>
        </div>
    );
}
export default Navbar;  