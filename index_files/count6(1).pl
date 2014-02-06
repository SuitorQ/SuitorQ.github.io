var uid = 'profdecube';
var prefix = 'https:' == document.location.protocol ? 'https://server2.web-stat.com' : 'http://server4.web-stat.com';
var custom = 'wix_free';
   if (custom == 'wix' || custom == 'wix_free'){
document.getElementById("wtscount").innerHTML = '<a href="http://www.web-stat.com/stats/checkstats.pl?PublicID='+uid+'" target="new"><img src="'+prefix+'/draw_counter.pl?106::57chevy::27::20::8::75::140::no::wix_free" width="184" height="31" border="0"></a>';
   }
   else {
document.getElementById("wtscount").innerHTML = '<a href="http://www.web-stat.com/stats/checkstats.pl?PublicID='+uid+'"><img src="'+prefix+'/draw_counter.pl?106::57chevy::27::20::8::75::140::no::wix_free" width="184" height="31" border="0"></a>';
   }

