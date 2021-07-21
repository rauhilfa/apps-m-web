/*
* @author : Rauhil Fahmi Asa (RFA)
* 
*/

var discover = {
	showDiscover: function (evt, id) {
		// untuk menampilkan content discover ketika tab udiscoverc di-cklik
		var tab = document.getElementsByClassName("tab");

		for (i = 0; i < tab.length; i++) {
			tab[i].style.display = "none";
		}
		id.style.display = "block";

		// Untuk header dan buttom
		discover.changeIcon();
		discover.changeIconBottom();
		discover.changeIconMenu();
		discover.changeFilterMenu();

	},
	
    // Melakukan perubahan icon pada tab menu
	changeIcon: function () {
		document.getElementById("header-name").innerHTML = "Discover";
		document.getElementById("uc_icon").src = "./imgfile/inac_nuc_chat.png";
		document.getElementById("directories_icon").src = "./imgfile/inac_nuc_talent.png";
		document.getElementById("form_icon").src = "./imgfile/inac_nuc_survey.png";
		document.getElementById("discover_icon").src = "./imgfile/ac_nuc_live.png";
		document.getElementById("more_icon").src = "./imgfile/inac_nuc_feed.png";
	},

	// Melakukan perubahan icon bottom
	changeIconBottom: function () {
		var bottomicon = document.getElementsByClassName("iconBottom");
		for (i = 0; i < bottomicon.length; i++) {
			bottomicon[i].style.display = "none";
		}
		document.getElementById("iconBottomForm").style.display = "block";
		

		$("#header-search").hide();

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
			'<div onclick="detaile.showHideFilter()" id="arrowChange" class="ih-large">Discover News<img id="arrowchange" class="icon_sort" src="./imgfile/twsn_search_down.png"></div>' +
			'<div class="filter_list"> ' +
			'<i class="far fa-file-alt ih-text-blue ih-small " ></i>' +
			'<span>  Discover News</span>' +
			'<input type="checkbox" id="filter_active" class="check_filter" checked></input>' +
			'</div>' +
			'<div class="filter_list"> ' +
			'<i class="far fa-file-video ih-text-blue ih-small" ></i>' +
			'<span>  Discover Video</span>' +
			'<input type="checkbox" id="filter_active" class="check_filter" checked></input>' +
			'</div>';

		$('#ih-bar-filter').append(dirFilter);

	}


}


// Fungsi untuk mengatur slide show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) {
		 slideIndex = 1 
		}
	if (n < 1) {
		 slideIndex = x.length 
		}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex - 1].style.display = "block";
}
