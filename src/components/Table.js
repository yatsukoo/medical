import "../styles/table.css"
function Table() {
    return(
        <div className="bacground-table">
           <div className="blocks_table">
                <div className="block_table">
                    <div className="icon-doctor"></div>
                    <h1 className="title">Участковый врач</h1>  
                </div>
                <div className="block_table">
                    <div className="icon_data"></div>
                    <h1 className="title">Мои данные</h1>
                </div>
                <div className="block_table">
                    <div className="icon_genetic"></div>
                    <h1 className="title">Результаты анализов</h1>
                </div>
                <div className="block_table">
                    <div className="icon_post"></div>
                    <h1 className="title">Медицинские статьи</h1>
                </div>
                <div className="block_table">
                    <div className="icon_dataset"></div>
                    <h1 className="title2">Рубрика</h1>
                </div>
                <div className="block_table">
                    <div className="icon_social"></div>
                    <h1 className="title">Социальный пакет</h1>
                </div>
           </div>
        </div>
    );
}
export default Table;