import { APPEARANCE } from "@/lib/site";

// Inlined at the top of <head> (app/layout.tsx), so it runs before the first paint and long before
// the deferred Next.js runtime: no flash of the wrong theme, and the switch works from the start.
// It sets two attributes on <html>: data-appearance (the pick: auto, light or dark) and data-theme
// (what's shown: light or dark, following the Mac on Auto). Nothing here talks to the network.
// The radios in components/AppearanceSwitch.tsx are plain HTML; one delegated listener handles them.
export const APPEARANCE_SCRIPT = `(function(){
var K=${JSON.stringify(APPEARANCE.storageKey)},d=document.documentElement,m=matchMedia("(prefers-color-scheme: dark)"),order=["auto","light","dark"],pick="auto";
try{var s=localStorage.getItem(K);if(s==="light"||s==="dark")pick=s}catch(e){}
function apply(){d.setAttribute("data-appearance",pick);d.setAttribute("data-theme",pick==="auto"?(m.matches?"dark":"light"):pick)}
function sync(){var r=document.querySelectorAll('input[name="appearance"]');for(var i=0;i<r.length;i++)r[i].checked=r[i].value===pick}
apply();
m.addEventListener("change",apply);
document.addEventListener("DOMContentLoaded",sync);
document.addEventListener("change",function(e){
var t=e.target;if(!t||t.name!=="appearance"||order.indexOf(t.value)<0)return;
d.setAttribute("data-appearance-dir",order.indexOf(t.value)>order.indexOf(pick)?"right":"left");
d.classList.add("appearance-moved");
pick=t.value;
try{pick==="auto"?localStorage.removeItem(K):localStorage.setItem(K,pick)}catch(e){}
if(document.startViewTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches)document.startViewTransition(apply);else apply();
});
})()`;
