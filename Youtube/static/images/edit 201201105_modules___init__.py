<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"><head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta http-equiv="P3P" content="CP=\" idc="" dsp="" cor="" cura="" adma="" our="" ind="" phy="" onl="" com="" sta\""="">
        <title>edit 201201105/modules/__init__.py</title>
        
        <script type="text/javascript"><!--
    // These variables are used by the web2py_ajax_init function in web2py_ajax.js (which is loaded below).
    var w2p_ajax_confirm_message = "Are you sure you want to delete this object?";
    var w2p_ajax_date_format = "%Y-%m-%d";
    var w2p_ajax_datetime_format = "%Y-%m-%d %H:%M:%S";
    //--></script>
<script src="edit%20201201105_modules___init___files/jquery_002.js" type="text/javascript"></script><link href="edit%20201201105_modules___init___files/calendar.css" rel="stylesheet" type="text/css"><script src="edit%20201201105_modules___init___files/calendar.js" type="text/javascript"></script><script src="edit%20201201105_modules___init___files/web2py.js" type="text/javascript"></script><script src="edit%20201201105_modules___init___files/jquery_003.js" type="text/javascript"></script><script src="edit%20201201105_modules___init___files/jquery.js" type="text/javascript"></script><link href="edit%20201201105_modules___init___files/jquery.css" rel="stylesheet" type="text/css"><script src="edit%20201201105_modules___init___files/start.js" type="text/javascript"></script><link href="edit%20201201105_modules___init___files/styles.css" rel="stylesheet" type="text/css">

        <script>jQuery.noConflict();</script>
    <script charset="UTF-8" src="edit%20201201105_modules___init___files/en.js" type="text/javascript"></script><script charset="UTF-8" src="edit%20201201105_modules___init___files/python.js" type="text/javascript"></script></head>
    <body class=" edit">
        <div id="header">
          <h1 id="start">
            <a href="http://127.0.0.1:8000/admin/default/index" class="button"><span>web2py™ administrative interface</span></a>
          </h1>
          
          <ul id="menu">
              
              <li><a class="button" href="http://127.0.0.1:8000/admin/default/site"><span>Site</span></a></li>
              
              <li><a class="button" href="http://127.0.0.1:8000/admin/default/design/201201105"><span>Edit</span></a></li>
              
              <li><a class="button" href="http://127.0.0.1:8000/admin/default/about/201201105"><span>About</span></a></li>
              
              <li><a class="button" href="http://127.0.0.1:8000/admin/default/errors/201201105"><span>Errors</span></a></li>
              
              <li><a class="button" href="http://127.0.0.1:8000/admin/mercurial/commit/201201105"><span>Versioning</span></a></li>
              
              <li><a class="button" href="http://127.0.0.1:8000/admin/default/logout"><span>Logout</span></a></li>
              
              <li><a class="button" href="http://127.0.0.1:8000/examples/default/index"><span>Help</span></a></li>
              
          </ul>
          
        </div>
        <div id="main">
            <div id="main_inner">
                <div style="display: none;" class="flash"></div>
                




<script language="Javascript" type="text/javascript" src="edit%20201201105_modules___init___files/edit_area_full.js"></script><script language="Javascript" type="text/javascript">
editAreaLoader.init({id: "body",start_highlight: true,allow_resize: "both",allow_toggle: true,language: "en",syntax: "python",replace_tab_by_spaces: 4, font_size: 10, fullscreen: false, display: "onload", show_line_colors: true, word_wrap: true, save_callback: "doClickSave"  });
</script>
<script language="Javascript" type="text/javascript" src="edit%20201201105_modules___init___files/ajax_editor.js"></script>
<script language="Javascript" type="text/javascript">
jQuery(document).ready(function(){
     setTimeout("keepalive('/admin/default/keepalive')",10000);
});
</script>




<h2>Editing file "201201105/modules/__init__.py"</h2>



<p class="right controls">
  <a class="button" href="http://127.0.0.1:8000/admin/default/design/201201105"><span>back</span></a>
  
  
  
  <a class="button" href="http://www.web2py.com/examples/static/epydoc/index.html" target="_blank"><span>docs</span></a>
</p>

<div id="editor_area">
  <form action="/admin/default/edit/201201105/modules/__init__.py" method="post" name="editform" id="editform">
    <a value="save" name="save" onclick="return doClickSave();" class="icon saveicon">
      <img alt="Save" src="edit%20201201105_modules___init___files/save_icon.png">
    </a>
    Saved file hash:
    <input name="file_hash" value="68b329da9893e34099c7d8ad5cb9c940" readonly="readonly" type="input">
    Last saved on: <input name="saved_on" value="Wed Dec 14 22:43:54 2011" readonly="readonly" type="input">
    
    <textarea cols="80" rows="25" id="body" style="direction: ltr; display: none;" name="data"></textarea><iframe style="border-width: 0px; overflow: hidden; display: inline; width: 1264px; height: 390px;" id="frame_body" name="frame_body" frameborder="0"></iframe><span id="EditAreaArroundInfos_body"><div id="edit_area_toggle_reg_syntax.js"><input id="edit_area_toggle_checkbox_body" class="toggle_body" onclick='eAL.toggle("body");' accesskey="e" checked="checked" type="checkbox"><label for="edit_area_toggle_checkbox_body">Toggle editor</label></div></span>
    
    <button class="editbutton" onclick="window.location.reload(); return false">restore</button> currently saved or <button class="editbutton" type="submit" name="revert">revert</button>
    to  previous version.
    <br>
  </form>
</div>


<div class="help">
  <h3>Key bindings</h3>
  <ul>
    <li><tt>Ctrl+S</tt> Save via Ajax</li>
  </ul>
</div>



            </div>
        </div>
        <div id="footer" class="fixed">
            Powered by <a href="http://www.web2py.com/">web2py</a>™ created by Massimo Di Pierro ©2007-2011 -
	    
	    <span>
	      Admin language
	      <select name="adminlanguage" onchange="var date = new Date();cookieDate=date.setTime(date.getTime()+(100*24*60*60*1000));document.cookie='adminLanguage='+this.options[this.selectedIndex].value+'; expires='+cookieDate+'; path=/';window.location.reload()">
		
		<option selected="selected">en</option>
		
		<option>pl</option>
		
		<option>he</option>
		
		<option>pl-pl</option>
		
		<option>it-it</option>
		
		<option>af</option>
		
		<option>fr-fr</option>
		
		<option>es-es</option>
		
		<option>zh-cn</option>
		
		<option>zh-tw</option>
		
		<option>bg-bg</option>
		
		<option>de-de</option>
		
		<option>pt-br</option>
		
		<option>it</option>
		
	      </select>
	    </span>
	    
        </div>
    

</body></html>