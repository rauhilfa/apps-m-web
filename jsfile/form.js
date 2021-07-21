/*
* @author : Rauhil Fahmi Asa (RFA)
* 
*/

var form = {
	showForm: function (evt, id) {
	// untuk menampilkan content formlist ketika tab formlist di-cklik
		var tab = document.getElementsByClassName("tab");
		for (i = 0; i < tab.length; i++) {
			tab[i].style.display = "none";
		}
		id.style.display = "block";

		// Untuk header dan buttom
		form.changeIcon();
		form.changeIconBottom();
		form.changeIconMenu();
		form.changeFilterMenu();
		

	},
	// untuk menampilkan content uc ketika tab uc di-cklik
	changeIcon: function () {
		document.getElementById("header-name").innerHTML = "Form";
		document.getElementById("uc_icon").src = " ../imgfile/inac_nuc_chat.png";
		document.getElementById("directories_icon").src = " ../imgfile/inac_nuc_talent.png";
		document.getElementById("form_icon").src = " ../imgfile/ac_nuc_survey.png";
		document.getElementById("discover_icon").src = " ../imgfile/inac_nuc_live.png";
		document.getElementById("more_icon").src = " ../imgfile/inac_nuc_feed.png";
	},

	// Melakukan perubahan icon bottom
	changeIconBottom: function () {
		var bottomicon = document.getElementsByClassName("iconBottom");

		for (i = 0; i < bottomicon.length; i++) {
			bottomicon[i].style.display = "none";
		}
		document.getElementById("iconBottomForm").style.display = "block";


	},
	// Memilih menampilkan icon menu (search, setting, dan menu item)
	changeIconMenu: function () {
		var menu = document.getElementsByClassName("menu-icon");
		for (i = 0; i < menu.length; i++) {
			menu[i].style.display = "block";
		}
		document.getElementById("btn-setting").style.display = "none";
		$("#header-search").hide();
	},

	//Menampilkan menu filter setiap tab
	changeFilterMenu: function () {
		document.getElementById("ih-bar-filter").style.display = "block";

		$('#ih-bar-filter').empty();
		$('#ih-bar-filter').empty();
		var dirFilter =
			'<div  onclick="detaile.showHideFilter()" id="arrowChange" class="ih-large">All Forms<img id="arrowchange" class="icon_sort" src=" ../imgfile/twsn_search_down.png"></div>' +
			'<div class="filter_list"> ' +
			'<i class="fas fa-hourglass-start ih-text-blue ih-small " ></i>' +
			'<span>  Active</span>' +
			'<input type="checkbox" id="filter_active" class="check_filter" checked></input>' +
			'</div>' +
			'<div class="filter_list"> ' +
			'<i class="fas fa-hourglass-end ih-text-blue ih-small" ></i>' +
			'<span>  Past </span>' +
			'<input type="checkbox" id="filter_active" class="check_filter" checked></input>' +
			'</div>';

		$('#ih-bar-filter').append(dirFilter);
	}


}