var contacts = ['Номер: +7(999)999-99-99', 'Эл.почта: example@gmail.com', 'Адрес: г.Разработчик, ул. Подвальная, д.5'];

generateFooter(contacts, 'RMQ1989', 'grey', 'white');

function generateFooter(contacts, title, bgcolor, fontcolor) {
    let temp = '';
    for(var el of contacts) {
        temp += el + '<br>';
    }
    document.write(
        `<footer style="background-color: ${bgcolor};">
            <div class="leftFoot">
                <p style="color: ${fontcolor};">${temp}</p>
            </div>
            <div class ="rightFoot">
                <h4 style="color: ${fontcolor};">${title} &copy2023 г.</h4>
            </div>
        </footer>`
    );
}