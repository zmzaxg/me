!function(b){var c={initialize:function(){this.event(),this.hoverDropdown(),this.navbarSticky(),this.navbarScrollspy()},event:function(){var j=b("nav.navbar.bootsnav");if(j.hasClass("navbar-sticky")&&j.wrap("<div class='wrap-sticky'></div>"),j.hasClass("brand-center")){var k=new Array,p=b("nav.brand-center"),f=p.find("ul.navbar-nav");p.prepend("<span class='storage-name' style='display:none;'></span>"),p.find("ul.navbar-nav > li").each(function(){if(b(this).hasClass("active")){var d=b("a",this).eq(0).text();b(".storage-name").html(d)}k.push(b(this).html())});var q=k.splice(0,Math.round(k.length/2)),g=k,h="",m=function(d){h="";for(var e=0;e<d.length;e++){h+="<li>"+d[e]+"</li>"}};m(q),f.html(h),p.find("ul.nav").first().addClass("navbar-left"),m(g),f.after('<ul class="nav navbar-nav"></ul>').next().html(h),p.find("ul.nav").last().addClass("navbar-right"),p.find("ul.nav.navbar-left").wrap("<div class='col-half left'></div>"),p.find("ul.nav.navbar-right").wrap("<div class='col-half right'></div>"),p.find("ul.navbar-nav > li").each(function(){var d=b("ul.dropdown-menu",this),e=b("ul.megamenu-content",this);d.closest("li").addClass("dropdown"),e.closest("li").addClass("megamenu-fw")});var a=b(".storage-name").html();""==!a&&b("ul.navbar-nav > li:contains('"+a+"')").addClass("active")}j.hasClass("navbar-sidebar")?(b("body").addClass("wrap-nav-sidebar"),j.wrapInner("<div class='scroller'></div>")):b(".bootsnav").addClass("on"),j.find("ul.nav").hasClass("navbar-center")&&j.addClass("menu-center"),j.hasClass("navbar-full")?(b("nav.navbar.bootsnav").find("ul.nav").wrap("<div class='wrap-full-menu'></div>"),b(".wrap-full-menu").wrap("<div class='nav-full'></div>"),b("ul.nav.navbar-nav").prepend("<li class='close-full-menu'><a href='#'><i class='fa fa-times'></i></a></li>")):j.hasClass("navbar-mobile")?j.removeClass("no-full"):j.addClass("no-full"),j.hasClass("navbar-mobile")&&(b(".navbar-collapse").on("shown.bs.collapse",function(){b("body").addClass("side-right")}),b(".navbar-collapse").on("hide.bs.collapse",function(){b("body").removeClass("side-right")}),b(window).on("resize",function(){b("body").removeClass("side-right")})),j.hasClass("no-background")&&b(window).on("scroll",function(){b(window).scrollTop()>34?b(".navbar-fixed").removeClass("no-background"):b(".navbar-fixed").addClass("no-background")}),j.hasClass("navbar-transparent")&&b(window).on("scroll",function(){b(window).scrollTop()>34?b(".navbar-fixed").removeClass("navbar-transparent"):b(".navbar-fixed").addClass("navbar-transparent")}),b(".btn-cart").on("click",function(d){d.stopPropagation()}),b("nav.navbar.bootsnav .attr-nav").each(function(){b("li.search > a",this).on("click",function(d){d.preventDefault(),b(".top-search").slideToggle()})}),b(".input-group-addon.close-search").on("click",function(){b(".top-search").slideUp()}),b("nav.navbar.bootsnav .attr-nav").each(function(){b("li.side-menu > a",this).on("click",function(d){d.preventDefault(),b("nav.navbar.bootsnav > .side").toggleClass("on"),b("body").toggleClass("on-side")})}),b(".side .close-side").on("click",function(d){d.preventDefault(),b("nav.navbar.bootsnav > .side").removeClass("on"),b("body").removeClass("on-side")}),b("body").wrapInner("<div class='wrapper'></div>")},hoverDropdown:function(){var g=b("nav.navbar.bootsnav"),h=b(window).width(),k=b(window).height(),a=g.find("ul.nav").data("in"),m=g.find("ul.nav").data("out");if(h<991){b(".scroller").css("height","auto"),b("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseenter"),b("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseleave"),b("nav.navbar.bootsnav ul.nav").find(".title").off("mouseenter"),b("nav.navbar.bootsnav ul.nav").off("mouseleave"),b(".navbar-collapse").removeClass("animated"),b("nav.navbar.bootsnav ul.nav").each(function(){b(".dropdown-menu",this).addClass("animated"),b(".dropdown-menu",this).removeClass(m),b("a.dropdown-toggle",this).off("click"),b("a.dropdown-toggle",this).on("click",function(e){return e.stopPropagation(),b(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle().toggleClass(a),b(this).closest("li.dropdown").first().toggleClass("on"),!1}),b("li.dropdown",this).each(function(){return b(this).find(".dropdown-menu").stop().fadeOut(),b(this).on("hidden.bs.dropdown",function(){b(this).find(".dropdown-menu").stop().fadeOut()}),!1}),b(".megamenu-fw",this).each(function(){b(".col-menu",this).each(function(){b(".content",this).addClass("animated"),b(".content",this).stop().fadeOut(),b(".title",this).off("click"),b(".title",this).on("click",function(){return b(this).closest(".col-menu").find(".content").stop().fadeToggle().addClass(a),b(this).closest(".col-menu").toggleClass("on"),!1}),b(".content",this).on("click",function(e){e.stopPropagation()})})})});var d=function(){b("li.dropdown",this).removeClass("on"),b(".dropdown-menu",this).stop().fadeOut(),b(".dropdown-menu",this).removeClass(a),b(".col-menu",this).removeClass("on"),b(".col-menu .content",this).stop().fadeOut(),b(".col-menu .content",this).removeClass(a)};b("nav.navbar.bootsnav").on("mouseleave",function(){d()}),b("nav.navbar.bootsnav .attr-nav").each(function(){b(".dropdown-menu",this).removeClass("animated"),b("li.dropdown",this).off("mouseenter"),b("li.dropdown",this).off("mouseleave"),b("a.dropdown-toggle",this).off("click"),b("a.dropdown-toggle",this).on("click",function(e){e.stopPropagation(),b(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle(),b(".navbar-toggle").each(function(){b(".fa",this).removeClass("fa-times"),b(".fa",this).addClass("fa-bars"),b(".navbar-collapse").removeClass("in"),b(".navbar-collapse").removeClass("on")})}),b(this).on("mouseleave",function(){return b(".dropdown-menu",this).stop().fadeOut(),b("li.dropdown",this).removeClass("on"),!1})}),b(".navbar-toggle").each(function(){b(this).off("click"),b(this).on("click",function(){b(".fa",this).toggleClass("fa-bars"),b(".fa",this).toggleClass("fa-times"),d()})})}else{h>991&&(b(".scroller").css("height",k+"px"),g.hasClass("navbar-sidebar")?b("nav.navbar.bootsnav ul.nav").each(function(){b("a.dropdown-toggle",this).off("click"),b("a.dropdown-toggle",this).on("click",function(e){e.stopPropagation()}),b(".dropdown-menu",this).addClass("animated"),b("li.dropdown",this).on("mouseenter",function(){return b(".dropdown-menu",this).eq(0).removeClass(m),b(".dropdown-menu",this).eq(0).stop().fadeIn().addClass(a),b(this).addClass("on"),!1}),b(".col-menu").each(function(){b(".content",this).addClass("animated"),b(".title",this).on("mouseenter",function(){return b(this).closest(".col-menu").find(".content").stop().fadeIn().addClass(a),b(this).closest(".col-menu").addClass("on"),!1})}),b(this).on("mouseleave",function(){return b(".dropdown-menu",this).stop().removeClass(a),b(".dropdown-menu",this).stop().addClass(m).fadeOut(),b(".col-menu",this).find(".content").stop().fadeOut().removeClass(a),b(".col-menu",this).removeClass("on"),b("li.dropdown",this).removeClass("on"),!1})}):b("nav.navbar.bootsnav ul.nav").each(function(){b("a.dropdown-toggle",this).off("click"),b("a.dropdown-toggle",this).on("click",function(e){e.stopPropagation()}),b(".megamenu-fw",this).each(function(){b(".title",this).off("click"),b("a.dropdown-toggle",this).off("click"),b(".content").removeClass("animated")}),b(".dropdown-menu",this).addClass("animated"),b("li.dropdown",this).on("mouseenter",function(){return b(".dropdown-menu",this).eq(0).removeClass(m),b(".dropdown-menu",this).eq(0).stop().fadeIn().addClass(a),b(this).addClass("on"),!1}),b("li.dropdown",this).on("mouseleave",function(){b(".dropdown-menu",this).eq(0).removeClass(a),b(".dropdown-menu",this).eq(0).stop().fadeOut().addClass(m),b(this).removeClass("on")}),b(this).on("mouseleave",function(){return b(".dropdown-menu",this).removeClass(a),b(".dropdown-menu",this).eq(0).stop().fadeOut().addClass(m),b("li.dropdown",this).removeClass("on"),!1})}),b("nav.navbar.bootsnav .attr-nav").each(function(){b("a.dropdown-toggle",this).off("click"),b("a.dropdown-toggle",this).on("click",function(e){e.stopPropagation()}),b(".dropdown-menu",this).addClass("animated"),b("li.dropdown",this).on("mouseenter",function(){return b(".dropdown-menu",this).eq(0).removeClass(m),b(".dropdown-menu",this).eq(0).stop().fadeIn().addClass(a),b(this).addClass("on"),!1}),b("li.dropdown",this).on("mouseleave",function(){b(".dropdown-menu",this).eq(0).removeClass(a),b(".dropdown-menu",this).eq(0).stop().fadeOut().addClass(m),b(this).removeClass("on")}),b(this).on("mouseleave",function(){return b(".dropdown-menu",this).removeClass(a),b(".dropdown-menu",this).eq(0).stop().fadeOut().addClass(m),b("li.dropdown",this).removeClass("on"),!1})}))}if(g.hasClass("navbar-full")){var f=b(window).height(),j=b(window).width();b(".nav-full").css("height",f+"px"),b(".wrap-full-menu").css("height",f+"px"),b(".wrap-full-menu").css("width",j+"px"),b(".navbar-collapse").addClass("animated"),b(".navbar-toggle").each(function(){var e=b(this).data("target");b(this).off("click"),b(this).on("click",function(i){return i.preventDefault(),b(e).removeClass(m),b(e).addClass("in"),b(e).addClass(a),!1}),b("li.close-full-menu").on("click",function(i){return i.preventDefault(),b(e).addClass(m),setTimeout(function(){b(e).removeClass("in"),b(e).removeClass(a)},500),!1})})}},navbarSticky:function(){var a=b("nav.navbar.bootsnav");if(a.hasClass("navbar-sticky")){var d=a.height();b(".wrap-sticky").height(d);var e=b(".wrap-sticky").offset().top;b(window).on("scroll",function(){b(window).scrollTop()>e?a.addClass("sticked"):a.removeClass("sticked")})}},navbarScrollspy:function(){var d=b(".navbar-scrollspy"),f=b("body"),g=b("nav.navbar.bootsnav"),a=g.outerHeight();if(d.length){f.scrollspy({target:".navbar",offset:a}),b(".scroll").on("click",function(q){q.preventDefault(),b(".scroll").removeClass("active"),b(this).addClass("active"),b(".navbar-collapse").removeClass("in"),b(".navbar-toggle").each(function(){b(".fa",this).removeClass("fa-times"),b(".fa",this).addClass("fa-bars")});b(window).scrollTop();var s=b(this).find("a"),k=b(s.attr("href")).offset().top,v=b(window).width(),m=g.data("minus-value-desktop"),p=g.data("minus-value-mobile"),u=g.data("speed");if(v>992){var j=k-m}else{j=k-p}b("html, body").stop().animate({scrollTop:j},u)});var h=function(){var e=f.data("bs.scrollspy");e&&(a=g.outerHeight(),e.options.offset=a,f.data("bs.scrollspy",e),f.scrollspy("refresh"))};b(window).on("resize",function(){clearTimeout(e);var e=setTimeout(h,200)})}}};b(document).ready(function(){c.initialize()}),b(window).on("resize",function(){c.hoverDropdown(),setTimeout(function(){c.navbarSticky()},500),b(".navbar-toggle").each(function(){b(".fa",this).removeClass("fa-times"),b(".fa",this).addClass("fa-bars"),b(this).removeClass("fixed")}),b(".navbar-collapse").removeClass("in"),b(".navbar-collapse").removeClass("on"),b(".navbar-collapse").removeClass("bounceIn")})}(jQuery);