(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{45:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(18),a=c.n(i),r=c(22),o=c(19),l=c.n(o),j=(c(45),c(1)),m=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){l.a.get("https://yts.mx/api/v2/list_movies.json").then((function(e){console.log(e.data.data.movies),s(e.data.data.movies)})).catch((function(e){console.log(e.data)}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("section",{className:"container",children:Object(j.jsx)("div",{className:"movies",children:0!=c.length?c.map((function(e){return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:e.medium_cover_image}),Object(j.jsxs)("div",{className:"movie_data",children:[Object(j.jsx)("h3",{className:"movie_title",children:e.title}),Object(j.jsx)("h5",{className:"movie_year",children:e.year}),Object(j.jsx)("ul",{className:"genres",children:e.genres.map((function(e,t){return Object(j.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(j.jsxs)("p",{className:"movie_summary",children:[e.summary.slice(0,140),"..."]})]})]},e.id)})):Object(j.jsx)("h4",{className:"loader",children:"Loding..."})})})})},d=c(21),h=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(d.a,{children:Object(j.jsx)(m,{})})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),u()}},[[52,1,2]]]);
//# sourceMappingURL=main.657b8878.chunk.js.map