
var a = $('<a>'),
    a_ok = $('<a>'),
    menu_img = $('<img>'),
    logo_prognoz = $('<img>').attr({src: 'https://scontent-arn2-1.cdninstagram.com/t51.2885-19/s150x150/19764916_1860979130832713_3489695674285424640_a.jpg',
                                    width: 25, height: 25 }),
    who_there = $('a[align=center]'),
    display_src = undefined;
a.html(' Что сейчас в "Прогнозе"?');
a_ok.html(' Все понятно!');
a.attr('href', '#');
a_ok.attr('href', '#');
add_a();

function add_a() {
    a_ok.remove();
    logo_prognoz.remove();
    a.insertBefore(who_there.parent());
    logo_prognoz.insertAfter(a);
    a.click(getShowMenu);
}

function add_a_ok() {
    a.remove();
    logo_prognoz.remove();
    a_ok.insertBefore(who_there.parent());
    logo_prognoz.insertAfter(a_ok);
    a_ok.click(menuOk);
}

function menuOk() {
    menu_img.remove();
    add_a();

    return false;
}

function getShowMenu() {
    if(display_src) {
	showMenu();
    } else {
	$.get('https://www.instagram.com/prognozz/?__a=1', showMenu);
    }
}

function showMenu(data) {
    if(!data) {
	drawMenu();
	return;
    }

    var nodes = data.user.media.nodes,
	len = nodes.length,
	i = 0;

    for (i = 0; i < len; i++) {
	if(!nodes[i].caption.match(/Бизнес.ланч/i)) {
	    continue;
	}

        display_src = nodes[i].display_src;
        break;
   }

   drawMenu();
}

function drawMenu() {
   menu_img.attr('src', display_src);
   menu_img.insertAfter(who_there.parent());
   $("html, body").animate({ scrollTop: $(document).height() }, "slow");
   add_a_ok();
}
