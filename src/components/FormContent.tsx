import React from "react";

const FormContent = () => {
    return (
        <form>
            <ul>
                📚书籍名称：
                <input required type="text" placeholder="请输入您将记录的书籍名称" name="bookTitle"/>
            </ul>
            <ul className="ul-textarea">
                📃书籍总结：
                <textarea required placeholder="请在此记录您对于本书的总结" rows={10} cols={30} name="bookSummary"/>
            </ul>
            <input type="submit" value="Submit"/>
        </form>
    );
}
export default FormContent;