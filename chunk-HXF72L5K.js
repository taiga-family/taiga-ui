import{a as f}from"./chunk-TRQHESWR.js";import{oa as u}from"./chunk-6GXSYTJW.js";import{e as m}from"./chunk-KFO6RLOG.js";import{f as r}from"./chunk-KWZHGPWS.js";import{a as c}from"./chunk-GOJWO2R3.js";import{ld as s,ta as p,wa as l,za as t}from"./chunk-2UPKG2B4.js";import{h as d}from"./chunk-B4AJQJMI.js";var y=new l("[WA_DOCUMENT_PIP]",{factory:()=>t(r).documentPictureInPicture??null});var o=class o{constructor(){this.pip=t(y);this.win=t(r);this.doc=t(c)}open(i="Portals: Popout"){return d(this,null,function*(){let e=yield this.pip?.requestWindow({width:300,height:500});if(!e)return null;e.document.body.innerHTML=`
          <!doctype html>
          <html>
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width,initial-scale=1" />
              <title>${i}</title>
            </head>
            <body>
              <div id="app"></div>
            </body>
          </html>
        `,this.copyGlobalStyles(this.doc,e.document);let a=e.document.querySelector("#app"),n=yield m({providers:[u(),{provide:r,useValue:e},{provide:c,useValue:e.document},s()]}),v=n.bootstrap(f,a);return e.addEventListener("beforeunload",()=>{v.destroy(),n.destroy()},{once:!0}),this.win.addEventListener("beforeunload",()=>e.close(),{once:!0}),{window:e,close:()=>e.close()}})}copyGlobalStyles(i,e){let a=Array.from(i.head.querySelectorAll('style, link[rel="stylesheet"]'));for(let n of a)e.head.append(n.cloneNode(!0))}};o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=p({token:o,factory:o.\u0275fac,providedIn:"root"});var h=o;export{y as a,h as b};
