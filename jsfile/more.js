/*
* @author : Rauhil Fahmi Asa (RFA)
* 
*/

var more = {
	showMore: function (evt, id) {
		// untuk menampilkan content more ketika tab more di-cklik
		var tab = document.getElementsByClassName("tab");
		for (i = 0; i < tab.length; i++) {
			tab[i].style.display = "none";
		}
		id.style.display = "block";

		// Untuk header dan buttom
		more.changeIcon();
		more.changeIconBottom();
		more.changeIconMenu();
		more.changeFilterMenu();
	},

	changeIcon: function () {
		document.getElementById("header-name").innerHTML = "More";
		document.getElementById("uc_icon").src = "./imgfile/inac_nuc_chat.png";
		document.getElementById("directories_icon").src = "./imgfile/inac_nuc_talent.png";
		document.getElementById("form_icon").src = "./imgfile/inac_nuc_survey.png";
		document.getElementById("discover_icon").src = "./imgfile/inac_nuc_live.png";
		document.getElementById("more_icon").src = "./imgfile/ac_nuc_feed.png";

		$("#header-search").hide();
	},

	// Melakukan perubahan icon bottom
	changeIconBottom: function () {
		var bottomicon = document.getElementsByClassName("iconBottom");

		for (i = 0; i < bottomicon.length; i++) {
			bottomicon[i].style.display = "none";
		}

	},
	// Memilih menampilkan icon menu (search, setting, dan menu item)
	changeIconMenu: function () {
		var menu = document.getElementsByClassName("menu-icon");
		for (i = 0; i < menu.length; i++) {
			menu[i].style.display = "none";
		}
		document.getElementById("btn-setting").style.display = "block";
		document.getElementById("menu-item").style.display = "none";

	},
	changeFilterMenu: function () {
		document.getElementById("ih-bar-filter").style.display = "none";
	}

}