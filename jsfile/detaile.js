/*
* @author : Rauhil Fahmi Asa (RFA)
* 
*/
var detaile = {
	//ketika onclick pada filter
	showHideFilter: function () {
		for (i = 0; i < document.getElementsByClassName("filter_list").length; i++) {
			if (document.getElementsByClassName("filter_list")[i].style.display === "none") {
				document.getElementsByClassName("filter_list")[i].style.display = "block";
			} else {
				document.getElementsByClassName("filter_list")[i].style.display = "none";
			}
		}

		if (document.getElementById("arrowchange").src === " ../imgfile/twsn_search_down.png"){
			document.getElementById("arrowchange").src = " ../imgfile/twsn_search_up.png";
		}else{
			document.getElementById("arrowchange").src = " ../imgfile/twsn_search_down.png";
		}
	},

	gotopFunction: function () {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	},

	scrollFunction: function () {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("gotop").style.display = "block";
		} else {
			document.getElementById("gotop").style.display = "none";
		}
	}
}

//fungsi untuk scroll to top
window.onscroll = function () {
	detaile.scrollFunction();
};

// show hide tampiilan ketika onclick 
var info = {
	openInfo: function () {
		info.reset();
		editor.reset();
		$("#header-detailinfo").show();
		$("#bottom-detailinfo").show();
		$("#content-body-detailinfo").show();

	},

	backToDir: function () {
		info.refresh();
		editor.refresh();
		$("#header-detailinfo").hide();
		$("#bottom-detailinfo").hide();
		$("#content-body-detailinfo").hide();


	},

	reset: function () {
		$("#header").hide();
		$("#bottom").hide();
		$("#content-body").hide();
		$("#header-editor").hide();
		$("#bottom-editor").hide();
		$("#content-body-editor").hide();
		$("#header-detailform").hide();
		$("#bottom-detailform").hide();
		$("#content-body-detailform").hide();
	},

	refresh: function () {
		$("#header").show();
		$("#bottom").show();
		$("#content-body").show();
		$("#header-editor").hide();
		$("#bottom-editor").hide();
		$("#content-body-editor").hide();
		$("#header-detailform").hide();
		$("#bottom-detailform").hide();
		$("#content-body-detailform").hide();
	}

}

var setting = {
	openSetting: function () {
		info.reset();
		editor.reset();
		formDetail.reset();
		setting.reset();
		$("#header-setting").show();
		$("#bottom-setting").show();
		$("#content-body-setting").show();

	},

	backToFormMore: function () {
		info.refresh();
		editor.refresh();
		formDetail.refresh();
		setting.refresh();
		$("#header-setting").hide();
		$("#bottom-setting").hide();
		$("#content-body-setting").hide();


	},

	reset: function () {
		$("#header").hide();
		$("#bottom").hide();
		$("#content-body").hide();
		$("#header-editor").hide();
		$("#bottom-editor").hide();
		$("#content-body-editor").hide();
		$("#header-detailinfo").hide();
		$("#bottom-detailinfo").hide();
		$("#content-body-detailinfo").hide();
		$("#header-detailform").hide();
		$("#bottom-detailform").hide();
		$("#content-body-detailform").hide();
	},

	refresh: function () {
		$("#header").show();
		$("#bottom").show();
		$("#content-body").show();
		$("#header-editor").hide();
		$("#bottom-editor").hide();
		$("#content-body-editor").hide();
		$("#header-detailinfo").hide();
		$("#bottom-detailinfo").hide();
		$("#content-body-detailinfo").hide();
		$("#header-detailform").hide();
		$("#bottom-detailform").hide();
		$("#content-body-detailform").hide();
	},

}


var formDetail = {
	openForm: function () {
		info.reset();
		editor.reset();
		formDetail.reset();
		$("#header-detailform").show();
		$("#bottom-detailform").show();
		$("#content-body-detailform").show();

	},

	backToFormList: function () {
		info.refresh();
		editor.refresh();
		formDetail.refresh();
		$("#header-detailform").hide();
		$("#bottom-detailform").hide();
		$("#content-body-detailform").hide();


	},

	reset: function () {
		$("#header").hide();
		$("#bottom").hide();
		$("#content-body").hide();
		$("#header-editor").hide();
		$("#bottom-editor").hide();
		$("#content-body-editor").hide();
		$("#header-detailinfo").hide();
		$("#bottom-detailinfo").hide();
		$("#content-body-detailinfo").hide();
	},

	refresh: function () {
		$("#header").show();
		$("#bottom").show();
		$("#content-body").show();
		$("#header-editor").hide();
		$("#bottom-editor").hide();
		$("#content-body-editor").hide();
		$("#header-detailinfo").hide();
		$("#bottom-detailinfo").hide();
		$("#content-body-detailinfo").hide();
	}



}

var editor = {
	openEditor: function () {
		info.reset();
		editor.reset();
		$("#header-editor").show();
		$("#bottom-editor").show();
		$("#content-body-editor").show();

	},

	backToUC: function () {
		info.refresh();
		editor.refresh();
		$("#header-editor").hide();
		$("#bottom-editor").hide();
		$("#content-body-editor").hide();


	},

	reset: function () {
		$("#header").hide();
		$("#bottom").hide();
		$("#content-body").hide();
		$("#header-detailinfo").hide();
		$("#bottom-detailinfo").hide();
		$("#content-body-detailinfo").hide();
		$("#header-detailform").hide();
		$("#bottom-detailform").hide();
		$("#content-body-detailform").hide();
	},

	refresh: function () {
		$("#header").show();
		$("#bottom").show();
		$("#content-body").show();
		$("#header-detailinfo").hide();
		$("#bottom-detailinfo").hide();
		$("#content-body-detailinfo").hide();
		$("#header-detailform").hide();
		$("#bottom-detailform").hide();
		$("#content-body-detailform").hide();
	}
}

var searchview = {
	searchview: function () {
		$("#header-search").show();
	},

	backToHeadHeader:function(){
		$("#header-search").hide();
	}
}

var menuitem ={
	clickmenuitem:function(){
		var x = document.getElementById("menuclick");
		if (x.className.indexOf("ih-show") == -1) {
			x.className += " ih-show";
		} else {
			x.className = x.className.replace(" ih-show", "");
		}
	}
}

