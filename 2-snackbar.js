import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector(".form");n.addEventListener("submit",m);function m(e){e.preventDefault();const t=e.target,o=t.elements.delay.value,r=t.elements.state.value;l(o,r).then(s=>{i.success({title:"OK",message:`✅ Fulfilled promise in ${s} ms`,backgroundColor:"#4caf50"})}).catch(s=>{i.error({title:"Error",message:`❌ Rejected promise in ${s} ms`,backgroundColor:"#ef4040"})}),t.reset()}function l(e,t){return new Promise((o,r)=>{setTimeout(()=>{t==="fulfilled"?o(e):r(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map