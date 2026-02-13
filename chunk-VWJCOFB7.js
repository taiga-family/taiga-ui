import{a as u}from"./chunk-BH5I7QW6.js";import{oa as m}from"./chunk-6GXSYTJW.js";import{e as s}from"./chunk-KFO6RLOG.js";import{f as d}from"./chunk-KWZHGPWS.js";import{a}from"./chunk-GOJWO2R3.js";import{ld as p,ta as l,za as i}from"./chunk-2UPKG2B4.js";import{h as c}from"./chunk-B4AJQJMI.js";var o=class o{constructor(){this.win=i(d);this.doc=i(a)}open(t="Portals: Popout"){return c(this,null,function*(){let e=this.win.open("","_blank","width=400,height=400,left=300,top=300");if(!e)return null;e.document.open(),e.document.write(`
          <!doctype html>
          <html>
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width,initial-scale=1" />
              <title>${t}</title>
            </head>
            <body>
              <div id="app"></div>
            </body>
          </html>
        `),e.document.close(),this.copyGlobalStyles(this.doc,e.document);let r=e.document.querySelector("#app"),n=yield s({providers:[m(),{provide:d,useValue:e},{provide:a,useValue:e.document},p()]}),h=n.bootstrap(u,r);return e.addEventListener("beforeunload",()=>{h.destroy(),n.destroy()},{once:!0}),this.win.addEventListener("beforeunload",()=>e.close(),{once:!0}),{window:e,close:()=>e.close()}})}copyGlobalStyles(t,e){let r=Array.from(t.head.querySelectorAll('style, link[rel="stylesheet"]'));for(let n of r)e.head.append(n.cloneNode(!0))}};o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=l({token:o,factory:o.\u0275fac,providedIn:"root"});var f=o;export{f as a};
