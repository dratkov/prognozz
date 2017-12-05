var a = $('<a>'),
    a_ok = $('<a>'),
    menu_img = $('<img>');
a.html('Что сейчас в "Прогнозе"?');
a_ok.html('Все понятно!');
a.attr('href', '#');
a_ok.attr('href', '#');
add_a();

function add_a() {
    a_ok.remove();
    a.insertAfter($('#href'));
    a.click(getShowMenu);
}

function add_a_ok() {
    a.remove();
    a_ok.insertAfter($('#href'));
    a_ok.click(menuOk);
}

function menuOk() {
    menu_img.remove();
    add_a();

    return false;
}

function getShowMenu() {
    $.get('https://www.instagram.com/prognozz/?__a=1', showMenu);
}

function showMenu(data) {
    var nodes = data.user.media.nodes,
	len = nodes.length,
	i = 0;

    for (i = 0; i < len; i++) {
	if(!nodes[i].caption.match(/Бизнес.ланч/)) {
	    continue;
	}

	add_a_ok();
	menu_img.attr('src', nodes[i].display_src);
	menu_img.insertAfter($('#img'));

	return	
    }
}
