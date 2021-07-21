/*
* @author : Rauhil Fahmi Asa (RFA)
* 
*/

var directories = {
	showDirectories: function (evt, id) {
		// untuk menampilkan content directories ketika tab directories di-cklik
		var tab = document.getElementsByClassName("tab");
		for (i = 0; i < tab.length; i++) {
			tab[i].style.display = "none";
		}
		id.style.display = "block";

		// Untuk header dan buttom
		directories.changeIcon();
		directories.changeIconBottom();
		directories.changeIconMenu();
		directories.changeFilterMenu();
		
	},
    // Melakukan perubahan icon pada tab menu
	changeIcon: function () {
		document.getElementById("header-name").innerHTML = "Directories";
		document.getElementById("uc_icon").src = " ../imgfile/inac_nuc_chat.png";
		document.getElementById("directories_icon").src = " ../imgfile/ac_nuc_talent.png";
		document.getElementById("form_icon").src = " ../imgfile/inac_nuc_survey.png";
		document.getElementById("discover_icon").src = " ../imgfile/inac_nuc_live.png";
		document.getElementById("more_icon").src = " ../imgfile/inac_nuc_feed.png";

		$("#header-search").hide();
	},

	// Melakukan perubahan icon bottom
	changeIconBottom: function () {
		var bottomicon = document.getElementsByClassName("iconBottom");

		for (i = 0; i < bottomicon.length; i++) {
			bottomicon[i].style.display = "none";
		}
		document.getElementById("iconBottomDir").style.display = "block";


	},
	// Memilih menampilkan icon menu (search, setting, dan menu item)
	changeIconMenu: function () {
		var menu = document.getElementsByClassName("menu-icon");
		for (i = 0; i < menu.length; i++) {
			menu[i].style.display = "block";
		}
		document.getElementById("btn-setting").style.display = "none";
		document.getElementById("menu-item").style.display = "none";

	},

	//Menampilkan menu filter setiap tab
	changeFilterMenu: function () {
		document.getElementById("ih-bar-filter").style.display = "block";

		$('#ih-bar-filter').empty();
		var dirFilter =
			'<div  onclick="detaile.showHideFilter()" class="ih-large">Organization Directory<img id="arrowchange" class="icon_sort" src=" ../imgfile/twsn_search_down.png"></div>' +
			'<div class="filter_list"> ' +
			'<i class="fas fa-users ih-text-blue ih-small " ></i>' +
			'<span>  Organization Directory</span>' +
			'<input type="radio" id="filter_active" class="check_filter" checked></input>' +
			'</div>' +
			'<div class="filter_list"> ' +
			'<i class="fas fa-user-friends ih-text-blue ih-small" ></i>' +
			'<span>  Group Directory </span>' +
			'<input type="radio" id="filter_active" class="check_filter" checked></input>' +
			'</div>' +
			'<div class="filter_list"> ' +
			'<i class="fas fa-user-alt ih-text-blue ih-small " ></i>' +
			'<span>  Personal Directory</span>' +
			'<input type="radio" id="filter_active" class="check_filter" checked></input>' +
			'</div>';

		$('#ih-bar-filter').append(dirFilter);
	}

}