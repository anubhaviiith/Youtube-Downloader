/*
 * jQuery MultiSelect Plugin 0.6
 * Copyright (c) 2010 Eric Hynds
 *
 * http://www.erichynds.com/jquery/jquery-multiselect-plugin-with-themeroller-support/
 * Inspired by Cory S.N. LaViska's implementation, A Beautiful Site (http://abeautifulsite.net/) 2009
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
*/
(function(f){f.fn.multiSelect=function(i){i=f.extend({},f.fn.multiSelect.defaults,i);return this.each(function(){return new w(this,i)})};var x=0,w=function(i,a){var g=$original=f(i),e,l,k,h=[],s=[];l=g.is(":disabled");var t=i.id||"ui-multiselect-"+x++;h.push('<a id="'+t+'" class="ui-multiselect ui-widget ui-state-default ui-corner-all'+(l||a.disabled?" ui-state-disabled":"")+'">');h.push('<input readonly="readonly" type="text" class="ui-state-default" value="'+a.noneSelectedText+'" title="'+i.title+
'" /><span class="ui-icon ui-icon-triangle-1-s"></span></a>');h.push('<div class="ui-multiselect-options'+(a.shadow?" ui-multiselect-shadow":"")+' ui-widget ui-widget-content ui-corner-all">');if(a.showHeader){h.push('<div class="ui-widget-header ui-helper-clearfix ui-corner-all ui-multiselect-header">');h.push('<ul class="ui-helper-reset">');h.push('<li><a class="ui-multiselect-all" href=""><span class="ui-icon ui-icon-check"></span>'+a.checkAllText+"</a></li>");h.push('<li><a class="ui-multiselect-none" href=""><span class="ui-icon ui-icon-closethick"></span>'+
a.unCheckAllText+"</a></li>");h.push('<li class="ui-multiselect-close"><a href="" class="ui-multiselect-close ui-icon ui-icon-circle-close"></a></li>');h.push("</ul>");h.push("</div>")}h.push('<ul class="ui-multiselect-checkboxes ui-helper-reset">');l&&g.removeAttr("disabled");g.find("option").each(function(b){var c=f(this),d=c.html(),m=this.value;b=this.id||"ui-multiselect-"+t+"-option-"+b;var j=c.parent(),n=j.is("optgroup"),o=c.is(":disabled"),u=["ui-corner-all"];if(n){j=j.attr("label");if(f.inArray(j,
s)===-1){h.push('<li class="ui-multiselect-optgroup-label"><a href="#">'+j+"</a></li>");s.push(j)}}if(m.length>0){o&&u.push("ui-state-disabled");h.push('<li class="'+(o?"ui-multiselect-disabled":"")+'">');h.push('<label for="'+b+'" class="'+u.join(" ")+'"><input id="'+b+'" type="'+(a.multiple?"checkbox":"radio")+'" name="'+i.name+'" value="'+m+'" title="'+d+'"');c.is(":selected")&&h.push(' checked="checked"');o&&h.push(' disabled="disabled"');h.push(" />"+d+"</label></li>")}});h.push("</ul></div>");
g=g.after(h.join("")).next("a.ui-multiselect");e=g.next("div.ui-multiselect-options");l=e.find("div.ui-multiselect-header");k=e.find("label").not(".ui-state-disabled");var v=g.find("span.ui-icon").outerWidth(),p=$original.outerWidth(),q=p+v;if(/\d/.test(a.minWidth)&&q<a.minWidth){p=a.minWidth-v;q=a.minWidth}g.width(q).find("input").width(p);a.showHeader&&l.find("a").click(function(b){var c=f(this);if(c.hasClass("ui-multiselect-close"))e.trigger("close");else{c=c.hasClass("ui-multiselect-all");e.trigger("toggleChecked",
[c?true:false]);a[c?"onCheckAll":"onUncheckAll"].call(this)}b.preventDefault()});var r=function(){var b=k.find("input"),c=b.filter(":checked"),d="";d=c.length;d=d===0?a.noneSelectedText:f.isFunction(a.selectedText)?a.selectedText.call(this,d,b.length,c.get()):/\d/.test(a.selectedList)&&a.selectedList>0&&d<=a.selectedList?c.map(function(){return this.title}).get().join(", "):a.selectedText.replace("#",d).replace("#",b.length);g.find("input").val(d);return d};g.bind({click:function(){e.trigger("toggle")},
keypress:function(b){switch(b.keyCode){case 27:case 38:e.trigger("close");break;case 40:case 0:e.trigger("toggle");break}},mouseenter:function(){g.hasClass("ui-state-disabled")||f(this).addClass("ui-state-hover")},mouseleave:function(){f(this).removeClass("ui-state-hover")},focus:function(){g.hasClass("ui-state-disabled")||f(this).addClass("ui-state-focus")},blur:function(){f(this).removeClass("ui-state-focus")}});e.bind({close:function(b,c){c=c||false;if(c===true)f("div.ui-multiselect-options").filter(":visible").fadeOut(a.fadeSpeed).prev("a.ui-multiselect").removeClass("ui-state-active").trigger("mouseout");
else{g.removeClass("ui-state-active").trigger("mouseout");e.fadeOut(a.fadeSpeed)}},open:function(b,c){if(!g.hasClass("ui-state-disabled")){var d=g.position(),m=e.find("ul:last"),j,n;g.addClass("ui-state-active");if(c||typeof c==="undefined")e.trigger("close",[true]);j=a.position==="middle"?d.top+g.height()/2-e.outerHeight()/2:a.position==="top"?d.top-e.outerHeight():d.top+g.outerHeight();n=g.width()-parseInt(e.css("padding-left"),10)-parseInt(e.css("padding-right"),10);k.filter("label:first").trigger("mouseenter").trigger("focus");
e.css({position:"absolute",top:j+"px",left:d.left+"px",width:n+"px"}).show();m.scrollTop(0);a.maxHeight&&m.css("height",a.maxHeight);a.onOpen.call(e[0])}},toggle:function(){e.trigger(f(this).is(":hidden")?"open":"close")},traverse:function(b,c,d){b=f(c);d=d===38||d===37?true:false;b=b.parent()[d?"prevAll":"nextAll"]("li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)")[d?"last":"first"]();if(b.length)b.find("label").trigger("mouseenter");else{b=e.find("ul:last");e.find("label")[d?"last":
"first"]().trigger("mouseover");b.scrollTop(d?b.height():0)}},toggleChecked:function(b,c,d){(d&&d.length?d:k.find("input")).not(":disabled").attr("checked",c?"checked":"");r()}}).find("li.ui-multiselect-optgroup-label a").click(function(b){var c=f(this).parent().nextUntil("li.ui-multiselect-optgroup-label").find("input");e.trigger("toggleChecked",[c.filter(":checked").length===c.length?false:true,c]);a.onOptgroupToggle.call(this,c.get());b.preventDefault()});k.bind({mouseenter:function(){k.removeClass("ui-state-hover");
f(this).addClass("ui-state-hover").find("input").focus()},keyup:function(b){switch(b.keyCode){case 27:e.trigger("close");break;case 38:case 40:case 37:case 39:e.trigger("traverse",[this,b.keyCode]);break;case 13:b.preventDefault();f(this).click();break}}}).find("input").bind("click",function(){a.onCheck.call(this);r()});$original.remove();f.fn.bgiframe&&e.bgiframe();a.state==="open"&&e.trigger("open",[false]);g.find("input")[0].defaultValue=r();return g};f(document).bind("click",function(i){i=f(i.target);
!i.closest("div.ui-multiselect-options").length&&!i.parent().hasClass("ui-multiselect")&&f("div.ui-multiselect-options").trigger("close",[true])});f.fn.multiSelect.defaults={showHeader:true,maxHeight:175,minWidth:215,checkAllText:"Check all",unCheckAllText:"Uncheck all",noneSelectedText:"Select options",selectedText:"# selected",selectedList:0,position:"bottom",shadow:false,fadeSpeed:200,disabled:false,state:"closed",multiple:true,onCheck:function(){},onOpen:function(){},onCheckAll:function(){},onUncheckAll:function(){},
onOptgroupToggle:function(){}}})(jQuery);
