function getVals(){var e=this.parentNode,t=e.getElementsByTagName("input"),a=parseFloat(t[0].value),n=parseFloat(t[1].value);if(a>n){var l=n;n=a,a=l}e.getElementsByClassName("rangeValues")[0].innerHTML=a+" - "+n}$(document).ready(function(){$("#owl-demo").owlCarousel({autoPlay:2e3,transitionStyle:"fade",loop:!0,items:5,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3]})}),window.onload=function(){for(var e=document.getElementsByClassName("range-slider"),t=0;t<e.length;t++)for(var a=e[t].getElementsByTagName("input"),n=0;n<a.length;n++)"range"===a[n].type&&(a[n].oninput=getVals,a[n].oninput())};