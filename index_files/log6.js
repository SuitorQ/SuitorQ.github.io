
function wtslog6(alias,dbn,obj,event_name,event_conversion,event_invisibility){

   if (typeof window.wtsh == 'undefined'){
      var wtsh = {};
   }
   else {
       var wtsh = window.wtsh;
   }

   if (event_name){
      if (event_name.length > 255){
         event_name = event_name.substring(0,255);
      }
      event_name = event_name.replace(/^\s+|\s+$/g, '');
      var page_name = 'wts_evt_'+event_name;
      var page_group = 'wts_evt_'+event_name;
      var invisible = event_invisibility;
      var text_counter = 'event';
      var conv_n = event_conversion || '';
   }
   else {

      if (wtsh['invisible']=='#'){wtsh['invisible']='';}
      if (wtsh['page_name']=='#'){wtsh['page_name']='';}
      if (wtsh['page_group']=='#'){wtsh['page_group']='';}
      if (wtsh['conversion_number']=='#'){wtsh['conversion_number']='';}
      if (wtsh['text_counter']=='#'){wtsh['text_counter']='';}

      if (wtsh['page_name']=='#'){wtsh['page_name']='';}
      var page_name = wtsh['page_name'] ? wtsh['page_name'] : '';
      if (page_name){
         if (page_name.length > 255){
             page_name = page_name.substring(0,255);
         }
         page_name = page_name.replace(/^\s+|\s+$/g, '');
      }

      var page_group = wtsh['page_group'] ? wtsh['page_group'] : '';
      if (page_group){
         if (page_group.length > 255){
             page_group = page_group.substring(0,255);
         }
         page_group = page_group.replace(/^\s+|\s+$/g, '');
      }

      var conv_n = wtsh['conversion_number'] ? wtsh['conversion_number'] : '';

      var invisible = wtsh['invisible'] ? window.wtsh['invisible'] : '';

      var text_counter = wtsh['text_counter'] ? wtsh['text_counter'] : '';
      if (text_counter){
         text_counter = text_counter.replace(/^\s+|\s+$/g, '');
         if (text_counter != 'yes' && text_counter != 'no'){
            text_counter = 'no';
         }
      }
   }


   if (conv_n){
      if (conv_n.match(/\D/)){
         conv_n = 1;
      }
      else if (conv_n > 5){
         conv_n = 1;
      }
   }

   if (invisible){
      invisible = invisible.toLowerCase();
      invisible = invisible.replace(/^\s+|\s+$/g, '');
      if (invisible != 'yes' && invisible != 'no'){
         invisible = 'yes';
      }
   }


//   try{var wtsb=top.document;var wtsr=wtsb.referrer;var wtsu=document.URL;}
//   catch(e){var wtsb=document;var wtsr=wtsb.referrer;var wtsu=wtsb.URL;}

   var wtsu = '';
   var wtsr = '';

   if (event_name){
      wtsu = page_name;
   }
   else {
      try{
         var wtsb=top.document;
         wtsr=wtsb.referrer;
         wtsu=document.URL;
      }
      catch(e){
         var wtsb=document;
         wtsr=wtsb.referrer;
         wtsu=wtsb.URL;
      }

      if (wtsr){
         if (wtsr.length > 510){
             wtsr = wtsr.substring(0,510);
         }
      }
      if (wtsu){
         if (wtsu.length > 255){
             wtsu = wtsu.substring(0,255);
         }
      }
   }

   if (wtsh['url']){
      wtsu = wtsh['url'];
   }
   if (wtsh['custom'] == 'wix'){
      if (! wtsh['referer'] || wtsh['referer'] == 'wix_none'){
         wtsr = '';
      }
      else if (wtsh['referer']){
         wtsr = wtsh['referer'];
      }
   }

   var test = 1;
   if (event_name){
      test = 0;
   }

   //////////////////////////// BUILD QUERY

   // wtsu and wtsr ar JS-generated and thus already URI-encoded

   wtsu = wtsu.replace(/::/g, '_2cln_');
   wtsr = wtsr.replace(/::/g, '_2cln_');

   if (event_name){
      page_name = 'event_'+page_name;
   }

   var prefix = 'https:' == document.location.protocol ? 'https://server2.web-stat.com' : 'http://server4.web-stat.com';

   var qry= alias+'::'+dbn+'::'+wtsr+'::'+invisible+'::'+text_counter+'::'+screen.width+'x'+screen.height+'::'+screen.colorDepth+'::'+wtsu+'::'+conv_n+'::'+encodeURIComponent(page_name)+'::'+encodeURIComponent(page_group)+'::'+encodeURIComponent(document.title)+'::'+Math.random()+'::'+wtsh['custom']+'::'+test;

   qry = qry.replace(/#/g, '%23');

   if (event_name){
      var img = new Image();
 
      if (obj){
         img.src = eval("prefix+'/count6.pl?'+qry");
         document.body.appendChild(img);
          setTimeout(function(){redirect(obj)},2000);
 //        img.onload = redirect(obj); 
          return false;
      }
      else {
        // img.onload = function() { return true; }
         img.src = eval("prefix+'/count6.pl?'+qry");
//document.body.appendChild(img);
//pausecomp(2000);
      }
   }
   else {

      var wts2 = document.createElement("script"); 
      wts2.setAttribute('type','text/javascript');
      wts2.setAttribute('src', prefix+'/count6.pl?'+qry);
      try{
         document.getElementById('wts299779').appendChild(wts2);
      }
      catch(e){
         document.getElementById('wts').appendChild(wts2);
      }

      newSpan = document.createElement("span");
      newSpan.setAttribute('id', 'wtscount');
      try{
         try{
            document.getElementById('wts299779').appendChild(newSpan);
         }
         catch(e){
            document.getElementById('wts').appendChild(newSpan);
         }
      }
      catch(e){
         document.body.appendChild(newSpan);
      }

   }

}



function pausecomp(wtsms){
  wtsd = new Date();
  while (1){
    wtsmill=new Date();
    wtsdiff = wtsmill-wtsd;
    if(wtsdiff > wtsms){
      break;
    }
  }
}


function wts_log(message) {
  var loggerUrl = "http://server4.web-stat.com/logger41.pl";
  new Image().src = loggerUrl + "?" + escape(message);
  return;
};


function redirect(obj){
   if (obj.target){ window.open(obj.href, obj.target); }else{ window.location = obj.href };
}

wtslog6('299779','3','','');


