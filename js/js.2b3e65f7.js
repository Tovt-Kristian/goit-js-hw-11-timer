parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}var a=document.querySelector('[data-value="days"]'),r=document.querySelector('[data-value="hours"]'),i=document.querySelector('[data-value="mins"]'),o=document.querySelector('[data-value="secs"]'),l=function(){function t(n,a){e(this,t),this.markup=a,this.finishDate=n,this.interval=null,this.deltaTime=0,console.log("Финальная дата",this.finishDate)}return n(t,[{key:"start",value:function(){var e=this;this.interval=setInterval(function(){var t=Date.now();if(t<e.finishDate){e.deltaTime=e.finishDate-t;var n=e.pad(Math.floor(e.deltaTime/864e5)),l=e.pad(Math.floor(e.deltaTime%864e5/36e5)),u=e.pad(Math.floor(e.deltaTime%36e5/6e4)),s=e.pad(Math.floor(e.deltaTime%6e4/1e3));e.insertValues(n,l,u,s)}else clearInterval(e.interval),a.textContent="00",r.textContent="00",i.textContent="00",o.textContent="00"},1e3)}},{key:"pad",value:function(e){return String(e).padStart(2,"0")}},{key:"insertValues",value:function(e,t,n,a){var r=this.markup,i=r.daysTimer,o=r.hoursTimer,l=r.minsTimer,u=r.secTimer;i.textContent=e,o.textContent=t,l.textContent=n,u.textContent=a}}]),t}(),u=new l(new Date("01 jan, 2022"),{daysTimer:a,hoursTimer:r,minsTimer:i,secTimer:o});u.start();
},{}]},{},["QvaY"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/js.2b3e65f7.js.map