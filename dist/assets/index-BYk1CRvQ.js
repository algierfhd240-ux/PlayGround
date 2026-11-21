(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const no="187",gh=0,zo=1,_h=2,er=1,cc=2,ji=3,Yn=0,Kt=1,Ht=2,Li=0,ai=1,Ii=2,ko=3,Ho=4,xh=5,Ci=100,vh=101,Mh=102,yh=103,Sh=104,bh=200,Eh=201,Th=202,wh=203,hc=204,uc=205,Ah=206,Rh=207,Ch=208,Ph=209,Lh=210,Ih=211,Dh=212,Nh=213,Uh=214,ua=0,da=1,fa=2,ss=3,pa=4,ma=5,ga=6,_a=7,dc=0,Fh=1,Oh=2,Ln=0,fc=1,pc=2,mc=3,io=4,gc=5,_c=6,xc=7,vc=300,Ni=301,rs=302,Cr=303,Pr=304,as=1e3,_n=1001,xa=1002,Ut=1003,Bh=1004,xs=1005,Gt=1006,Lr=1007,Gn=1008,jt=1009,Mc=1010,yc=1011,os=1012,so=1013,Mn=1014,hn=1015,yn=1016,ro=1017,ao=1018,Ui=1020,Sc=35902,bc=35899,Ec=1021,Tc=1022,un=1023,$n=1026,Vn=1027,oo=1028,lo=1029,li=1030,co=1031,ho=1033,tr=33776,nr=33777,ir=33778,sr=33779,va=35840,Ma=35841,ya=35842,Sa=35843,ba=36196,Ea=37492,Ta=37496,wa=37488,Aa=37489,hr=37490,Ra=37491,Ca=37808,Pa=37809,La=37810,Ia=37811,Da=37812,Na=37813,Ua=37814,Fa=37815,Oa=37816,Ba=37817,za=37818,ka=37819,Ha=37820,Ga=37821,Va=36492,Wa=36494,Xa=36495,qa=36283,Ya=36284,ur=36285,$a=36286,zh=3200,Ka=0,kh=1,Pn="",kt="srgb",dr="srgb-linear",fr="linear",ht="srgb",Ir=7680,Hh=519,Gh=512,Vh=513,Wh=514,wc=515,Xh=516,qh=517,Ac=518,Rc=519,Cc=35044,Go="300 es",dn=2e3,ls=2001;function Yh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $h(){const i=pr("canvas");return i.style.display="block",i}const Vo={};function mr(...i){const e="THREE."+i.shift();console.log(e,...i)}function Pc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=Pc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function at(...i){i=Pc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function rr(...i){const e=i.join(" ");e in Vo||(Vo[e]=!0,ze(...i))}function Kh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Zh={[ua]:ua,[fa]:ga,[pa]:pa,[ss]:ma,[da]:da,[ga]:fa,[_a]:_a,[ma]:ss};class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wo=1234567;const ns=Math.PI/180,cs=180/Math.PI;function Zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function uo(i,e){return(i%e+e)%e}function Jh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Qh(i,e,t){return i!==e?(t-i)/(e-i):0}function is(i,e,t){return(1-t)*i+t*e}function jh(i,e,t,n){return is(i,e,1-Math.exp(-t*n))}function eu(i,e=1){return e-Math.abs(uo(i,e*2)-e)}function tu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function iu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function su(i,e){return i+Math.random()*(e-i)}function ru(i){return i*(.5-Math.random())}function au(i){i!==void 0&&(Wo=i);let e=Wo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ou(i){return i*ns}function lu(i){return i*cs}function cu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uu(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*m,o*h,o*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sr(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function fo(i,e){if(e.constructor===Float32Array)return i;const t=Sr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function po(i,e){if(e.constructor===Float32Array)return i;const t=Sr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Xo={DEG2RAD:ns,RAD2DEG:cs,generateUUID:Zn,clamp:et,euclideanModulo:uo,mapLinear:Jh,inverseLerp:Qh,lerp:is,damp:jh,pingpong:eu,smoothstep:tu,smootherstep:nu,randInt:iu,randFloat:su,randFloatSpread:ru,seededRandom:au,degToRad:ou,radToDeg:lu,isPowerOfTwo:cu,ceilPowerOfTwo:hu,floorPowerOfTwo:Lc,setQuaternionFromProperEuler:uu,normalize:po,denormalize:fo},Eo=class Eo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Eo.prototype.isVector2=!0;let Be=Eo;class xn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],m=r[a+1],_=r[a+2],M=r[a+3];if(u!==M||l!==d||c!==m||h!==_){let f=l*d+c*m+h*_+u*M;f<0&&(d=-d,m=-m,_=-_,M=-M,f=-f);let p=1-o;if(f<.9995){const S=Math.acos(f),E=Math.sin(S);p=Math.sin(p*S)/E,o=Math.sin(o*S)/E,l=l*p+d*o,c=c*p+m*o,h=h*p+_*o,u=u*p+M*o}else{l=l*p+d*o,c=c*p+m*o,h=h*p+_*o,u=u*p+M*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+h*u+l*m-c*d,e[t+1]=l*_+h*d+c*u-o*m,e[t+2]=c*_+h*m+o*d-l*u,e[t+3]=h*_-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"YZX":this._x=d*h*u+c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u-d*m*_;break;case"XZY":this._x=d*h*u-c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u+d*m*_;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const To=class To{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dr.copy(this).projectOnVector(e),this.sub(Dr)}reflect(e){return this.sub(Dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};To.prototype.isVector3=!0;let U=To;const Dr=new U,qo=new xn,wo=class wo{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],_=n[8],M=s[0],f=s[3],p=s[6],S=s[1],E=s[4],b=s[7],A=s[2],w=s[5],g=s[8];return r[0]=a*M+o*S+l*A,r[3]=a*f+o*E+l*w,r[6]=a*p+o*b+l*g,r[1]=c*M+h*S+u*A,r[4]=c*f+h*E+u*w,r[7]=c*p+h*b+u*g,r[2]=d*M+m*S+_*A,r[5]=d*f+m*E+_*w,r[8]=d*p+m*b+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,_=t*u+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=u*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=d*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nr.makeScale(e,t)),this}rotate(e){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nr.makeRotation(-e)),this}translate(e,t){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wo.prototype.isMatrix3=!0;let Ve=wo;const Nr=new Ve,Yo=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$o=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function du(){const i={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dr]:{primaries:e,whitePoint:n,transfer:fr,toXYZ:Yo,fromXYZ:$o,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Yo,fromXYZ:$o,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}const nt=du();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class fu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{di===void 0&&(di=pr("canvas")),di.width=e.width,di.height=e.height;const s=di.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pu=0;class mo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ur(s[a].image)):r.push(Ur(s[a]))}else r=Ur(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let mu=0;const Fr=new U;class Wt extends ci{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=_n,s=_n,r=Gt,a=Gn,o=un,l=jt,c=Wt.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Zn(),this.name="",this.source=new mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fr).x}get height(){return this.source.getSize(Fr).y}get depth(){return this.source.getSize(Fr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=vc;Wt.DEFAULT_ANISOTROPY=1;const Ao=class Ao{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],_=l[9],M=l[2],f=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(m+1)/2,A=(p+1)/2,w=(h+d)/4,g=(u+M)/4,v=(_+f)/4;return E>b&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=g/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=v/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=g/r,s=v/r),this.set(n,s,r,t),this}let S=Math.sqrt((f-_)*(f-_)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(f-_)/S,this.y=(u-M)/S,this.z=(d-h)/S,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ao.prototype.isVector4=!0;let vt=Ao;class gu extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Wt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new mo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends gu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ic extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _u extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const yr=class yr{constructor(e,t,n,s,r,a,o,l,c,h,u,d,m,_,M,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,m,_,M,f)}set(e,t,n,s,r,a,o,l,c,h,u,d,m,_,M,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=_,p[11]=M,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),a=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,m=a*u,_=o*h,M=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,_=c*h,M=c*u;t[0]=d+M*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,_=c*h,M=c*u;t[0]=d-M*o,t[4]=-a*u,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=M-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*u,_=o*h,M=o*u;t[0]=l*h,t[4]=_*c-m,t[8]=d*c+M,t[1]=l*u,t[5]=M*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,M=o*c;t[0]=l*h,t[4]=M-d*u,t[8]=_*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+_,t[10]=d-M*u}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,M=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+M,t[5]=a*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=o*h,t[10]=M*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xu,e,vu)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Fn.crossVectors(n,Zt),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Fn.crossVectors(n,Zt)),Fn.normalize(),vs.crossVectors(Zt,Fn),s[0]=Fn.x,s[4]=vs.x,s[8]=Zt.x,s[1]=Fn.y,s[5]=vs.y,s[9]=Zt.y,s[2]=Fn.z,s[6]=vs.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],_=n[2],M=n[6],f=n[10],p=n[14],S=n[3],E=n[7],b=n[11],A=n[15],w=s[0],g=s[4],v=s[8],L=s[12],R=s[1],N=s[5],F=s[9],X=s[13],P=s[2],G=s[6],$=s[10],z=s[14],ne=s[3],q=s[7],Q=s[11],ee=s[15];return r[0]=a*w+o*R+l*P+c*ne,r[4]=a*g+o*N+l*G+c*q,r[8]=a*v+o*F+l*$+c*Q,r[12]=a*L+o*X+l*z+c*ee,r[1]=h*w+u*R+d*P+m*ne,r[5]=h*g+u*N+d*G+m*q,r[9]=h*v+u*F+d*$+m*Q,r[13]=h*L+u*X+d*z+m*ee,r[2]=_*w+M*R+f*P+p*ne,r[6]=_*g+M*N+f*G+p*q,r[10]=_*v+M*F+f*$+p*Q,r[14]=_*L+M*X+f*z+p*ee,r[3]=S*w+E*R+b*P+A*ne,r[7]=S*g+E*N+b*G+A*q,r[11]=S*v+E*F+b*$+A*Q,r[15]=S*L+E*X+b*z+A*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],_=e[3],M=e[7],f=e[11],p=e[15],S=l*m-c*d,E=o*m-c*u,b=o*d-l*u,A=a*m-c*h,w=a*d-l*h,g=a*u-o*h;return t*(M*S-f*E+p*b)-n*(_*S-f*A+p*w)+s*(_*E-M*A+p*g)-r*(_*b-M*w+f*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],_=e[12],M=e[13],f=e[14],p=e[15],S=t*o-n*a,E=t*l-s*a,b=t*c-r*a,A=n*l-s*o,w=n*c-r*o,g=s*c-r*l,v=h*M-u*_,L=h*f-d*_,R=h*p-m*_,N=u*f-d*M,F=u*p-m*M,X=d*p-m*f,P=S*X-E*F+b*N+A*R-w*L+g*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/P;return e[0]=(o*X-l*F+c*N)*G,e[1]=(s*F-n*X-r*N)*G,e[2]=(M*g-f*w+p*A)*G,e[3]=(d*w-u*g-m*A)*G,e[4]=(l*R-a*X-c*L)*G,e[5]=(t*X-s*R+r*L)*G,e[6]=(f*b-_*g-p*E)*G,e[7]=(h*g-d*b+m*E)*G,e[8]=(a*F-o*R+c*v)*G,e[9]=(n*R-t*F-r*v)*G,e[10]=(_*w-M*b+p*S)*G,e[11]=(u*b-h*w-m*S)*G,e[12]=(o*L-a*N-l*v)*G,e[13]=(t*N-n*L+s*v)*G,e[14]=(M*E-_*A-f*S)*G,e[15]=(h*A-u*E+d*S)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,_=r*u,M=a*h,f=a*u,p=o*u,S=l*c,E=l*h,b=l*u,A=n.x,w=n.y,g=n.z;return s[0]=(1-(M+p))*A,s[1]=(m+b)*A,s[2]=(_-E)*A,s[3]=0,s[4]=(m-b)*w,s[5]=(1-(d+p))*w,s[6]=(f+S)*w,s[7]=0,s[8]=(_+E)*g,s[9]=(f-S)*g,s[10]=(1-(d+M))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=fi.set(s[0],s[1],s[2]).length();const o=fi.set(s[4],s[5],s[6]).length(),l=fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),an.copy(this);const c=1/a,h=1/o,u=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=dn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),m=(n+s)/(n-s);let _,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(o===dn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===ls)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=dn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),m=-(n+s)/(n-s);let _,M;if(l)_=1/(a-r),M=a/(a-r);else if(o===dn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===ls)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};yr.prototype.isMatrix4=!0;let st=yr;const fi=new U,an=new st,xu=new U(0,0,0),vu=new U(1,1,1),Fn=new U,vs=new U,Zt=new U,Ko=new st,Zo=new xn;class Sn{constructor(e=0,t=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zo.setFromEuler(this),this.setFromQuaternion(Zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class go{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mu=0;const Jo=new U,pi=new xn,En=new st,Ms=new U,Gi=new U,yu=new U,Su=new xn,Qo=new U(1,0,0),jo=new U(0,1,0),el=new U(0,0,1),tl={type:"added"},bu={type:"removed"},mi={type:"childadded",child:null},Or={type:"childremoved",child:null};class St extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new U,t=new Sn,n=new xn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Ve}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(Qo,e)}rotateY(e){return this.rotateOnAxis(jo,e)}rotateZ(e){return this.rotateOnAxis(el,e)}translateOnAxis(e,t){return Jo.copy(e).applyQuaternion(this.quaternion),this.position.add(Jo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qo,e)}translateY(e){return this.translateOnAxis(jo,e)}translateZ(e){return this.translateOnAxis(el,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ms.copy(e):Ms.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Gi,Ms,this.up):En.lookAt(Ms,Gi,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(En),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tl),mi.child=e,this.dispatchEvent(mi),mi.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bu),Or.child=e,this.dispatchEvent(Or),Or.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tl),mi.child=e,this.dispatchEvent(mi),mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Su,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}St.DEFAULT_UP=new U(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wn extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eu={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const f=t.getJointPose(M,n),p=this._getHandJoint(c,M);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},ys={h:0,s:0,l:0};function zr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=uo(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zr(a,r,e+1/3),this.g=zr(a,r,e),this.b=zr(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return nt.workingToColorSpace(zt.copy(this),e),Math.round(et(zt.r*255,0,255))*65536+Math.round(et(zt.g*255,0,255))*256+Math.round(et(zt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=kt){nt.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(ys);const n=is(On.h,ys.h,t),s=is(On.s,ys.s,t),r=is(On.l,ys.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Pe;Pe.NAMES=Dc;class _o{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new _o(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new xo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nl extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const on=new U,Tn=new U,kr=new U,wn=new U,gi=new U,_i=new U,il=new U,Hr=new U,Gr=new U,Vr=new U,Wr=new vt,Xr=new vt,qr=new vt;class nn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),Tn.subVectors(n,t),kr.subVectors(e,t);const a=on.dot(on),o=on.dot(Tn),l=on.dot(kr),c=Tn.dot(Tn),h=Tn.dot(kr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Wr.setScalar(0),Xr.setScalar(0),qr.setScalar(0),Wr.fromBufferAttribute(e,t),Xr.fromBufferAttribute(e,n),qr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Wr,r.x),a.addScaledVector(Xr,r.y),a.addScaledVector(qr,r.z),a}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),Tn.subVectors(e,t),on.cross(Tn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),on.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;gi.subVectors(s,n),_i.subVectors(r,n),Hr.subVectors(e,n);const l=gi.dot(Hr),c=_i.dot(Hr);if(l<=0&&c<=0)return t.copy(n);Gr.subVectors(e,s);const h=gi.dot(Gr),u=_i.dot(Gr);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(gi,a);Vr.subVectors(e,r);const m=gi.dot(Vr),_=_i.dot(Vr);if(_>=0&&m<=_)return t.copy(r);const M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(_i,o);const f=h*_-m*u;if(f<=0&&u-h>=0&&m-_>=0)return il.subVectors(r,s),o=(u-h)/(u-h+(m-_)),t.copy(s).addScaledVector(il,o);const p=1/(f+M+d);return a=M*p,o=d*p,t.copy(n).addScaledVector(gi,a).addScaledVector(_i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),bs.subVectors(this.max,Vi),xi.subVectors(e.a,Vi),vi.subVectors(e.b,Vi),Mi.subVectors(e.c,Vi),Bn.subVectors(vi,xi),zn.subVectors(Mi,vi),ti.subVectors(xi,Mi);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ti.z,ti.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ti.z,0,-ti.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ti.y,ti.x,0];return!Yr(t,xi,vi,Mi,bs)||(t=[1,0,0,0,1,0,0,0,1],!Yr(t,xi,vi,Mi,bs))?!1:(Es.crossVectors(Bn,zn),t=[Es.x,Es.y,Es.z],Yr(t,xi,vi,Mi,bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new U,new U,new U,new U,new U,new U,new U,new U],ln=new U,Ss=new hi,xi=new U,vi=new U,Mi=new U,Bn=new U,zn=new U,ti=new U,Vi=new U,bs=new U,Es=new U,ni=new U;function Yr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ni.fromArray(i,r);const o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yt=new U,Ts=new Be;let Tu=0;class It extends ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cc,this.updateRanges=[],this.gpuType=hn,this.version=0,this._normalizationScale=e!==void 0?Sr(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):fo(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):po(e,this.array)}}class Nc extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uc extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}const wu=new hi,Wi=new U,$r=new U;class ui{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add($r)),this.expandByPoint(Wi.copy(e.center).sub($r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Au=0;const en=new st,Kr=new St,yi=new U,Jt=new hi,Xi=new hi,Pt=new U;class Dt extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yh(e)?Uc:Nc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Kr.lookAt(e),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Jt.min,Xi.min),Jt.expandByPoint(Pt),Pt.addVectors(Jt.max,Xi.max),Jt.expandByPoint(Pt)):(Jt.expandByPoint(Xi.min),Jt.expandByPoint(Xi.max))}Jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pt.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(e,c),Pt.add(yi)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new It(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new U,l[L]=new U;const h=new U,u=new U,d=new U,m=new Be,_=new Be,M=new Be,f=new U,p=new U;function S(L,R,N){c[L]=c[R]=c[N]=1,h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,N),m.fromBufferAttribute(r,L),_.fromBufferAttribute(r,R),M.fromBufferAttribute(r,N),u.sub(h),d.sub(h),_.sub(m),M.sub(m);const F=1/(_.x*M.y-M.x*_.y);isFinite(F)&&(f.copy(u).multiplyScalar(M.y).addScaledVector(d,-_.y).multiplyScalar(F),p.copy(d).multiplyScalar(_.x).addScaledVector(u,-M.x).multiplyScalar(F),o[L].add(f),o[R].add(f),o[N].add(f),l[L].add(p),l[R].add(p),l[N].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,R=E.length;L<R;++L){const N=E[L],F=N.start,X=N.count;for(let P=F,G=F+X;P<G;P+=3)S(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const b=new U,A=new U,w=new U,g=new U;function v(L){w.fromBufferAttribute(s,L),g.copy(w);const R=o[L];b.copy(R),b.sub(w.multiplyScalar(w.dot(R))).normalize(),A.crossVectors(g,R);const F=A.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,F)}for(let L=0,R=n.count;L<R;++L)c[L]&&v(L);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),M=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,f),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let M=0,f=l.length;M<f;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let p=0;p<h;p++)d[_++]=c[m++]}return new It(d,h,u)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ru{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cc,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=sl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=sl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function sl(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Zn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const qt=new U;class gr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Sr(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){mr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){mr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):fo(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):po(e,this.data.array)}}const Zr=new U,Cu=new U,Pu=new Ve;class Hn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Zr.subVectors(n,t).cross(Cu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Zr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pu.getNormalMatrix(e),s=this.coplanarPoint(Zr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Lu=0;class Jn extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=ai,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=uc,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fc extends Jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Si;const qi=new U,bi=new U,Ei=new U,Ti=new Be,Yi=new Be,Oc=new st,ws=new U,$i=new U,As=new U,rl=new Be,Jr=new Be,al=new Be;class Iu extends St{constructor(e=new Fc){if(super(),this.isSprite=!0,this.type="Sprite",Si===void 0){Si=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ru(t,5);Si.setIndex([0,1,2,0,2,3]),Si.setAttribute("position",new gr(n,3,0,!1)),Si.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=Si,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bi.setFromMatrixScale(this.matrixWorld),Oc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ei.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bi.multiplyScalar(-Ei.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Rs(ws.set(-.5,-.5,0),Ei,a,bi,s,r),Rs($i.set(.5,-.5,0),Ei,a,bi,s,r),Rs(As.set(.5,.5,0),Ei,a,bi,s,r),rl.set(0,0),Jr.set(1,0),al.set(1,1);let o=e.ray.intersectTriangle(ws,$i,As,!1,qi);if(o===null&&(Rs($i.set(-.5,.5,0),Ei,a,bi,s,r),Jr.set(0,1),o=e.ray.intersectTriangle(ws,As,$i,!1,qi),o===null))return;const l=e.ray.origin.distanceTo(qi);l<e.near||l>e.far||t.push({distance:l,point:qi.clone(),uv:nn.getInterpolation(qi,ws,$i,As,rl,Jr,al,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Rs(i,e,t,n,s,r){Ti.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Yi.x=r*Ti.x-s*Ti.y,Yi.y=s*Ti.x+r*Ti.y):Yi.copy(Ti),i.copy(e),i.x+=Yi.x,i.y+=Yi.y,i.applyMatrix4(Oc)}const Rn=new U,Qr=new U,Cs=new U,Ps=new U;class br{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qr.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),Ps.copy(this.origin).sub(Qr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Cs),o=Ps.dot(this.direction),l=-Ps.dot(Cs),c=Ps.lengthSq(),h=Math.abs(1-a*a);let u,d,m,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const M=1/h;u*=M,d*=M,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qr).addScaledVector(Cs,d),m}intersectSphere(e,t){if(e.radius<0)return null;Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,m=e.z-a.z,_=t.x-a.x,M=t.y-a.y,f=t.z-a.z,p=n.x-a.x,S=n.y-a.y,E=n.z-a.z,b=Math.abs(l),A=Math.abs(c),w=Math.abs(h);let g,v,L,R,N,F,X,P,G,$,z,ne;if(b>=A&&b>=w?(L=l,F=u,G=_,ne=p,l>=0?(g=c,v=h,R=d,N=m,X=M,P=f,$=S,z=E):(g=h,v=c,R=m,N=d,X=f,P=M,$=E,z=S)):A>=w?(L=c,F=d,G=M,ne=S,c>=0?(g=h,v=l,R=m,N=u,X=f,P=_,$=E,z=p):(g=l,v=h,R=u,N=m,X=_,P=f,$=p,z=E)):(L=h,F=m,G=f,ne=E,h>=0?(g=l,v=c,R=u,N=d,X=_,P=M,$=p,z=S):(g=c,v=l,R=d,N=u,X=M,P=_,$=S,z=p)),L===0)return null;const q=g/L,Q=v/L,ee=1/L,Te=R-q*F,Ne=N-Q*F,H=X-q*G,ge=P-Q*G,ye=$-q*ne,Ie=z-Q*ne,me=ye*ge-Ie*H,He=Te*Ie-Ne*ye,Re=H*Ne-ge*Te;if(s){if(me<0||He<0||Re<0)return null}else if((me<0||He<0||Re<0)&&(me>0||He>0||Re>0))return null;const _e=me+He+Re;if(_e===0)return null;const Se=ee*(me*F+He*G+Re*ne);return(_e>0?Se<0:Se>0)?null:this.at(Se/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ol=new st,ii=new br,Ls=new ui,ll=new U,Is=new U,Ds=new U,Ns=new U,jr=new U,Us=new U,cl=new U,Fs=new U;class it extends St{constructor(e=new Dt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(jr.fromBufferAttribute(u,e),a?Us.addScaledVector(jr,h):Us.addScaledVector(jr.sub(t),h))}t.add(Us)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),ii.copy(e.ray).recast(e.near),!(Ls.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Ls,ll)===null||ii.origin.distanceToSquared(ll)>(e.far-e.near)**2))&&(ol.copy(r).invert(),ii.copy(e.ray).applyMatrix4(ol),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const f=d[_],p=a[f.materialIndex],S=Math.max(f.start,m.start),E=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let b=S,A=E;b<A;b+=3){const w=o.getX(b),g=o.getX(b+1),v=o.getX(b+2);s=Os(this,p,e,n,c,h,u,w,g,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let f=_,p=M;f<p;f+=3){const S=o.getX(f),E=o.getX(f+1),b=o.getX(f+2);s=Os(this,a,e,n,c,h,u,S,E,b),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const f=d[_],p=a[f.materialIndex],S=Math.max(f.start,m.start),E=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=S,A=E;b<A;b+=3){const w=b,g=b+1,v=b+2;s=Os(this,p,e,n,c,h,u,w,g,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let f=_,p=M;f<p;f+=3){const S=f,E=f+1,b=f+2;s=Os(this,a,e,n,c,h,u,S,E,b),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Du(i,e,t,n,s,r,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Yn,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fs);return c<t.near||c>t.far?null:{distance:c,point:Fs.clone(),object:i}}function Os(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Is),i.getVertexPosition(l,Ds),i.getVertexPosition(c,Ns);const h=Du(i,e,t,n,Is,Ds,Ns,cl);if(h){const u=new U;nn.getBarycoord(cl,Is,Ds,Ns,u),s&&(h.uv=nn.getInterpolatedAttribute(s,o,l,c,u,new Be)),r&&(h.uv1=nn.getInterpolatedAttribute(r,o,l,c,u,new Be)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};nn.getNormal(Is,Ds,Ns,d.normal),h.face=d,h.barycoord=u}return h}class vo extends Wt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ut,h=Ut,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl extends It{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wi=new st,ul=new st,Bs=[],dl=new hi,Nu=new st,Ki=new it,Zi=new ui;class ea extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),dl.copy(e.boundingBox).applyMatrix4(wi),this.boundingBox.union(dl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),Zi.copy(e.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(Zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zi.copy(this.boundingSphere),Zi.applyMatrix4(n),e.ray.intersectsSphere(Zi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wi),ul.multiplyMatrices(n,wi),Ki.matrixWorld=ul,Ki.raycast(e,Bs);for(let a=0,o=Bs.length;a<o;a++){const l=Bs[a];l.instanceId=r,l.object=this,t.push(l)}Bs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vo(new Float32Array(s*this.count),s,this.count,oo,hn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const si=new ui,Uu=new Be(.5,.5),zs=new U;class hs{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],m=r[7],_=r[8],M=r[9],f=r[10],p=r[11],S=r[12],E=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,m-h,p-_,A-S).normalize(),s[1].setComponents(c+a,m+h,p+_,A+S).normalize(),s[2].setComponents(c+o,m+u,p+M,A+E).normalize(),s[3].setComponents(c-o,m-u,p-M,A-E).normalize(),n)s[4].setComponents(l,d,f,b).normalize(),s[5].setComponents(c-l,m-d,p-f,A-b).normalize();else if(s[4].setComponents(c-l,m-d,p-f,A-b).normalize(),t===dn)s[5].setComponents(c+l,m+d,p+f,A+b).normalize();else if(t===ls)s[5].setComponents(l,d,f,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);const t=Uu.distanceTo(e.center);return si.radius=.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zs.x=s.normal.x>0?e.max.x:e.min.x,zs.y=s.normal.y>0?e.max.y:e.min.y,zs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const fl=new st;class Mo{constructor(){this.coordinateSystem=dn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];fl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new hs),n[s].setFromProjectionMatrix(fl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new hs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Mo().copy(this)}}class Bc extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _r=new U,xr=new U,pl=new st,Ji=new br,ks=new ui,ta=new U,ml=new U;class Fu extends St{constructor(e=new Dt,t=new Bc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)_r.fromBufferAttribute(t,s-1),xr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=_r.distanceTo(xr);e.setAttribute("lineDistance",new gt(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),ks.radius+=r,e.ray.intersectsSphere(ks)===!1)return;pl.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=m,f=_-1;M<f;M+=c){const p=h.getX(M),S=h.getX(M+1),E=Hs(this,e,Ji,l,p,S,M);E&&t.push(E)}if(this.isLineLoop){const M=h.getX(_-1),f=h.getX(m),p=Hs(this,e,Ji,l,M,f,_-1);p&&t.push(p)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let M=m,f=_-1;M<f;M+=c){const p=Hs(this,e,Ji,l,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){const M=Hs(this,e,Ji,l,_-1,m,_-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hs(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(_r.fromBufferAttribute(o,s),xr.fromBufferAttribute(o,r),t.distanceSqToSegment(_r,xr,ta,ml)>n)return;ta.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ta);if(!(c<e.near||c>e.far))return{distance:c,point:ml.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const gl=new U,_l=new U;class Ou extends Fu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gl.fromBufferAttribute(t,s),_l.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gl.distanceTo(_l);e.setAttribute("lineDistance",new gt(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zc extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xl=new st,Za=new br,Gs=new ui,Vs=new U;class Bu extends St{constructor(e=new Dt,t=new zc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Gs.radius+=r,e.ray.intersectsSphere(Gs)===!1)return;xl.copy(s).invert(),Za.copy(e.ray).applyMatrix4(xl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=d,M=m;_<M;_++){const f=c.getX(_);Vs.fromBufferAttribute(u,f),vl(Vs,f,l,s,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,M=m;_<M;_++)Vs.fromBufferAttribute(u,_),vl(Vs,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function vl(i,e,t,n,s,r,a){const o=Za.distanceSqToPoint(i);if(o<t){const l=new U;Za.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class kc extends Wt{constructor(e=[],t=Ni,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class us extends Wt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fi extends Wt{constructor(e,t,n=Mn,s,r,a,o=Ut,l=Ut,c,h=$n,u=1){if(h!==$n&&h!==Vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Hc extends Fi{constructor(e,t=Mn,n=Ni,s,r,a=Ut,o=Ut,l,c=$n){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gc extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tt extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2));function _(M,f,p,S,E,b,A,w,g,v,L){const R=b/g,N=A/v,F=b/2,X=A/2,P=w/2,G=g+1,$=v+1;let z=0,ne=0;const q=new U;for(let Q=0;Q<$;Q++){const ee=Q*N-X;for(let Te=0;Te<G;Te++){const Ne=Te*R-F;q[M]=Ne*S,q[f]=ee*E,q[p]=P,c.push(q.x,q.y,q.z),q[M]=0,q[f]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(Te/g),u.push(1-Q/v),z+=1}}for(let Q=0;Q<v;Q++)for(let ee=0;ee<g;ee++){const Te=d+ee+G*Q,Ne=d+ee+G*(Q+1),H=d+(ee+1)+G*(Q+1),ge=d+(ee+1)+G*Q;l.push(Te,Ne,ge),l.push(Ne,H,ge),ne+=6}o.addGroup(m,ne,L),m+=ne,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ds extends Dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new U,h=new Be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const m=n+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class tn extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],m=[];let _=0;const M=[],f=n/2;let p=0;S(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(m,2));function S(){const b=new U,A=new U;let w=0;const g=(t-e)/n;for(let v=0;v<=r;v++){const L=[],R=v/r,N=R*(t-e)+e;for(let F=0;F<=s;F++){const X=F/s,P=X*l+o,G=Math.sin(P),$=Math.cos(P);A.x=N*G,A.y=-R*n+f,A.z=N*$,u.push(A.x,A.y,A.z),b.set(G,g,$).normalize(),d.push(b.x,b.y,b.z),m.push(X,1-R),L.push(_++)}M.push(L)}for(let v=0;v<s;v++)for(let L=0;L<r;L++){const R=M[L][v],N=M[L+1][v],F=M[L+1][v+1],X=M[L][v+1];(e>0||L!==0)&&(h.push(R,N,X),w+=3),(t>0||L!==r-1)&&(h.push(N,F,X),w+=3)}c.addGroup(p,w,0),p+=w}function E(b){const A=_,w=new Be,g=new U;let v=0;const L=b===!0?e:t,R=b===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,f*R,0),d.push(0,R,0),m.push(.5,.5),_++;const N=_;for(let F=0;F<=s;F++){const P=F/s*l+o,G=Math.cos(P),$=Math.sin(P);g.x=L*$,g.y=f*R,g.z=L*G,u.push(g.x,g.y,g.z),d.push(0,R,0),w.x=G*.5+.5,w.y=$*.5*R+.5,m.push(w.x,w.y),_++}for(let F=0;F<s;F++){const X=A+F,P=N+F;b===!0?h.push(P,P+1,X):h.push(P+1,P,X),v+=3}c.addGroup(p,v,b===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oi extends tn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new oi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yo extends Dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const E=new U,b=new U,A=new U;for(let w=0;w<t.length;w+=3)m(t[w+0],E),m(t[w+1],b),m(t[w+2],A),l(E,b,A,S)}function l(S,E,b,A){const w=A+1,g=[];for(let v=0;v<=w;v++){g[v]=[];const L=S.clone().lerp(b,v/w),R=E.clone().lerp(b,v/w),N=w-v;for(let F=0;F<=N;F++)F===0&&v===w?g[v][F]=L:g[v][F]=L.clone().lerp(R,F/N)}for(let v=0;v<w;v++)for(let L=0;L<2*(w-v)-1;L++){const R=Math.floor(L/2);L%2===0?(d(g[v][R+1]),d(g[v+1][R]),d(g[v][R])):(d(g[v][R+1]),d(g[v+1][R+1]),d(g[v+1][R]))}}function c(S){const E=new U;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(S),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function h(){const S=new U;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];const b=f(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;a.push(b,1-A)}_(),u()}function u(){for(let S=0;S<a.length;S+=6){const E=a[S+0],b=a[S+2],A=a[S+4],w=Math.max(E,b,A),g=Math.min(E,b,A);w>.9&&g<.1&&(E<.2&&(a[S+0]+=1),b<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,E){const b=S*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function _(){const S=new U,E=new U,b=new U,A=new U,w=new Be,g=new Be,v=new Be;for(let L=0,R=0;L<r.length;L+=9,R+=6){S.set(r[L+0],r[L+1],r[L+2]),E.set(r[L+3],r[L+4],r[L+5]),b.set(r[L+6],r[L+7],r[L+8]),w.set(a[R+0],a[R+1]),g.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),A.copy(S).add(E).add(b).divideScalar(3);const N=f(A);M(w,R+0,S,N),M(g,R+2,E,N),M(v,R+4,b,N)}}function M(S,E,b,A){A<0&&S.x===1&&(a[E]=S.x-1),b.x===0&&b.z===0&&(a[E]=A/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.vertices,e.indices,e.radius,e.detail)}}class fs extends yo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fs(e.radius,e.detail)}}class Dn extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,m=[],_=[],M=[],f=[];for(let p=0;p<h;p++){const S=p*d-a;for(let E=0;E<c;E++){const b=E*u-r;_.push(b,-S,0),M.push(0,0,1),f.push(E/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const E=S+c*p,b=S+c*(p+1),A=S+1+c*(p+1),w=S+1+c*p;m.push(E,b,w),m.push(b,A,w)}this.setIndex(m),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(M,3)),this.setAttribute("uv",new gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.widthSegments,e.heightSegments)}}class zi extends Dt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,m=new U,_=new Be;for(let M=0;M<=s;M++){for(let f=0;f<=n;f++){const p=r+f/n*a;m.x=u*Math.cos(p),m.y=u*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,h.push(_.x,_.y)}u+=d}for(let M=0;M<s;M++){const f=M*(n+1);for(let p=0;p<n;p++){const S=p+f,E=S,b=S+n+1,A=S+n+2,w=S+1;o.push(E,b,w),o.push(b,A,w)}}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ps extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new U,d=new U,m=[],_=[],M=[],f=[];for(let p=0;p<=n;p++){const S=[],E=p/n,b=a+E*o,A=e*Math.cos(b),w=Math.sqrt(e*e-A*A);let g=0;p===0&&a===0?g=.5/t:p===n&&l===Math.PI&&(g=-.5/t);for(let v=0;v<=t;v++){const L=v/t,R=s+L*r;u.x=-w*Math.cos(R),u.y=A,u.z=w*Math.sin(R),_.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),f.push(L+g,1-E),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const E=h[p][S+1],b=h[p][S],A=h[p+1][S],w=h[p+1][S+1];(p!==0||a>0)&&m.push(E,b,w),(p!==n-1||l<Math.PI)&&m.push(b,A,w)}this.setIndex(m),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(M,3)),this.setAttribute("uv",new gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Oi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Ml(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ml(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=Oi(i[t]);for(const s in n)e[s]=n[s]}return e}function Ml(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Wc={clone:Oi,merge:Yt};var ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ku,this.fragmentShader=Hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=zu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[n].value=new st().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Gu extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lt extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vu extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wu extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class So extends St{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Xc extends So{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const na=new st,yl=new U,Sl=new U;class qc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(yl),Sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(na,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ls||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ws=new U,Xs=new xn,pn=new U;class Yc extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ws,Xs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ws,Xs,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ws,Xs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ws,Xs,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kn=new U,bl=new Be,El=new Be;class Qt extends Yc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,bl,El),t.subVectors(El,bl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ns*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Xu extends qc{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}}class qu extends So{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class $c extends Yc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yu extends qc{constructor(){super(new $c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ja extends So{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Yu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ai=-90,Ri=1;class Qa extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(Ai,Ri,e,t);s.layers=this.layers,this.add(s);const r=new Qt(Ai,Ri,e,t);r.layers=this.layers,this.add(r);const a=new Qt(Ai,Ri,e,t);a.layers=this.layers,this.add(a);const o=new Qt(Ai,Ri,e,t);o.layers=this.layers,this.add(o);const l=new Qt(Ai,Ri,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Ai,Ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class $u extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Tl=new st;class Ku{constructor(e,t,n=0,s=1/0){this.ray=new br(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):at("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tl),this}intersectObject(e,t=!0,n=[]){return ja(e,this,n,t),n.sort(wl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ja(e[s],this,n,t);return n.sort(wl),n}}function wl(i,e){return i.distance-e.distance}function ja(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ja(r[a],e,t,!0)}}function Al(i,e,t,n){const s=Zu(n);switch(t){case Ec:return i*e;case oo:return i*e/s.components*s.byteLength;case lo:return i*e/s.components*s.byteLength;case li:return i*e*2/s.components*s.byteLength;case co:return i*e*2/s.components*s.byteLength;case Tc:return i*e*3/s.components*s.byteLength;case un:return i*e*4/s.components*s.byteLength;case ho:return i*e*4/s.components*s.byteLength;case tr:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:case Sa:return Math.max(i,16)*Math.max(e,8)/4;case va:case ya:return Math.max(i,8)*Math.max(e,8)/2;case ba:case Ea:case wa:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case hr:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Va:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ur:case $a:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zu(i){switch(i){case jt:case Mc:return{byteLength:1,components:1};case os:case yc:case yn:return{byteLength:2,components:1};case ro:case ao:return{byteLength:2,components:4};case Mn:case so:case hn:return{byteLength:4,components:1};case Sc:case bc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);function Kc(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ju(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<u.length;m++){const _=u[d],M=u[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,u[d]=M)}u.length=d+1;for(let m=0,_=u.length;m<_;m++){const M=u[m];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ju=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ud=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,df=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_f=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Af=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,If=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Of=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ap=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,op=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Qu,alphahash_pars_fragment:ju,alphamap_fragment:ed,alphamap_pars_fragment:td,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:sd,aomap_pars_fragment:rd,batching_pars_vertex:ad,batching_vertex:od,begin_vertex:ld,beginnormal_vertex:cd,bsdfs:hd,iridescence_fragment:ud,bumpmap_pars_fragment:dd,clipping_planes_fragment:fd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:md,clipping_planes_vertex:gd,color_fragment:_d,color_pars_fragment:xd,color_pars_vertex:vd,color_vertex:Md,common:yd,defaultnormal_vertex:Sd,displacementmap_pars_vertex:bd,displacementmap_vertex:Ed,emissivemap_fragment:Td,emissivemap_pars_fragment:wd,colorspace_fragment:Ad,colorspace_pars_fragment:Rd,envmap_fragment:Cd,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Ld,envmap_pars_vertex:Id,envmap_physical_pars_fragment:Vd,envmap_vertex:Dd,fog_vertex:Nd,fog_pars_vertex:Ud,fog_fragment:Fd,fog_pars_fragment:Od,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:zd,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Hd,lights_pars_begin:Gd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:qd,lights_phong_pars_fragment:Yd,lights_physical_fragment:$d,lights_physical_pars_fragment:Kd,lights_fragment_begin:Zd,lights_fragment_maps:Jd,lights_fragment_end:Qd,lightprobes_pars_fragment:jd,logdepthbuf_fragment:ef,logdepthbuf_pars_fragment:tf,logdepthbuf_pars_vertex:nf,logdepthbuf_vertex:sf,map_fragment:rf,map_pars_fragment:af,map_particle_fragment:of,map_particle_pars_fragment:lf,metalnessmap_fragment:cf,metalnessmap_pars_fragment:hf,morphinstance_vertex:uf,morphcolor_vertex:df,morphnormal_vertex:ff,morphtarget_pars_vertex:pf,morphtarget_vertex:mf,normal_fragment_begin:gf,normal_fragment_maps:_f,normal_pars_fragment:xf,normal_pars_vertex:vf,normal_vertex:Mf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:Sf,clearcoat_normal_fragment_maps:bf,clearcoat_pars_fragment:Ef,iridescence_pars_fragment:Tf,opaque_fragment:wf,packing:Af,premultiplied_alpha_fragment:Rf,project_vertex:Cf,dithering_fragment:Pf,dithering_pars_fragment:Lf,roughnessmap_fragment:If,roughnessmap_pars_fragment:Df,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Uf,shadowmap_vertex:Ff,shadowmask_pars_fragment:Of,skinbase_vertex:Bf,skinning_pars_vertex:zf,skinning_vertex:kf,skinnormal_vertex:Hf,specularmap_fragment:Gf,specularmap_pars_fragment:Vf,tonemapping_fragment:Wf,tonemapping_pars_fragment:Xf,transmission_fragment:qf,transmission_pars_fragment:Yf,uv_pars_fragment:$f,uv_pars_vertex:Kf,uv_vertex:Zf,worldpos_vertex:Jf,background_vert:Qf,background_frag:jf,backgroundCube_vert:ep,backgroundCube_frag:tp,cube_vert:np,cube_frag:ip,depth_vert:sp,depth_frag:rp,distance_vert:ap,distance_frag:op,equirect_vert:lp,equirect_frag:cp,linedashed_vert:hp,linedashed_frag:up,meshbasic_vert:dp,meshbasic_frag:fp,meshlambert_vert:pp,meshlambert_frag:mp,meshmatcap_vert:gp,meshmatcap_frag:_p,meshnormal_vert:xp,meshnormal_frag:vp,meshphong_vert:Mp,meshphong_frag:yp,meshphysical_vert:Sp,meshphysical_frag:bp,meshtoon_vert:Ep,meshtoon_frag:Tp,points_vert:wp,points_frag:Ap,shadow_vert:Rp,shadow_frag:Cp,sprite_vert:Pp,sprite_frag:Lp},ve={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},gn={basic:{uniforms:Yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Yt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Yt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Yt([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Yt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Yt([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Yt([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Yt([ve.common,ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Yt([ve.lights,ve.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};gn.physical={uniforms:Yt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const qs={r:0,b:0,g:0},Ip=new st,Zc=new Ve;Zc.set(-1,0,0,0,1,0,0,0,1);function Dp(i,e,t,n,s,r){const a=new Pe(0);let o=s===!0?0:1,l,c,h=null,u=0,d=null;function m(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const b=S.backgroundBlurriness>0;E=e.get(E,b)}return E}function _(S){let E=!1;const b=m(S);b===null?f(a,o):b&&b.isColor&&(f(b,1),E=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,E){const b=m(E);b&&b.isCubeTexture?(c===void 0&&(c=new it(new Tt(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Oi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zc),c.material.toneMapped=nt.getTransfer(b.colorSpace)!==ht,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new it(new Dn(2,2),new Kn({name:"BackgroundMaterial",uniforms:Oi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=nt.getTransfer(b.colorSpace)!==ht,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,E){S.getRGB(qs,Vc(i)),t.buffers.color.setClear(qs.r,qs.g,qs.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,f(a,o)},render:_,addToRenderList:M,dispose:p}}function Np(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(N,F,X,P,G){let $=!1;const z=u(N,P,X,F);r!==z&&(r=z,c(r.object)),$=m(N,P,X,G),$&&_(N,P,X,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,b(N,F,X,P),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,F,X,P){const G=P.wireframe===!0;let $=n[F.id];$===void 0&&($={},n[F.id]=$);const z=N.isInstancedMesh===!0?N.id:0;let ne=$[z];ne===void 0&&(ne={},$[z]=ne);let q=ne[X.id];q===void 0&&(q={},ne[X.id]=q);let Q=q[G];return Q===void 0&&(Q=d(l()),q[G]=Q),Q}function d(N){const F=[],X=[],P=[];for(let G=0;G<t;G++)F[G]=0,X[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:P,object:N,attributes:{},index:null}}function m(N,F,X,P){const G=r.attributes,$=F.attributes;let z=0;const ne=X.getAttributes();for(const q in ne)if(ne[q].location>=0){const ee=G[q];let Te=$[q];if(Te===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Te=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Te=N.instanceColor)),ee===void 0||ee.attribute!==Te||Te&&ee.data!==Te.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function _(N,F,X,P){const G={},$=F.attributes;let z=0;const ne=X.getAttributes();for(const q in ne)if(ne[q].location>=0){let ee=$[q];ee===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));const Te={};Te.attribute=ee,ee&&ee.data&&(Te.data=ee.data),G[q]=Te,z++}r.attributes=G,r.attributesNum=z,r.index=P}function M(){const N=r.newAttributes;for(let F=0,X=N.length;F<X;F++)N[F]=0}function f(N){p(N,0)}function p(N,F){const X=r.newAttributes,P=r.enabledAttributes,G=r.attributeDivisors;X[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),G[N]!==F&&(i.vertexAttribDivisor(N,F),G[N]=F)}function S(){const N=r.newAttributes,F=r.enabledAttributes;for(let X=0,P=F.length;X<P;X++)F[X]!==N[X]&&(i.disableVertexAttribArray(X),F[X]=0)}function E(N,F,X,P,G,$,z){z===!0?i.vertexAttribIPointer(N,F,X,G,$):i.vertexAttribPointer(N,F,X,P,G,$)}function b(N,F,X,P){M();const G=P.attributes,$=X.getAttributes(),z=F.defaultAttributeValues;for(const ne in $){const q=$[ne];if(q.location>=0){let Q=G[ne];if(Q===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const ee=Q.normalized,Te=Q.itemSize,Ne=e.get(Q);if(Ne===void 0)continue;const H=Ne.buffer,ge=Ne.type,ye=Ne.bytesPerElement,Ie=ge===i.INT||ge===i.UNSIGNED_INT||Q.gpuType===so;if(Q.isInterleavedBufferAttribute){const me=Q.data,He=me.isInterleavedBuffer===!0?me.stride:me.itemSize,Re=Q.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let _e=0;_e<q.locationSize;_e++)p(q.location+_e,me.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let _e=0;_e<q.locationSize;_e++)f(q.location+_e);i.bindBuffer(i.ARRAY_BUFFER,H);for(let _e=0;_e<q.locationSize;_e++)E(q.location+_e,Te/q.locationSize,ge,ee,He*ye,(Re+Te/q.locationSize*_e)*ye,Ie)}else{if(Q.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)p(q.location+me,Q.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<q.locationSize;me++)f(q.location+me);i.bindBuffer(i.ARRAY_BUFFER,H);for(let me=0;me<q.locationSize;me++)E(q.location+me,Te/q.locationSize,ge,ee,Te*ye,Te/q.locationSize*me*ye,Ie)}}else if(z!==void 0){const ee=z[ne];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(q.location,ee);break;case 3:i.vertexAttrib3fv(q.location,ee);break;case 4:i.vertexAttrib4fv(q.location,ee);break;default:i.vertexAttrib1fv(q.location,ee)}}}}S()}function A(){L();for(const N in n){const F=n[N];for(const X in F){const P=F[X];for(const G in P){const $=P[G];for(const z in $)h($[z].object),delete $[z];delete P[G]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;const F=n[N.id];for(const X in F){const P=F[X];for(const G in P){const $=P[G];for(const z in $)h($[z].object),delete $[z];delete P[G]}}delete n[N.id]}function g(N){for(const F in n){const X=n[F];for(const P in X){const G=X[P];if(G[N.id]===void 0)continue;const $=G[N.id];for(const z in $)h($[z].object),delete $[z];delete G[N.id]}}}function v(N){for(const F in n){const X=n[F],P=N.isInstancedMesh===!0?N.id:0,G=X[P];if(G!==void 0){for(const $ in G){const z=G[$];for(const ne in z)h(z[ne].object),delete z[ne];delete G[$]}delete X[P],Object.keys(X).length===0&&delete n[F]}}}function L(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:f,disableUnusedAttributes:S}}function Up(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Fp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==un&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const v=g===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==jt&&g!==hn&&!v&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:b,maxSamples:A,samples:w}}function Op(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Hn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const _=u.clippingPlanes,M=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!s||_===null||_.length===0||r&&!f)r?h(null):c();else{const S=r?0:n,E=S*4;let b=p.clippingState||null;l.value=b,b=h(_,d,E,m);for(let A=0;A!==E;++A)b[A]=t[A];p.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,_){const M=u!==null?u.length:0;let f=null;if(M!==0){if(f=l.value,_!==!0||f===null){const p=m+M*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let E=0,b=m;E!==M;++E,b+=4)a.copy(u[E]).applyMatrix4(S,o),a.normal.toArray(f,b),f[b+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,f}}class bo extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new kc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Tt(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Li});r.uniforms.tEquirect.value=t;const a=new it(s,r),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Gt),new Qa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Rl=256,Bp=3,zp=20,Jc=256,Qc=16,kp=3,Hp=new U,Gp=new Pe;class vr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qa(1,10,null),this._boxMesh=new it(new Tt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Hp}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,m=l.autoClearDepth,_=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(Gp));const f=new Qa(n,s,h);return f.position.copy(o),f.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=m,l.autoClearStencil=_,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Rl,Lc(e))}_fromTexture(e,t){e.mapping===Ni||e.mapping===rs?this._setSize(e.image.length===0?Rl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Cl(e,!1,!1),n=Math.log2(e)-Bp;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Cl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ni||e.mapping===rs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Pl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Vp(),this._integrationMaterial=Wp());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Qc);for(let a=0;a<=n;a++){const o=vr.lodToRoughness(a,n);if(a>n-kp)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Jc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Xp());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Cl(i,e,t){return new bo(i,{minFilter:Gn,generateMipmaps:e,type:yn,colorSpace:dr,depthBuffer:t})}function ms(i,e,t){return new Kn({name:i,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:Kt,blending:Li,depthTest:!1,depthWrite:!1})}function Vp(){return ms("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Wp(){return ms("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Qc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xp(){return ms("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${zp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Pl(){return ms("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ll(){return ms("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function qp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,m=!1){return d==null?null:m?a(d):r(d)}function r(d){if(d&&d.isTexture){const m=d.mapping;if(m===Cr||m===Pr)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const M=new bo(_.height);return M.fromEquirectangularTexture(i,d),e.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const m=d.mapping,_=m===Cr||m===Pr,M=m===Ni||m===rs;if(_||M){let f=t.get(d);const p=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new vr(i)),f=_?n.fromEquirectangular(d,f):n.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),f.texture;if(f!==void 0)return f.texture;{const S=d.image;return _&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new vr(i)),f=_?n.fromEquirectangular(d):n.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),d.addEventListener("dispose",h),f.texture):null}}}return d}function o(d,m){return m===Cr?d.mapping=Ni:m===Pr&&(d.mapping=rs),d}function l(d){let m=0;const _=6;for(let M=0;M<_;M++)d[M]!==void 0&&m++;return m===_}function c(d){const m=d.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Yp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&rr("WebGLRenderer: "+n+" extension not supported."),s}}}function $p(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const f in _.attributes)e.remove(_.attributes[f]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);const M=r.get(_);M&&(e.remove(M),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(_){const M=_.attributes;for(const f in M)e.update(M[f],i.ARRAY_BUFFER)}function u(_){const M=_.index,f=_.attributes.position;let p=0;if(f===void 0)return;const S=M!==null?M.array.length:f.array.length/3-1,E=f.count>=65535?Uc:Nc,b=new E(Math.ceil(S/3)*6,1),A=b.array;if(M!==null){const g=M.array;p=M.version;for(let v=0,L=0;v<S;v+=3){const R=g[v+0],N=g[v+1],F=g[v+2];A[L++]=R,A[L++]=N,A[L++]=N,A[L++]=F,A[L++]=F,A[L++]=R}}else{p=f.version;for(let g=0,v=0;g<S;g+=3){const L=g+0,R=g+1,N=g+2;A[v++]=L,A[v++]=R,A[v++]=R,A[v++]=N,A[v++]=N,A[v++]=L}}b.version=p;const w=r.get(_);w&&e.remove(w),r.set(_,b)}function d(_){const M=r.get(_);if(M){const f=_.index;f!==null&&M.version<f.version&&u(_)}else u(_);return r.get(_)}function m(){for(const _ in s){const M=s[_].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:d,dispose:m}}function Kp(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,u*a,m),t.update(d,n,m))}function h(u,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,m);let M=0;for(let f=0;f<m;f++)M+=d[f];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Zp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jp(i,e,t){const n=new WeakMap,s=new vt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let R=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var m=R;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),M===!0&&(b=2),f===!0&&(b=3);let A=o.attributes.position.count*b,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const g=new Float32Array(A*w*4*u),v=new Ic(g,A,w,u);v.type=hn,v.needsUpdate=!0;const L=b*4;for(let N=0;N<u;N++){const F=p[N],X=S[N],P=E[N],G=A*w*4*N;for(let $=0;$<F.count;$++){const z=$*L;_===!0&&(s.fromBufferAttribute(F,$),g[G+z+0]=s.x,g[G+z+1]=s.y,g[G+z+2]=s.z,g[G+z+3]=0),M===!0&&(s.fromBufferAttribute(X,$),g[G+z+4]=s.x,g[G+z+5]=s.y,g[G+z+6]=s.z,g[G+z+7]=0),f===!0&&(s.fromBufferAttribute(P,$),g[G+z+8]=s.x,g[G+z+9]=s.y,g[G+z+10]=s.z,g[G+z+11]=P.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new Be(A,w)},n.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let f=0;f<c.length;f++)_+=c[f];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Qp(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const jp={[fc]:"LINEAR_TONE_MAPPING",[pc]:"REINHARD_TONE_MAPPING",[mc]:"CINEON_TONE_MAPPING",[io]:"ACES_FILMIC_TONE_MAPPING",[_c]:"AGX_TONE_MAPPING",[xc]:"NEUTRAL_TONE_MAPPING",[gc]:"CUSTOM_TONE_MAPPING"};function em(i,e,t,n,s,r){const a=new vn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Dt;h.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gt([0,2,0,0,2,0],2));const u=new Gu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new it(h,u),m=new $c(-1,1,1,-1,0,1);let _=null,M=null,f=!1,p,S=null,E=[],b=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let g=0;g<E.length;g++){const v=E[g];v.setSize&&v.setSize(A,w)}},this.setEffects=function(A){E=A,b=E.length>0&&E[0].isRenderPass===!0;const w=a.width,g=a.height;E.length>0&&o===null&&(o=new vn(w,g,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new vn(w,g,{type:yn,depthBuffer:!1,stencilBuffer:!1}));const v=s===!0&&E.some(L=>L.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&c===null&&(c=new Fi(w,g),r===!0&&(c.format=Vn,c.type=Ui)),a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let L=0;L<E.length;L++){const R=E[L];R.setSize&&R.setSize(w,g),v&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,w){if(f||A.toneMapping===Ln&&E.length===0)return!1;if(S=w,w!==null){const g=w.width,v=w.height;(a.width!==g||a.height!==v)&&this.setSize(g,v)}return b===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=Ln,!0},this.hasRenderPass=function(){return b},this.end=function(A,w){A.toneMapping=p,f=!0;let g=a,v=o;for(let L=0;L<E.length;L++){const R=E[L];R.enabled!==!1&&(R.render(A,v,g,w),R.needsSwap!==!1&&(g=v,v=v===o?l:o))}if(_!==A.outputColorSpace||M!==A.toneMapping){_=A.outputColorSpace,M=A.toneMapping,u.defines={},nt.getTransfer(_)===ht&&(u.defines.SRGB_TRANSFER="");const L=jp[M];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(S),A.render(d,m),S=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const jc=new Wt,eh=new Fi(1,1),th=new Hc(1),nh=new Ic,ih=new _u,sh=new kc,Il=[],Dl=[],Nl=new Float32Array(16),Ul=new Float32Array(9),Fl=new Float32Array(4);function ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Il[s];if(r===void 0&&(r=new Float32Array(s),Il[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Er(i,e){let t=Dl[e];t===void 0&&(t=new Int32Array(e),Dl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function rm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Fl.set(n),i.uniformMatrix2fv(this.addr,!1,Fl),At(t,n)}}function am(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Ul.set(n),i.uniformMatrix3fv(this.addr,!1,Ul),At(t,n)}}function om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Nl.set(n),i.uniformMatrix4fv(this.addr,!1,Nl),At(t,n)}}function lm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function dm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function Tr(i){return i.version===0&&(i.compareFunction=Rc,i.needsUpdate=!0),i}function gm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Tr(eh):r=jc,t.setTexture2D(e||r,s)}function _m(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ih,s)}function xm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Tr(th):r=sh,t.setTextureCube(e||r,s)}function vm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nh,s)}function Mm(i){switch(i){case 5126:return tm;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return vm}}function ym(i,e){i.uniform1fv(this.addr,e)}function Sm(i,e){const t=ki(e,this.size,2);i.uniform2fv(this.addr,t)}function bm(i,e){const t=ki(e,this.size,3);i.uniform3fv(this.addr,t)}function Em(i,e){const t=ki(e,this.size,4);i.uniform4fv(this.addr,t)}function Tm(i,e){const t=ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wm(i,e){const t=ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Am(i,e){const t=ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rm(i,e){i.uniform1iv(this.addr,e)}function Cm(i,e){i.uniform2iv(this.addr,e)}function Pm(i,e){i.uniform3iv(this.addr,e)}function Lm(i,e){i.uniform4iv(this.addr,e)}function Im(i,e){i.uniform1uiv(this.addr,e)}function Dm(i,e){i.uniform2uiv(this.addr,e)}function Nm(i,e){i.uniform3uiv(this.addr,e)}function Um(i,e){i.uniform4uiv(this.addr,e)}function Fm(i,e,t){const n=this.cache,s=e.length,r=Er(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Tr(eh):a=jc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Om(i,e,t){const n=this.cache,s=e.length,r=Er(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ih,r[a])}function Bm(i,e,t){const n=this.cache,s=e.length,r=Er(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Tr(th):a=sh;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function zm(i,e,t){const n=this.cache,s=e.length,r=Er(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nh,r[a])}function km(i){switch(i){case 5126:return ym;case 35664:return Sm;case 35665:return bm;case 35666:return Em;case 35674:return Tm;case 35675:return wm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Im;case 36294:return Dm;case 36295:return Nm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}class Hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mm(t.type)}}class Gm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=km(t.type)}}class Vm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Ol(i,e){i.seq.push(e),i.map[e.id]=e}function Wm(i,e,t){const n=i.name,s=n.length;for(ia.lastIndex=0;;){const r=ia.exec(n),a=ia.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ol(t,c===void 0?new Hm(o,i,e):new Gm(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Vm(o),Ol(t,u)),t=u}}}class ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Wm(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Bl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Xm=37297;let qm=0;function Ym(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const zl=new Ve;function $m(i){nt._getMatrix(zl,nt.workingColorSpace,i);const e=`mat3( ${zl.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case fr:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ym(i.getShaderSource(e),o)}else return r}function Km(i,e){const t=$m(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Zm={[fc]:"Linear",[pc]:"Reinhard",[mc]:"Cineon",[io]:"ACESFilmic",[_c]:"AgX",[xc]:"Neutral",[gc]:"Custom"};function Jm(i,e){const t=Zm[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ys=new U;function Qm(){nt.getLuminanceCoefficients(Ys);const i=Ys.x.toFixed(4),e=Ys.y.toFixed(4),t=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function e0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function t0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function es(i){return i!==""}function Hl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Gl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n0=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(n0,i0)}function i0(i,e){const t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return eo(t)}const s0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(i){return i.replace(s0,r0)}function r0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const a0={[er]:"SHADOWMAP_TYPE_PCF",[ji]:"SHADOWMAP_TYPE_VSM"};function o0(i){return a0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const l0={[rs]:"ENVMAP_MODE_REFRACTION"};function c0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":l0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const h0={[dc]:"ENVMAP_BLENDING_MULTIPLY",[Fh]:"ENVMAP_BLENDING_MIX",[Oh]:"ENVMAP_BLENDING_ADD"};function u0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":h0[i.combine]||"ENVMAP_BLENDING_NONE"}function d0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=o0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=c0(t),u=u0(t),d=jm(t),m=e0(r),_=s.createProgram();let M,f,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(es).join(`
`),M.length>0&&(M+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(es).join(`
`),f.length>0&&(f+=`
`)):(M=[Wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),f=[Wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?$e.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Km("linearToOutputTexel",t.outputColorSpace),Qm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),a=eo(a),a=Hl(a,t),a=Gl(a,t),o=eo(o),o=Hl(o,t),o=Gl(o,t),a=Vl(a),o=Vl(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,f=["#define varying in",t.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=p+M+a,E=p+f+o,b=Bl(s,s.VERTEX_SHADER,S),A=Bl(s,s.FRAGMENT_SHADER,E);s.attachShader(_,b),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(b)||"",X=s.getShaderInfoLog(A)||"",P=N.trim(),G=F.trim(),$=X.trim();let z=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,A);else{const q=kl(s,b,"vertex"),Q=kl(s,A,"fragment");at("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+q+`
`+Q)}else P!==""?ze("WebGLProgram: Program Info Log:",P):(G===""||$==="")&&(ne=!1);ne&&(R.diagnostics={runnable:z,programLog:P,vertexShader:{log:G,prefix:M},fragmentShader:{log:$,prefix:f}})}s.deleteShader(b),s.deleteShader(A),g=new ar(s,_),v=t0(s,_)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(_,Xm)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let f0=0;class p0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new m0(e),t.set(e,n)),n}}class m0{constructor(e){this.id=f0++,this.code=e,this.usedTimes=0}}function g0(i){return i===li||i===hr||i===ur}function _0(i,e,t,n,s,r){const a=new go,o=new p0,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,v,L,R,N,F){const X=R.fog,P=N.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,z=e.get(g.envMap||G,$),ne=d[g.type];let q=n.precision;g.precision!==null&&(q=n.getMaxPrecision(g.precision),q!==g.precision&&ze("WebGLProgram.getParameters:",g.precision,"not supported, using",q,"instead."));const Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ee=Q!==void 0?Q.length:0;let Te=0;P.morphAttributes.position!==void 0&&(Te=1),P.morphAttributes.normal!==void 0&&(Te=2),P.morphAttributes.color!==void 0&&(Te=3);let Ne,H,ge,ye;if(ne){const xe=gn[ne];Ne=xe.vertexShader,H=xe.fragmentShader}else{Ne=g.vertexShader,H=g.fragmentShader;const xe=o.getVertexShaderStage(g),ct=o.getFragmentShaderStage(g);o.update(g,xe,ct),ge=xe.id,ye=ct.id}const Ie=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),He=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,_e=!!g.map,Se=!!g.matcap,be=!!z,ae=be&&z.isPMREMTexture===!0,Fe=!!g.aoMap,Ke=!!g.lightMap,Ze=!!g.bumpMap&&g.wireframe===!1,ke=!!g.normalMap,tt=!!g.displacementMap,Xe=!!g.emissiveMap,dt=!!g.metalnessMap,lt=!!g.roughnessMap,ft=g.anisotropy>0,D=g.clearcoat>0,bt=g.diffuseRoughness>0,ut=g.dispersion>0,_t=g.retroreflectivity>0,pe=g.iridescence>0,Et=g.sheen>0,Oe=g.transmission>0,Ge=ft&&!!g.anisotropyMap,T=D&&!!g.clearcoatMap,x=D&&!!g.clearcoatNormalMap,B=D&&!!g.clearcoatRoughnessMap,ie=bt&&!!g.diffuseRoughnessMap,j=pe&&!!g.iridescenceMap,oe=pe&&!!g.iridescenceThicknessMap,de=Et&&!!g.sheenColorMap,K=Et&&!!g.sheenRoughnessMap,Z=!!g.specularMap,ce=!!g.specularColorMap,C=!!g.specularIntensityMap,J=Oe&&!!g.transmissionMap,Y=Oe&&!!g.thicknessMap,he=!!g.gradientMap,re=!!g.alphaMap,le=g.alphaTest>0,Le=!!g.alphaHash,Ye=!!g.extensions;let se=Ln;g.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(se=i.toneMapping);const De=ae?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,qe={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:Ne,fragmentShader:H,defines:g.defines,customVertexShaderID:ge,customFragmentShaderID:ye,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:q,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:He,instancingColor:He&&N.instanceColor!==null,instancingMorph:He&&N.morphTexture!==null,outputColorSpace:Ie===null?i.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:_e,matcap:Se,envMap:be,envMapMode:be&&z.mapping,envMapPMREM:ae,envMapMaxLod:ae?De.length-1:null,envMapSize:ae?De[0].width:null,aoMap:Fe,lightMap:Ke,bumpMap:Ze,normalMap:ke,displacementMap:tt,emissiveMap:Xe,normalMapObjectSpace:ke&&g.normalMapType===kh,normalMapTangentSpace:ke&&g.normalMapType===Ka,packedNormalMap:ke&&g.normalMapType===Ka&&g0(g.normalMap.format),metalnessMap:dt,roughnessMap:lt,anisotropy:ft,anisotropyMap:Ge,clearcoat:D,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:bt,diffuseRoughnessMap:ie,dispersion:ut,retroreflection:_t,iridescence:pe,iridescenceMap:j,iridescenceThicknessMap:oe,sheen:Et,sheenColorMap:de,sheenRoughnessMap:K,specularMap:Z,specularColorMap:ce,specularIntensityMap:C,transmission:Oe,transmissionMap:J,thicknessMap:Y,gradientMap:he,opaque:g.transparent===!1&&g.blending===ai&&g.alphaToCoverage===!1,alphaMap:re,alphaTest:le,alphaHash:Le,combine:g.combine,mapUv:_e&&m(g.map.channel),aoMapUv:Fe&&m(g.aoMap.channel),lightMapUv:Ke&&m(g.lightMap.channel),bumpMapUv:Ze&&m(g.bumpMap.channel),normalMapUv:ke&&m(g.normalMap.channel),displacementMapUv:tt&&m(g.displacementMap.channel),emissiveMapUv:Xe&&m(g.emissiveMap.channel),metalnessMapUv:dt&&m(g.metalnessMap.channel),roughnessMapUv:lt&&m(g.roughnessMap.channel),anisotropyMapUv:Ge&&m(g.anisotropyMap.channel),clearcoatMapUv:T&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:j&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:de&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:K&&m(g.sheenRoughnessMap.channel),specularMapUv:Z&&m(g.specularMap.channel),specularColorMapUv:ce&&m(g.specularColorMap.channel),specularIntensityMapUv:C&&m(g.specularIntensityMap.channel),transmissionMapUv:J&&m(g.transmissionMap.channel),thicknessMapUv:Y&&m(g.thicknessMap.channel),alphaMapUv:re&&m(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ke||ft),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(_e||re),fog:!!X,useFog:g.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&ke===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Te,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:F.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:_e&&g.map.isVideoTexture===!0&&nt.getTransfer(g.map.colorSpace)===ht,decodeVideoTextureEmissive:Xe&&g.emissiveMap.isVideoTexture===!0&&nt.getTransfer(g.emissiveMap.colorSpace)===ht,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ht,flipSided:g.side===Kt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ye&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&g.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function M(g){const v=[];if(g.shaderID?v.push(g.shaderID):(v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID)),g.defines!==void 0)for(const L in g.defines)v.push(L),v.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(f(v,g),p(v,g),v.push(i.outputColorSpace)),v.push(g.customProgramCacheKey),v.join()}function f(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapPMREM),g.push(v.envMapMaxLod),g.push(v.envMapSize),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.diffuseRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.numSunLights),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numSunLightShadows),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.numLightProbeGrids),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function p(g,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){const v=d[g.type];let L;if(v){const R=gn[v];L=Wc.clone(R.uniforms)}else L=g.uniforms;return L}function E(g,v){let L=h.get(v);return L!==void 0?++L.usedTimes:(L=new d0(i,v,g,s),c.push(L),h.set(v,L)),L}function b(g){if(--g.usedTimes===0){const v=c.indexOf(g);c[v]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:S,acquireProgram:E,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:w}}function x0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function v0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ql(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,_,M,f,p){let S=i[e];return S===void 0?(S={id:d.id,object:d,geometry:m,material:_,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:f,group:p},i[e]=S):(S.id=d.id,S.object=d,S.geometry=m,S.material=_,S.materialVariant=a(d),S.groupOrder=M,S.renderOrder=d.renderOrder,S.z=f,S.group=p),e++,S}function l(d,m,_,M,f,p,S){S.reversedDepth===!0&&(f=-f);const E=o(d,m,_,M,f,p);_.transmission>0?n.push(E):_.transparent===!0?s.push(E):t.push(E)}function c(d,m,_,M,f,p){const S=o(d,m,_,M,f,p);_.transmission>0?n.unshift(S):_.transparent===!0?s.unshift(S):t.unshift(S)}function h(d,m){t.length>1&&t.sort(d||v0),n.length>1&&n.sort(m||Xl),s.length>1&&s.sort(m||Xl)}function u(){for(let d=e,m=i.length;d<m;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function M0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ql,i.set(n,[a])):s>=r.length?(a=new ql,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function y0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Pe};break;case"SpotLight":t={position:new U,direction:new U,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function S0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let b0=0;function E0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function T0(i){const e=new y0,t=S0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new st,a=new st;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,_=0,M=0,f=0,p=0,S=0,E=0,b=0,A=0,w=0,g=0,v=0,L=0,R=0;c.sort(E0);for(let F=0,X=c.length;F<X;F++){const P=c[F],G=P.color,$=P.intensity,z=P.distance;let ne=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===li?ne=P.shadow.map.texture:ne=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=G.r*$,u+=G.g*$,d+=G.b*$;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],$);R++}else if(P.isSunLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=ee,n.sunShadowMap[_]=ne;const Te=Q.getViewportCount();for(let Ne=0;Ne<Te;Ne++)n.sunShadowMatrix[M+Ne]=Q.getMatrix(Ne),n.sunShadowCascade[M+Ne]=Q._cascadeData[Ne];M+=Te,_++}n.sun[m]=q,m++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=ne,n.directionalShadowMatrix[f]=P.shadow.matrix,A++}n.directional[f]=q,f++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(G).multiplyScalar($),q.distance=z,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[S]=q;const Q=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,Q.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[S]=Q.matrix,P.castShadow){const ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[S]=ee,n.spotShadowMap[S]=ne,g++}S++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(G).multiplyScalar($),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[E]=q,E++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=P.shadow.matrix,w++}n.point[p]=q,p++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar($),q.groundColor.copy(P.groundColor).multiplyScalar($),n.hemi[b]=q,b++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.sunLength!==m||N.directionalLength!==f||N.pointLength!==p||N.spotLength!==S||N.rectAreaLength!==E||N.hemiLength!==b||N.numSunShadows!==_||N.numDirectionalShadows!==A||N.numPointShadows!==w||N.numSpotShadows!==g||N.numSpotMaps!==v||N.numLightProbes!==R)&&(n.sun.length=m,n.directional.length=f,n.spot.length=S,n.rectArea.length=E,n.point.length=p,n.hemi.length=b,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+v-L,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,N.sunLength=m,N.directionalLength=f,N.pointLength=p,N.spotLength=S,N.rectAreaLength=E,N.hemiLength=b,N.numSunShadows=_,N.numDirectionalShadows=A,N.numPointShadows=w,N.numSpotShadows=g,N.numSpotMaps=v,N.numLightProbes=R,n.version=b0++)}function l(c,h){let u=0,d=0,m=0,_=0,M=0,f=0;const p=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){const b=c[S];if(b.isSunLight){const A=n.sun[u];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),u++}else if(b.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(b.isSpotLight){const A=n.spot[_];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),_++}else if(b.isRectAreaLight){const A=n.rectArea[M];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(b.isPointLight){const A=n.point[m];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),m++}else if(b.isHemisphereLight){const A=n.hemi[f];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),f++}}}return{setup:o,setupView:l,state:n}}function Yl(i){const e=new T0(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function w0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Yl(i),e.set(s,[o])):r>=a.length?(o=new Yl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const A0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,C0=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],P0=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],$l=new st,Qi=new U,sa=new U;function L0(i,e,t){let n=new hs;const s=new Be,r=new Be,a=new vt,o=new Vu,l=new Wu,c={},h=t.maxTextureSize,u={[Yn]:Kt,[Kt]:Yn,[Ht]:Ht},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:A0,fragmentShader:R0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Dt;_.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new it(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let p=this.type;this.render=function(w,g,v){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;this.type===cc&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);const L=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Li),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const X=p!==this.type;X&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=w.length;P<G;P++){const $=w[P],z=$.shadow;if(z===void 0){ze("WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ne=z.getFrameExtents();s.multiply(ne),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,z.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=q,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ji){if($.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new vn(s.x,s.y,{format:li,type:yn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),z.map.texture.name=$.name+".shadowMap",z.map.depthTexture=new Fi(s.x,s.y,hn),z.map.depthTexture.name=$.name+".shadowMapDepth",z.map.depthTexture.format=$n,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ut,z.map.depthTexture.magFilter=Ut}else $.isPointLight?(z.map=new bo(s.x),z.map.depthTexture=new Hc(s.x,Mn)):(z.map=new vn(s.x,s.y),z.map.depthTexture=new Fi(s.x,s.y,Mn)),z.map.depthTexture.name=$.name+".shadowMap",z.map.depthTexture.format=$n,this.type===er?(z.map.depthTexture.compareFunction=q?Ac:wc,z.map.depthTexture.minFilter=Gt,z.map.depthTexture.magFilter=Gt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ut,z.map.depthTexture.magFilter=Ut);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();$.isPointLight!==!0&&z.updateMatrices($,v);const ee=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:v.layers;for(let Te=0;Te<Q;Te++){const Ne=z.getCamera(Te);if($.isPointLight){const H=z.camera,ge=z.matrix,ye=$.distance||H.far;ye!==H.far&&(H.far=ye,H.updateProjectionMatrix()),Qi.setFromMatrixPosition($.matrixWorld),H.position.copy(Qi),sa.copy(H.position),sa.add(C0[Te]),H.up.copy(P0[Te]),H.lookAt(sa),H.updateMatrixWorld(),ge.makeTranslation(-Qi.x,-Qi.y,-Qi.z),$l.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),z._frustum.setFromProjectionMatrix($l,H.coordinateSystem,H.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Te),i.clear();else{Te===0&&(i.setRenderTarget(z.map),i.clear());const H=z.getViewport(Te);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),F.viewport(a)}n=z.getFrustum(Te),b(g,v,Ne,$,ee,this.type)}z.isPointLightShadow!==!0&&this.type===ji&&S(z,v),z.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(L,R,N)};function S(w,g){const v=e.update(M);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new vn(s.x,s.y,{format:li,type:yn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(g,null,v,d,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(g,null,v,m,M,null)}function E(w,g,v,L){let R=null;const N=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)R=N;else if(R=v.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const F=R.uuid,X=g.uuid;let P=c[F];P===void 0&&(P={},c[F]=P);let G=P[X];G===void 0&&(G=R.clone(),P[X]=G,g.addEventListener("dispose",A)),R=G}if(R.visible=g.visible,R.wireframe=g.wireframe,L===ji?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:u[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=i.properties.get(R);F.light=v}return R}function b(w,g,v,L,R,N){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===ji)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const P=e.update(w),G=w.material;if(Array.isArray(G)){const $=P.groups;for(let z=0,ne=$.length;z<ne;z++){const q=$[z],Q=G[q.materialIndex];if(Q&&Q.visible){const ee=E(w,Q,L,N);w.onBeforeShadow(i,w,g,v,P,ee,q),i.renderBufferDirect(v,null,P,ee,w,q),w.onAfterShadow(i,w,g,v,P,ee,q)}}}else if(G.visible){const $=E(w,G,L,N);w.onBeforeShadow(i,w,g,v,P,$,null),i.renderBufferDirect(v,null,P,$,w,null),w.onAfterShadow(i,w,g,v,P,$,null)}}const X=w.children;for(let P=0,G=X.length;P<G;P++)b(X[P],g,v,L,R,N)}function A(w){w.target.removeEventListener("dispose",A);for(const v in c){const L=c[v],R=w.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function I0(i,e){function t(){let C=!1;const J=new vt;let Y=null;const he=new vt(0,0,0,0);return{setMask:function(re){Y!==re&&!C&&(i.colorMask(re,re,re,re),Y=re)},setLocked:function(re){C=re},setClear:function(re,le,Le,Ye,se){se===!0&&(re*=Ye,le*=Ye,Le*=Ye),J.set(re,le,Le,Ye),he.equals(J)===!1&&(i.clearColor(re,le,Le,Ye),he.copy(J))},reset:function(){C=!1,Y=null,he.set(-1,0,0,0)}}}function n(){let C=!1,J=!1,Y=null,he=null,re=null;return{setReversed:function(le){if(J!==le){const Le=e.get("EXT_clip_control");le?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),J=le;const Ye=re;re=null,this.setClear(Ye)}},getReversed:function(){return J},setTest:function(le){le?me(i.DEPTH_TEST):He(i.DEPTH_TEST)},setMask:function(le){Y!==le&&!C&&(i.depthMask(le),Y=le)},setFunc:function(le){if(J&&(le=Zh[le]),he!==le){switch(le){case ua:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case fa:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=le}},setLocked:function(le){C=le},setClear:function(le){re!==le&&(re=le,J&&(le=1-le),i.clearDepth(le))},reset:function(){C=!1,Y=null,he=null,re=null,J=!1}}}function s(){let C=!1,J=null,Y=null,he=null,re=null,le=null,Le=null,Ye=null,se=null;return{setTest:function(De){C||(De?me(i.STENCIL_TEST):He(i.STENCIL_TEST))},setMask:function(De){J!==De&&!C&&(i.stencilMask(De),J=De)},setFunc:function(De,qe,xe){(Y!==De||he!==qe||re!==xe)&&(i.stencilFunc(De,qe,xe),Y=De,he=qe,re=xe)},setOp:function(De,qe,xe){(le!==De||Le!==qe||Ye!==xe)&&(i.stencilOp(De,qe,xe),le=De,Le=qe,Ye=xe)},setLocked:function(De){C=De},setClear:function(De){se!==De&&(i.clearStencil(De),se=De)},reset:function(){C=!1,J=null,Y=null,he=null,re=null,le=null,Le=null,Ye=null,se=null}}}const r=new t,a=new n,o=new s;let l={};const c=new WeakMap;let h={},u={},d={},m=new WeakMap,_=[],M=null,f=!1,p=null,S=null,E=null,b=null,A=null,w=null,g=null,v=new Pe(0,0,0),L=0,R=!1,N=null,F=null,X=null,P=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=ne>=2);let Q=null,ee={};const Te=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),H=new vt().fromArray(Te),ge=new vt().fromArray(Ne);function ye(C,J,Y,he){const re=new Uint8Array(4),le=i.createTexture();i.bindTexture(C,le),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<Y;Le++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(J+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return le}const Ie={};Ie[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(ss),Ze(!1),ke(zo),me(i.CULL_FACE),Fe(Li);function me(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function He(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Re(C,J){return d[C]!==J?(i.bindFramebuffer(C,J),d[C]=J,C===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=J),C===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=J),!0):!1}function _e(C,J){let Y=_,he=!1;if(C){Y=m.get(J),Y===void 0&&(Y=[],m.set(J,Y));const re=C.textures;if(Y.length!==re.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Le=re.length;le<Le;le++)Y[le]=i.COLOR_ATTACHMENT0+le;Y.length=re.length,he=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,he=!0);he&&i.drawBuffers(Y)}function Se(C){return M!==C?(i.useProgram(C),M=C,!0):!1}const be={[Ci]:i.FUNC_ADD,[vh]:i.FUNC_SUBTRACT,[Mh]:i.FUNC_REVERSE_SUBTRACT};be[yh]=i.MIN,be[Sh]=i.MAX;const ae={[bh]:i.ZERO,[Eh]:i.ONE,[Th]:i.SRC_COLOR,[hc]:i.SRC_ALPHA,[Lh]:i.SRC_ALPHA_SATURATE,[Ch]:i.DST_COLOR,[Ah]:i.DST_ALPHA,[wh]:i.ONE_MINUS_SRC_COLOR,[uc]:i.ONE_MINUS_SRC_ALPHA,[Ph]:i.ONE_MINUS_DST_COLOR,[Rh]:i.ONE_MINUS_DST_ALPHA,[Ih]:i.CONSTANT_COLOR,[Dh]:i.ONE_MINUS_CONSTANT_COLOR,[Nh]:i.CONSTANT_ALPHA,[Uh]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(C,J,Y,he,re,le,Le,Ye,se,De){if(C===Li){f===!0&&(He(i.BLEND),f=!1);return}if(f===!1&&(me(i.BLEND),f=!0),C!==xh){if(C!==p||De!==R){if((S!==Ci||A!==Ci)&&(i.blendEquation(i.FUNC_ADD),S=Ci,A=Ci),De)switch(C){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ii:i.blendFunc(i.ONE,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:at("WebGLState: Invalid blending: ",C);break}else switch(C){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ko:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ho:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",C);break}E=null,b=null,w=null,g=null,v.set(0,0,0),L=0,p=C,R=De}return}re=re||J,le=le||Y,Le=Le||he,(J!==S||re!==A)&&(i.blendEquationSeparate(be[J],be[re]),S=J,A=re),(Y!==E||he!==b||le!==w||Le!==g)&&(i.blendFuncSeparate(ae[Y],ae[he],ae[le],ae[Le]),E=Y,b=he,w=le,g=Le),(Ye.equals(v)===!1||se!==L)&&(i.blendColor(Ye.r,Ye.g,Ye.b,se),v.copy(Ye),L=se),p=C,R=!1}function Ke(C,J){C.side===Ht?He(i.CULL_FACE):me(i.CULL_FACE);let Y=C.side===Kt;J&&(Y=!Y),Ze(Y),C.blending===ai&&C.transparent===!1?Fe(Li):Fe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const he=C.stencilWrite;o.setTest(he),he&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Xe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):He(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(C){N!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),N=C)}function ke(C){C!==gh?(me(i.CULL_FACE),C!==F&&(C===zo?i.cullFace(i.BACK):C===_h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):He(i.CULL_FACE),F=C}function tt(C){C!==X&&(z&&i.lineWidth(C),X=C)}function Xe(C,J,Y){C?(me(i.POLYGON_OFFSET_FILL),(P!==J||G!==Y)&&(P=J,G=Y,a.getReversed()&&(J=-J,Y=-Y),i.polygonOffset(J,Y))):He(i.POLYGON_OFFSET_FILL)}function dt(C){C?me(i.SCISSOR_TEST):He(i.SCISSOR_TEST)}function lt(C){C===void 0&&(C=i.TEXTURE0+$-1),Q!==C&&(i.activeTexture(C),Q=C)}function ft(C,J,Y){Y===void 0&&(Q===null?Y=i.TEXTURE0+$-1:Y=Q);let he=ee[Y];he===void 0&&(he={type:void 0,texture:void 0},ee[Y]=he),(he.type!==C||he.texture!==J)&&(Q!==Y&&(i.activeTexture(Y),Q=Y),i.bindTexture(C,J||Ie[C]),he.type=C,he.texture=J)}function D(){const C=ee[Q];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function bt(){try{i.compressedTexImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function ut(){try{i.compressedTexImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function _t(){try{i.texSubImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function pe(){try{i.texSubImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function Et(){try{i.compressedTexSubImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function Oe(){try{i.compressedTexSubImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function Ge(){try{i.texStorage2D(...arguments)}catch(C){at("WebGLState:",C)}}function T(){try{i.texStorage3D(...arguments)}catch(C){at("WebGLState:",C)}}function x(){try{i.texImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function B(){try{i.texImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function ie(C){return u[C]!==void 0?u[C]:i.getParameter(C)}function j(C,J){u[C]!==J&&(i.pixelStorei(C,J),u[C]=J)}function oe(C){H.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),H.copy(C))}function de(C){ge.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ge.copy(C))}function K(C,J){let Y=c.get(J);Y===void 0&&(Y=new WeakMap,c.set(J,Y));let he=Y.get(C);he===void 0&&(he=i.getUniformBlockIndex(J,C.name),i.uniformBlockBinding(J,he,he),Y.set(C,he))}function Z(C,J,Y){const re=c.get(J).get(C);l[re]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,re,Y),l[re]=Y)}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,ee={},d={},l={},m=new WeakMap,_=[],M=null,f=!1,p=null,S=null,E=null,b=null,A=null,w=null,g=null,v=new Pe(0,0,0),L=0,R=!1,N=null,F=null,X=null,P=null,G=null,H.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:He,bindFramebuffer:Re,drawBuffers:_e,useProgram:Se,setBlending:Fe,setMaterial:Ke,setFlipSided:Ze,setCullFace:ke,setLineWidth:tt,setPolygonOffset:Xe,setScissorTest:dt,activeTexture:lt,bindTexture:ft,unbindTexture:D,compressedTexImage2D:bt,compressedTexImage3D:ut,texImage2D:x,texImage3D:B,pixelStorei:j,getParameter:ie,updateUBOMapping:K,uniformBlockBinding:Z,texStorage2D:Ge,texStorage3D:T,texSubImage2D:_t,texSubImage3D:pe,compressedTexSubImage2D:Et,compressedTexSubImage3D:Oe,scissor:oe,viewport:de,reset:ce}}function D0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,u=new Set;let d;const m=new WeakMap,_=new Set,M=new FinalizationRegistry(T=>_.delete(T));let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,x){return f?new OffscreenCanvas(T,x):pr("canvas")}function S(T,x,B){let ie=1;const j=Ge(T);if((j.width>B||j.height>B)&&(ie=B/Math.max(j.width,j.height)),ie<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const oe=Math.floor(ie*j.width),de=Math.floor(ie*j.height);d===void 0&&(d=p(oe,de));const K=x?p(oe,de):d;return K.width=oe,K.height=de,K.getContext("2d").drawImage(T,0,0,oe,de),ze("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+oe+"x"+de+")."),K}else return"data"in T&&ze("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function E(T){return T.generateMipmaps}function b(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,x,B,ie,j,oe=!1){if(T!==null){if(i[T]!==void 0)return i[T];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de;ie&&(de=e.get("EXT_texture_norm16"),de||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8),B===i.UNSIGNED_SHORT&&de&&(K=de.R16_EXT),B===i.SHORT&&de&&(K=de.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),x===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8),B===i.UNSIGNED_SHORT&&de&&(K=de.RG16_EXT),B===i.SHORT&&de&&(K=de.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&de&&(K=de.RGB16_EXT),B===i.SHORT&&de&&(K=de.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),x===i.RGBA){const Z=oe?fr:nt.getTransfer(j);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=Z===ht?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&de&&(K=de.RGBA16_EXT),B===i.SHORT&&de&&(K=de.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function g(T,x){let B;return T?x===null||x===Mn||x===Ui?B=i.DEPTH24_STENCIL8:x===hn?B=i.DEPTH32F_STENCIL8:x===os&&(B=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mn||x===Ui?B=i.DEPTH_COMPONENT24:x===hn?B=i.DEPTH_COMPONENT32F:x===os&&(B=i.DEPTH_COMPONENT16),B}function v(T,x){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ut&&T.minFilter!==Gt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function L(T){const x=new WeakRef(T);n.get(T).__ref=x,_.add(x),M.register(T,x,x)}function R(T){const x=n.get(T).__ref;x!==void 0&&(_.delete(x),M.unregister(x))}function N(T){X(T.target)}function F(T){P(T.target)}function X(T){T.removeEventListener("dispose",N),R(T),$(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function P(T){T.removeEventListener("dispose",F),R(T),ne(T)}function G(){for(const T of _){const x=T.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):X(x))}_.clear(),u.clear()}function $(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,ie=m.get(B);if(ie){const j=ie[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&z(T),Object.keys(ie).length===0&&m.delete(B)}n.remove(T)}function z(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const B=T.source,ie=m.get(B);delete ie[x.__cacheKey],a.memory.textures--}function ne(T){const x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();const B=T.depthTexture;if(B&&B.renderTarget===T&&X(B),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let oe=0;oe<x.__webglFramebuffer[j].length;oe++)i.deleteFramebuffer(x.__webglFramebuffer[j][oe]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const ie=T.textures;for(let j=0,oe=ie.length;j<oe;j++){const de=n.get(ie[j]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(ie[j])}n.remove(T)}let q=0;function Q(){q=0}function ee(){return q}function Te(T){q=T}function Ne(){const T=q;return T>=s.maxTextures&&ze("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,T}function H(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ge(T,x){const B=n.get(T);if(T.isVideoTexture&&Et(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const ie=T.image;if(ie===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(B,T,x);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function ye(T,x){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Ke(B,T,x);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Ie(T,x){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Ke(B,T,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function me(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Ze(B,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const He={[as]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[xa]:i.MIRRORED_REPEAT},Re={[Ut]:i.NEAREST,[Bh]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[Lr]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},_e={[Gh]:i.NEVER,[Rc]:i.ALWAYS,[Vh]:i.LESS,[wc]:i.LEQUAL,[Wh]:i.EQUAL,[Ac]:i.GEQUAL,[Xh]:i.GREATER,[qh]:i.NOTEQUAL};function Se(T,x){if(x.type===hn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Gt||x.magFilter===Lr||x.magFilter===xs||x.magFilter===Gn||x.minFilter===Gt||x.minFilter===Lr||x.minFilter===xs||x.minFilter===Gn)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,He[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,He[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,He[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Re[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Re[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,_e[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ut||x.minFilter!==xs&&x.minFilter!==Gn||x.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function be(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",N),L(x));const ie=x.source;let j=m.get(ie);j===void 0&&(j={},m.set(ie,j));const oe=H(x);if(oe!==T.__cacheKey){j[oe]===void 0&&(j[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[oe].usedTimes++;const de=j[T.__cacheKey];de!==void 0&&(j[T.__cacheKey].usedTimes--,de.usedTimes===0&&z(x)),T.__cacheKey=oe,T.__webglTexture=j[oe].texture}return B}function ae(T,x,B){return Math.floor(Math.floor(T/B)/x)}function Fe(T,x,B,ie){const oe=T.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,ie,x.data);else{oe.sort((C,J)=>C.start-J.start);let de=0;for(let C=1;C<oe.length;C++){const J=oe[de],Y=oe[C],he=J.start+J.count,re=ae(Y.start,x.width,4),le=ae(J.start,x.width,4);Y.start<=he+1&&re===le&&ae(Y.start+Y.count-1,x.width,4)===re?J.count=Math.max(J.count,Y.start+Y.count-J.start):(++de,oe[de]=Y)}oe.length=de+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let C=0,J=oe.length;C<J;C++){const Y=oe[C],he=Math.floor(Y.start/4),re=Math.ceil(Y.count/4),le=he%x.width,Le=Math.floor(he/x.width),Ye=re,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(i.TEXTURE_2D,0,le,Le,Ye,se,B,ie,x.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function Ke(T,x,B){let ie=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=i.TEXTURE_3D);const j=be(T,x),oe=x.source;t.bindTexture(ie,T.__webglTexture,i.TEXTURE0+B);const de=n.get(oe);if(oe.version!==de.__version||j===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const se=nt.getPrimaries(nt.workingColorSpace),De=x.colorSpace===Pn?null:nt.getPrimaries(x.colorSpace),qe=x.colorSpace===Pn||se===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=S(x.image,!1,s.maxTextureSize);Z=Oe(x,Z);const ce=r.convert(x.format,x.colorSpace),C=r.convert(x.type);let J=w(x.internalFormat,ce,C,x.normalized,x.colorSpace,x.isVideoTexture);Se(ie,x);let Y;const he=x.mipmaps,re=x.isVideoTexture!==!0,le=de.__version===void 0||j===!0,Le=oe.dataReady,Ye=v(x,Z);if(x.isDepthTexture)J=g(x.format===Vn,x.type),le&&(re?t.texStorage2D(i.TEXTURE_2D,1,J,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,J,Z.width,Z.height,0,ce,C,null));else if(x.isDataTexture)if(he.length>0){re&&le&&t.texStorage2D(i.TEXTURE_2D,Ye,J,he[0].width,he[0].height);for(let se=0,De=he.length;se<De;se++)Y=he[se],re?Le&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Y.width,Y.height,ce,C,Y.data):t.texImage2D(i.TEXTURE_2D,se,J,Y.width,Y.height,0,ce,C,Y.data);x.generateMipmaps=!1}else re?(le&&t.texStorage2D(i.TEXTURE_2D,Ye,J,Z.width,Z.height),Le&&Fe(x,Z,ce,C)):t.texImage2D(i.TEXTURE_2D,0,J,Z.width,Z.height,0,ce,C,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){re&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,J,he[0].width,he[0].height,Z.depth);for(let se=0,De=he.length;se<De;se++)if(Y=he[se],x.format!==un)if(ce!==null)if(re){if(Le)if(x.layerUpdates.size>0){const qe=Al(Y.width,Y.height,x.format,x.type);for(const xe of x.layerUpdates){const ct=Y.data.subarray(xe*qe/Y.data.BYTES_PER_ELEMENT,(xe+1)*qe/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,xe,Y.width,Y.height,1,ce,ct)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,Z.depth,ce,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,J,Y.width,Y.height,Z.depth,0,Y.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,Z.depth,ce,C,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,J,Y.width,Y.height,Z.depth,0,ce,C,Y.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{re&&le&&t.texStorage2D(i.TEXTURE_2D,Ye,J,he[0].width,he[0].height);for(let se=0,De=he.length;se<De;se++)Y=he[se],x.format!==un?ce!==null?re?Le&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Y.width,Y.height,ce,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,se,J,Y.width,Y.height,0,Y.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Le&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Y.width,Y.height,ce,C,Y.data):t.texImage2D(i.TEXTURE_2D,se,J,Y.width,Y.height,0,ce,C,Y.data)}else if(x.isDataArrayTexture)if(re){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,J,Z.width,Z.height,Z.depth),Le)if(x.layerUpdates.size>0){const se=Al(Z.width,Z.height,x.format,x.type);for(const De of x.layerUpdates){const qe=Z.data.subarray(De*se/Z.data.BYTES_PER_ELEMENT,(De+1)*se/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,Z.width,Z.height,1,ce,C,qe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,C,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,Z.width,Z.height,Z.depth,0,ce,C,Z.data);else if(x.isData3DTexture)re?(le&&t.texStorage3D(i.TEXTURE_3D,Ye,J,Z.width,Z.height,Z.depth),Le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,C,Z.data)):t.texImage3D(i.TEXTURE_3D,0,J,Z.width,Z.height,Z.depth,0,ce,C,Z.data);else if(x.isFramebufferTexture){if(le)if(re)t.texStorage2D(i.TEXTURE_2D,Ye,J,Z.width,Z.height);else{let se=Z.width,De=Z.height;for(let qe=0;qe<Ye;qe++)t.texImage2D(i.TEXTURE_2D,qe,J,se,De,0,ce,C,null),se>>=1,De>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),Z.parentNode!==se){se.appendChild(Z),u.add(x),se.onpaint=De=>{const qe=De.changedElements;for(const xe of u)qe.includes(xe.image)&&(xe.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{const qe=i.RGBA,xe=i.RGBA,ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qe,xe,ct,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(he.length>0){if(re&&le){const se=Ge(he[0]);t.texStorage2D(i.TEXTURE_2D,Ye,J,se.width,se.height)}for(let se=0,De=he.length;se<De;se++)Y=he[se],re?Le&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ce,C,Y):t.texImage2D(i.TEXTURE_2D,se,J,ce,C,Y);x.generateMipmaps=!1}else if(re){if(le){const se=Ge(Z);t.texStorage2D(i.TEXTURE_2D,Ye,J,se.width,se.height)}Le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,C,Z)}else t.texImage2D(i.TEXTURE_2D,0,J,ce,C,Z);E(x)&&x.mipmapsAutoUpdate===!0&&b(ie),de.__version=oe.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ze(T,x,B){if(x.image.length!==6)return;const ie=be(T,x),j=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const oe=n.get(j);if(j.version!==oe.__version||ie===!0){t.activeTexture(i.TEXTURE0+B);const de=nt.getPrimaries(nt.workingColorSpace),K=x.colorSpace===Pn?null:nt.getPrimaries(x.colorSpace),Z=x.colorSpace===Pn||de===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ce=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,J=[];for(let xe=0;xe<6;xe++)!ce&&!C?J[xe]=S(x.image[xe],!0,s.maxCubemapSize):J[xe]=C?x.image[xe].image:x.image[xe],J[xe]=Oe(x,J[xe]);const Y=J[0],he=r.convert(x.format,x.colorSpace),re=r.convert(x.type);let le=w(x.internalFormat,he,re,x.normalized,x.colorSpace);const Le=x.isVideoTexture!==!0,Ye=oe.__version===void 0||ie===!0,se=j.dataReady;let De=v(x,Y);Se(i.TEXTURE_CUBE_MAP,x);let qe;if(x.isDepthTexture){if(le=g(x.format===Vn,x.type),Ye)if(Le)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,le,Y.width,Y.height);else for(let xe=0;xe<6;xe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,Y.width,Y.height,0,he,re,null)}else if(ce){Le&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,le,Y.width,Y.height);for(let xe=0;xe<6;xe++){qe=J[xe].mipmaps;for(let ct=0;ct<qe.length;ct++){const Rt=qe[ct];x.format!==un?he!==null?Le?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct,0,0,Rt.width,Rt.height,he,Rt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct,le,Rt.width,Rt.height,0,Rt.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct,0,0,Rt.width,Rt.height,he,re,Rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct,le,Rt.width,Rt.height,0,he,re,Rt.data)}}}else{if(qe=x.mipmaps,Le&&Ye){qe.length>0&&De++;const xe=Ge(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,le,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(C){Le?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,J[xe].width,J[xe].height,he,re,J[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,J[xe].width,J[xe].height,0,he,re,J[xe].data);for(let ct=0;ct<qe.length;ct++){const Nn=qe[ct].image[xe].image;Le?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct+1,0,0,Nn.width,Nn.height,he,re,Nn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct+1,le,Nn.width,Nn.height,0,he,re,Nn.data)}}else{Le?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,he,re,J[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,he,re,J[xe]);for(let ct=0;ct<qe.length;ct++){const Rt=qe[ct];Le?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct+1,0,0,he,re,Rt.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct+1,le,he,re,Rt.image[xe])}}}E(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),oe.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ke(T,x,B,ie,j,oe){const de=r.convert(B.format,B.colorSpace),K=r.convert(B.type),Z=w(B.internalFormat,de,K,B.normalized,B.colorSpace),ce=n.get(x),C=n.get(B);if(C.__renderTarget=x,!ce.__hasExternalTextures){const J=Math.max(1,x.width>>oe),Y=Math.max(1,x.height>>oe);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,oe,Z,J,Y,x.depth,0,de,K,null):t.texImage2D(j,oe,Z,J,Y,0,de,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),pe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,C.__webglTexture,0,_t(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,C.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(T,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const ie=x.depthTexture,j=ie&&ie.isDepthTexture?ie.type:null,oe=g(x.stencilBuffer,j),de=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(x),oe,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(x),oe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,oe,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,T)}else{const ie=x.textures;for(let j=0;j<ie.length;j++){const oe=ie[j],de=r.convert(oe.format,oe.colorSpace),K=r.convert(oe.type),Z=w(oe.internalFormat,de,K,oe.normalized,oe.colorSpace);pe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(x),Z,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(x),Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xe(T,x,B){const ie=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(x.depthTexture);j.__renderTarget=x;const oe=ie?x.depthTexture.image[0]:x.depthTexture.image;(!j.__webglTexture||oe.width!==x.width||oe.height!==x.height)&&(oe.width=x.width,oe.height=x.height,x.depthTexture.needsUpdate=!0),ie?me(x.depthTexture,0):ge(x.depthTexture,0);const de=j.__webglTexture,K=_t(x),Z=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ce=x.depthTexture.format===Vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===$n)pe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,Z,de,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,ce,Z,de,0);else if(x.depthTexture.format===Vn)pe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,Z,de,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,ce,Z,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const ie=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ie){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ie.removeEventListener("dispose",j)};ie.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=ie}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let ie=0;ie<6;ie++)Xe(x.__webglFramebuffer[ie],T,ie);else T.texture.mipmaps.length>0?Xe(x.__webglFramebuffer[0],T,0):Xe(x.__webglFramebuffer,T,0);else if(B){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]===void 0)x.__webglDepthbuffer[ie]=i.createRenderbuffer(),tt(x.__webglDepthbuffer[ie],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,oe)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),tt(x.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,x,B){const ie=n.get(T);x!==void 0&&ke(ie.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&dt(T)}function ft(T){const x=T.texture,B=n.get(T),ie=n.get(x);T.addEventListener("dispose",F),L(T);const j=T.textures,oe=T.isWebGLCubeRenderTarget===!0,de=j.length>1;if(de||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=x.version,a.memory.textures++),oe){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[K][Z]=i.createFramebuffer()}else B.__webglFramebuffer[K]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)B.__webglFramebuffer[K]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(de)for(let K=0,Z=j.length;K<Z;K++){const ce=n.get(j[K]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&pe(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){const Z=j[K];B.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[K]);const ce=r.convert(Z.format,Z.colorSpace),C=r.convert(Z.type),J=w(Z.internalFormat,ce,C,Z.normalized,Z.colorSpace,T.isXRRenderTarget===!0),Y=_t(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,J,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,B.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Se(i.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)ke(B.__webglFramebuffer[K][Z],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else ke(B.__webglFramebuffer[K],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);E(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(de){for(let K=0,Z=j.length;K<Z;K++){const ce=j[K],C=n.get(ce);let J=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,C.__webglTexture),Se(J,ce),ke(B.__webglFramebuffer,T,ce,i.COLOR_ATTACHMENT0+K,J,0),E(ce)&&b(J)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,ie.__webglTexture),Se(K,x),x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)ke(B.__webglFramebuffer[Z],T,x,i.COLOR_ATTACHMENT0,K,Z);else ke(B.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,K,0);E(x)?b(K):x.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&dt(T)}function D(T){const x=T.textures;for(let B=0,ie=x.length;B<ie;B++){const j=x[B];if(E(j)&&j.mipmapsAutoUpdate===!0){const oe=A(T),de=n.get(j).__webglTexture;t.bindTexture(oe,de),b(oe),t.unbindTexture()}}}const bt=[];function ut(T){if(T.samples>0){if(pe(T)===!1){const x=T.textures,B=T.width,ie=T.height;let j=i.COLOR_BUFFER_BIT;const oe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(T),K=x.length>1;if(K)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);const C=n.get(x[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,B,ie,0,0,B,ie,j,i.NEAREST),l===!0&&(bt.length=0,bt.push(i.COLOR_ATTACHMENT0+ce),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&bt.push(oe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);const C=n.get(x[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function _t(T){return Math.min(s.maxSamples,T.samples)}function pe(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Et(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Oe(T,x){const B=T.colorSpace,ie=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==dr&&B!==Pn&&(nt.getTransfer(B)===ht?(ie!==un||j!==jt)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",B)),x}function Ge(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Ne,this.resetTextureUnits=Q,this.getTextureUnits=ee,this.setTextureUnits=Te,this.setTexture2D=ge,this.setTexture2DArray=ye,this.setTexture3D=Ie,this.setTextureCube=me,this.rebindTextures=lt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=pe,this.dispose=G}function N0(i,e){function t(n,s=Pn){let r;const a=nt.getTransfer(s);if(n===jt)return i.UNSIGNED_BYTE;if(n===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mc)return i.BYTE;if(n===yc)return i.SHORT;if(n===os)return i.UNSIGNED_SHORT;if(n===so)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===Ec)return i.ALPHA;if(n===Tc)return i.RGB;if(n===un)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Vn)return i.DEPTH_STENCIL;if(n===oo)return i.RED;if(n===lo)return i.RED_INTEGER;if(n===li)return i.RG;if(n===co)return i.RG_INTEGER;if(n===ho)return i.RGBA_INTEGER;if(n===tr||n===nr||n===ir||n===sr)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===Ma||n===ya||n===Sa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Ea||n===Ta||n===wa||n===Aa||n===hr||n===Ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ba||n===Ea)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wa)return r.COMPRESSED_R11_EAC;if(n===Aa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===hr)return r.COMPRESSED_RG11_EAC;if(n===Ra)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ca||n===Pa||n===La||n===Ia||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ca)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Wa||n===Xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===Ya||n===ur||n===$a)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const U0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class O0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Gc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kn({vertexShader:U0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new Dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B0 extends ci{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,_=null;const M=typeof XRWebGLBinding<"u",f=new O0,p={},S=t.getContextAttributes();let E=null,b=null;const A=[],w=[],g=new Be;let v=null,L=null;const R=new Qt;R.viewport=new vt;const N=new Qt;N.viewport=new vt;const F=[R,N],X=new $u;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ge=A[H];return ge===void 0&&(ge=new Br,A[H]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(H){let ge=A[H];return ge===void 0&&(ge=new Br,A[H]=ge),ge.getGripSpace()},this.getHand=function(H){let ge=A[H];return ge===void 0&&(ge=new Br,A[H]=ge),ge.getHandSpace()};function $(H){const ge=w.indexOf(H.inputSource);if(ge===-1)return;const ye=A[ge];ye!==void 0&&(ye.update(H.inputSource,H.frame,c||a),ye.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ne);for(let H=0;H<A.length;H++){const ge=w[H];ge!==null&&(w[H]=null,A[H].disconnect(ge))}P=null,G=null,f.reset();for(const H in p)delete p[H];if(e.setRenderTarget(E),m=null,d=null,u=null,s=null,b=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(g.width,g.height,!1),L!==null){const H=L.camera;H.fov=L.fov,H.zoom=L.zoom,H.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ie=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?Vn:$n,Ie=S.stencil?Ui:Mn);const He={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new vn(d.textureWidth,d.textureHeight,{format:un,type:jt,depthTexture:new Fi(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new vn(m.framebufferWidth,m.framebufferHeight,{format:un,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ne(H){for(let ge=0;ge<H.removed.length;ge++){const ye=H.removed[ge],Ie=w.indexOf(ye);Ie>=0&&(w[Ie]=null,A[Ie].disconnect(ye))}for(let ge=0;ge<H.added.length;ge++){const ye=H.added[ge];let Ie=w.indexOf(ye);if(Ie===-1){for(let He=0;He<A.length;He++)if(He>=w.length){w.push(ye),Ie=He;break}else if(w[He]===null){w[He]=ye,Ie=He;break}if(Ie===-1)break}const me=A[Ie];me&&me.connect(ye)}}function q(H,ge){ge===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ge.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let ge=H.near,ye=H.far;f.texture!==null&&(f.depthNear>0&&(ge=f.depthNear),f.depthFar>0&&(ye=f.depthFar)),X.near=N.near=R.near=ge,X.far=N.far=R.far=ye,(P!==X.near||G!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),P=X.near,G=X.far),X.layers.mask=H.layers.mask|6,R.layers.mask=X.layers.mask&-5,N.layers.mask=X.layers.mask&-3;const Ie=H.parent,me=X.cameras;q(X,Ie);for(let He=0;He<me.length;He++)q(me[He],Ie);X.projectionMatrix.copy(R.projectionMatrix),X.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&H.isPerspectiveCamera&&(L={camera:H,fov:H.fov,zoom:H.zoom}),Q(H,X,Ie)};function Q(H,ge,ye){ye===null?H.matrix.copy(ge.matrixWorld):(H.matrix.copy(ye.matrixWorld),H.matrix.invert(),H.matrix.multiply(ge.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ge.projectionMatrix),H.projectionMatrixInverse.copy(ge.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=cs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(X)},this.getCameraTexture=function(H){return p[H]};let ee=null;function Te(H,ge){if(h=ge.getViewerPose(c||a),_=ge,h!==null){const ye=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Ie=!1;ye.length!==X.cameras.length&&(X.cameras.length=0,Ie=!0);for(let _e=0;_e<ye.length;_e++){const Se=ye[_e];let be=null;if(m!==null)be=m.getViewport(Se);else{const Fe=u.getViewSubImage(d,Se);be=Fe.viewport,_e===0&&(e.setRenderTargetTextures(b,Fe.colorTexture,Fe.depthStencilTexture),e.setRenderTarget(b))}let ae=F[_e];ae===void 0&&(ae=new Qt,ae.layers.enable(_e),ae.viewport=new vt,F[_e]=ae),ae.matrix.fromArray(Se.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Se.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(be.x,be.y,be.width,be.height),_e===0&&(X.matrix.copy(ae.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ie===!0&&X.cameras.push(ae)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const _e=u.getDepthInformation(ye[0]);_e&&_e.isValid&&_e.texture&&f.init(_e,s.renderState)}if(me&&me.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let _e=0;_e<ye.length;_e++){const Se=ye[_e].camera;if(Se){let be=p[Se];be||(be=new Gc,p[Se]=be);const ae=u.getCameraImage(Se);be.sourceTexture=ae}}}}for(let ye=0;ye<A.length;ye++){const Ie=w[ye],me=A[ye];Ie!==null&&me!==void 0&&me.update(Ie,ge,c||a)}ee&&ee(H,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),_=null}const Ne=new Kc;Ne.setAnimationLoop(Te),this.setAnimationLoop=function(H){ee=H},this.dispose=function(){}}}const z0=new st,rh=new Ve;rh.set(-1,0,0,0,1,0,0,0,1);function k0(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Vc(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,S,E,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),u(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(r(f,p),_(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),M(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,S,E):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Kt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Kt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const S=e.get(p),E=S.envMap,b=S.envMapRotation;E&&(f.envMap.value=E,f.envMapRotation.value.setFromMatrix4(z0.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(rh),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,S,E){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=E*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.diffuseRoughness>0&&(f.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function M(f,p){const S=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H0(i,e,t,n){let s={},r={};function a(S,E){const b=E.program;n.uniformBlockBinding(S,b,s[S.id])}function o(S,E){let b=s[S.id];b===void 0&&(_(S),b=l(S),s[S.id]=b,S.addEventListener("dispose",f));const A=E.program;n.updateUBOMapping(S,A);const w=e.render.frame;r[S.id]!==w&&(c(S),r[S.id]=w)}function l(S){const E=i.createBuffer(),b=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,A),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(S){const E=s[S.id],b=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,g=b.length;w<g;w++){const v=b[w];if(Array.isArray(v))for(let L=0,R=v.length;L<R;L++)h(v[L],w,L,A);else h(v,w,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,E,b,A){if(d(S,E,b,A)===!0){const w=S.__offset,g=S.value;if(Array.isArray(g)){let v=0;for(let L=0;L<g.length;L++){const R=g[L],N=M(R,!0);u(R,S.__data,v),v+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(g,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,S.__data)}}function u(S,E,b){typeof S=="number"||typeof S=="boolean"?E[b]=S:S.isMatrix3?(E[b]=S.elements[0],E[b+1]=S.elements[1],E[b+2]=S.elements[2],E[b+3]=0,E[b+4]=S.elements[3],E[b+5]=S.elements[4],E[b+6]=S.elements[5],E[b+7]=0,E[b+8]=S.elements[6],E[b+9]=S.elements[7],E[b+10]=S.elements[8],E[b+11]=0):ArrayBuffer.isView(S)?E.set(S.subarray(0,E.length-b),b):S.toArray(E,b)}function d(S,E,b,A){const w=S.value,g=E+"_"+b;if(Array.isArray(w)){A[g]===void 0&&(A[g]=[]);const v=A[g];let L=!1;for(let R=0;R<w.length;R++)m(w[R],v,R)===!0&&(L=!0);return L}return m(w,A,g)}function m(S,E,b){if(E[b]===void 0)return typeof S=="number"||typeof S=="boolean"?E[b]=S:ArrayBuffer.isView(S)?E[b]=S.slice():E[b]=S.clone(),!0;{const A=E[b];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return E[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function _(S){const E=S.uniforms;let b=0;const A=16;for(let g=0,v=E.length;g<v;g++){const L=Array.isArray(E[g])?E[g]:[E[g]];for(let R=0,N=L.length;R<N;R++){const F=L[R],X=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(E[g])||Array.isArray(F.value);let G=b;for(let z=0,ne=X.length;z<ne;z++){const q=X[z],Q=M(q,P),ee=b%A,Te=ee%Q.boundary,Ne=ee+Te;b+=Te,Ne!==0&&A-Ne<Q.storage&&(b+=A-Ne),z===0&&(G=b),b+=Q.storage}const $=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new $((b-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}const w=b%A;return w>0&&(b+=A-w),S.__size=b,S.__cache={},this}function M(S,E){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=16,b.storage=48):S.isMatrix4?(b.boundary=16,b.storage=64):S.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",S),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function f(S){const E=S.target;E.removeEventListener("dispose",f),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:p}}const G0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function V0(){return mn===null&&(mn=new vo(G0,16,16,li,yn),mn.name="DFG_LUT",mn.minFilter=Gt,mn.magFilter=Gt,mn.wrapS=_n,mn.wrapT=_n,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class Kl{constructor(e={}){const{canvas:t=$h(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=jt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const M=m,f=new Set([ho,co,lo]),p=new Set([jt,Mn,os,Ui,ro,ao]),S=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let A=null,w=null;const g=[],v=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1,F=null,X=null,P=null,G=null;this._outputColorSpace=kt;let $=0,z=0,ne=null,q=-1,Q=null;const ee=new vt,Te=new vt;let Ne=null;const H=new Pe(0);let ge=0,ye=t.width,Ie=t.height,me=1,He=null,Re=null;const _e=new vt(0,0,ye,Ie),Se=new vt(0,0,ye,Ie);let be=!1;const ae=new hs,Fe=new Mo;let Ke=!1,Ze=!1;const ke=new st,tt=new U,Xe=new vt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function ft(){return ne===null?me:1}let D=n;function bt(y,I){return t.getContext(y,I)}let ut,_t,pe,Et,Oe,Ge,T,x,B,ie,j,oe,de,K,Z,ce,C,J,Y,he,re,le,Le;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${no}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",xe,!1),D===null){const I="webgl2";if(D=bt(I,y),D===null)throw bt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(y){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),at("WebGLRenderer: "+y.message),y}function Ye(){ut=new Yp(D),ut.init(),re=new N0(D,ut),_t=new Fp(D,ut,e,re),pe=new I0(D,ut),_t.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),X=D.createFramebuffer(),P=D.createFramebuffer(),G=D.createFramebuffer(),Et=new Zp(D),Oe=new x0,Ge=new D0(D,ut,pe,Oe,_t,re,Et),T=new qp(R),x=new Ju(D),le=new Np(D,x),B=new $p(D,x,Et,le),ie=new Qp(D,B,x,le,Et),J=new Jp(D,_t,Ge),Z=new Op(Oe),j=new _0(R,T,ut,_t,le,Z),oe=new k0(R,Oe),de=new M0,K=new w0(ut),C=new Dp(R,T,pe,ie,_,l),ce=new L0(R,ie,_t),Le=new H0(D,Et,_t,pe),Y=new Up(D,ut,Et),he=new Kp(D,ut,Et),Et.programs=j.programs,R.capabilities=_t,R.extensions=ut,R.properties=Oe,R.renderLists=de,R.shadowMap=ce,R.state=pe,R.info=Et}M!==jt&&(L=new em(M,t.width,t.height,o,s,r));const se=new B0(R,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=ut.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ut.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(y){y!==void 0&&(me=y,this.setSize(ye,Ie,!1))},this.getSize=function(y){return y.set(ye,Ie)},this.setSize=function(y,I,W=!0){if(se.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=y,Ie=I,t.width=Math.floor(y*me),t.height=Math.floor(I*me),W===!0&&(t.style.width=y+"px",t.style.height=I+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(ye*me,Ie*me).floor()},this.setDrawingBufferSize=function(y,I,W){ye=y,Ie=I,me=W,t.width=Math.floor(y*W),t.height=Math.floor(I*W),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(M===jt){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ee)},this.getViewport=function(y){return y.copy(_e)},this.setViewport=function(y,I,W,O){y.isVector4?_e.set(y.x,y.y,y.z,y.w):_e.set(y,I,W,O),pe.viewport(ee.copy(_e).multiplyScalar(ft()).round())},this.getScissor=function(y){return y.copy(Se)},this.setScissor=function(y,I,W,O){y.isVector4?Se.set(y.x,y.y,y.z,y.w):Se.set(y,I,W,O),pe.scissor(Te.copy(Se).multiplyScalar(ft()).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(y){pe.setScissorTest(be=y)},this.setOpaqueSort=function(y){He=y},this.setTransparentSort=function(y){Re=y},this.getClearColor=function(y){return y.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,W=!0){let O=0;if(y){let k=!1;if(ne!==null){const fe=ne.texture.format;k=f.has(fe)}if(k){const fe=ne.texture.type,Ee=p.has(fe),ue=C.getClearColor(),Me=C.getClearAlpha(),Ce=ue.r,We=ue.g,Qe=ue.b;Ee?(S[0]=Ce,S[1]=We,S[2]=Qe,S[3]=Me,D.clearBufferuiv(D.COLOR,0,S)):(E[0]=Ce,E[1]=We,E[2]=Qe,E[3]=Me,D.clearBufferiv(D.COLOR,0,E))}else O|=D.COLOR_BUFFER_BIT}I&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),C.dispose(),de.dispose(),K.dispose(),Ge.dispose(),Oe.dispose(),T.dispose(),ie.dispose(),B.dispose(),le.dispose(),Le.dispose(),j.dispose(),se.dispose(),se.removeEventListener("sessionstart",Co),se.removeEventListener("sessionend",Po),Qn.stop()};function De(y){y.preventDefault(),mr("WebGLRenderer: Context Lost."),N=!0}function qe(){mr("WebGLRenderer: Context Restored."),N=!1;const y=Et.autoReset,I=ce.enabled,W=ce.autoUpdate,O=ce.needsUpdate,k=ce.type;Ye(),Et.autoReset=y,ce.enabled=I,ce.autoUpdate=W,ce.needsUpdate=O,ce.type=k}function xe(y){at("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ct(y){const I=y.target;I.removeEventListener("dispose",ct),Rt(I)}function Rt(y){Nn(y),Oe.remove(y)}function Nn(y){const I=Oe.get(y).programs;I!==void 0&&(I.forEach(function(W){j.releaseProgram(W)}),y.isShaderMaterial&&j.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,W,O,k,fe){I===null&&(I=dt);const Ee=k.isMesh&&k.matrixWorld.determinantAffine()<0,ue=fh(y,I,W,O,k);pe.setMaterial(O,Ee);let Me=W.index,Ce=1;if(O.wireframe===!0){if(Me=B.getWireframeAttribute(W),Me===void 0)return;Ce=2}const We=W.drawRange,Qe=W.attributes.position;let we=We.start*Ce,je=(We.start+We.count)*Ce;fe!==null&&(we=Math.max(we,fe.start*Ce),je=Math.min(je,(fe.start+fe.count)*Ce)),Me!==null?(we=Math.max(we,0),je=Math.min(je,Me.count)):Qe!=null&&(we=Math.max(we,0),je=Math.min(je,Qe.count));const Mt=je-we;if(Mt<0||Mt===1/0)return;le.setup(k,O,ue,W,Me);let mt,pt=Y;if(Me!==null&&(mt=x.get(Me),pt=he,pt.setIndex(mt)),k.isMesh)O.wireframe===!0?(pe.setLineWidth(O.wireframeLinewidth*ft()),pt.setMode(D.LINES)):pt.setMode(D.TRIANGLES);else if(k.isLine){let Ft=O.linewidth;Ft===void 0&&(Ft=1),pe.setLineWidth(Ft*ft()),k.isLineSegments?pt.setMode(D.LINES):k.isLineLoop?pt.setMode(D.LINE_LOOP):pt.setMode(D.LINE_STRIP)}else k.isPoints?pt.setMode(D.POINTS):k.isSprite&&pt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))pt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ft=k._multiDrawStarts,Ae=k._multiDrawCounts,Xt=k._multiDrawCount,ot=Me?x.get(Me).bytesPerElement:1,jn=Oe.get(O).currentProgram.getUniforms();for(let Ot=0;Ot<Xt;Ot++)jn.setValue(D,"_gl_DrawID",Ot),pt.render(Ft[Ot]/ot,Ae[Ot])}else if(k.isInstancedMesh)pt.renderInstances(we,Mt,k.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ae=Math.min(W.instanceCount,Ft);pt.renderInstances(we,Mt,Ae)}else pt.render(we,Mt)};function Ro(y,I,W,O){F!==null&&y.isNodeMaterial&&F.setObject(O,y),Ke===!0&&Z.setState(y,W,!1),y.transparent===!0&&y.side===Ht&&y.forceSinglePass===!1?(y.side=Kt,y.needsUpdate=!0,Hi(y,I,O),y.side=Yn,y.needsUpdate=!0,Hi(y,I,O),y.side=Ht):Hi(y,I,O)}this.compile=function(y,I,W=null){W===null&&(W=y),F!==null&&F.renderStart(y,I,W),w=K.get(W),w.init(I),v.push(w),W.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),y!==W&&y.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),Ze=this.localClippingEnabled,Ke=Z.init(this.clippingPlanes,Ze),Ke===!0&&Z.setGlobalState(this.clippingPlanes,I),F!==null&&ce.render(w.state.shadowsArray,W,I);const O=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const fe=k.material;if(fe)if(Array.isArray(fe))for(let Ee=0;Ee<fe.length;Ee++){const ue=fe[Ee];Ro(ue,W,I,k),O.add(ue)}else Ro(fe,W,I,k),O.add(fe)}),w=v.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(y,I,W=null){const O=this.compile(y,I,W);return new Promise(k=>{function fe(){if(O.forEach(function(Ee){const Me=Oe.get(Ee).currentProgram;(Me===void 0||Me.isReady())&&O.delete(Ee)}),O.size===0){k(y);return}setTimeout(fe,10)}ut.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ar=null;function uh(y){Ar&&Ar(y)}function Co(){Qn.stop()}function Po(){Qn.start()}const Qn=new Kc;Qn.setAnimationLoop(uh),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(y){Ar=y,se.setAnimationLoop(y),y===null?Qn.stop():Qn.start()},se.addEventListener("sessionstart",Co),se.addEventListener("sessionend",Po),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(y,I);const W=se.enabled===!0&&se.isPresenting===!0,O=L!==null&&(ne===null||W)&&L.begin(R,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(I),I=se.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,I,ne),w=K.get(y,v.length),w.init(I),w.state.textureUnits=Ge.getTextureUnits(),v.push(w),ke.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Fe.setFromArrayCamera(I):ae.setFromProjectionMatrix(ke,dn,I.reversedDepth),Ze=this.localClippingEnabled,Ke=Z.init(this.clippingPlanes,Ze),A=de.get(y,g.length),A.init(),g.push(A),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&Rr(Ee,I,-1/0,R.sortObjects)}Rr(y,I,0,R.sortObjects),A.finish(),F!==null&&F.updateLights(w.state.lightsArray),R.sortObjects===!0&&A.sort(He,Re),lt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,lt&&C.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Z.beginShadows();const k=w.state.shadowsArray;if(ce.render(k,y,I),Ke===!0&&Z.endShadows(),(O&&L.hasRenderPass())===!1){const Ee=A.opaque,ue=A.transmissive;if(w.setupLights(),I.isArrayCamera){const Me=I.cameras;if(ue.length>0)for(let Ce=0,We=Me.length;Ce<We;Ce++){const Qe=Me[Ce];Io(Ee,ue,y,Qe)}lt&&C.render(y);for(let Ce=0,We=Me.length;Ce<We;Ce++){const Qe=Me[Ce];Lo(A,y,Qe,Qe.viewport)}}else ue.length>0&&Io(Ee,ue,y,I),lt&&C.render(y),Lo(A,y,I)}ne!==null&&z===0&&(Ge.updateMultisampleRenderTarget(ne),Ge.updateRenderTargetMipmap(ne)),O&&L.end(R),y.isScene===!0&&y.onAfterRender(R,y,I),le.resetDefaultState(),q=-1,Q=null,v.pop(),v.length>0?(w=v[v.length-1],Ge.setTextureUnits(w.state.textureUnits),Ke===!0&&Z.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,F!==null&&F.renderEnd()};function Rr(y,I,W,O){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){const Ee=I.isArrayCamera?Fe:ae;if(!y.frustumCulled||y.intersectsFrustum(Ee)){O&&Xe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ke);const ue=ie.update(y),Me=y.material;Me.visible&&A.push(y,ue,Me,W,Xe.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){const Ee=I.isArrayCamera?Fe:ae;if(!y.frustumCulled||y.intersectsFrustum(Ee)){const ue=ie.update(y),Me=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Xe.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Xe.copy(ue.boundingSphere.center)),Xe.applyMatrix4(y.matrixWorld).applyMatrix4(ke)),Array.isArray(Me)){const Ce=ue.groups;for(let We=0,Qe=Ce.length;We<Qe;We++){const we=Ce[We],je=Me[we.materialIndex];je&&je.visible&&A.push(y,ue,je,W,Xe.z,we,I)}}else Me.visible&&A.push(y,ue,Me,W,Xe.z,null,I)}}}const fe=y.children;for(let Ee=0,ue=fe.length;Ee<ue;Ee++)Rr(fe[Ee],I,W,O)}function Lo(y,I,W,O){const{opaque:k,transmissive:fe,transparent:Ee}=y;w.setupLightsView(W),Ke===!0&&Z.setGlobalState(R.clippingPlanes,W),O&&pe.viewport(ee.copy(O)),k.length>0&&gs(k,I,W),fe.length>0&&gs(fe,I,W),Ee.length>0&&gs(Ee,I,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Io(y,I,W,O){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){const we=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new vn(1,1,{generateMipmaps:!0,type:we?yn:jt,minFilter:Gn,samples:Math.max(4,_t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const fe=w.state.transmissionRenderTarget[O.id],Ee=O.viewport||ee;fe.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);const ue=R.getRenderTarget(),Me=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(fe),R.getClearColor(H),ge=R.getClearAlpha(),ge<1&&R.setClearColor(16777215,.5),R.clear(),lt&&C.render(W);const We=R.toneMapping;R.toneMapping=Ln;const Qe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),Ke===!0&&Z.setGlobalState(R.clippingPlanes,O),gs(y,W,O),Ge.updateMultisampleRenderTarget(fe),Ge.updateRenderTargetMipmap(fe),ut.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let je=0,Mt=I.length;je<Mt;je++){const mt=I[je],{object:pt,geometry:Ft,material:Ae,group:Xt}=mt;if(Ae.side===Ht&&pt.layers.test(O.layers)){const ot=Ae.side;Ae.side=Kt,Ae.needsUpdate=!0,Do(pt,W,O,Ft,Ae,Xt),Ae.side=ot,Ae.needsUpdate=!0,we=!0}}we===!0&&(Ge.updateMultisampleRenderTarget(fe),Ge.updateRenderTargetMipmap(fe))}R.setRenderTarget(ue,Me,Ce),R.setClearColor(H,ge),Qe!==void 0&&(O.viewport=Qe),R.toneMapping=We}function gs(y,I,W){const O=I.isScene===!0?I.overrideMaterial:null;for(let k=0,fe=y.length;k<fe;k++){const Ee=y[k],{object:ue,geometry:Me,group:Ce}=Ee;let We=Ee.material;We.allowOverride===!0&&O!==null&&(We=O),ue.layers.test(W.layers)&&Do(ue,I,W,Me,We,Ce)}}function Do(y,I,W,O,k,fe){F!==null&&k.isNodeMaterial&&F.setObject(y,k),y.onBeforeRender(R,I,W,O,k,fe),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(R,I,W,O,y,fe),k.transparent===!0&&k.side===Ht&&k.forceSinglePass===!1?(k.side=Kt,k.needsUpdate=!0,R.renderBufferDirect(W,I,O,k,y,fe),k.side=Yn,k.needsUpdate=!0,R.renderBufferDirect(W,I,O,k,y,fe),k.side=Ht):R.renderBufferDirect(W,I,O,k,y,fe),y.onAfterRender(R,I,W,O,k,fe)}function No(y){let I=0;for(const W of y)W.texture!==null&&I++;return I}function Hi(y,I,W){I.isScene!==!0&&(I=dt);const O=Oe.get(y),k=w.state.lights,fe=w.state.shadowsArray,Ee=k.state.version,ue=j.getParameters(y,k.state,fe,I,W,w.state.lightProbeGridArray),Me=j.getProgramCacheKey(ue);let Ce=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;const We=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=T.get(y.envMap||O.environment,We),O.envMapRotation=O.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Ce===void 0&&(y.addEventListener("dispose",ct),Ce=new Map,O.programs=Ce,O.programVariants=new Map);let Qe=Ce.get(Me);if(Qe!==void 0){if(O.currentProgram===Qe&&O.lightsStateVersion===Ee)return Fo(y,ue),Qe}else ue.uniforms=j.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,W,ue),y.onBeforeCompile(ue,R),Qe=j.acquireProgram(ue,Me),Ce.set(Me,Qe),O.uniforms=ue.uniforms;const we=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(we.clippingPlanes=Z.uniform),Fo(y,ue),O.needsLights=mh(y),O.lightsStateVersion=Ee,O.needsLights&&(we.ambientLightColor.value=k.state.ambient,we.lightProbe.value=k.state.probe,we.sunLights.value=k.state.sun,we.sunLightShadows.value=k.state.sunShadow,we.directionalLights.value=k.state.directional,we.directionalLightShadows.value=k.state.directionalShadow,we.spotLights.value=k.state.spot,we.spotLightShadows.value=k.state.spotShadow,we.rectAreaLights.value=k.state.rectArea,we.ltc_1.value=k.state.rectAreaLTC1,we.ltc_2.value=k.state.rectAreaLTC2,we.pointLights.value=k.state.point,we.pointLightShadows.value=k.state.pointShadow,we.hemisphereLights.value=k.state.hemi,we.sunShadowMatrix.value=k.state.sunShadowMatrix,we.sunShadowCascade.value=k.state.sunShadowCascade,we.directionalShadowMatrix.value=k.state.directionalShadowMatrix,we.spotLightMatrix.value=k.state.spotLightMatrix,we.spotLightMap.value=k.state.spotLightMap,we.pointShadowMatrix.value=k.state.pointShadowMatrix),O.numLightProbeGrids=No(w.state.lightProbeGridArray),O.currentProgram=Qe,O.uniformsList=null,Qe}function dh(y,I,W,O,k){const fe=Oe.get(y),Ee=fe.currentProgram.id+","+O+","+k;let ue=fe.programVariants.get(Ee);return ue===void 0?(ue=Hi(y,I,W),fe.programVariants.set(Ee,ue)):(fe.currentProgram=ue,fe.uniformsList=null,fe.outputColorSpace=O,fe.toneMapping=k),ue}function Uo(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=ar.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Fo(y,I){const W=Oe.get(y);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function fh(y,I,W,O,k){I.isScene!==!0&&(I=dt),Ge.resetTextureUnits();const fe=I.fog,Ee=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,ue=ne===null?R.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:nt.workingColorSpace,Me=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ce=T.get(O.envMap||Ee,Me),We=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qe=!!W.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),we=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,Mt=!!W.morphAttributes.color;let mt=Ln;O.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(mt=R.toneMapping);const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ft=pt!==void 0?pt.length:0,Ae=Oe.get(O),Xt=w.state.lights;if(Ke===!0&&(Ze===!0||y!==Q)){const xt=y===Q&&O.id===q;Z.setState(O,y,xt)}let ot=!1,jn=!1;O.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==Xt.state.version||k.isBatchedMesh&&Ae.batching===!1||!k.isBatchedMesh&&Ae.batching===!0||k.isBatchedMesh&&Ae.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Ae.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Ae.instancing===!1||!k.isInstancedMesh&&Ae.instancing===!0||k.isSkinnedMesh&&Ae.skinning===!1||!k.isSkinnedMesh&&Ae.skinning===!0||k.isInstancedMesh&&Ae.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ae.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ae.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ae.instancingMorph===!1&&k.morphTexture!==null||Ae.envMap!==Ce||O.fog===!0&&Ae.fog!==fe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Z.numPlanes||Ae.numIntersection!==Z.numIntersection)||Ae.vertexAlphas!==We||Ae.vertexTangents!==Qe||Ae.morphTargets!==we||Ae.morphNormals!==je||Ae.morphColors!==Mt||Ae.morphTargetsCount!==Ft||Ae.numLightProbeGrids!==No(w.state.lightProbeGridArray)?ot=!0:(Ae.outputColorSpace!==ue||Ae.toneMapping!==mt)&&(jn=!0):(ot=!0,Ae.__version=O.version);let Ot=Ae.currentProgram;(ot===!0||jn===!0)&&(Ot=jn===!0?dh(O,I,k,ue,mt):Hi(O,I,k),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Ot,Ae));let _s=!1,Un=!1,ei=!1;const rt=Ot.getUniforms(),Nt=Ae.uniforms;if(pe.useProgram(Ot.program)&&(_s=!0,Un=!0,ei=!0),O.id!==q&&(q=O.id,Un=!0),_s||Q!==y){pe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),rt.setValue(D,"projectionMatrix",y.projectionMatrix),rt.setValue(D,"viewMatrix",y.matrixWorldInverse);const Ct=rt.map.cameraPosition;Ct!==void 0&&Ct.setValue(D,tt.setFromMatrixPosition(y.matrixWorld)),_t.logarithmicDepthBuffer&&rt.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&rt.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Un=!0,ei=!0)}if(Ae.needsLights&&(Xt.state.sunShadowMap.length>0&&rt.setValue(D,"sunShadowMap",Xt.state.sunShadowMap,Ge),Xt.state.directionalShadowMap.length>0&&rt.setValue(D,"directionalShadowMap",Xt.state.directionalShadowMap,Ge),Xt.state.spotShadowMap.length>0&&rt.setValue(D,"spotShadowMap",Xt.state.spotShadowMap,Ge),Xt.state.pointShadowMap.length>0&&rt.setValue(D,"pointShadowMap",Xt.state.pointShadowMap,Ge)),k.isSkinnedMesh){rt.setOptional(D,k,"bindMatrix"),rt.setOptional(D,k,"bindMatrixInverse");const xt=k.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),rt.setValue(D,"boneTexture",xt.boneTexture,Ge))}k.isBatchedMesh&&(rt.setOptional(D,k,"batchingTexture"),rt.setValue(D,"batchingTexture",k._matricesTexture,Ge),rt.setOptional(D,k,"batchingIdTexture"),rt.setValue(D,"batchingIdTexture",k._indirectTexture,Ge),rt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&rt.setValue(D,"batchingColorTexture",k._colorsTexture,Ge));const rn=W.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&J.update(k,W,Ot),(Un||Ae.receiveShadow!==k.receiveShadow)&&(Ae.receiveShadow=k.receiveShadow,rt.setValue(D,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(Nt.envMapIntensity.value=I.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=V0()),Un){if(rt.setValue(D,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&ph(Nt,ei),fe&&O.fog===!0&&oe.refreshFogUniforms(Nt,fe),oe.refreshMaterialUniforms(Nt,O,me,Ie,w.state.transmissionRenderTarget[y.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){const xt=b;let Ct=0;for(const bn of w.state.lightProbeGridArray)bn.texture!==null&&(xt.textures[Ct]=bn.texture,xt.min[Ct]=bn.boundingBox.min,xt.max[Ct]=bn.boundingBox.max,xt.resolution[Ct]=bn.resolution,Ct++);for(const bn in xt)xt[bn].length=Ct;Nt.probesSH.value=xt.textures,Nt.probesMin.value=xt.min,Nt.probesMax.value=xt.max,Nt.probesResolution.value=xt.resolution}ar.upload(D,Uo(Ae),Nt,Ge)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ar.upload(D,Uo(Ae),Nt,Ge),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&rt.setValue(D,"center",k.center),rt.setValue(D,"modelViewMatrix",k.modelViewMatrix),rt.setValue(D,"normalMatrix",k.normalMatrix),rt.setValue(D,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){const xt=O.uniformsGroups;for(let Ct=0,bn=xt.length;Ct<bn;Ct++){const Bo=xt[Ct];Le.update(Bo,Ot),Le.bind(Bo,Ot)}}return Ot}function ph(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function mh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,I,W){const O=Oe.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Oe.get(y.texture).__webglTexture=I,Oe.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:W,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const W=Oe.get(y);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,W=0){ne=y,$=I,z=W;let O=null,k=!1,fe=!1;if(y){const ue=Oe.get(y);if(ue.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(D.FRAMEBUFFER,ue.__webglFramebuffer),ee.copy(y.viewport),Te.copy(y.scissor),Ne=y.scissorTest,pe.viewport(ee),pe.scissor(Te),pe.setScissorTest(Ne),q=-1;return}else if(ue.__webglFramebuffer===void 0)Ge.setupRenderTarget(y);else if(ue.__hasExternalTextures)Ge.rebindTextures(y,Oe.get(y.texture).__webglTexture,Oe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const We=y.depthTexture;if(ue.__boundDepthTexture!==We){if(We!==null&&Oe.has(We)&&(y.width!==We.image.width||y.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(y)}}const Me=y.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(fe=!0);const Ce=Oe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?O=Ce[I][W]:O=Ce[I],k=!0):y.samples>0&&Ge.useMultisampledRTT(y)===!1?O=Oe.get(y).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[W]:O=Ce,ee.copy(y.viewport),Te.copy(y.scissor),Ne=y.scissorTest}else ee.copy(_e).multiplyScalar(me).floor(),Te.copy(Se).multiplyScalar(me).floor(),Ne=be;if(W!==0&&(O=X),pe.bindFramebuffer(D.FRAMEBUFFER,O)&&pe.drawBuffers(y,O),pe.viewport(ee),pe.scissor(Te),pe.setScissorTest(Ne),k){const ue=Oe.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,W)}else if(fe){const ue=I;for(let Me=0;Me<y.textures.length;Me++){const Ce=Oe.get(y.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,Ce.__webglTexture,W,ue)}}else if(y!==null&&W!==0){const ue=Oe.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,W)}q=-1};function Oo(y){const I=Oe.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=_t.textureFormatReadable(y.format),I.__typeReadable=_t.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,W,O,k,fe,Ee,ue=0){if(!(y&&y.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Oe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(Me=Me[Ee],Array.isArray(Me)&&(Me=Me[0])),Me){pe.bindFramebuffer(D.FRAMEBUFFER,Me);try{const Ce=y.textures[ue],We=Ce.format,Qe=Ce.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue);const we=Oo(Ce);if(we.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-O&&W>=0&&W<=y.height-k&&D.readPixels(I,W,O,k,re.convert(We),re.convert(Qe),fe)}finally{const Ce=ne!==null?Oe.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(y,I,W,O,k,fe,Ee,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Oe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(Me=Me[Ee],Array.isArray(Me)&&(Me=Me[0])),Me)if(I>=0&&I<=y.width-O&&W>=0&&W<=y.height-k){pe.bindFramebuffer(D.FRAMEBUFFER,Me);const Ce=y.textures[ue],We=Ce.format,Qe=Ce.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue);const we=Oo(Ce);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(I,W,O,k,re.convert(We),re.convert(Qe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Mt=ne!==null?Oe.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(D.FRAMEBUFFER,Mt);const mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Kh(D,mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(je),D.deleteSync(mt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,W=0){const O=Math.pow(2,-W),k=Math.floor(y.image.width*O),fe=Math.floor(y.image.height*O),Ee=I!==null?I.x:0,ue=I!==null?I.y:0;Ge.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Ee,ue,k,fe),pe.unbindTexture()},this.copyTextureToTexture=function(y,I,W=null,O=null,k=0,fe=0){let Ee,ue,Me,Ce,We,Qe,we,je,Mt;const mt=y.isCompressedTexture?y.mipmaps[fe]:y.image;if(W!==null)Ee=W.max.x-W.min.x,ue=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Ce=W.min.x,We=W.min.y,Qe=W.isBox3?W.min.z:0;else{const rt=Math.pow(2,-k);Ee=Math.floor(mt.width*rt),ue=Math.floor(mt.height*rt),y.isDataArrayTexture?Me=mt.depth:y.isData3DTexture?Me=Math.floor(mt.depth*rt):Me=1,Ce=0,We=0,Qe=0}O!==null?(we=O.x,je=O.y,Mt=O.z):(we=0,je=0,Mt=0);const pt=re.convert(I.format),Ft=re.convert(I.type);let Ae;I.isData3DTexture?(Ge.setTexture3D(I,0),Ae=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ge.setTexture2DArray(I,0),Ae=D.TEXTURE_2D_ARRAY):(Ge.setTexture2D(I,0),Ae=D.TEXTURE_2D),pe.activeTexture(D.TEXTURE0),pe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),pe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),pe.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Xt=pe.getParameter(D.UNPACK_ROW_LENGTH),ot=pe.getParameter(D.UNPACK_IMAGE_HEIGHT),jn=pe.getParameter(D.UNPACK_SKIP_PIXELS),Ot=pe.getParameter(D.UNPACK_SKIP_ROWS),_s=pe.getParameter(D.UNPACK_SKIP_IMAGES);pe.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),pe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),pe.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),pe.pixelStorei(D.UNPACK_SKIP_ROWS,We),pe.pixelStorei(D.UNPACK_SKIP_IMAGES,Qe);const Un=y.isDataArrayTexture||y.isData3DTexture,ei=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const rt=Oe.get(y),Nt=Oe.get(I),rn=Oe.get(rt.__renderTarget),xt=Oe.get(Nt.__renderTarget);pe.bindFramebuffer(D.READ_FRAMEBUFFER,rn.__webglFramebuffer),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Ct=0;Ct<Me;Ct++)Un&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Oe.get(y).__webglTexture,k,Qe+Ct),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Oe.get(I).__webglTexture,fe,Mt+Ct)),D.blitFramebuffer(Ce,We,Ce+Ee,We+ue,we,je,we+Ee,je+ue,D.DEPTH_BUFFER_BIT,D.NEAREST);pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||Oe.has(y)){const rt=Oe.get(y),Nt=Oe.get(I);pe.bindFramebuffer(D.READ_FRAMEBUFFER,P),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let rn=0;rn<Me;rn++)Un?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,rt.__webglTexture,k,Qe+rn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,rt.__webglTexture,k),ei?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,fe,Mt+rn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Nt.__webglTexture,fe),k!==0?D.blitFramebuffer(Ce,We,Ce+Ee,We+ue,we,je,we+Ee,je+ue,D.COLOR_BUFFER_BIT,D.NEAREST):ei?D.copyTexSubImage3D(Ae,fe,we,je,Mt+rn,Ce,We,Ee,ue):D.copyTexSubImage2D(Ae,fe,we,je,Ce,We,Ee,ue);pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ei?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Ae,fe,we,je,Mt,Ee,ue,Me,pt,Ft,mt.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,fe,we,je,Mt,Ee,ue,Me,pt,mt.data):D.texSubImage3D(Ae,fe,we,je,Mt,Ee,ue,Me,pt,Ft,mt):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,fe,we,je,Ee,ue,pt,Ft,mt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,fe,we,je,mt.width,mt.height,pt,mt.data):D.texSubImage2D(D.TEXTURE_2D,fe,we,je,Ee,ue,pt,Ft,mt);pe.pixelStorei(D.UNPACK_ROW_LENGTH,Xt),pe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot),pe.pixelStorei(D.UNPACK_SKIP_PIXELS,jn),pe.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),pe.pixelStorei(D.UNPACK_SKIP_IMAGES,_s),fe===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&D.generateMipmap(Ae),pe.unbindTexture()},this.initRenderTarget=function(y){Oe.get(y).__webglFramebuffer===void 0&&Ge.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ge.setTextureCube(y,0):y.isData3DTexture?Ge.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ge.setTexture2DArray(y,0):Ge.setTexture2D(y,0),pe.unbindTexture()},this.resetState=function(){$=0,z=0,ne=null,pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const Zl={player:7315416,enemy:13784906},$t={usa:{id:"usa",name:"United States",short:"USA",adjective:"American",color:"#4e7196",css:"#4e7196",paint:5002808,uniform:7105100,accent:9412714,flag:"us",doctrine:"Combined arms & logistics",bonus:"+15% vision · vehicles 10% cheaper",blurb:"Industrial might, radios in every squad and overwhelming artillery. American forces trade raw armour for mobility and situational awareness.",mods:{vision:1.15,vehicleCost:.9},motto:"Duty, Honour, Country"},ussr:{id:"ussr",name:"Soviet Union",short:"USSR",adjective:"Soviet",color:"#a33b2c",css:"#a33b2c",paint:4542511,uniform:6183482,accent:11555390,flag:"ussr",doctrine:"Deep battle & mass",bonus:"Infantry 15% cheaper · vehicles 10% faster to build",blurb:"Mass production and ruthless determination. Soviet commanders win by concentrating cheap, hard-hitting formations at the decisive point.",mods:{infCost:.85,vehicleTime:.9},motto:"For the Motherland"},germany:{id:"germany",name:"Germany",short:"GER",adjective:"German",color:"#7b7f74",css:"#7b7f74",paint:5659467,uniform:6054225,accent:10133644,flag:"germany",doctrine:"Armoured spearhead",bonus:"+10% vehicle damage · units 5% more expensive",blurb:"Veteran crews, superb optics and the finest armour of the war. German formations strike first and strike hard — but every loss is costly.",mods:{vehicleDmg:1.1,unitCost:1.05},motto:"Vorwärts"},uk:{id:"uk",name:"Great Britain",short:"UK",adjective:"British",color:"#b39b5c",css:"#b39b5c",paint:7103040,uniform:7564107,accent:12890748,flag:"uk",doctrine:"Hold the line",bonus:"+15% infantry health · vehicles 10% slower",blurb:"Stubborn infantry, dependable armour and a doctrine built around the deliberate counter-attack. British forces are hard to shift.",mods:{infHp:1.15,vehicleSpeed:.9},motto:"Keep Calm and Carry On"},japan:{id:"japan",name:"Japan",short:"JPN",adjective:"Japanese",color:"#c2bca9",css:"#c2bca9",paint:6774847,uniform:7301192,accent:14209208,flag:"japan",doctrine:"Speed & aggression",bonus:"+10% movement speed · vehicles 10% less durable",blurb:"Light, fast and fanatical. Japanese forces rely on rapid flanking, aggressive infantry and close-quarters shock action.",mods:{speed:1.1,vehicleHp:.9},motto:"Certain victory"}},ra=["usa","ussr","germany","uk","japan"],Jl={smallArms:{infantry:1,light:.42,medium:.14,heavy:.06,building:.12},at:{infantry:.3,light:1,medium:1.05,heavy:.72,building:.55},shell:{infantry:.78,light:1,medium:.9,heavy:.66,building:.78},explosive:{infantry:1.25,light:1.1,medium:.85,heavy:.52,building:1.05}},W0={rifle:{key:"rifle",role:"Infantry",icon:"rifle",cost:80,time:7,pop:1,hp:130,speed:7.5,range:20,dmg:7,cooldown:.75,weapon:"smallArms",armor:"infantry",vision:30,squad:4,desc:"A four-man rifle squad. Effective against infantry, but helpless against armour without support."},engineer:{key:"engineer",role:"Engineer",icon:"engineer",cost:90,time:8,pop:1,hp:110,speed:7.2,range:0,dmg:0,cooldown:1,weapon:"none",armor:"infantry",vision:26,builder:!0,squad:3,desc:"Constructs and repairs structures. Captures the battlefield with concrete and steel."},at:{key:"at",role:"Anti-tank",icon:"at",cost:120,time:9,pop:1,hp:118,speed:6.9,range:27,dmg:42,cooldown:2.6,weapon:"at",armor:"infantry",vision:30,squad:3,desc:"Shoulder-fired anti-tank team. Devastating against armour, vulnerable to infantry."},scout:{key:"scout",role:"Recon",icon:"scout",cost:150,time:10,pop:1,hp:220,speed:14,range:23,dmg:8,cooldown:.45,weapon:"smallArms",armor:"light",vision:42,turret:!0,desc:"Fast armoured car. Excellent vision and raiding potential; avoid pitched battle."},tank:{key:"tank",role:"Medium tank",icon:"tank",cost:300,time:18,pop:3,hp:540,speed:9.5,range:29,dmg:55,cooldown:3,weapon:"shell",armor:"medium",vision:34,turret:!0,desc:"The workhorse of every army. Balanced armour, firepower and mobility."},heavy:{key:"heavy",role:"Heavy tank",icon:"heavy",cost:520,time:30,pop:5,hp:980,speed:7,range:33,dmg:100,cooldown:4.2,weapon:"shell",armor:"heavy",vision:36,turret:!0,desc:"A rolling fortress. Dominates tank duels but is slow, expensive and easy to outflank."},artillery:{key:"artillery",role:"Artillery",icon:"artillery",cost:380,time:24,pop:4,hp:260,speed:6,range:70,minRange:22,dmg:80,cooldown:6.5,weapon:"explosive",splash:8,armor:"light",vision:36,turret:!0,desc:"Mobile howitzer. Shatters infantry and structures from beyond visual range. Needs a spotter and a guard."},harvester:{key:"harvester",role:"Logistics",icon:"harvester",cost:130,time:9,pop:1,hp:260,speed:10,range:0,dmg:0,cooldown:1,weapon:"none",armor:"light",vision:27,harvester:!0,capacity:60,desc:"Collects supply crates and returns them to HQ or a Supply Depot. Your army runs on its wheels."}},X0={usa:{rifle:{name:"Rifle Squad",model:"shermanInf",desc:"M1 Garand riflemen with radio support and excellent situational awareness."},engineer:{name:"Combat Engineers",model:"usEng"},at:{name:"Bazooka Team",model:"usAt"},scout:{name:"M8 Greyhound",model:"greyhound"},tank:{name:"M4 Sherman",model:"sherman",stats:{hp:560,dmg:57}},heavy:{name:"M26 Pershing",model:"pershing",stats:{hp:1e3,dmg:102}},artillery:{name:"M7 Priest",model:"priest",stats:{range:74}},harvester:{name:"GMC Supply Truck",model:"usTruck"}},ussr:{rifle:{name:"Guards Rifles",model:"sovietInf",stats:{hp:125}},engineer:{name:"Sapper Squad",model:"sovietEng"},at:{name:"PTRD Team",model:"sovietAt"},scout:{name:"BA-64",model:"ba64"},tank:{name:"T-34/85",model:"t34",stats:{hp:580,speed:10}},heavy:{name:"IS-2",model:"is2",stats:{hp:950,dmg:108}},artillery:{name:"BM-13 Katyusha",model:"katyusha",stats:{dmg:62,cooldown:5.2,splash:10}},harvester:{name:"ZIS-5 Supply Truck",model:"sovietTruck"}},germany:{rifle:{name:"Grenadier Squad",model:"germanInf"},engineer:{name:"Pioneer Squad",model:"germanEng"},at:{name:"Panzerschreck Team",model:"germanAt",stats:{dmg:48}},scout:{name:"Sd.Kfz. 234",model:"sd234"},tank:{name:"Panzer IV",model:"panzer4",stats:{dmg:62}},heavy:{name:"Tiger I",model:"tiger",stats:{hp:1080,dmg:112}},artillery:{name:"Hummel",model:"hummel",stats:{range:74}},harvester:{name:"Opel Blitz",model:"germanTruck"}},uk:{rifle:{name:"Infantry Section",model:"britInf"},engineer:{name:"Royal Engineers",model:"britEng"},at:{name:"PIAT Team",model:"britAt"},scout:{name:"Daimler Mk II",model:"daimler"},tank:{name:"Cromwell Mk IV",model:"cromwell",stats:{speed:9.8}},heavy:{name:"Churchill Mk VII",model:"churchill",stats:{hp:1120,dmg:88}},artillery:{name:"Sexton",model:"sexton",stats:{dmg:86}},harvester:{name:"Bedford QL",model:"britTruck"}},japan:{rifle:{name:"Infantry Squad",model:"japanInf"},engineer:{name:"Engineer Squad",model:"japanEng"},at:{name:"Type 97 AT Team",model:"japanAt"},scout:{name:"Type 92 Tankette",model:"type92"},tank:{name:"Type 97 Chi-Ha",model:"chiha",stats:{hp:430,speed:10.5}},heavy:{name:"Type 3 Chi-Nu",model:"chinu",stats:{hp:740,dmg:92}},artillery:{name:"Type 4 Ho-Ro",model:"horo",stats:{hp:240}},harvester:{name:"Isuzu Supply Truck",model:"japanTruck"}}},q0={hq:{key:"hq",icon:"hq",cost:0,time:0,hp:2600,radius:7.5,pop:14,vision:44,dropoff:!0,income:2,buildable:!1,produces:["harvester"],desc:"Command post and primary supply drop-off. If it falls, the battle is lost."},barracks:{key:"barracks",icon:"barracks",cost:200,time:20,hp:950,radius:5.5,pop:2,vision:32,buildable:!0,produces:["rifle","engineer","at"],desc:"Trains infantry, engineers and anti-tank teams."},factory:{key:"factory",icon:"factory",cost:280,time:26,hp:1200,radius:6.5,pop:3,vision:32,buildable:!0,produces:["scout","tank","heavy","artillery"],desc:"Builds armoured cars, tanks and self-propelled artillery."},depot:{key:"depot",icon:"depot",cost:160,time:14,hp:650,radius:4.8,pop:8,vision:28,buildable:!0,dropoff:!0,income:1.5,produces:[],desc:"Supply drop-off, +8 population and +1.5 supplies per second."},turret:{key:"turret",icon:"turret",cost:180,time:16,hp:780,radius:3.6,pop:0,vision:38,buildable:!0,weapon:"shell",range:38,dmg:36,cooldown:2,produces:[],desc:"Entrenched anti-tank gun. Automatically engages enemies in range."}},Y0={usa:{hq:{name:"Command Post",model:"usHQ"},barracks:{name:"Barracks",model:"usBarracks"},factory:{name:"Motor Pool",model:"usFactory"},depot:{name:"Supply Depot",model:"usDepot"},turret:{name:"75mm Gun Nest",model:"usTurret"}},ussr:{hq:{name:"Forward Headquarters",model:"sovietHQ"},barracks:{name:"Conscript Barracks",model:"sovietBarracks"},factory:{name:"Tank Works",model:"sovietFactory"},depot:{name:"Supply Dump",model:"sovietDepot"},turret:{name:"ZiS-3 Emplacement",model:"sovietTurret"}},germany:{hq:{name:"Kommandostand",model:"germanHQ"},barracks:{name:"Wehrmacht Barracks",model:"germanBarracks"},factory:{name:"Panzerwerk",model:"germanFactory"},depot:{name:"Versorgungsdepot",model:"germanDepot"},turret:{name:"Pak 40 Nest",model:"germanTurret"}},uk:{hq:{name:"Battalion HQ",model:"britHQ"},barracks:{name:"Recruit Barracks",model:"britBarracks"},factory:{name:"Ordnance Factory",model:"britFactory"},depot:{name:"Supply Dump",model:"britDepot"},turret:{name:"25-Pdr Emplacement",model:"britTurret"}},japan:{hq:{name:"Regimental HQ",model:"japanHQ"},barracks:{name:"Barracks",model:"japanBarracks"},factory:{name:"Arsenal",model:"japanFactory"},depot:{name:"Supply Cache",model:"japanDepot"},turret:{name:"Type 1 Gun Nest",model:"japanTurret"}}};function Xn(i,e){const t=W0[e],n=X0[i][e],s=$t[i].mods,r={...t,...n.stats||{}};if(r.name=n.name,r.model=n.model,r.desc=n.desc||t.desc,r.faction=i,t.cost>0){let a=r.cost;s.unitCost&&(a*=s.unitCost),s.vehicleCost&&["scout","tank","heavy","artillery","harvester"].includes(e)&&(a*=s.vehicleCost),s.infCost&&["rifle","engineer","at"].includes(e)&&(a*=s.infCost),r.cost=Math.round(a/5)*5}if(t.time>0){let a=r.time;s.vehicleTime&&["scout","tank","heavy","artillery","harvester"].includes(e)&&(a*=s.vehicleTime),r.time=a}return s.infHp&&t.armor==="infantry"&&(r.hp*=s.infHp),s.vehicleHp&&t.armor!=="infantry"&&(r.hp*=s.vehicleHp),s.vehicleDmg&&t.weapon==="shell"&&(r.dmg*=s.vehicleDmg),s.vision&&(r.vision*=s.vision),s.speed&&(r.speed*=s.speed),s.vehicleSpeed&&t.armor!=="infantry"&&(r.speed*=s.vehicleSpeed),r.hp=Math.round(r.hp),r.dmg=Math.round(r.dmg),r.speed=Math.round(r.speed*10)/10,r}function $0(i,e){const t=q0[e],n=Y0[i][e];return{...t,name:n.name,model:n.model,faction:i}}const $s={normandy:{id:"normandy",name:"Normandy",region:"France · 1944",biome:"farmland",desc:"Hedgerow country. Rolling fields, stone farms and narrow lanes that swallow armour.",sky:{turbidity:5,rayleigh:1.4,mie:.006,g:.82,elevation:28,azimuth:135},sun:{color:16770752,intensity:2.7},hemi:{sky:10336216,ground:4868660,intensity:.9},fog:{color:11056312,density:.0026},ground:{low:4608559,high:6582340,dirt:7168579,rock:8026218,tint:14078648},height:{amp:6,scale:.055},props:{tree:"broadleaf",treeDensity:90,rocks:22,ruins:5,hedges:14,grass:220,craters:12},thumbnail:"linear-gradient(160deg,#38452a,#5d6b3f 45%,#8a7b55)"},kursk:{id:"kursk",name:"Kursk",region:"USSR · 1943",biome:"steppe",desc:"Open steppe and sunflower fields. Long sight lines, perfect for massed armour.",sky:{turbidity:6,rayleigh:1.8,mie:.008,g:.8,elevation:42,azimuth:200},sun:{color:16771524,intensity:2.9},hemi:{sky:12175052,ground:6182455,intensity:.85},fog:{color:12763560,density:.0021},ground:{low:6709295,high:9075779,dirt:7824703,rock:9208168,tint:14734764},height:{amp:3.5,scale:.04},props:{tree:"sparse",treeDensity:40,rocks:18,ruins:3,hedges:0,grass:260,craters:20},thumbnail:"linear-gradient(160deg,#5e5a2c,#8f8246 50%,#b2a56d)"},stalingrad:{id:"stalingrad",name:"Stalingrad",region:"USSR · 1942",biome:"snow-urban",desc:"A frozen city reduced to rubble. Every factory hall and cellar is a fortress.",sky:{turbidity:8,rayleigh:2.4,mie:.02,g:.7,elevation:18,azimuth:250},sun:{color:14279406,intensity:1.7},hemi:{sky:11451851,ground:9276806,intensity:.95},fog:{color:12042697,density:.0042},ground:{low:10133660,high:12107190,dirt:7828588,rock:9144964,tint:15001834},height:{amp:2.2,scale:.045},props:{tree:"dead",treeDensity:18,rocks:30,ruins:26,hedges:0,grass:40,craters:34},thumbnail:"linear-gradient(160deg,#8f9899,#b9c0bd 50%,#6e716c)"},elalamein:{id:"elalamein",name:"El Alamein",region:"Egypt · 1942",biome:"desert",desc:"Sand, rock and burning sky. Dust clouds betray every movement for miles.",sky:{turbidity:7,rayleigh:1.2,mie:.006,g:.86,elevation:52,azimuth:170},sun:{color:16773327,intensity:3.4},hemi:{sky:14207400,ground:10191189,intensity:.9},fog:{color:14074778,density:.0026},ground:{low:11047007,high:12626550,dirt:9402189,rock:9074004,tint:15260084},height:{amp:7,scale:.05},props:{tree:"none",treeDensity:0,rocks:40,ruins:4,hedges:0,grass:0,craters:16},thumbnail:"linear-gradient(160deg,#a58a55,#cbb684 55%,#e0cfa0)"},pacific:{id:"pacific",name:"Betio Atoll",region:"Pacific · 1943",biome:"jungle",desc:"Coral sand, palm groves and suffocating heat. The jungle hides ambushes everywhere.",sky:{turbidity:4,rayleigh:1,mie:.004,g:.85,elevation:48,azimuth:110},sun:{color:16773840,intensity:3.2},hemi:{sky:10340054,ground:3099179,intensity:1},fog:{color:10467501,density:.0034},ground:{low:3822896,high:5466935,dirt:9273434,rock:6972754,tint:14276788},height:{amp:5,scale:.06},props:{tree:"palm",treeDensity:120,rocks:14,ruins:4,hedges:0,grass:320,craters:10},thumbnail:"linear-gradient(160deg,#24452b,#3f6335 45%,#b9a06a)"},ardennes:{id:"ardennes",name:"Ardennes",region:"Belgium · 1944",biome:"snow-forest",desc:"Frozen pine forest and fog. Roads are scarce, visibility shorter, and ambush easy.",sky:{turbidity:9,rayleigh:2.6,mie:.025,g:.65,elevation:22,azimuth:300},sun:{color:13884648,intensity:1.5},hemi:{sky:11122628,ground:8225144,intensity:.95},fog:{color:11713731,density:.0052},ground:{low:8291448,high:11120292,dirt:7302240,rock:8290168,tint:14870502},height:{amp:7.5,scale:.055},props:{tree:"pine",treeDensity:150,rocks:20,ruins:4,hedges:0,grass:30,craters:18},thumbnail:"linear-gradient(160deg,#5e6a5c,#9ba69c 50%,#d3dad6)"},berlin:{id:"berlin",name:"Berlin",region:"Germany · 1945",biome:"urban",desc:"The broken heart of the Reich. Rubble barricades, burnt-out blocks and the Reichstag.",sky:{turbidity:10,rayleigh:2.8,mie:.03,g:.6,elevation:12,azimuth:60},sun:{color:15255716,intensity:1.9},hemi:{sky:11052186,ground:6183504,intensity:.9},fog:{color:11577496,density:.0046},ground:{low:7038812,high:8551790,dirt:5985867,rock:7828071,tint:13222317},height:{amp:1.6,scale:.04},props:{tree:"dead",treeDensity:14,rocks:26,ruins:34,hedges:0,grass:0,craters:40},thumbnail:"linear-gradient(160deg,#4f4b42,#7b7566 50%,#9a8e76)"}},K0=["normandy","kursk","stalingrad","elalamein","pacific","ardennes","berlin"],Ql={player:{x:-64,z:64},enemy:{x:64,z:-64}},Ks={recruit:{id:"recruit",name:"Recruit",stars:1,aiIncome:.72,aiBuild:1.35,aiAggression:1.5,aiArmy:1,desc:"The enemy is slow to mobilise and forgiving in battle."},veteran:{id:"veteran",name:"Veteran",stars:2,aiIncome:1,aiBuild:1,aiAggression:1,aiArmy:1.3,desc:"A balanced opponent that builds, defends and counter-attacks."},marshal:{id:"marshal",name:"Field Marshal",stars:3,aiIncome:1.38,aiBuild:.76,aiAggression:.68,aiArmy:1.65,desc:"Relentless production and early, coordinated armoured thrusts."}},Z0={buildings:{hq:1,barracks:1,factory:1,depot:1},units:{rifle:3,engineer:1,harvester:2,tank:1}},J0={buildings:{hq:1,barracks:1,factory:1,depot:1,turret:2},units:{rifle:3,engineer:1,harvester:2,tank:1}};function cn(i){return{supplies:900,player:{...Z0,...i.player||{}},enemy:{...J0,...i.enemy||{}}}}const Pi=[{id:"fall-gelb",op:1,title:"Fall Gelb",date:"10 May 1940",location:"Sedan · France",player:"germany",enemy:"uk",map:"normandy",difficulty:1,brief:"The panzer divisions have burst through the Ardennes and reached the Meuse at Sedan. Ahead lies the British rear-guard, dug in among the hedgerows. Break their headquarters and the road to the Channel is open.",history:"The German breakthrough at Sedan on 13 May 1940 collapsed the Allied line. Within ten days the Channel coast was reached and the British Expeditionary Force was falling back on Dunkirk.",outcome:"The breakthrough succeeded. The Allied armies in the north were cut off, and the evacuation at Dunkirk began on 26 May.",objectives:[{type:"destroyHQ",label:"Destroy the British headquarters"}],intel:{enemy:"British rear-guard",terrain:"Hedgerow farmland",weather:"Clear, dry"},start:cn({player:{units:{rifle:4,engineer:1,harvester:2,tank:2}}})},{id:"dunkirk",op:2,title:"Hold the Perimeter",date:"26 May 1940",location:"Dunkirk · France",player:"uk",enemy:"germany",map:"normandy",difficulty:2,brief:"The BEF is falling back on the beaches. Your battalion must hold the eastern perimeter while the little ships work. Every hour bought here is another thousand men saved. Hold for eight minutes.",history:"Operation Dynamo evacuated 338,226 Allied soldiers from Dunkirk between 26 May and 4 June 1940. The perimeter was held by rearguards who fought delaying actions street by street.",outcome:"The perimeter held long enough. The majority of the BEF escaped to fight again, though all its heavy equipment was lost.",objectives:[{type:"survive",seconds:420,label:"Hold the perimeter for 7 minutes"}],intel:{enemy:"German panzer spearhead",terrain:"Hedgerows and farm tracks",weather:"Overcast"},start:cn({player:{buildings:{hq:1,barracks:1,factory:1,depot:1,turret:2},units:{rifle:5,engineer:2,harvester:2,at:2,tank:1}},enemy:{buildings:{hq:1,barracks:1,factory:1,depot:1,turret:1},units:{rifle:5,tank:3,at:1,harvester:2}}}),waves:[{at:45,units:{rifle:3,scout:1},label:"Enemy patrol probing the line"},{at:120,units:{tank:2,rifle:3},label:"Armoured probe on the eastern flank"},{at:210,units:{tank:3,at:2,rifle:3},label:"Battlegroup assault"},{at:310,units:{heavy:1,tank:2,rifle:4},label:"Heavy armour approaching"}]},{id:"barbarossa",op:3,title:"Operation Barbarossa",date:"22 June 1941",location:"Minsk · USSR",player:"germany",enemy:"ussr",map:"kursk",difficulty:2,brief:"Three million men cross the frontier before dawn. The Soviet border armies are surprised but numerous. Punch through the steppe, destroy their forward headquarters and keep the advance moving.",history:"Operation Barbarossa opened on 22 June 1941 along a 2,900-kilometre front. German forces encircled millions of Soviet troops in the first months but were stopped short of Moscow in December.",outcome:"The initial advance was devastating, but the campaign outran its logistics. The war in the East would last four more years.",objectives:[{type:"destroyHQ",label:"Destroy the Soviet forward headquarters"}],intel:{enemy:"Soviet border army",terrain:"Open steppe",weather:"Hot, dry"},start:cn({player:{units:{rifle:4,engineer:1,harvester:2,tank:2,at:1}}})},{id:"philippines",op:4,title:"Fall of the Philippines",date:"8 December 1941",location:"Luzon · Philippines",player:"japan",enemy:"usa",map:"pacific",difficulty:2,brief:"Hours after Pearl Harbor, your regiment lands on Luzon. The American and Filipino defenders are spread thin along the coast. Move fast through the palm groves and break their command post before they can consolidate.",history:"Japanese forces invaded the Philippines on 8 December 1941. Manila fell in January 1942; the defenders held out on Bataan and Corregidor until May.",outcome:"The invasion succeeded. The Philippines fell, though guerrilla resistance continued throughout the occupation.",objectives:[{type:"destroyHQ",label:"Destroy the American command post"}],intel:{enemy:"US–Filipino garrison",terrain:"Palm groves and coral sand",weather:"Humid, clear"},start:cn({player:{units:{rifle:5,engineer:1,harvester:2,tank:2}}})},{id:"elalamein",op:5,title:"Second El Alamein",date:"23 October 1942",location:"El Alamein · Egypt",player:"uk",enemy:"germany",map:"elalamein",difficulty:2,brief:"Montgomery has spent months building up the Eighth Army. The Desert Fox is at the end of his supply line. Under a thousand-gun barrage, advance through the minefields and destroy the Axis headquarters.",history:"The Second Battle of El Alamein began on 23 October 1942. After twelve days of attrition, Rommel's forces withdrew; the Axis never again threatened Egypt.",outcome:"The Eighth Army broke the Axis line. The pursuit across Libya began, and the tide turned in North Africa.",objectives:[{type:"destroyHQ",label:"Destroy the German headquarters"}],intel:{enemy:"Afrika Korps detachment",terrain:"Open desert",weather:"Hot, dusty"},start:cn({player:{units:{rifle:4,engineer:1,harvester:2,tank:2,artillery:1}}})},{id:"stalingrad",op:6,title:"Not One Step Back",date:"19 November 1942",location:"Stalingrad · USSR",player:"ussr",enemy:"germany",map:"stalingrad",difficulty:3,brief:"The city has been reduced to rubble, and the Volga is at your back. Chuikov's order is simple: hold. Absorb the German assaults, keep the riverbank, and make the enemy bleed for every cellar. Hold for nine minutes.",history:"The battle for Stalingrad raged from August 1942 to February 1943. The encircled German Sixth Army surrendered on 2 February 1943; the Axis lost over 800,000 men killed, wounded or captured.",outcome:"The city held. Operation Uranus encircled the Sixth Army, and the greatest defeat in German military history followed.",objectives:[{type:"survive",seconds:540,label:"Hold the city for 9 minutes"}],intel:{enemy:"German Sixth Army assault groups",terrain:"Urban rubble",weather:"Snow, freezing"},start:cn({player:{buildings:{hq:1,barracks:1,factory:1,depot:2,turret:2},units:{rifle:6,engineer:2,harvester:2,at:3,tank:1}},enemy:{buildings:{hq:1,barracks:1,factory:1,depot:1,turret:2},units:{rifle:6,tank:3,heavy:1,at:2,harvester:2}}}),waves:[{at:40,units:{rifle:4,at:1},label:"Infantry assault on the factory district"},{at:115,units:{tank:2,rifle:4},label:"Panzer group attacking the riverbank"},{at:200,units:{heavy:1,tank:3,rifle:4},label:"Heavy assault group"},{at:290,units:{tank:3,at:2,rifle:5},label:"Sixth Army counter-attack"},{at:390,units:{heavy:2,tank:3,rifle:5},label:"Final push toward the Volga"},{at:480,units:{heavy:1,tank:4,rifle:6},label:"Last reserves committed"}]},{id:"kursk",op:7,title:"The Iron Wall",date:"5 July 1943",location:"Kursk · USSR",player:"ussr",enemy:"germany",map:"kursk",difficulty:3,brief:"The Germans are coming at the Kursk salient from north and south. Eight defensive belts, a million mines and your tanks await them. Bleed the panzer divisions white — destroy twenty enemy units and the offensive dies.",history:"Operation Citadel opened on 5 July 1943 and was the largest armoured engagement in history. After a week of attrition the Germans withdrew; the Red Army held the field and began its summer offensive.",outcome:"The German offensive failed. Kursk was the last strategic offensive Germany launched in the East.",objectives:[{type:"kills",count:20,label:"Destroy 20 enemy units"}],intel:{enemy:"German panzer corps",terrain:"Steppe and trench lines",weather:"Hot, clear"},start:cn({player:{buildings:{hq:1,barracks:1,factory:1,depot:2,turret:3},units:{rifle:5,engineer:2,harvester:3,at:3,tank:2,artillery:1}},enemy:{buildings:{hq:1,barracks:1,factory:1,depot:1,turret:2},units:{rifle:5,tank:4,heavy:1,at:2,harvester:2}}}),waves:[{at:60,units:{tank:2,rifle:3},label:"Panzer probe on the northern shoulder"},{at:150,units:{tank:3,heavy:1,rifle:3},label:"Main armoured thrust"},{at:250,units:{heavy:2,tank:2,at:2},label:"Tiger battalion committed"},{at:350,units:{tank:4,rifle:5},label:"Renewed assault"}]},{id:"normandy",op:8,title:"The Breakout",date:"6 June 1944",location:"Normandy · France",player:"usa",enemy:"germany",map:"normandy",difficulty:2,brief:"The greatest amphibious operation in history is ashore. Beyond the beaches, the bocage country is a maze of hedgerows and German strongpoints. Push inland, clear the farm tracks and destroy the enemy command post.",history:"D-Day landed over 156,000 Allied troops on 6 June 1944. The Normandy campaign bogged down in the hedgerows until Operation Cobra broke the front in late July.",outcome:"The beachhead held and the breakout followed. Paris was liberated on 25 August 1944.",objectives:[{type:"destroyHQ",label:"Destroy the German command post"}],intel:{enemy:"German static division",terrain:"Bocage and stone farms",weather:"Overcast, showers"},start:cn({player:{units:{rifle:5,engineer:2,harvester:3,tank:2,artillery:1}}})},{id:"ardennes",op:9,title:"Hold the Line",date:"16 December 1944",location:"Ardennes · Belgium",player:"usa",enemy:"germany",map:"ardennes",difficulty:3,brief:"The Germans have attacked through the Ardennes in the snow and fog. Your division holds a crossroads that must not fall. Dig in, keep the road open and hold for nine minutes until the counter-attack can begin.",history:"The Battle of the Bulge opened on 16 December 1944. American units at Bastogne and St. Vith delayed the German advance in appalling weather until the skies cleared and Allied airpower returned.",outcome:"The crossroads held. The German offensive ran out of fuel and time, and the Ardennes was cleared by late January 1945.",objectives:[{type:"survive",seconds:540,label:"Hold the crossroads for 9 minutes"}],intel:{enemy:"German armoured battle groups",terrain:"Frozen forest",weather:"Snow, fog"},start:cn({player:{buildings:{hq:1,barracks:1,factory:1,depot:2,turret:3},units:{rifle:6,engineer:2,harvester:2,at:3,tank:1}},enemy:{buildings:{hq:1,barracks:1,factory:1,depot:1,turret:2},units:{rifle:6,tank:3,heavy:1,at:2,harvester:2}}}),waves:[{at:40,units:{rifle:4,scout:2},label:"Reconnaissance in force"},{at:120,units:{tank:2,rifle:4},label:"Armoured column on the road"},{at:220,units:{heavy:1,tank:3,at:2},label:"Panzer battalion breaking through"},{at:330,units:{heavy:2,tank:3,rifle:5},label:"All-out assault on the crossroads"},{at:440,units:{tank:4,rifle:6},label:"Last reserves"}]},{id:"berlin",op:10,title:"The Final Assault",date:"16 April 1945",location:"Berlin · Germany",player:"ussr",enemy:"germany",map:"berlin",difficulty:3,brief:"Two and a half million men are converging on Berlin. The city is defended by Volksturm, flak towers and the last panzers of the Reich. Push through the rubble, take the government district and destroy the enemy headquarters.",history:"The Battle of Berlin began on 16 April 1945. After street fighting of extraordinary intensity, the Reichstag was taken on 2 May and Germany surrendered unconditionally on 8 May.",outcome:"Berlin fell. The war in Europe ended eight days later.",objectives:[{type:"destroyHQ",label:"Destroy the German headquarters"}],intel:{enemy:"Berlin garrison",terrain:"Urban ruins",weather:"Smoke, overcast"},start:cn({player:{buildings:{hq:1,barracks:1,factory:1,depot:2,turret:2},units:{rifle:6,engineer:2,harvester:3,tank:3,heavy:1,artillery:2}},enemy:{buildings:{hq:1,barracks:1,factory:1,depot:2,turret:4},units:{rifle:7,tank:3,heavy:2,at:3,artillery:1,harvester:2}}})},{id:"okinawa",op:11,title:"The Last Island",date:"1 April 1945",location:"Okinawa · Pacific",player:"usa",enemy:"japan",map:"pacific",difficulty:3,brief:"The landing beaches are secure, but the Japanese have withdrawn into the jungle and caves of the interior. Expect fanatical counter-attacks and hidden gun positions. Destroy the enemy headquarters and end the island campaign.",history:"The Battle of Okinawa lasted from April to June 1945 and was the bloodiest campaign in the Pacific. Over 100,000 Japanese troops and perhaps as many civilians died; the island was declared secure on 22 June.",outcome:"Okinawa fell after eighty-two days. The cost shaped the decision to use atomic weapons against Japan that August.",objectives:[{type:"destroyHQ",label:"Destroy the Japanese headquarters"}],intel:{enemy:"Japanese 32nd Army",terrain:"Jungle and coral ridges",weather:"Humid, heavy rain"},start:cn({player:{buildings:{hq:1,barracks:1,factory:1,depot:2,turret:2},units:{rifle:6,engineer:2,harvester:3,tank:3,artillery:2}},enemy:{buildings:{hq:1,barracks:1,factory:1,depot:2,turret:4},units:{rifle:8,at:3,tank:2,heavy:1,artillery:1,harvester:2}}})}];Object.fromEntries(Pi.map(i=>[i.id,i]));class wr extends it{constructor(){const e=wr.SkyShader,t=new Kn({name:e.name,uniforms:Wc.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Kt,depthWrite:!1});super(new Tt(1,1,1),t),this.isSky=!0}}wr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function Cn(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Dt;l.morphTargetsRelative=o;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0,m=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const _ in u.attributes){if(!n.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;r[_]===void 0&&(r[_]=[]),r[_].push(u.attributes[_]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const _ in u.morphAttributes){if(!s.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[_].length!==i[0].morphAttributes[_].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+_+'" morph attribute.'),null;a[_]===void 0&&(a[_]=[]),a[_].push(u.morphAttributes[_]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let _;if(t)_=u.index.count;else if(u.attributes.position!==void 0)_=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,_,h),c+=_}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const m=i[d].index;for(let _=0;_<m.count;++_)u.push(m.getX(_)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=jl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const m=[];for(let M=0;M<a[h].length;++M)m.push(a[h][M][d]);const _=jl(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}}return l}function jl(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new It(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,m=h.count;d<m;d++)for(let _=0;_<t;_++){const M=h.getComponent(d,_);o.setComponent(d+u,_,M)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}const ec=new U(0,1,0);function Bi(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Zs(i,e,t){const n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453123;return n-Math.floor(n)}function tc(i){return i*i*(3-2*i)}function or(i,e,t){return i+(e-i)*t}function qn(i,e,t){return i<e?e:i>t?t:i}function Mr(i,e,t){const n=qn((t-i)/(e-i),0,1);return n*n*(3-2*n)}function Q0(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=tc(r),l=tc(a),c=Zs(n,s,t),h=Zs(n+1,s,t),u=Zs(n,s+1,t),d=Zs(n+1,s+1,t);return or(or(c,h,o),or(u,d,o),l)}function ts(i,e,t,n=4){let s=0,r=.55,a=1,o=0;for(let l=0;l<n;l++)s+=Q0(i*a,e*a,t+l*17)*r,o+=r,r*=.5,a*=2.05;return s/o}function j0(i){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d");n.fillStyle="#c9c7b8",n.fillRect(0,0,256,256);const s=Bi(i);for(let f=0;f<4200;f++){const p=150+Math.floor(s()*90);n.fillStyle=`rgba(${p},${p},${p-8},${.12+s()*.18})`;const S=.5+s()*2.4;n.fillRect(s()*256,s()*256,S,S)}for(let f=0;f<120;f++){n.strokeStyle=`rgba(${120+s()*60},${118+s()*60},${100+s()*40},0.12)`,n.lineWidth=.6+s(),n.beginPath();const p=s()*256,S=s()*256;n.moveTo(p,S),n.lineTo(p+(s()-.5)*14,S+(s()-.5)*14),n.stroke()}const r=new us(t);r.wrapS=r.wrapT=as,r.colorSpace=kt,r.anisotropy=4;const a=96,o=document.createElement("canvas");o.width=o.height=a;const l=o.getContext("2d"),c=l.createImageData(a,a);for(let f=0;f<a;f++)for(let p=0;p<a;p++){const S=ts(p*.15,f*.15,i+99,3)*255,E=(f*a+p)*4;c.data[E]=c.data[E+1]=c.data[E+2]=S,c.data[E+3]=255}l.putImageData(c,0,0);const h=document.createElement("canvas");h.width=h.height=a;const u=h.getContext("2d"),d=u.createImageData(a,a),m=c.data,_=(f,p)=>m[((p+a)%a*a+(f+a)%a)*4]/255;for(let f=0;f<a;f++)for(let p=0;p<a;p++){const S=(_(p+1,f)-_(p-1,f))*2.4,E=(_(p,f+1)-_(p,f-1))*2.4,b=Math.hypot(S,E,1),A=(f*a+p)*4;d.data[A]=(-S/b*.5+.5)*255,d.data[A+1]=(-E/b*.5+.5)*255,d.data[A+2]=(1/b*.5+.5)*255,d.data[A+3]=255}u.putImageData(d,0,0);const M=new us(h);return M.wrapS=M.wrapT=as,M.colorSpace=Pn,{map:r,normal:M}}function ri(i,e){const t=i.attributes.position.count,n=new Float32Array(t*3),s=new Pe(e);for(let r=0;r<t;r++)n[r*3]=s.r,n[r*3+1]=s.g,n[r*3+2]=s.b;return i.setAttribute("color",new It(n,3)),i}function eg(i,e){const t=[],n=Bi(1e3+e*17+i.length),s=(a,o,l,c=[0,0,0],h=[1,1,1])=>{const u=a.clone();u.scale(h[0],h[1],h[2]),u.rotateX(c[0]),u.rotateY(c[1]),u.rotateZ(c[2]),u.translate(l[0],l[1],l[2]),ri(u,o),t.push(u)};if(i==="pine"){s(new tn(.18,.3,2.4,6),3878945,[0,1.2,0]);for(let a=0;a<4;a++)s(new oi(2.1-a*.42,2.3,7),a%2?2374180:2835497,[0,2.5+a*1.05,0],[0,n()*3,0]);s(new oi(.9,1.3,6),3361324,[0,6.4,0])}else if(i==="palm"){let a=0;for(let o=0;o<4;o++){const l=new tn(.18-o*.025,.24-o*.025,1.5,6);s(l,o%2?5982770:6640184,[a,.75+o*1.4,0],[0,0,.06*o]),a+=.18}for(let o=0;o<7;o++){const l=o/7*Math.PI*2+n()*.3,c=new Tt(.16,.1,3.1);s(c,o%2?4156210:5012024,[a+Math.sin(l)*1.2,5.9,Math.cos(l)*1.2],[.22,l,0]),s(new oi(.32,1.7,4),3562540,[a+Math.sin(l)*2.5,5.55,Math.cos(l)*2.5],[.9,l,0])}s(new ps(.35,6,5),6114092,[a,5.9,0])}else if(i==="dead"){s(new tn(.16,.34,4,6),3813670,[0,2,0]);for(let a=0;a<5;a++){const o=n()*Math.PI*2,l=2.2+n()*1.6;s(new tn(.05,.11,1.8,5),4273704,[Math.sin(o)*.55,l,Math.cos(o)*.55],[Math.sin(o)*.9,o,Math.cos(o)*.9])}}else if(i==="sparse"){s(new tn(.14,.24,1.5,5),4536870,[0,.75,0]);for(let a=0;a<3;a++)s(new fs(.8+n()*.35,0),a%2?3953196:4874290,[(n()-.5)*1.2,1.8+n()*.5,(n()-.5)*1.2],[n(),n(),n()],[1,.8,1])}else{s(new tn(.22,.38,2.8,6),4601891,[0,1.4,0]);const a=3.1;for(let o=0;o<4;o++){const l=1.5+n()*.7;s(new fs(l,0),o%2?4020781:5007924,[(n()-.5)*1.9,a+n()*1.5,(n()-.5)*1.9],[n()*2,n()*2,n()*2],[1,.9,1])}}if(!t.length)return null;if(t.length===1)return t[0];const r=Cn(t,!1);return t.forEach(a=>a.dispose()),r}function tg(i,e){const t=Bi(e+i*91),n=[],s=[7169881,8024675,6380624][i%3],r=5130817,a=(l,c,h,u=[0,0,0],d=[1,1,1])=>{const m=l.clone();m.scale(d[0],d[1],d[2]),m.rotateX(u[0]),m.rotateY(u[1]),m.rotateZ(u[2]),m.translate(h[0],h[1],h[2]),ri(m,c),n.push(m)};a(new Tt(9,.4,9),5985866,[0,.2,0]);const o=3+t()*2.5;a(new Tt(3,o,.55),s,[-2.6,o/2,4.3]),a(new Tt(2.2,o*.6,.55),s,[2.6,o*.3,4.3]),a(new Tt(.55,o*.85,5),s,[-4.3,o*.42,1.4]),a(new Tt(.55,o*.5,2.2),s,[4.3,o*.25,-2.4]),a(new Tt(.45,2.2,3.2),r,[.6,1.1,-.8]);for(let l=0;l<9;l++){const c=.3+t()*.9;a(new Tt(c,c*.7,c*1.2),l%2?s:r,[(t()-.5)*8,c*.35,(t()-.5)*8],[t(),t()*3,t()])}return a(new Tt(.28,.28,4.2),4864808,[1.4,o*.55,2],[.4,.7,.2]),n}function ng(i,e,t={}){const n=t.size||280,s=n/2,r=t.segments||120,a=t.seed||1337,o=t.bases||[Ql.player,Ql.enemy],l=t.avoid||[],c=t.fog!==!1,h=t.props!==!1,u=s-16,d=.6,m=(Re,_e)=>{const Se=e.height.scale;let be=(ts(Re*Se,_e*Se,a)-.5)*e.height.amp*2;be+=(ts(Re*Se*.32+41,_e*Se*.32-17,a+4,3)-.5)*e.height.amp*.9;for(const ae of o){const Fe=Math.hypot(Re-ae.x,_e-ae.z);if(Fe<52){const Ke=Mr(15,52,Fe);be=or(d,be,Ke)}}return be},_=new wr;_.scale.setScalar(6e3);const M=_.material.uniforms;M.turbidity.value=e.sky.turbidity,M.rayleigh.value=e.sky.rayleigh,M.mieCoefficient.value=e.sky.mie,M.mieDirectionalG.value=e.sky.g;const f=Xo.degToRad(90-e.sky.elevation),p=Xo.degToRad(e.sky.azimuth),S=new U().setFromSphericalCoords(1,f,p);M.sunPosition.value.copy(S),i.add(_),i.fog=new _o(e.fog.color,e.fog.density),i.background=new Pe(e.fog.color).multiplyScalar(.55);const E=new Xc(e.hemi.sky,e.hemi.ground,e.hemi.intensity);i.add(E);const b=new Ja(e.sun.color,e.sun.intensity);b.position.copy(S).multiplyScalar(180),b.castShadow=!0,b.shadow.mapSize.set(2048,2048);const A=b.shadow.camera;A.left=-145,A.right=145,A.top=145,A.bottom=-145,A.near=1,A.far=520,b.shadow.bias=-8e-4,b.shadow.normalBias=.55,i.add(b),i.add(b.target);const w=new Ja(10465480,.35);w.position.set(-80,60,-60),i.add(w);const g=new Dn(n,n,r,r);g.rotateX(-Math.PI/2);const v=g.attributes.position,L=new Float32Array(v.count*3),R=new Pe(e.ground.low),N=new Pe(e.ground.high),F=new Pe(e.ground.dirt),X=new Pe(e.ground.rock),P=new Pe,G=new Pe;for(let Re=0;Re<v.count;Re++){const _e=v.getX(Re),Se=v.getZ(Re),be=m(_e,Se);v.setY(Re,be);const ae=qn((be+e.height.amp)/(e.height.amp*2),0,1),Fe=ts(_e*.09+11,Se*.09-3,a+7,3);P.copy(R).lerp(N,qn(ae*.7+Fe*.5,0,1));const Ke=m(_e+1.5,Se)-m(_e-1.5,Se),Ze=m(_e,Se+1.5)-m(_e,Se-1.5),ke=Math.hypot(Ke,Ze)/3;ke>.28&&P.lerp(X,qn((ke-.28)*1.6,0,.7));for(const Xe of o){const dt=Math.hypot(_e-Xe.x,Se-Xe.z);dt<40&&P.lerp(F,Mr(40,14,dt)*.32)}G.copy(F),P.lerp(G,(ts(_e*.03+71,Se*.03+23,a+19,2)-.5)*.16);const tt=.92+Fe*.16;L[Re*3]=P.r*tt,L[Re*3+1]=P.g*tt,L[Re*3+2]=P.b*tt}g.setAttribute("color",new It(L,3)),g.computeVertexNormals();const $=j0(a);$.map.repeat.set(38,38),$.normal.repeat.set(38,38),$.normal.normalScale=new Be(.55,.55);const z=new Lt({vertexColors:!0,map:$.map,normalMap:$.normal,roughness:.97,metalness:0,normalScale:new Be(.45,.45)}),ne=new it(g,z);ne.receiveShadow=!0,ne.name="terrain",i.add(ne);for(const Re of o){const _e=new it(new ds(24,40),new Lt({color:e.ground.dirt,roughness:1,transparent:!0,opacity:.34,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));_e.rotation.x=-Math.PI/2,_e.position.set(Re.x,m(Re.x,Re.z)+.09,Re.z),_e.receiveShadow=!0,i.add(_e)}const q=new Lt({color:new Pe(e.ground.high).multiplyScalar(.55),roughness:1,flatShading:!0}),Q=[],ee=Bi(a+55);for(let Re=0;Re<16;Re++){const _e=Re/16*Math.PI*2+ee()*.2,Se=190+ee()*40,be=new oi(24+ee()*30,22+ee()*34,7,1);be.rotateY(ee()*3),be.translate(Math.cos(_e)*Se,-4,Math.sin(_e)*Se),Q.push(be)}const Te=Cn(Q);if(Te){const Re=new it(Te,q);Re.receiveShadow=!1,i.add(Re)}const Ne=new Wn;i.add(Ne);const H=Bi(a+321),ge=[...o.map(Re=>({x:Re.x,z:Re.z,r:36})),...l],ye=(Re,_e,Se=0)=>{if(Math.abs(Re)>u-4||Math.abs(_e)>u-4)return!1;for(const be of ge)if(Math.hypot(Re-be.x,_e-be.z)<be.r+Se)return!1;return!0};if(h){const Re=e.props.tree,_e=e.props.treeDensity;if(Re!=="none"&&_e>0){const Se=Re==="sparse"?2:3;for(let be=0;be<Se;be++){const ae=[];for(let D=0;D<(Re==="pine"||Re==="palm"?3:2);D++){const bt=eg(Re,be*3+D);bt&&ae.push(bt)}if(!ae.length)continue;const Fe=ae.length>1?Cn(ae):ae[0];if(!Fe)continue;const Ke=Math.ceil(_e/Se),Ze=new ea(Fe,new Lt({vertexColors:!0,roughness:.94,metalness:0}),Ke);Ze.castShadow=!0,Ze.receiveShadow=!0;const ke=new st,tt=new xn,Xe=new U,dt=new U;let lt=0,ft=0;for(;lt<Ke&&ft++<Ke*30;){const D=(H()*2-1)*u,bt=(H()*2-1)*u;if(!ye(D,bt,2))continue;const ut=.8+H()*.65;dt.set(D,m(D,bt)-.1,bt),tt.setFromAxisAngle(ec,H()*Math.PI*2),Xe.set(ut,ut*(.9+H()*.25),ut),ke.compose(dt,tt,Xe),Ze.setMatrixAt(lt,ke),lt++}Ze.count=lt,Ze.instanceMatrix.needsUpdate=!0,Ne.add(Ze)}}if(e.props.rocks>0){const Se=new fs(1,0);ri(Se,16777215);const be=new Lt({vertexColors:!0,roughness:1,flatShading:!0}),ae=new ea(Se,be,e.props.rocks);ae.castShadow=!0,ae.receiveShadow=!0;const Fe=new st,Ke=new xn,Ze=new U,ke=new U,tt=new Pe;let Xe=0,dt=0;for(;Xe<e.props.rocks&&dt++<600;){const lt=(H()*2-1)*u,ft=(H()*2-1)*u;if(!ye(lt,ft,1))continue;const D=.5+H()*1.7;ke.set(lt,m(lt,ft)+D*.18,ft),Ke.setFromEuler(new Sn(H()*3,H()*3,H()*3)),Ze.set(D,D*(.4+H()*.5),D*(.7+H()*.6)),Fe.compose(ke,Ke,Ze),ae.setMatrixAt(Xe,Fe),tt.setHex(e.biome.includes("snow")?9343112:e.biome==="desert"?10125658:8025448),tt.offsetHSL(0,0,(H()-.5)*.08),ae.setColorAt(Xe,tt),Xe++}ae.count=Xe,ae.instanceMatrix.needsUpdate=!0,ae.instanceColor&&(ae.instanceColor.needsUpdate=!0),Ne.add(ae)}if(e.props.grass>0){const Se=[];for(let lt=0;lt<4;lt++){const ft=new oi(.09,.55+H()*.4,3);ft.translate((H()-.5)*.5,.28,(H()-.5)*.5),ft.rotateZ((H()-.5)*.4),ri(ft,lt%2?6187834:7766335),Se.push(ft)}const be=Cn(Se),ae=new Lt({vertexColors:!0,roughness:1,side:Ht}),Fe=new ea(be,ae,e.props.grass),Ke=new st,Ze=new xn,ke=new U,tt=new U;let Xe=0,dt=0;for(;Xe<e.props.grass&&dt++<e.props.grass*15;){const lt=(H()*2-1)*u,ft=(H()*2-1)*u;if(!ye(lt,ft,.5))continue;const D=.7+H()*1.5;tt.set(lt,m(lt,ft),ft),Ze.setFromAxisAngle(ec,H()*6.28),ke.set(D,D,D),Ke.compose(tt,Ze,ke),Fe.setMatrixAt(Xe,Ke),Xe++}Fe.count=Xe,Fe.instanceMatrix.needsUpdate=!0,Ne.add(Fe)}if(e.props.hedges>0){const Se=[];for(let be=0;be<e.props.hedges;be++){let ae,Fe,Ke=0;do ae=(H()*2-1)*u*.9,Fe=(H()*2-1)*u*.9;while(!ye(ae,Fe,4)&&Ke++<60);const Ze=12+H()*22,ke=H()*Math.PI,tt=Math.floor(Ze/3);for(let Xe=0;Xe<tt;Xe++){const dt=new Tt(3.1,1.4+H()*.5,2.2);dt.rotateY(ke),dt.translate(ae+Math.cos(ke)*(Xe*3-Ze/2),m(ae,Fe)+.65,Fe+Math.sin(ke)*(Xe*3-Ze/2)),ri(dt,Xe%3?3885865:4676144),Se.push(dt)}}if(Se.length){const be=Cn(Se),ae=new it(be,new Lt({vertexColors:!0,roughness:1}));ae.castShadow=!0,ae.receiveShadow=!0,Ne.add(ae)}}if(e.props.ruins>0){const Se=[];for(let be=0;be<e.props.ruins;be++){let ae,Fe,Ke=0;do ae=(H()*2-1)*u*.92,Fe=(H()*2-1)*u*.92;while(!ye(ae,Fe,6)&&Ke++<60);const Ze=tg(be%3,a+be),ke=H()*Math.PI*2;for(const tt of Ze)tt.rotateY(ke),tt.translate(ae,m(ae,Fe),Fe),Se.push(tt)}if(Se.length){const be=Cn(Se),ae=new it(be,new Lt({vertexColors:!0,roughness:.96}));ae.castShadow=!0,ae.receiveShadow=!0,Ne.add(ae)}}if(e.props.craters>0){const Se=[];for(let be=0;be<e.props.craters;be++){let ae,Fe,Ke=0;do ae=(H()*2-1)*u*.95,Fe=(H()*2-1)*u*.95;while(!ye(ae,Fe,1)&&Ke++<60);const Ze=1.2+H()*2.4,ke=new ds(Ze,10);ke.rotateX(-Math.PI/2),ke.translate(ae,m(ae,Fe)+.06,Fe),ri(ke,3025698),Se.push(ke);const tt=new zi(Ze*.86,Ze*1.05,10);tt.rotateX(-Math.PI/2),tt.translate(ae,m(ae,Fe)+.075,Fe),ri(tt,6182466),Se.push(tt)}if(Se.length){const be=Cn(Se),ae=new it(be,new Lt({vertexColors:!0,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,side:Ht}));ae.receiveShadow=!0,Ne.add(ae)}}}const Ie=ig(i,e,n),me=c?sg(i,g,e,n):null,He=rg(e,m,n,o);return{scene:i,terrain:ne,geo:g,heightAt:m,size:n,half:s,bounds:u,bases:o,sky:_,sun:b,hemi:E,fog:me,weather:Ie,propGroup:Ne,minimapBase:He,mapDef:e,update(Re){Ie.update(Re),me&&me.tick(Re)}}}function ig(i,e,t){const n=e.biome.includes("snow"),s=e.biome==="desert",r=n?900:s?380:140,a=new Float32Array(r*3),o=new Float32Array(r),l=Bi(777);for(let _=0;_<r;_++)a[_*3]=(l()*2-1)*t*.55,a[_*3+1]=l()*(n?55:20)+(s?0:2),a[_*3+2]=(l()*2-1)*t*.55,o[_]=1.2+l()*(n?3.2:1);const c=new Dt;c.setAttribute("position",new It(a,3));const h=new zc({color:n?15265522:s?14207138:14209720,size:n?.5:s?.35:.22,transparent:!0,opacity:n?.75:s?.32:.2,depthWrite:!1,sizeAttenuation:!0,fog:!0}),u=new Bu(c,h);u.frustumCulled=!1,i.add(u);let d=0;const m=s?4.5:1.3;return{points:u,update(_){d+=_;const M=c.attributes.position.array;for(let f=0;f<r;f++)M[f*3]+=m*_*(.4+f%5*.12),M[f*3+1]-=o[f]*_,M[f*3+2]+=Math.sin(d*.4+f)*_*(s?1.4:.35),M[f*3+1]<(s?.3:-1)&&(M[f*3+1]=n?42+Math.random()*10:14+Math.random()*6,M[f*3]=(Math.random()*2-1)*t*.55,M[f*3+2]=(Math.random()*2-1)*t*.55),M[f*3]>t*.56&&(M[f*3]=-t*.56);c.attributes.position.needsUpdate=!0}}}function sg(i,e,t,n){const r=new Float32Array(9216),a=new Float32Array(9216),o=new Uint8Array(9216*4);for(let v=0;v<9216;v++)o[v*4]=4,o[v*4+1]=6,o[v*4+2]=7,o[v*4+3]=225;const l=new vo(o,96,96,un);l.minFilter=Gt,l.magFilter=Gt,l.wrapS=l.wrapT=_n,l.flipY=!0,l.needsUpdate=!0;const c=new sn({map:l,transparent:!0,depthWrite:!1,color:16777215,opacity:1,side:Yn}),h=new it(e.clone(),c);h.position.y=.34,h.renderOrder=4,h.frustumCulled=!1,i.add(h);const u=n/96,d=n/2;let m=0,_=!1;const M=[];function f(v,L){const R=qn(Math.floor((v+d)/u),0,95),N=qn(Math.floor((L+d)/u),0,95);return[R,N]}function p(v,L){if(_)return!0;const[R,N]=f(v,L);return r[N*96+R]>.12}function S(v,L){if(_)return!0;const[R,N]=f(v,L);return a[N*96+R]>.5}function E(v,L,R,N=1){const[F,X]=f(v,L),P=Math.ceil(R/u);for(let G=-P;G<=P;G++){const $=X+G;if(!($<0||$>=96))for(let z=-P;z<=P;z++){const ne=F+z;if(ne<0||ne>=96)continue;const q=Math.hypot(z*u,G*u);if(q>R)continue;const Q=(1-Mr(R*.62,R,q)*.72)*N,ee=$*96+ne;Q>r[ee]&&(r[ee]=Q),Q>.12&&(a[ee]=1)}}}function b(){r.fill(0);for(const v of M)E(v.x,v.z,v.r);for(let v=0;v<9216;v++){const L=r[v]>.12?0:a[v]>.5?118:228;o[v*4+3]=L}l.needsUpdate=!0}function A(v){m+=v,!(m<.22)&&(m=0,b())}function w(v){M.length=0;for(const L of v)M.push(L)}function g(){_=!0,a.fill(1),r.fill(1);for(let v=0;v<9216;v++)o[v*4+3]=0;l.needsUpdate=!0,h.visible=!1}return{N:96,vis:r,explored:a,cellSize:u,half:d,isVisible:p,isExplored:S,setSources:w,update:b,tick:A,revealAll:g,mesh:h,texture:l,sources:M,reveal:E}}function rg(i,e,t,n){const s=document.createElement("canvas");s.width=s.height=256;const r=s.getContext("2d"),a=new Pe(i.ground.low),o=new Pe(i.ground.high),l=new Pe(i.ground.dirt);new Pe(i.ground.rock);const c=new Pe,h=2;for(let u=0;u<256;u+=h)for(let d=0;d<256;d+=h){const m=(d/256-.5)*t,_=(u/256-.5)*t,M=e(m,_),f=qn((M+i.height.amp)/(i.height.amp*2),0,1);c.copy(a).lerp(o,f);const p=.82+(e(m-2,_-2)-M)*.06;c.multiplyScalar(qn(p,.65,1.15));for(const S of n){const E=Math.hypot(m-S.x,_-S.z);E<26&&c.lerp(l,Mr(26,12,E)*.45)}r.fillStyle=`rgb(${Math.round(c.r*255)},${Math.round(c.g*255)},${Math.round(c.b*255)})`,r.fillRect(d,u,h,h)}r.strokeStyle="rgba(220,210,180,0.07)",r.lineWidth=1;for(let u=0;u<=256;u+=32)r.beginPath(),r.moveTo(u,0),r.lineTo(u,256),r.stroke(),r.beginPath(),r.moveTo(0,u),r.lineTo(256,u),r.stroke();return s}const to=new Lt({vertexColors:!0,roughness:.58,metalness:.28}),ag=new Lt({vertexColors:!0,roughness:.94,metalness:.02}),og=new Lt({vertexColors:!0,roughness:.86,metalness:.06});new Lt({vertexColors:!0,roughness:.95,metalness:.01});const Js=new Pe,nc=new st,ic=new xn,sc=new Sn,rc=new U,ac=new U;function lg(i,e){const t=i.attributes.position.count,n=new Float32Array(t*3);Js.set(e);for(let s=0;s<t;s++)n[s*3]=Js.r,n[s*3+1]=Js.g,n[s*3+2]=Js.b;return i.setAttribute("color",new It(n,3)),i}function V(i,e,t,n=[0,0,0],s=[0,0,0],r=[1,1,1]){const a=e.clone();return sc.set(s[0],s[1],s[2]),ic.setFromEuler(sc),rc.set(n[0],n[1],n[2]),ac.set(r[0],r[1],r[2]),nc.compose(rc,ic,ac),a.applyMatrix4(nc),lg(a,t),i.push(a),a}const te=(i,e,t)=>new Tt(i,e,t),Je=(i,e,t,n=10)=>new tn(i,e,t,n),oc=(i,e=10,t=8)=>new ps(i,e,t);function fn(i){if(!i.length)return null;for(const t of i){if(!t.attributes.uv){const n=new Float32Array(t.attributes.position.count*2);t.setAttribute("uv",new It(n,2))}t.deleteAttribute("tangent")}const e=Cn(i,!1);return i.forEach(t=>t.dispose()),e}function Vt(i,e){const t=new Pe(i);return t.offsetHSL(0,0,e),t.getHex()}function lr(i,e){return{...{L:5.8,W:2.9,hullH:.95,trackW:.62,trackH:.8,clearance:.5,turretR:1.35,turretH:.72,barrel:3,barrelR:.105,wheels:4,skirt:!1,fenders:!0,cupola:!0,paint:e,low:!1},...{sherman:{L:5.7,W:2.95,turretR:1.38,barrel:2.9,hullH:1.05,wheels:4},pershing:{L:6.3,W:3.15,turretR:1.48,barrel:3.5,hullH:1,wheels:4},t34:{L:5.95,W:3,turretR:1.42,barrel:3.25,hullH:.82,low:!0,wheels:4},is2:{L:6.6,W:3.25,turretR:1.62,barrel:3.9,hullH:1,wheels:5},panzer4:{L:5.9,W:2.95,turretR:1.38,barrel:3.35,hullH:.95,skirt:!0,wheels:4},tiger:{L:6.7,W:3.55,turretR:1.68,barrel:4.05,hullH:1.08,wheels:5,skirt:!0},cromwell:{L:6,W:2.9,turretR:1.35,barrel:3,hullH:.9,wheels:4},churchill:{L:7.3,W:3.25,turretR:1.42,barrel:3.05,hullH:1,wheels:6,skirt:!0},chiha:{L:5.45,W:2.4,turretR:1.15,barrel:2.35,hullH:.78,wheels:3},chinu:{L:5.8,W:2.65,turretR:1.32,barrel:2.9,hullH:.86,wheels:4},type92:{L:4.2,W:2.1,turretR:.82,barrel:1.35,hullH:.6,trackH:.62,wheels:2,low:!0}}[i]||{}}}function cr(i,e){const t=[],n=[],s=i.paint,r=Vt(s,.05),a=Vt(s,-.055),o=2763557,l=i.W/2-i.trackW/2,c=i.L,h=i.W;for(const m of[-1,1]){V(t,te(i.trackW,i.trackH*.66,c*.95),1776663,[m*l,i.clearance+i.trackH*.33,0]),V(t,te(i.trackW+.04,.1,c*.97),2434591,[m*l,i.clearance+i.trackH*.68,0]);const _=i.wheels;for(let M=0;M<_;M++){const f=-c*.35+(_===1?c*.35:M/(_-1)*c*.7);V(t,Je(.24,.24,i.trackW+.06,9),3355691,[m*l,i.clearance+i.trackH*.33,f],[0,0,Math.PI/2]),V(t,Je(.1,.1,i.trackW+.1,6),1842456,[m*l,i.clearance+i.trackH*.33,f],[0,0,Math.PI/2])}i.fenders&&V(t,te(i.trackW+.16,.08,c*.98),a,[m*l,i.clearance+i.trackH*.74,0]),i.skirt&&V(t,te(.07,.55,c*.8),a,[m*(h/2+.03),i.clearance+.42,0])}V(t,te(h-.55,.42,c*.84),o,[0,i.clearance+.2,0]),V(t,te(h-.72,i.hullH,c*.72),s,[0,i.clearance+.42+i.hullH/2,-.05]),V(t,te(h-.76,.52,c*.25),r,[0,i.clearance+.5+i.hullH*.75,c*.31],[i.low?-.72:-.52,0,0]),V(t,te(h-.82,.32,c*.18),a,[0,i.clearance+.42+i.hullH,-c*.3]),V(t,te(h-1,.1,c*.14),2368799,[0,i.clearance+.62+i.hullH,-c*.27]),V(t,te(.5,.22,1.1),a,[h/2-.38,i.clearance+i.trackH*.76,-c*.16]),V(t,te(.42,.18,.8),a,[-h/2+.34,i.clearance+i.trackH*.76,c*.08]),V(t,te(.16,.5,.16),3815984,[-h/2+.2,i.clearance+.9,-c*.3]),V(t,Je(.1,.1,.08,7),14208928,[h/2-.5,i.clearance+.85,c*.43],[Math.PI/2,0,0]),V(t,Je(.1,.1,.08,7),14208928,[-h/2+.5,i.clearance+.85,c*.43],[Math.PI/2,0,0]);const u=i.clearance+.42+i.hullH+.02;V(n,Je(i.turretR,i.turretR*.96,i.turretH,12),s,[0,i.turretH/2,0]),V(n,Je(i.turretR*.78,i.turretR*.82,i.turretH*.42,12),r,[0,i.turretH+i.turretH*.2,0]),V(n,te(i.turretR*.95,i.turretH*.62,.42),a,[0,i.turretH*.52,i.turretR*.82]);const d=i.barrel;return V(n,Je(i.barrelR*.85,i.barrelR,d,9),2895143,[0,i.turretH*.55,i.turretR*.8+d/2],[Math.PI/2,0,0]),V(n,Je(i.barrelR*1.25,i.barrelR*1.25,.24,8),2303007,[0,i.turretH*.55,i.turretR*.8+d-.1],[Math.PI/2,0,0]),i.cupola&&(V(n,Je(.3,.3,.26,9),a,[-i.turretR*.32,i.turretH+.28,-i.turretR*.22]),V(n,Je(.27,.27,.05,9),r,[-i.turretR*.32,i.turretH+.43,-i.turretR*.22])),V(n,Je(.018,.018,1.5,4),1908249,[i.turretR*.55,i.turretH+.75,-i.turretR*.55]),V(n,te(.38,.24,.55),a,[i.turretR*.62,i.turretH*.35,-i.turretR*.42]),e==="germany"&&V(n,te(i.turretR*.7,i.turretH*.6,.3),a,[0,i.turretH*.5,-i.turretR*.88]),{hull:fn(t),turret:fn(n),turretY:u,height:u+i.turretH+.6,radius:Math.max(h,c)*.42}}function cg(i,e){const t=[],n=[],s=$t[i].paint,r=Vt(s,-.06),a=1710870,o=e==="sd234"?3:2.5,l=e==="ba64"?4.4:5.2,c=e==="sd234"?4:2,h=.48;V(t,te(o-.3,.4,l*.86),r,[0,.72,0]),V(t,te(o-.55,.75,l*.7),s,[0,1.2,-.1]),V(t,te(o-.6,.5,l*.3),Vt(s,.05),[0,1.2,l*.34],[.5,0,0]),V(t,te(o-.75,.34,l*.24),2303007,[0,1.62,l*.28],[.2,0,0]);for(const d of[-1,1])for(let m=0;m<c;m++){const _=-l*.3+m/Math.max(1,c-1)*l*.6;V(t,Je(h,h,.34,12),a,[d*(o/2-.18),h,_],[0,0,Math.PI/2]),V(t,Je(h*.5,h*.5,.38,8),4868668,[d*(o/2-.18),h,_],[0,0,Math.PI/2])}V(t,Je(.38,.38,.2,10),a,[0,1.15,-l*.42],[Math.PI/2,0,0]);const u=1.58;return V(n,Je(.8,.86,.42,10),s,[0,.21,0]),V(n,te(.16,.3,1.3),2895143,[0,.45,.6]),V(n,te(.5,.42,.5),r,[0,.55,-.2]),V(n,Je(.035,.035,.8,4),1908249,[.55,.8,-.3]),{hull:fn(t),turret:fn(n),turretY:u,height:2.5,radius:1.9}}function ah(i,e="cargo"){const t=[],n=$t[i].paint,s=Vt(n,-.05),r=1710870,a=2.5,o=6;V(t,te(a-.4,.32,o*.9),2763557,[0,.72,0]),V(t,te(a-.45,1.05,1.7),n,[0,1.3,o*.3]),V(t,te(a-.6,.55,.1),2634298,[0,1.55,o*.42],[0,0,0]),V(t,te(a-.5,.12,1.6),s,[0,1.86,o*.3]),V(t,te(a-.35,.28,o*.42),s,[0,1,-o*.2]),V(t,te(a-.3,.55,.14),n,[0,1.25,-o*.42]),V(t,te(a-.3,.55,.14),n,[0,1.25,o*.02]);for(const c of[-1,1]){V(t,te(.14,.55,o*.42),n,[c*(a/2-.2),1.25,-o*.2]);for(let h=0;h<3;h++){const u=o*.3-h*(o*.28);V(t,Je(.47,.47,.32,12),r,[c*(a/2-.16),.48,u],[0,0,Math.PI/2]),V(t,Je(.2,.2,.36,8),4868668,[c*(a/2-.16),.48,u],[0,0,Math.PI/2])}}V(t,Je(.12,.12,.9,7),3092522,[a*.18,1.9,o*.28]),V(t,Je(.09,.09,.08,6),14208928,[a/2-.4,1.35,o*.46],[Math.PI/2,0,0]),V(t,Je(.09,.09,.08,6),14208928,[-a/2+.4,1.35,o*.46],[Math.PI/2,0,0]);const l=[];for(let c=0;c<4;c++)V(l,te(.75,.5,.75),c%2?7166779:8087621,[-.6+c%2*1.2,0,-.3+Math.floor(c/2)*.85]);return V(l,te(1.5,.12,1.7),5196342,[0,.3,.1]),{hull:fn(t),turret:null,cargo:fn(l),turretY:0,height:2.3,radius:2.1,cargoY:1.42,cargoZ:-o*.2}}function hg(i,e){const t=$t[i].paint,n=Vt(t,-.06);if(e==="katyusha"){const h=ah(i),u=[],d=1.85;V(u,te(2.2,.18,2.6),n,[0,d,-.4],[-.25,0,0]);for(let _=0;_<4;_++)for(let M=0;M<3;M++)V(u,Je(.09,.09,2.3,6),3355691,[-.72+M*.72,d+.32+_*.02,-.35],[Math.PI/2-.25,0,0]);V(u,te(.16,.7,.16),2895143,[-1,d-.3,-1.2]),V(u,te(.16,.7,.16),2895143,[1,d-.3,-1.2]);const m=fn([...u]);return{hull:h.hull,turret:m,turretY:0,height:3.2,radius:2.2,elevated:0}}const s=lr(e==="priest"||e==="sexton"?"sherman":e==="horo"?"chiha":"panzer4",t);s.cupola=!1,s.barrel=.5;const r=cr(s,i),a=[],o=s.turretR*1.15;V(a,te(o*2,.72,o*1.9),t,[0,.36,-.1]),V(a,te(o*1.75,.55,o*1.4),n,[0,.85,-.15]),V(a,te(.12,.6,o*1.8),Vt(t,.05),[-o,.6,-.1]),V(a,te(.12,.6,o*1.8),Vt(t,.05),[o,.6,-.1]),V(a,te(o*2,.1,.12),Vt(t,.05),[0,.88,o*.8]);const l=e==="horo"?.36:.22;V(a,Je(.13,.16,2.8,8),2829350,[0,.9,1.3],[Math.PI/2-l,0,0]),V(a,te(.55,.4,.5),n,[0,.85,.2]),V(a,Je(.24,.24,.1,8),2829350,[0,1.1,2.6],[Math.PI/2-l,0,0]),V(a,te(.34,.34,.5),2895143,[.65,.9,.6]),V(a,te(.34,.34,.5),2895143,[-.65,.9,.6]);const c=fn(a);return{hull:r.hull,turret:c,turretY:r.turretY+.1,height:r.turretY+2,radius:r.radius,elevated:l}}function Qs(i,e){const t=[],s=$t[i].uniform,r=Vt(s,-.06),a=Vt(s,-.09),o=11569768,l=5915174,c=2960936,h=[[0,0,0],[.75,0,.42],[-.68,0,.5],[.18,0,-.72],[-.5,0,-.35],[.55,0,-.4]];for(let u=0;u<e;u++){const[d,,m]=h[u%h.length],_=u*1.7%1.2-.6,M=[];V(M,te(.17,.58,.19),r,[-.13,.29,0],[.05,0,.04]),V(M,te(.17,.58,.19),r,[.13,.29,.02],[-.06,0,-.03]),V(M,te(.2,.12,.3),2762529,[-.13,.06,.06]),V(M,te(.2,.12,.3),2762529,[.13,.06,.08]),V(M,te(.46,.6,.28),s,[0,.86,0]),V(M,te(.5,.14,.32),Vt(s,-.05),[0,.6,0]),V(M,te(.34,.4,.16),4867634,[0,.9,-.19]),V(M,te(.14,.48,.16),s,[-.3,.88,.02],[0,0,.16]),V(M,te(.14,.48,.16),s,[.3,.88,.04],[0,0,-.18]),V(M,oc(.155,8,6),o,[0,1.28,.01]),V(M,oc(.19,8,5),a,[0,1.34,0],[0,0,0],[1,.72,1.05]),V(M,te(.3,.05,.36),Vt(a,-.03),[0,1.28,.04]),V(M,te(.05,.05,.95),l,[.22,.92,.24],[.06,0,0]),V(M,te(.035,.035,.5),c,[.22,.95,.74],[.06,0,0]),V(M,te(.09,.09,.22),c,[.22,.9,.44]);const f=fn(M);f.rotateY(_),f.translate(d,0,m),t.push(f)}return{hull:fn(t),turret:null,turretY:0,height:1.75,radius:1.15,squad:e}}function ug(i){switch(i){case"usa":return{wall:9142884,wall2:7827284,roof:4869181,trim:6185545,sand:10194792};case"ussr":return{wall:7167044,wall2:6114873,roof:4013361,trim:5196341,sand:9075541};case"germany":return{wall:8223596,wall2:7039324,roof:4474172,trim:5921871,sand:9207904};case"uk":return{wall:9271896,wall2:8087882,roof:5063736,trim:6445634,sand:10325864};case"japan":return{wall:8615248,wall2:7496771,roof:4143918,trim:5853495,sand:9273176};default:return{wall:2184,wall2:1638,roof:1092,trim:1365,sand:2457}}}function js(i,e,t,n,s,r,a=.2){for(let o=0;o<s;o++){const l=o/s*Math.PI*2;V(i,te(1,.36,.5),o%2?r:Vt(r,-.04),[e+Math.cos(l)*n,a+o%2*.18,t+Math.sin(l)*n],[0,-l,0])}}function dg(i,e){const t=ug(i),n=$t[i].paint,s=$t[i].color,r=[];let a=6,o=null;const l=t.trim;if(e==="hq"){V(r,te(10.5,4.6,8),t.wall,[0,2.3,0]),V(r,te(10.8,.35,8.3),t.roof,[0,4.75,0]),V(r,te(7,2.8,5.8),t.wall2,[-.6,6.3,-.4]),V(r,te(7.4,.3,6.2),t.roof,[-.6,7.8,-.4]),V(r,te(3.2,2.2,3.4),t.wall,[3.4,5.9,2.1]),V(r,te(3.5,.25,3.7),t.roof,[3.4,7.1,2.1]);for(let h=0;h<4;h++)V(r,te(1.1,1,.1),2568239,[-3.6+h*2.3,2.6,4.05]),V(r,te(.85,.85,.1),3817528,[-2.8+h*1.9,6.1,2.52]);V(r,te(1.5,2.4,.16),2829348,[.8,1.2,4.08]),V(r,te(3.4,.22,2),t.roof,[.8,3.1,4.9],[.18,0,0]),V(r,te(.16,2.4,.16),l,[-.9,1.2,5]),V(r,te(.16,2.4,.16),l,[2.5,1.2,5]),V(r,Je(.07,.09,6.5,5),3158314,[-3.8,10.9,-1.9]),V(r,te(2.4,.07,.07),3158314,[-3.8,11.6,-1.9],[0,.4,0]),V(r,te(1.8,.06,.06),3158314,[-3.8,12.2,-1.9],[0,-.5,0]),js(r,0,6.1,4.2,9,t.sand),V(r,te(1.1,.9,1.1),7035450,[4.5,.45,3.6]),V(r,te(1,.8,1),7627071,[5.6,.4,3.9]),V(r,Je(.5,.5,1.2,8),4014648,[-5,.6,2.8]),V(r,Je(.06,.06,7.5,5),3487278,[4.6,9,-2.6]),o=[4.6,12.1,-2.6],a=13}else if(e==="barracks"){V(r,te(9.5,3.2,6.2),t.wall,[0,1.6,0]),V(r,te(5.2,.22,6.9),t.roof,[-2.5,3.9,0],[0,0,.42]),V(r,te(5.2,.22,6.9),t.roof,[2.5,3.9,0],[0,0,-.42]),V(r,te(.3,1.4,6.3),t.wall2,[0,3.5,0]),V(r,te(1.6,2.1,.15),2829348,[-2.4,1.05,3.12]),V(r,te(1.4,2.1,.15),2829348,[2.6,1.05,3.12]);for(let h=0;h<3;h++)V(r,te(.9,.7,.12),3357236,[-2.8+h*2.7,2.5,3.12]),V(r,te(.12,.7,.9),3357236,[4.78,2.5,-1.6+h*1.6]);V(r,te(1.3,.3,.7),t.roof,[-2.4,2.5,3.4]),V(r,te(1.1,.9,1),7035450,[5.6,.45,2]),V(r,te(.9,.7,.9),7693119,[5.4,1.15,2.1]),V(r,Je(.45,.45,1.1,8),3948598,[6.4,.55,.4]),js(r,0,4.6,4.6,7,t.sand),V(r,Je(.05,.05,5.6,5),3487278,[4.2,5.4,-2.6]),o=[4.2,7.9,-2.6],a=8.2}else if(e==="factory"){V(r,te(12.5,5.2,9.5),t.wall,[0,2.6,0]),V(r,te(12.9,.3,9.9),t.roof,[0,5.35,0]);for(let h=0;h<4;h++)V(r,te(2.5,.18,9.9),Vt(t.roof,.02),[-4.2+h*2.8,6.4,0],[0,0,.36]),V(r,te(.14,1.1,9.9),t.wall2,[-5.4+h*2.8,5.9,0]);V(r,Je(.75,.9,6.5,9),5919043,[4.6,8.1,-2.6]),V(r,Je(.85,.85,.4,9),3947056,[4.6,11.35,-2.6]),V(r,te(4.4,4.2,.18),2500383,[-1.2,2.1,4.79]),V(r,te(4.8,.25,.3),l,[-1.2,4.35,4.85]);for(let h=0;h<4;h++)V(r,te(.1,4,.22),4539704,[-2.9+h*1.1,2,4.83]);for(let h=0;h<4;h++)V(r,te(1,.8,.12),3357236,[-3.4+h*2.3,3.6,4.79]);V(r,te(3.4,2.6,4),t.wall2,[5.6,1.3,5.2]),V(r,te(3.7,.24,4.3),t.roof,[5.6,2.7,5.2]);for(let h=0;h<3;h++)V(r,te(1,.8,1),7035450,[-6.8,.4+h*.82,3.6+h%2*.6]);V(r,Je(.5,.5,1.2,8),4014648,[6.8,.6,1]),V(r,Je(.5,.5,1.2,8),4014648,[6.8,.6,2.2]),V(r,Je(.05,.05,5,5),3487278,[-6,7.6,-4.2]),o=[-6,9.8,-4.2],a=11.5}else if(e==="depot"){V(r,te(7.2,3.4,5.2),t.wall,[0,1.7,0]),V(r,te(7.6,.24,5.6),t.roof,[0,3.5,0]),V(r,te(3.2,.2,5.9),t.roof,[-2,4.1,0],[0,0,.3]),V(r,te(3.2,.2,5.9),t.roof,[2,4.1,0],[0,0,-.3]),V(r,te(2.2,2.6,.15),2829348,[0,1.3,2.62]);for(let h=0;h<3;h++)V(r,te(.8,.6,.1),3357236,[-2.4+h*2.4,2.4,2.62]);for(let h=0;h<6;h++){const u=-3.6+h%3*1.25,d=.4+Math.floor(h/3)*.82;V(r,te(1.05,.78,.95),h%2?7166779:8087621,[u,d,3.9+h%2*.3],[0,h*.3,0])}for(let h=0;h<4;h++)V(r,Je(.46,.46,1.1,8),4014648,[3+h%2*1.1,.55,-3.5+Math.floor(h/2)*1.1]);js(r,0,4.2,3.8,7,t.sand),V(r,Je(.05,.05,4.8,5),3487278,[3,5.4,-1.6]),o=[3,7.6,-1.6],a=7.8}else e==="turret"&&(js(r,0,0,3,12,t.sand,.18),V(r,te(2.4,.5,2.4),5591615,[0,.4,0]),V(r,Je(.85,1,.8,10),l,[0,.95,0]),V(r,te(2,1.1,.16),Vt(l,-.06),[0,1.55,.55],[.08,0,0]),V(r,Je(.11,.13,2.7,8),2895143,[0,1.7,1.7],[Math.PI/2-.12,0,0]),V(r,Je(.2,.2,.12,8),2895143,[0,1.85,3],[Math.PI/2-.12,0,0]),V(r,te(.8,.5,.6),6180917,[1.9,.45,-1.2]),V(r,te(.8,.5,.6),6180917,[1.9,.45,-.4]),a=3.2);return{geometry:fn(r),height:a,radius:4,flagPos:o,flagColor:s,paint:n}}const aa=new Map;function fg(i){if(aa.has(i))return aa.get(i);const e=document.createElement("canvas");e.width=160,e.height=96;const t=e.getContext("2d"),n=a=>{t.fillStyle=a,t.fillRect(0,0,160,96)};if(i==="usa"){for(let a=0;a<13;a++)t.fillStyle=a%2?"#e9e3d3":"#b23a30",t.fillRect(0,a*96/13,160,96/13);t.fillStyle="#283d66",t.fillRect(0,0,72,52),t.fillStyle="#e9e3d3";for(let a=0;a<4;a++)for(let o=0;o<5;o++)t.fillRect(8+o*13,8+a*11,2.6,2.6)}else if(i==="ussr"){n("#9e2f24"),t.fillStyle="#e3c268",t.save(),t.translate(38,46),t.beginPath();for(let a=0;a<10;a++){const o=-Math.PI/2+a*Math.PI/5,l=a%2?7:17;t.lineTo(Math.cos(o)*l,Math.sin(o)*l)}t.closePath(),t.fill(),t.restore(),t.strokeStyle="#e3c268",t.lineWidth=4,t.beginPath(),t.arc(82,46,13,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(74,58),t.lineTo(90,34),t.stroke()}else i==="germany"?(n("#3d3f38"),t.fillStyle="#d8d2c2",t.fillRect(0,0,160,10),t.fillRect(0,86,160,10),t.strokeStyle="#d8d2c2",t.lineWidth=9,t.beginPath(),t.moveTo(80,26),t.lineTo(80,70),t.moveTo(58,48),t.lineTo(102,48),t.stroke(),t.strokeStyle="#1f201c",t.lineWidth=4,t.beginPath(),t.moveTo(80,26),t.lineTo(80,70),t.moveTo(58,48),t.lineTo(102,48),t.stroke()):i==="uk"?(n("#263a63"),t.strokeStyle="#e6e0ce",t.lineWidth=20,t.beginPath(),t.moveTo(0,0),t.lineTo(160,96),t.moveTo(160,0),t.lineTo(0,96),t.stroke(),t.fillStyle="#e6e0ce",t.fillRect(66,0,28,96),t.fillRect(0,34,160,28),t.fillStyle="#a33a30",t.fillRect(72,0,16,96),t.fillRect(0,40,160,16),t.strokeStyle="#a33a30",t.lineWidth=10,t.beginPath(),t.moveTo(0,0),t.lineTo(160,96),t.moveTo(160,0),t.lineTo(0,96),t.stroke()):i==="japan"?(n("#e7e1d2"),t.fillStyle="#b3352c",t.beginPath(),t.arc(80,48,25,0,Math.PI*2),t.fill()):n("#666");const s=t.createLinearGradient(0,0,160,0);s.addColorStop(0,"rgba(0,0,0,.25)"),s.addColorStop(.35,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(255,255,255,.06)"),t.fillStyle=s,t.fillRect(0,0,160,96);const r=new us(e);return r.colorSpace=kt,r.anisotropy=2,aa.set(i,r),r}const oa=new Map;function pg(i){return oa.has(i)||oa.set(i,new Lt({map:fg(i),side:Ht,roughness:.9,metalness:0})),oa.get(i)}const la=new Map;function mg(i,e){const t=i+":"+e;if(la.has(t))return la.get(t);const n=$t[i].paint;let s;switch(e){case"rifle":s=Qs(i,4);break;case"engineer":s=Qs(i,3);break;case"at":s=Qs(i,3);break;case"scout":{const r={usa:"greyhound",ussr:"ba64",germany:"sd234",uk:"daimler",japan:"type92"}[i];r==="type92"?s=cr(lr("type92",n),i):s=cg(i,r);break}case"tank":{const r={usa:"sherman",ussr:"t34",germany:"panzer4",uk:"cromwell",japan:"chiha"}[i];s=cr(lr(r,n),i);break}case"heavy":{const r={usa:"pershing",ussr:"is2",germany:"tiger",uk:"churchill",japan:"chinu"}[i];s=cr(lr(r,n),i);break}case"artillery":{const r={usa:"priest",ussr:"katyusha",germany:"hummel",uk:"sexton",japan:"horo"}[i];s=hg(i,r);break}case"harvester":s=ah(i);break;default:s=Qs(i,3)}return s&&(s.faction=i,s.type=e,la.set(t,s)),s}const ca=new Map;function gg(i,e){const t=i+":"+e;if(ca.has(t))return ca.get(t);const n=dg(i,e);return n.faction=i,n.type=e,ca.set(t,n),n}let _g=1;function lc(i,e){const t=i.attributes.position.count,n=new Float32Array(t*3),s=new Pe(e);for(let r=0;r<t;r++)n[r*3]=s.r,n[r*3+1]=s.g,n[r*3+2]=s.b;return i.setAttribute("color",new It(n,3)),i}function xg(i){const e=new zi(i*.92,i*1.05,30);return e.rotateX(-Math.PI/2),e}function oh(i,e,t){const n=new Wn,s=new sn({color:461062,transparent:!0,opacity:.82,depthTest:!1,depthWrite:!1}),r=new sn({color:8826976,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}),a=new it(new Dn(t,.16),s),o=new it(new Dn(t,.1),r);return o.position.z=.002,n.add(a,o),n.renderOrder=30,n.visible=!1,n.position.y=e,n.userData={fill:o,width:t,height:e,bg:a,fillMat:r},i.scene.add(n),n}class lh{constructor(e,t,n,s,r,a,o){this.game=e,this.id=_g++,this.faction=t,this.team=n,this.kind=o,this.def=s,this.name=s.name,this.maxHp=s.hp,this.hp=s.hp,this.alive=!0,this.selected=!1,this.radius=s.radius||1.5,this.vision=s.vision||28,this.armorClass=s.armor||"building",this.x=r,this.z=a,this.y=e.world.heightAt(r,a),this.group=new Wn,this.group.position.set(r,this.y,a),this.group.userData.entity=this,e.scene.add(this.group),this.ring=new it(xg(this.radius*(o==="building"?.82:.95)),new sn({color:n==="player"?Zl.player:Zl.enemy,transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1,side:Ht})),this.ring.position.y=.1,this.ring.renderOrder=12,this.ring.visible=!1,this.group.add(this.ring),this.hover=!1,this.target=null,this.lastAttacker=null,this.deadTimer=0}get pos(){return this.group.position}setSelected(e){this.selected=e,this.ring.visible=e,e&&this.kind==="unit"&&this.game.audio.play("select")}distanceTo(e){return Math.hypot(e.x-this.x,e.z-this.z)}distanceToPoint(e,t){return Math.hypot(e-this.x,t-this.z)}takeDamage(e,t,n="shell"){if(!this.alive)return;const s=(Jl[n]&&Jl[n][this.armorClass])??1,r=e*s;this.hp-=r,this.lastAttacker=t,this.game.onEntityDamaged(this,t,r),this.hp<=0&&this.die(t)}updateBar(e){if(!this.alive)return;const t=this.bar;if(!t)return;const n=this.selected||this.hp<this.maxHp-.5||this.kind==="building"&&this.underConstruction;if(t.visible=n&&this.group.visible,!n)return;t.position.set(this.x,this.y+t.userData.height,this.z),t.quaternion.copy(e.quaternion);const s=Math.max(0,this.hp/this.maxHp),r=t.userData.fill;r.scale.x=s,r.position.x=-(1-s)*t.userData.width/2,this.underConstruction?r.material.color.setHex(12887909):s>.6?r.material.color.setHex(8826976):s>.3?r.material.color.setHex(13214286):r.material.color.setHex(13191226)}die(e){this.alive&&(this.alive=!1,this.hp=0,this.selected=!1,this.bar&&this.game.scene.remove(this.bar),this.game.onEntityKilled(this,e))}disposeGroup(){this.game.scene.remove(this.group),this.group.traverse(e=>{e.isMesh&&e.geometry&&e.geometry.userData.shared,e.material&&e.material.userData&&e.material.userData.unique&&e.material.dispose()})}}class ch extends lh{constructor(e,t,n,s,r,a){const o=Xn(t,s);super(e,t,n,o,r,a,"unit"),this.type=s,this.stats=o,this.speed=o.speed,this.range=o.range,this.minRange=o.minRange||0,this.damage=o.dmg,this.cooldown=o.cooldown,this.weapon=o.weapon,this.splash=o.splash||0,this.isHarvester=!!o.harvester,this.isBuilder=!!o.builder,this.capacity=o.capacity||0,this.cargo=0,this.turretAngle=0,this.heading=Math.random()*Math.PI*2,this.attackTimer=Math.random()*.4,this.acquireTimer=Math.random()*.3,this.order={type:"idle"},this.target=null,this.moveTarget=null,this.stuck=0,this.dustTimer=Math.random(),this.buildTimer=0,this.harvestState="idle",this.harvestNode=null,this.radius=s==="harvester"?2.1:o.armor==="infantry"?1.1:s==="heavy"?2.6:2.1;const l=mg(t,s);this.model=l;const c=o.armor==="infantry"?ag:to;this.hull=new it(l.hull,c),this.hull.castShadow=!0,this.hull.receiveShadow=!0,this.hull.userData.entity=this,this.group.add(this.hull),l.turret&&(this.turret=new it(l.turret,c),this.turret.position.y=l.turretY||0,this.turret.castShadow=!0,this.turret.userData.entity=this,this.group.add(this.turret)),l.cargo&&(this.cargoMesh=new it(l.cargo,to),this.cargoMesh.position.set(0,l.cargoY||1.4,l.cargoZ||-1.5),this.cargoMesh.visible=!1,this.group.add(this.cargoMesh)),this.group.rotation.y=this.heading,this.bar=oh(e,l.height+.5,o.armor==="infantry"?1.4:1.8),this.bar.userData.height=l.height+.5,this.home={x:r,z:a},this.muzzleY=o.armor==="infantry"?1.05:(l.turretY||1.4)+.55,this.muzzleZ=s==="heavy"?4.6:s==="tank"?3.9:s==="scout"?1.9:s==="artillery"?3.9:.75,this.turretSpeed=s==="artillery"?1.1:2.6,this.isHarvester&&this.autoGather(),e.registerUnit(this)}setOrder(e){this.order=e,this.moveTarget=null,e.type==="move"||e.type==="attackMove"?(this.moveTarget={x:e.x,z:e.z},this.target=null):e.type==="attack"?this.target=e.target:(e.type==="stop"||e.type==="hold")&&(this.target=null,this.moveTarget=null,this.order={type:e.type==="hold"?"hold":"idle"})}autoGather(){const e=this.game.nearestSupply(this.x,this.z);e&&(this.order={type:"gather",node:e},this.harvestState="toNode",this.harvestNode=e)}update(e){this.alive&&(this.attackTimer-=e,this.acquireTimer-=e,this.dustTimer-=e,this.isHarvester?this.updateHarvester(e):this.isBuilder&&this.order.type==="build"?this.updateBuild(e):this.updateCombat(e),this.updateMovement(e),this.updateVisual(e))}updateCombat(e){const t=this.order;if(t.type==="attack"){if(!t.target||!t.target.alive){this.setOrder({type:"idle"});return}this.target=t.target,this.distanceTo(this.target)>this.range*.9?this.moveTarget={x:this.target.x,z:this.target.z}:(this.moveTarget=null,this.tryFire());return}if(t.type==="attackMove"){if(this.acquireTimer<=0){this.acquireTimer=.35;const n=this.findTarget(this.vision);n&&(this.target=n)}this.target&&this.target.alive?this.distanceTo(this.target)<=this.range*.95?(this.moveTarget=null,this.faceTarget(this.target,e),this.tryFire()):this.moveTarget={x:this.target.x,z:this.target.z}:(this.target=null,t.x!==void 0&&(this.moveTarget={x:t.x,z:t.z}),this.moveTarget&&this.distanceToPoint(t.x,t.z)<2.5&&this.setOrder({type:"idle"}));return}if(t.type==="move"){if(this.moveTarget&&this.distanceToPoint(this.moveTarget.x,this.moveTarget.z)<2.2&&(this.moveTarget=null,this.order={type:"idle"}),this.acquireTimer<=0){this.acquireTimer=.4;const n=this.findTarget(this.range);n&&(this.target=n)}this.target&&(!this.target.alive||this.distanceTo(this.target)>this.range)&&(this.target=null),this.target&&(this.faceTarget(this.target,e),this.tryFire());return}if(t.type==="hold"){if(this.acquireTimer<=0){this.acquireTimer=.4;const n=this.findTarget(this.range*1.05);this.target=n}this.target&&this.target.alive&&this.distanceTo(this.target)<=this.range*1.05?(this.faceTarget(this.target,e),this.tryFire()):this.target=null;return}if(this.acquireTimer<=0){this.acquireTimer=.45;const n=this.findTarget(this.vision);n&&this.distanceTo(n)<=this.range*1.05?this.target=n:this.target=null}this.target&&(!this.target.alive||this.distanceTo(this.target)>this.range*1.1)&&(this.target=null),this.target&&(this.faceTarget(this.target,e),this.tryFire())}findTarget(e){const t=this.game.enemyTargets(this.team);let n=null,s=1/0;const r=this.type==="at";for(const a of t){if(!a.alive)continue;const o=this.distanceTo(a);if(o>e)continue;let l=o;r&&a.armorClass!=="infantry"&&a.kind==="unit"&&(l*=.35),this.weapon==="explosive"&&a.kind==="unit"&&a.armorClass==="infantry"&&(l*=.7),this.weapon==="smallArms"&&a.armorClass!=="infantry"&&(l*=1.6),a.kind==="building"&&(l*=1.35),l<s&&(s=l,n=a)}return n}faceTarget(e,t){const n=e.x-this.x,s=e.z-this.z,r=Math.atan2(n,s);if(this.turret){let a=r-this.heading;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;const o=this.turretSpeed*t;Math.abs(a-this.turretAngle)<o?this.turretAngle=a:this.turretAngle+=Math.sign(a-this.turretAngle)*o}else this.heading=this.lerpAngle(this.heading,r,Math.min(1,t*4))}lerpAngle(e,t,n){let s=t-e;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return e+s*n}muzzleWorld(){const e=this.heading+(this.turret?this.turretAngle:0),t=this.muzzleZ;return new U(this.x+Math.sin(e)*t,this.y+this.muzzleY,this.z+Math.cos(e)*t)}tryFire(){if(!this.target||!this.target.alive||this.attackTimer>0||this.weapon==="none")return;const e=this.distanceTo(this.target);if(e>this.range||e<this.minRange)return;this.attackTimer=this.cooldown*(.92+Math.random()*.16);const t=this.muzzleWorld(),n=new U(this.target.x,this.target.y+(this.target.kind==="building"?2.2:1),this.target.z),s=n.clone().sub(t).normalize();this.weapon==="smallArms"?(this.game.audio.play(this.type==="rifle"||this.type==="engineer"||this.type==="at"?"rifle":"mg",{volume:this.type==="rifle"?.7:1}),this.game.effects.tracer(t,n,16766089,.07),this.game.effects.muzzle(t,s,.45),this.target.takeDamage(this.damage*(.9+Math.random()*.2),this,"smallArms")):this.weapon==="at"?(this.game.audio.play("cannon",{volume:.55}),this.game.effects.muzzle(t,s,.7),this.game.spawnProjectile(this,this.target,{speed:78,damage:this.damage,weapon:"at",splash:0,kind:"rocket",arc:0})):this.weapon==="explosive"?(this.game.audio.play("cannon",{volume:1}),this.game.effects.muzzle(t,s,1.2),this.game.spawnProjectile(this,this.target,{speed:52,damage:this.damage,weapon:"explosive",splash:this.splash,kind:"shell",arc:14,groundTarget:!0})):(this.game.audio.play("cannon",{volume:.8}),this.game.effects.muzzle(t,s,.9),this.game.spawnProjectile(this,this.target,{speed:120,damage:this.damage,weapon:"shell",splash:0,kind:"shell",arc:0})),this.game.onWeaponFired(this)}updateMovement(e){if(!this.moveTarget){this.y=this.game.world.heightAt(this.x,this.z),this.group.position.y=this.y;return}const t=this.moveTarget.x-this.x,n=this.moveTarget.z-this.z,s=Math.hypot(t,n);if(s<.4){this.moveTarget=null;return}let r=t/s,a=n/s,o=0,l=0;const c=this.game.units;for(let E=0;E<c.length;E++){const b=c[E];if(b===this||!b.alive)continue;const A=this.x-b.x,w=this.z-b.z,g=Math.hypot(A,w),v=this.radius+b.radius+.25;if(g<v&&g>.001){const L=(v-g)/v;o+=A/g*L*1.6,l+=w/g*L*1.6}}const h=this.game.buildings;for(let E=0;E<h.length;E++){const b=h[E];if(!b.alive)continue;const A=this.x-b.x,w=this.z-b.z,g=Math.hypot(A,w),v=b.radius+this.radius+.6;if(g<v&&g>.001){const L=(v-g)/v;o+=A/g*L*3.2,l+=w/g*L*3.2,o+=-(w/g)*L*1.4,l+=A/g*L*1.4}}r+=o,a+=l;const u=Math.hypot(r,a)||1;r/=u,a/=u;const d=this.speed*(this.weapon==="explosive",1),m=Math.min(d*e,s),_=this.x+r*m,M=this.z+a*m,f=this.game.world.bounds;this.x=Math.max(-f,Math.min(f,_)),this.z=Math.max(-f,Math.min(f,M));const p=Math.atan2(r,a);if(this.heading=this.lerpAngle(this.heading,p,Math.min(1,e*3.5)),this.group.position.x=this.x,this.group.position.z=this.z,this.y=this.game.world.heightAt(this.x,this.z),this.group.position.y=this.y,this.group.rotation.y=this.heading,this.stats.armor!=="infantry"&&this.dustTimer<=0){this.dustTimer=.35+Math.random()*.3;const E=new U(this.x-Math.sin(this.heading)*this.radius,this.group.position.y+.2,this.z-Math.cos(this.heading)*this.radius);this.game.effects.dust(E,this.radius*.5)}m<d*e*.35?(this.stuck+=e,this.stuck>2.8&&(this.stuck=0,(this.order.type==="move"||this.order.type==="attackMove")&&(this.moveTarget=null,this.order.type==="attackMove"&&(this.order={type:"idle"})))):this.stuck=Math.max(0,this.stuck-e)}die(e){if(!this.alive)return;this.alive=!1,this.hp=0,this.selected=!1,this.bar&&this.game.scene.remove(this.bar);const t=new U(this.x,this.y+.6,this.z);this.stats.armor==="infantry"?(this.game.effects.impact(t,1),this.game.effects.decal(t,.9),this.game.effects.smokePuff(t,.7,!0),this.game.audio.play("rifle",{volume:.3})):(this.game.effects.bigExplosion(t,.9),this.game.audio.play("explosion",{volume:.9}),this.game.effects.addWreck(this.model.hull,new U(this.x,this.y,this.z),this.heading,this.faction==="germany"?2763298:2434334)),this.game.scene.remove(this.group),this.game.onEntityKilled(this,e)}updateVisual(e){if(this.turret&&(this.turret.rotation.y=this.turretAngle,this.target||(this.turretAngle*=Math.max(0,1-e*.8))),this.stats.armor==="infantry")if(this.moveTarget){const t=performance.now()*.012;this.hull.position.y=Math.abs(Math.sin(t))*.06,this.hull.rotation.z=Math.sin(t*.5)*.015}else this.hull.position.y*=.9,this.hull.rotation.z*=.9;this.cargoMesh&&(this.cargoMesh.visible=this.cargo>0),this.updateBar(this.game.camera)}updateHarvester(e){if(this.order.type!=="gather"){this.target=null;return}let t=this.harvestNode;if(this.harvestState==="toNode"){if((!t||t.amount<=0)&&(t=this.game.nearestSupply(this.x,this.z),this.harvestNode=t,!t)){this.order={type:"idle"};return}this.distanceToPoint(t.x,t.z)>4.2?this.moveTarget={x:t.x,z:t.z}:(this.moveTarget=null,this.harvestState="gathering",this.buildTimer=0)}else if(this.harvestState==="gathering"){if(this.moveTarget=null,this.buildTimer+=e,this.buildTimer>=1.8){this.buildTimer=0;const n=t?t.take(this.capacity):0;this.cargo+=n,n>0&&this.game.audio.play("build",{volume:.4}),this.cargo<=0?(this.harvestNode=this.game.nearestSupply(this.x,this.z),this.harvestState=this.harvestNode?"toNode":"idle"):(this.cargo>=this.capacity||!t||t.amount<=0)&&(this.harvestState="toDrop")}}else if(this.harvestState==="toDrop"){const n=this.game.nearestDropoff(this.team,this.x,this.z);if(!n){this.harvestState="toNode";return}this.distanceToPoint(n.x,n.z)>n.radius+2.6?this.moveTarget={x:n.x,z:n.z}:(this.moveTarget=null,this.game.addSupplies(this.cargo,this.team),this.cargo=0,this.harvestState="toNode",this.harvestNode=t&&t.amount>0?t:this.game.nearestSupply(this.x,this.z),this.team==="player"&&this.game.audio.play("ready",{volume:.3}))}this.order.type==="gather"&&this.harvestState==="idle"&&(this.harvestState="toNode"),this.updateVisual(e)}updateBuild(e){const t=this.order.building;if(!t||!t.alive||!t.underConstruction){this.setOrder({type:"idle"});return}const n=this.distanceToPoint(t.x,t.z),s=t.radius+this.radius+2.5;n>s?this.moveTarget={x:t.x,z:t.z}:(this.moveTarget=null,t.addBuildProgress(e,this),this.buildTimer+=e,this.buildTimer>.55&&(this.buildTimer=0,this.game.effects.buildSparks(new U(t.x+(Math.random()-.5)*t.radius,this.y+1.2,t.z+(Math.random()-.5)*t.radius)),Math.random()<.4&&this.game.audio.play("build",{volume:.3}))),this.updateVisual(e)}repairTarget(){}}class vg extends lh{constructor(e,t,n,s,r,a,o={}){const l=$0(t,s);if(super(e,t,n,l,r,a,"building"),this.type=s,this.stats=l,this.radius=l.radius,this.underConstruction=!!o.underConstruction,this.buildProgress=this.underConstruction?o.progress||0:1,this.buildTime=l.time||1,this.autoBuild=!!o.autoBuild,this.queue=[],this.rally=null,this.weapon=l.weapon||null,this.range=l.range||0,this.damage=l.dmg||0,this.cooldown=l.cooldown||2,this.attackTimer=Math.random(),this.acquireTimer=0,this.target=null,this.dropoff=!!l.dropoff,this.income=l.income||0,this.produces=l.produces||[],this.model=gg(t,s),this.height=this.model.height,this.hull=new it(this.model.geometry,og),this.hull.castShadow=!0,this.hull.receiveShadow=!0,this.hull.userData.entity=this,this.group.add(this.hull),this.model.flagPos){const c=new it(new Dn(2.5,1.5),pg(t));c.position.set(this.model.flagPos[0],this.model.flagPos[1],this.model.flagPos[2]),c.rotation.y=-.2,c.castShadow=!0,c.userData.entity=this,this.flag=c,this.group.add(c)}this.bar=oh(e,this.height+.6,Math.max(2.2,this.radius*.65)),this.bar.userData.height=this.height+.6,this.underConstruction&&(this.group.scale.y=Math.max(.18,.2+this.buildProgress*.8),this.hp=this.maxHp*.15,this.group.position.y=e.world.heightAt(r,a)-.1),this.exitDir=Math.atan2(-r,-a),this.rally={x:r+Math.sin(this.exitDir)*(this.radius+5),z:a+Math.cos(this.exitDir)*(this.radius+5)},e.registerBuilding(this)}addBuildProgress(e,t){if(!this.underConstruction)return;const n=1/this.buildTime*.92;this.buildProgress=Math.min(1,this.buildProgress+e*n),this.group.scale.y=Math.max(.18,.2+this.buildProgress*.8),this.buildProgress>=1&&this.completeConstruction()}completeConstruction(){this.underConstruction=!1,this.buildProgress=1,this.hp=this.maxHp,this.group.scale.y=1,this.group.position.y=this.game.world.heightAt(this.x,this.z),this.team==="player"&&(this.game.audio.play("complete"),this.game.toast(`${this.name} construction complete`,"good"),this.game.effects.bigExplosionSmoke(new U(this.x,this.y+1,this.z))),this.game.onBuildingComplete(this)}enqueue(e){const t=Xn(this.faction,e);return this.queue.length>=5||!this.game.spend(this.team,t.cost)?!1:(this.queue.push({type:e,remaining:t.time,total:t.time,pop:t.pop}),this.team==="player"&&this.game.audio.play("click"),!0)}cancelQueue(e){if(e<0||e>=this.queue.length)return;const t=this.queue[e],n=Xn(this.faction,t.type);this.game.refund(this.team,Math.round(n.cost*.8)),this.queue.splice(e,1)}update(e){if(this.alive){if(this.underConstruction){this.autoBuild&&this.addBuildProgress(e*(this.game.buildSpeed(this.team)||1),null),Math.random()<e*1.5&&this.game.effects.smokePuff(new U(this.x+(Math.random()-.5)*this.radius,this.y+.8,this.z+(Math.random()-.5)*this.radius),.8,!1),this.updateBar(this.game.camera),this.flag&&(this.flag.rotation.y=-.2+Math.sin(this.game.time*2.2)*.12);return}if(this.queue.length){const t=this.queue[0],n=this.game.productionSpeed(this.team),s=Xn(this.faction,t.type),r=this.game.popUsed(this.team),a=this.game.popCap(this.team);r+s.pop<=a?(t.remaining-=e*n,t.remaining<=0&&(this.queue.shift(),this.spawnUnit(t.type))):this.team==="player"&&!this._popWarned&&(this._popWarned=!0,this.game.toast("Population limit reached — build a Supply Depot","bad")),this.queue.length===0&&(this._popWarned=!1)}this.weapon&&this.updateTurretCombat(e),this.flag&&(this.flag.rotation.y=-.2+Math.sin(this.game.time*2.1+this.id)*.1,this.flag.scale.x=1+Math.sin(this.game.time*3.4+this.id)*.025),this.updateBar(this.game.camera)}}spawnUnit(e){const t=Xn(this.faction,e),n=this.exitDir,s=this.x+Math.sin(n)*(this.radius+3.2),r=this.z+Math.cos(n)*(this.radius+3.2),a=new ch(this.game,this.faction,this.team,e,s,r);return e==="harvester"?a.autoGather():this.rally&&(this.rally.x!==0||this.rally.z!==0)&&a.setOrder({type:"move",x:this.rally.x+(Math.random()-.5)*5,z:this.rally.z+(Math.random()-.5)*5}),this.team==="player"&&(this.game.audio.play("ready"),e!=="harvester"&&this.game.toast(`${t.name} ready`,"good")),this.game.onUnitProduced(this,a),a}updateTurretCombat(e){if(this.attackTimer-=e,this.attackTimer>0)return;if(this.acquireTimer-=e,this.acquireTimer<=0){this.acquireTimer=.35;const r=this.game.enemyTargets(this.team);let a=null,o=this.range;for(const l of r){if(!l.alive)continue;const c=this.distanceTo(l);c<o&&(o=c,a=l)}this.target=a}if(!this.target||!this.target.alive||this.distanceTo(this.target)>this.range)return;this.attackTimer=this.cooldown*(.95+Math.random()*.1);const t=new U(this.x+Math.sin(this.exitDir)*1.6,this.y+this.height*.55,this.z+Math.cos(this.exitDir)*1.6),s=new U(this.target.x,this.target.y+1,this.target.z).clone().sub(t).normalize();this.game.audio.play("cannon",{volume:.55}),this.game.effects.muzzle(t,s,.8),this.game.spawnProjectile(this,this.target,{speed:110,damage:this.damage,weapon:"shell",splash:0,kind:"shell",arc:0})}die(e){this.alive&&(this.alive=!1,this.hp=0,this.selected=!1,this.bar&&this.game.scene.remove(this.bar),this.game.effects.bigExplosion(new U(this.x,this.y+2,this.z),this.radius*.24+.6),this.game.effects.addRubble(this.model.geometry,new U(this.x,this.y,this.z),this.group.rotation.y),this.game.audio.play("explosion",{volume:1}),this.game.scene.remove(this.group),this.game.onEntityKilled(this,e))}}new ps(.18,6,5);new sn({color:16765562}),new sn({color:16751696}),new sn({color:16760944});class Mg{constructor(e,t,n,s=1600){this.game=e,this.x=t,this.z=n,this.amount=s,this.max=s,this.radius=3.4,this.group=new Wn,this.group.position.set(t,e.world.heightAt(t,n),n),this.group.userData.supplyNode=this;const r=[],a=(u,d,m,_,M,f=0)=>{const p=new Tt(_,_*.82,_*.92);p.rotateY(f),p.translate(u,d,m),lc(p,M),r.push(p)};a(0,.42,0,1.3,8021048,.1),a(1.15,.4,.35,1.1,7166258,-.2),a(-1.1,.4,.2,1.05,8415548,.35),a(.1,1.15,-.2,1.05,7429430,.5),a(-.55,.38,-1.15,.9,8218170,.1),a(.55,.38,-1.2,.85,7297844,-.4);const o=new tn(.34,.34,.85,8);o.translate(1.7,.42,-.7),lc(o,4146746),r.push(o);const l=Cn(r,!1);r.forEach(u=>u.dispose()),this.crateMesh=new it(l,to),this.crateMesh.castShadow=!0,this.crateMesh.receiveShadow=!0,this.crateMesh.userData.supplyNode=this,this.group.add(this.crateMesh);const c=new sn({color:14928271,transparent:!0,opacity:.13,depthWrite:!1,blending:Ii,side:Ht});this.beam=new it(new tn(.55,.75,9,8,1,!0),c),this.beam.position.y=4.5,this.group.add(this.beam);const h=new sn({color:14928271,transparent:!0,opacity:.5,depthWrite:!1,side:Ht});this.ring=new it(new zi(2.4,2.75,24),h),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.09,this.group.add(this.ring),this.beam.raycast=()=>{},this.ring.raycast=()=>{},e.scene.add(this.group),e.supplyNodes.push(this)}take(e){const t=Math.min(e,this.amount);if(this.amount-=t,this.amount<=0)this.group.visible=!1,this.game.toast("Supply cache exhausted","bad");else{const n=this.amount/this.max;this.crateMesh.scale.y=.35+n*.65}return t}update(e){this.amount<=0||(this.beam.material.opacity=.08+Math.sin(this.game.time*1.8+this.x)*.035,this.ring.material.opacity=.32+Math.sin(this.game.time*1.8+this.x)*.12,this.ring.scale.setScalar(1+Math.sin(this.game.time*1.4+this.z)*.04))}}class yg{constructor(e){this.game=e,this.team="enemy",this.faction=e.enemyFaction,this.diff=e.difficulty,this.thinkTimer=1.2,this.buildTimer=4,this.attackTimer=this.diff.id==="marshal"?85:this.diff.id==="recruit"?210:145,this.attacking=!1,this.defendTimer=0,this.threat=null,this.stage={x:e.enemyBase.x-12,z:e.enemyBase.z+10},this.planIndex=0,this.extraFactory=!1,this.lastAttackSize=0,this.repathTimer=0}update(e){this.thinkTimer-=e,this.attackTimer-=e,this.defendTimer-=e,this.repathTimer-=e,this.thinkTimer<=0&&(this.thinkTimer=1,this.think())}onBaseAttacked(e){this.defendTimer=26,this.threat={x:e.x,z:e.z},this.game.team==="player"&&this.game.audio.play("alarm")}think(){!this.game.running||this.game.ended||(this.manageEconomy(),this.manageConstruction(),this.manageProduction(),this.manageMilitary())}buildings(e){return this.game.buildings.filter(t=>t.alive&&t.team===this.team&&(!e||t.type===e))}units(e=!1){return this.game.units.filter(t=>t.alive&&t.team===this.team&&(e||!t.isHarvester))}supplies(){return this.game.getSupplies(this.team)}manageEconomy(){const e=this.buildings("hq")[0];if(!e||e.underConstruction)return;this.units(!0).filter(n=>n.isHarvester).length<3&&this.supplies()>240&&e.queue.length===0&&e.enqueue("harvester")}manageConstruction(){if(this.buildTimer-=1,this.buildTimer>0)return;const e=this.game.enemyBase,t={barracks:this.buildings("barracks").length,factory:this.buildings("factory").length,depot:this.buildings("depot").length,turret:this.buildings("turret").length};let n=null;if(t.barracks<1?n="barracks":t.factory<1?n="factory":t.depot<2?n="depot":t.turret<2+(this.diff.stars-1)?n="turret":t.depot<4&&this.supplies()>900?n="depot":!this.extraFactory&&this.supplies()>1100?(n="factory",this.extraFactory=!0):t.turret<5&&this.supplies()>1200&&(n="turret"),!n)return;const s=this.buildSpots();Xn(this.faction,"rifle");const r=this.game.buildingDef(n);if(!(this.supplies()<r.cost+120)){for(const a of s){const o=e.x+a.x,l=e.z+a.z;if(!this.game.canPlaceBuilding(o,l,r.radius,null,!0))continue;if(this.game.createBuilding(this.team,this.faction,n,o,l,{underConstruction:!0,autoBuild:!0})){this.buildTimer=5+Math.random()*5;return}}this.buildTimer=3}}buildSpots(){return[{x:20,z:2},{x:0,z:20},{x:-20,z:4},{x:4,z:-20},{x:22,z:20},{x:-22,z:-18},{x:20,z:-18},{x:-18,z:20},{x:30,z:6},{x:6,z:30},{x:-30,z:-2},{x:-2,z:-30},{x:34,z:26},{x:-32,z:26},{x:26,z:-30},{x:-26,z:-32}]}manageProduction(){const e=this.units(!0),t=e.filter(c=>c.type==="tank"||c.type==="heavy").length,n=e.filter(c=>c.type==="at").length;if(e.length>58)return;const r=this.game.popUsed(this.team),a=this.game.popCap(this.team);if(r>=a-1)return;const o=this.buildings("barracks").filter(c=>!c.underConstruction),l=this.buildings("factory").filter(c=>!c.underConstruction);for(const c of o){if(c.queue.length>=2)continue;let h="rifle";(n<2&&Math.random()<.4||Math.random()<.22)&&(h="at");const u=Xn(this.faction,h);this.supplies()>=u.cost+60&&c.enqueue(h)}for(const c of l){if(c.queue.length>=2)continue;let h="tank";const u=Math.random();t<2?h="tank":u<.18?h="heavy":u<.38?h="artillery":u<.5?h="scout":h="tank";const d=Xn(this.faction,h);this.supplies()>=d.cost+100&&c.enqueue(h)}}manageMilitary(){const e=this.units(!1),t=this.game.enemyBase,n=this.game.enemyTargets(this.team).filter(r=>r.kind==="unit"&&r.alive&&Math.hypot(r.x-t.x,r.z-t.z)<52);if(n.length&&(this.defendTimer=12,this.threat=n[0]),this.defendTimer>0&&this.threat){const r=this.threat;for(const a of e){if(a.isHarvester)continue;const o=Math.hypot(a.x-r.x,a.z-r.z);(a.order.type==="idle"||o<70)&&(a.order.type!=="attackMove"||this.repathTimer<=0)&&a.setOrder({type:"attackMove",x:r.x,z:r.z})}return}const s=Math.max(4,Math.round(6*this.diff.aiAggression));if(!this.attacking&&(e.length>=s||this.attackTimer<=0)){if(e.length>=3){this.attacking=!0,this.lastAttackSize=e.length,this.repathTimer=0;const r=this.pickAttackTarget();if(r){for(const a of e){const o=(Math.random()-.5)*10,l=(Math.random()-.5)*10;a.setOrder({type:"attackMove",x:r.x+o,z:r.z+l})}this.game.alert("ENEMY ATTACK INBOUND"),this.attackTimer=95}}}else if(this.attacking){const r=this.pickAttackTarget();if(e.length<Math.max(2,this.lastAttackSize*.3)||!r)this.attacking=!1,this.attackTimer=70,this.regroup(e);else if(this.repathTimer<=0){this.repathTimer=6;for(const a of e)(a.order.type==="idle"||a.order.type==="move")&&a.setOrder({type:"attackMove",x:r.x+(Math.random()-.5)*12,z:r.z+(Math.random()-.5)*12})}}else this.regroup(e)}regroup(e){for(const t of e){if(t.order.type!=="idle")continue;Math.hypot(t.x-this.stage.x,t.z-this.stage.z)>14&&t.setOrder({type:"move",x:this.stage.x+(Math.random()-.5)*16,z:this.stage.z+(Math.random()-.5)*16})}}pickAttackTarget(){const e=this.game.teamBuildings("player");if(!e.length){const s=this.game.teamUnits("player");return s.length?s[0]:null}let t=e[0],n=1/0;for(const s of e){const r=Math.hypot(s.x-this.game.enemyBase.x,s.z-this.game.enemyBase.z);if(s.type==="hq")return s;r<n&&(n=r,t=s)}return t}}function ha(i,e,t){const n=document.createElement("canvas");n.width=n.height=64;const s=n.getContext("2d"),r=s.createRadialGradient(32,32,i,32,32,32);for(const[o,l]of t)r.addColorStop(o,l);s.fillStyle=r,s.fillRect(0,0,64,64);const a=new us(n);return a.colorSpace=kt,a}function Sg(){const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");e.clearRect(0,0,64,64);for(let n=0;n<14;n++){const s=18+Math.random()*28,r=18+Math.random()*28,a=8+Math.random()*14,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.5)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.beginPath(),e.arc(s,r,a,0,Math.PI*2),e.fill()}return new us(i)}class bg{constructor(e){this.scene=e,this.tex={smoke:Sg(),flash:ha(0,32,[[0,"rgba(255,255,235,1)"],[.22,"rgba(255,215,130,0.95)"],[.55,"rgba(255,120,30,0.5)"],[1,"rgba(120,40,0,0)"]]),spark:ha(0,32,[[0,"rgba(255,255,220,1)"],[.4,"rgba(255,180,60,0.8)"],[1,"rgba(255,80,0,0)"]]),dust:ha(0,32,[[0,"rgba(190,175,140,0.55)"],[1,"rgba(150,135,100,0)"]])},this.sprites=[];for(let r=0;r<260;r++){const a=new Fc({map:this.tex.smoke,transparent:!0,depthWrite:!1,opacity:0,blending:ai}),o=new Iu(a);o.visible=!1,o.renderOrder=8,e.add(o),this.sprites.push({sp:o,active:!1,life:0,max:1,vx:0,vy:0,vz:0,s0:1,s1:2,o0:1,o1:0,spin:0,gravity:0,additive:!1})}this.spriteIndex=0;const t=320;this.maxSeg=t,this.tracerPos=new Float32Array(t*6),this.tracerCol=new Float32Array(t*6),this.tracers=[];const n=new Dt;n.setAttribute("position",new It(this.tracerPos,3)),n.setAttribute("color",new It(this.tracerCol,3)),n.setDrawRange(0,0),this.tracerGeo=n,this.tracerMesh=new Ou(n,new Bc({vertexColors:!0,transparent:!0,opacity:.9,blending:Ii,depthWrite:!1})),this.tracerMesh.frustumCulled=!1,this.tracerMesh.renderOrder=9,e.add(this.tracerMesh),this.rings=[];for(let r=0;r<18;r++){const a=new zi(.72,1,28);a.rotateX(-Math.PI/2);const o=new sn({color:16767392,transparent:!0,opacity:0,side:Ht,depthWrite:!1,blending:Ii}),l=new it(a,o);l.visible=!1,l.renderOrder=7,e.add(l),this.rings.push({mesh:l,active:!1,life:0,max:1,scale0:1,scale1:5})}this.ringIndex=0,this.lights=[];for(let r=0;r<4;r++){const a=new qu(16757854,0,42,2);a.visible=!1,e.add(a),this.lights.push({light:a,life:0,max:.4,intensity:0})}this.lightIndex=0,this.wrecks=[],this.rubble=[],this.wreckMat=new Lt({color:2434335,roughness:.9,metalness:.2}),this.decals=[];const s=new ds(1,18);s.rotateX(-Math.PI/2);for(let r=0;r<46;r++){const a=new sn({color:1578511,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),o=new it(s,a);o.visible=!1,o.renderOrder=2,e.add(o),this.decals.push({mesh:o,active:!1,life:0,max:60})}this.decalIndex=0,this.shake=0,this.time=0}sprite(e,t,n={}){const s=this.sprites[this.spriteIndex];return this.spriteIndex=(this.spriteIndex+1)%this.sprites.length,s.active=!0,s.life=0,s.max=n.life||1,s.sp.material.map=this.tex[e]||this.tex.smoke,s.sp.material.blending=n.additive?Ii:ai,s.sp.material.color.setHex(n.color||16777215),s.sp.material.rotation=Math.random()*Math.PI*2,s.sp.material.opacity=n.opacity??1,s.sp.position.copy(t),s.sp.scale.setScalar(n.scale||1),s.sp.visible=!0,s.vx=n.vx||0,s.vy=n.vy||0,s.vz=n.vz||0,s.s0=n.scale||1,s.s1=n.scale1??s.s0*2,s.o0=n.opacity??1,s.o1=n.opacity1??0,s.gravity=n.gravity||0,s.spin=n.spin||0,s.additive=!!n.additive,s}muzzle(e,t,n=1){this.sprite("flash",e,{scale:.7*n,scale1:1.7*n,life:.09,opacity:1,additive:!0,spin:3});for(let s=0;s<3;s++)this.sprite("spark",e,{scale:.16*n,scale1:.04,life:.16+Math.random()*.1,vx:t.x*7+(Math.random()-.5)*4,vy:t.y*7+Math.random()*3,vz:t.z*7+(Math.random()-.5)*4,additive:!0,gravity:-9})}tracer(e,t,n=16765562,s=.1){this.tracers.length>=this.maxSeg&&this.tracers.shift(),this.tracers.push({ax:e.x,ay:e.y,az:e.z,bx:t.x+(Math.random()-.5)*.6,by:t.y+(Math.random()-.5)*.6,bz:t.z+(Math.random()-.5)*.6,life:s,max:s,r:(n>>16&255)/255,g:(n>>8&255)/255,b:(n&255)/255})}impact(e,t=1){for(let n=0;n<5;n++)this.sprite("spark",e,{scale:.2*t,scale1:.03,life:.25+Math.random()*.2,vx:(Math.random()-.5)*9,vy:2+Math.random()*6,vz:(Math.random()-.5)*9,additive:!0,gravity:-12});this.sprite("dust",e,{scale:.9*t,scale1:2.2*t,life:.7,opacity:.5,vy:.6})}explosion(e,t=1,n=!0){const s=t;this.sprite("flash",e,{scale:2.2*s,scale1:5.5*s,life:.18,opacity:1,additive:!0,spin:2});for(let r=0;r<10;r++){const a=Math.random()*Math.PI*2,o=2+Math.random()*5;this.sprite("smoke",new U(e.x+(Math.random()-.5)*s,e.y+Math.random()*1.4*s,e.z+(Math.random()-.5)*s),{scale:(1.2+Math.random()*1.6)*s,scale1:(3+Math.random()*3.5)*s,life:1.4+Math.random()*1.6,opacity:.55,opacity1:0,vx:Math.cos(a)*o,vy:1.6+Math.random()*2.4,vz:Math.sin(a)*o,color:r%3===0?7035461:9077362,spin:(Math.random()-.5)*.8})}for(let r=0;r<12;r++)this.sprite("spark",e,{scale:.3*s,scale1:.02,life:.4+Math.random()*.5,vx:(Math.random()-.5)*18*s,vy:4+Math.random()*12*s,vz:(Math.random()-.5)*18*s,additive:!0,gravity:-20});this.ring(e,2.4*s,9*s,.55),this.light(e,.5,22*s),n&&this.decal(e,2.2*s),this.shake=Math.max(this.shake,Math.min(1.2,.35*s))}bigExplosion(e,t=1.6){this.explosion(e,t),this.sprite("flash",e,{scale:4*t,scale1:11*t,life:.28,opacity:1,additive:!0,spin:1.4});for(let n=0;n<8;n++){const s=Math.random()*Math.PI*2;this.sprite("smoke",e,{scale:2.4*t,scale1:7*t,life:2.6+Math.random()*2,opacity:.5,opacity1:0,vx:Math.cos(s)*3.5,vy:2.2+Math.random()*2,vz:Math.sin(s)*3.5,color:4867128,spin:(Math.random()-.5)*.5})}this.ring(e,3.5*t,17*t,.8),this.light(e,.8,50*t),this.shake=Math.max(this.shake,1)}ring(e,t,n,s){const r=this.rings[this.ringIndex];this.ringIndex=(this.ringIndex+1)%this.rings.length,r.active=!0,r.life=0,r.max=.65,r.scale0=t,r.scale1=n,r.mesh.visible=!0,r.mesh.position.copy(e),r.mesh.position.y=Math.max(e.y,.4),r.mesh.scale.setScalar(t),r.mesh.material.opacity=s}light(e,t,n){const s=this.lights[this.lightIndex];this.lightIndex=(this.lightIndex+1)%this.lights.length,s.life=0,s.max=t,s.intensity=n,s.light.position.copy(e),s.light.position.y+=2,s.light.intensity=n,s.light.visible=!0}decal(e,t){const n=this.decals[this.decalIndex];this.decalIndex=(this.decalIndex+1)%this.decals.length,n.active=!0,n.life=0,n.max=70,n.mesh.visible=!0,n.mesh.position.set(e.x,Math.max(.15,e.y)+.06,e.z),n.mesh.scale.setScalar(t*(.8+Math.random()*.4)),n.mesh.rotation.y=Math.random()*Math.PI,n.mesh.material.opacity=.55}dust(e,t=1){this.sprite("dust",e,{scale:.8*t,scale1:2.1*t,life:.9,opacity:.26,opacity1:0,vy:.7,vx:(Math.random()-.5)*1.4,vz:(Math.random()-.5)*1.4})}smokePuff(e,t=1,n=!1){this.sprite("smoke",e,{scale:.8*t,scale1:2.6*t,life:1.8,opacity:.35,opacity1:0,vy:1.2,color:n?3814700:9406326,spin:(Math.random()-.5)*.4})}addWreck(e,t,n,s=2236956){if(!e)return;const r=this.wreckMat.clone();r.color.setHex(s);const a=new it(e,r);if(a.position.set(t.x,t.y+.12,t.z),a.rotation.y=n,a.rotation.z=(Math.random()-.5)*.1,a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a),this.wrecks.push({mesh:a,smoke:5+Math.random()*4,timer:0}),this.wrecks.length>34){const o=this.wrecks.shift();this.scene.remove(o.mesh),o.mesh.material.dispose()}}addRubble(e,t,n){if(!e)return;const s=new Lt({color:4867644,roughness:1,metalness:0}),r=new it(e,s);if(r.position.set(t.x,t.y+.15,t.z),r.rotation.y=n,r.scale.set(1.02,.32,1.02),r.castShadow=!0,r.receiveShadow=!0,this.scene.add(r),this.rubble.push({mesh:r,life:0,max:90,smoke:4}),this.rubble.length>18){const a=this.rubble.shift();this.scene.remove(a.mesh),a.mesh.material.dispose()}}buildSparks(e){for(let t=0;t<2;t++)this.sprite("spark",e,{scale:.16,scale1:.02,life:.22+Math.random()*.2,vx:(Math.random()-.5)*5,vy:1.5+Math.random()*3,vz:(Math.random()-.5)*5,additive:!0,gravity:-9});this.sprite("dust",e,{scale:.5,scale1:1.3,life:.6,opacity:.25,vy:.4})}bigExplosionSmoke(e){for(let t=0;t<4;t++)this.sprite("smoke",e,{scale:1.2,scale1:3.4,life:2.2,opacity:.32,opacity1:0,vx:(Math.random()-.5)*1.4,vy:1.2,vz:(Math.random()-.5)*1.4,color:9077362})}update(e,t){this.time+=e;for(const s of this.sprites){if(!s.active)continue;s.life+=e;const r=s.life/s.max;if(r>=1){s.active=!1,s.sp.visible=!1;continue}s.vy+=s.gravity*e,s.sp.position.x+=s.vx*e,s.sp.position.y+=s.vy*e,s.sp.position.z+=s.vz*e;const a=r*r*(3-2*r),o=s.s0+(s.s1-s.s0)*a;s.sp.scale.set(o,o,1),s.sp.material.opacity=Math.max(0,s.o0+(s.o1-s.o0)*r),s.sp.material.rotation+=s.spin*e}let n=0;for(let s=this.tracers.length-1;s>=0;s--){const r=this.tracers[s];if(r.life-=e,r.life<=0){this.tracers.splice(s,1);continue}}for(const s of this.tracers){if(n>=this.maxSeg)break;const r=n*6;this.tracerPos[r]=s.ax,this.tracerPos[r+1]=s.ay,this.tracerPos[r+2]=s.az,this.tracerPos[r+3]=s.bx,this.tracerPos[r+4]=s.by,this.tracerPos[r+5]=s.bz;const a=Math.max(0,s.life/s.max);this.tracerCol[r]=s.r*a,this.tracerCol[r+1]=s.g*a,this.tracerCol[r+2]=s.b*a,this.tracerCol[r+3]=s.r*a*.7,this.tracerCol[r+4]=s.g*a*.7,this.tracerCol[r+5]=s.b*a*.7,n++}this.tracerGeo.setDrawRange(0,n*2),this.tracerGeo.attributes.position.needsUpdate=!0,this.tracerGeo.attributes.color.needsUpdate=!0;for(const s of this.rings){if(!s.active)continue;s.life+=e;const r=s.life/s.max;if(r>=1){s.active=!1,s.mesh.visible=!1;continue}const a=s.scale0+(s.scale1-s.scale0)*Math.sqrt(r);s.mesh.scale.setScalar(a),s.mesh.material.opacity=(1-r)*.8}for(const s of this.lights){if(!s.light.visible)continue;s.life+=e;const r=s.life/s.max;if(r>=1){s.light.visible=!1,s.light.intensity=0;continue}s.light.intensity=s.intensity*(1-r)*(1-r)}for(const s of this.decals)if(s.active){if(s.life+=e,s.life>s.max){s.active=!1,s.mesh.visible=!1;continue}s.life>s.max-6&&(s.mesh.material.opacity=.55*(s.max-s.life)/6)}for(const s of this.wrecks)s.smoke-=e,s.smoke>0&&(s.timer+=e,s.timer>.55&&(s.timer=0,this.smokePuff(new U(s.mesh.position.x+(Math.random()-.5),s.mesh.position.y+1.2,s.mesh.position.z+(Math.random()-.5)),.9,!0)));for(const s of this.rubble)s.life+=e,s.smoke>0&&(s.smoke-=e,Math.random()<e*.9&&this.smokePuff(new U(s.mesh.position.x+(Math.random()-.5)*4,s.mesh.position.y+1.2,s.mesh.position.z+(Math.random()-.5)*4),1.2,!0)),s.life>s.max-5&&(s.mesh.material.opacity=Math.max(0,(s.max-s.life)/5)),s.life>=s.max&&(this.scene.remove(s.mesh),s.mesh.material.dispose());this.rubble=this.rubble.filter(s=>s.life<s.max),this.shake*=Math.pow(.0025,e),this.shake<.001&&(this.shake=0)}}class hh{constructor(){this.ctx=null,this.master=null,this.noiseBuf=null,this.ambient=null,this.muted=localStorage.getItem("ironfront.muted")==="1",this.last={},this.started=!1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.55,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate*2;this.noiseBuf=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const n=this.noiseBuf.getChannelData(0);for(let s=0;s<t;s++)n[s]=Math.random()*2-1;this.started=!0,this.startAmbient()}setMuted(e){this.muted=e,localStorage.setItem("ironfront.muted",e?"1":"0"),this.master&&this.master.gain.setTargetAtTime(e?0:.55,this.ctx.currentTime,.05)}toggleMute(){return this.setMuted(!this.muted),this.muted}gate(e,t){if(this.muted||!this.ctx)return!1;const n=performance.now();return this.last[e]&&n-this.last[e]<t?!1:(this.last[e]=n,!0)}noise(e,t,n,s,r=1,a=null){if(!this.ctx)return;const o=this.ctx.currentTime,l=this.ctx.createBufferSource();l.buffer=this.noiseBuf,l.loop=!0;const c=this.ctx.createBiquadFilter();c.type=n,c.frequency.setValueAtTime(s,o),a&&c.frequency.exponentialRampToValueAtTime(Math.max(30,a),o+e),c.Q.value=r;const h=this.ctx.createGain();h.gain.setValueAtTime(t,o),h.gain.exponentialRampToValueAtTime(8e-4,o+e),l.connect(c),c.connect(h),h.connect(this.master),l.start(o),l.stop(o+e+.02)}tone(e,t,n,s="sine",r=null,a=0){if(!this.ctx)return;const o=this.ctx.currentTime+a,l=this.ctx.createOscillator();l.type=s,l.frequency.setValueAtTime(e,o),r&&l.frequency.exponentialRampToValueAtTime(Math.max(20,r),o+t);const c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(n,o+.012),c.gain.exponentialRampToValueAtTime(8e-4,o+t),l.connect(c),c.connect(this.master),l.start(o),l.stop(o+t+.02)}play(e,t={}){if(!this.ctx||this.muted)return;const n=t.volume??1;switch(e){case"click":if(!this.gate("click",40))return;this.tone(520,.05,.035,"square",380);break;case"select":if(!this.gate("select",60))return;this.tone(340,.09,.03,"triangle",520);break;case"order":if(!this.gate("order",90))return;this.tone(420,.06,.035,"square",620),this.tone(660,.06,.025,"triangle",520,.06);break;case"rifle":if(!this.gate("rifle",65))return;this.noise(.09,.1*n,"highpass",900,.7,300),this.tone(160,.07,.03*n,"square",60);break;case"mg":if(!this.gate("mg",45))return;this.noise(.05,.07*n,"bandpass",1400,1.4);break;case"cannon":if(!this.gate("cannon",80))return;this.noise(.32,.2*n,"lowpass",900,.8,120),this.tone(95,.34,.16*n,"sine",38);break;case"explosion":if(!this.gate("explosion",90))return;this.noise(.9,.32*n,"lowpass",700,.7,70),this.tone(62,.8,.22*n,"sine",24);break;case"build":if(!this.gate("build",120))return;this.noise(.12,.05*n,"bandpass",700,2),this.tone(180,.1,.03,"square",150);break;case"complete":this.tone(523,.16,.05,"triangle"),this.tone(784,.24,.045,"triangle",null,.12);break;case"ready":this.tone(660,.09,.035,"triangle");break;case"error":if(!this.gate("error",200))return;this.tone(120,.16,.05,"square",90);break;case"alarm":if(!this.gate("alarm",1600))return;this.tone(440,.35,.05,"sawtooth",620),this.tone(440,.35,.05,"sawtooth",620,.42);break;case"victory":this.tone(392,.5,.08,"triangle"),this.tone(523,.5,.08,"triangle",null,.16),this.tone(659,.7,.08,"triangle",null,.32),this.tone(784,1.2,.07,"sine",null,.48);break;case"defeat":this.tone(196,.7,.09,"sine",146),this.tone(146,.9,.08,"sine",110,.5),this.tone(98,1.4,.07,"sine",73,1);break;case"engine":if(!this.gate("engine",400))return;this.tone(55,.5,.03,"sawtooth",70);break}}startAmbient(){if(!this.ctx||this.ambient)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuf,t.loop=!0;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=320;const s=this.ctx.createGain();s.gain.value=.028,t.connect(n),n.connect(s),s.connect(this.master),t.start(e);const r=this.ctx.createOscillator();r.type="sine",r.frequency.value=48;const a=this.ctx.createGain();a.gain.value=.012;const o=this.ctx.createOscillator();o.frequency.value=.07;const l=this.ctx.createGain();l.gain.value=.007,o.connect(l),l.connect(a.gain),r.connect(a),a.connect(this.master),r.start(e),o.start(e),this.ambient={src:t,drone:r,lfo:o,g:s,dg:a}}stopAmbient(){if(this.ambient){try{this.ambient.src.stop(),this.ambient.drone.stop(),this.ambient.lfo.stop()}catch{}this.ambient=null}}}new hh;const Ue=i=>document.getElementById(i);class Eg{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.world=null,this.effects=null,this.audio=new hh,this.units=[],this.buildings=[],this.projectiles=[],this.supplies=[],this.selected=[],this.placement=null,this.running=!1,this.ended=!1,this.paused=!1,this.speed=1,this.elapsed=0,this.suppliesPlayer=0,this.suppliesEnemy=0,this.lastTime=performance.now(),this.setup={faction:"usa",enemy:"germany",map:"normandy",difficulty:"veteran",supplies:900},this.menuState()}menuState(){this.bindMenu(),this.initMenuScene()}bindMenu(){document.querySelectorAll("[data-action]").forEach(e=>{e.addEventListener("click",()=>this.action(e.dataset.action))}),Ue("skirmish-deploy")?.addEventListener("click",()=>this.startSkirmish()),Ue("brief-deploy")?.addEventListener("click",()=>this.startMission(this.pendingMission)),Ue("end-retry")?.addEventListener("click",()=>this.retry()),Ue("end-menu")?.addEventListener("click",()=>this.showMenu()),Ue("end-next")?.addEventListener("click",()=>this.nextMission()),Ue("btn-speed")?.addEventListener("click",()=>this.toggleSpeed()),this.buildFactionGrid(),this.buildEnemyGrid(),this.buildMapGrid(),this.buildDifficulty(),this.buildSupplies(),this.buildCampaign()}action(e){e==="skirmish"&&this.showScreen("screen-skirmish"),e==="campaign"&&this.showScreen("screen-campaign"),e==="controls"&&Ue("manual-overlay")?.classList.add("open"),e==="sound"&&this.toggleSound()}showScreen(e){document.querySelectorAll(".screen").forEach(t=>t.classList.toggle("active",t.id===e))}closeModal(e){Ue(e)?.classList.remove("open")}initMenuScene(){const e=Ue("menu-canvas");if(!e)return;const t=new Kl({canvas:e,antialias:!0});t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,1.5));const n=new nl;n.background=new Pe(1712408),n.fog=new xo(1712408,28,72);const s=new Qt(42,window.innerWidth/window.innerHeight,.1,200);s.position.set(24,12,28),s.lookAt(0,1,0),n.add(new Xc(10400164,3158559,1.2));const r=new Ja(16767392,2);r.position.set(-20,30,12),n.add(r);const a=new it(new Dn(120,120),new Lt({color:3422507,roughness:1}));a.rotation.x=-Math.PI/2,a.position.y=-.01,n.add(a);for(let c=0;c<12;c++){const h=new it(new Tt(1.2+Math.random(),.8,1),new Lt({color:c%2?5660746:7037511}));h.position.set((Math.random()-.5)*28,.4,(Math.random()-.5)*24),h.rotation.y=Math.random()*Math.PI,n.add(h)}let o=0;const l=()=>{Ue("screen-menu")?.classList.contains("active")&&(o+=.002,s.position.x=24+Math.sin(o)*4,s.lookAt(0,1,0),t.render(n,s),requestAnimationFrame(l))};l()}buildFactionGrid(){const e=Ue("faction-grid");e&&(e.innerHTML=ra.map(t=>{const n=$t[t];return`<button class="faction-card ${t===this.setup.faction?"selected":""}" data-faction="${t}"><span class="fac-emblem">${n.short}</span><b>${n.name}</b><small>${n.doctrine}</small></button>`}).join(""),e.querySelectorAll("[data-faction]").forEach(t=>t.onclick=()=>{this.setup.faction=t.dataset.faction,this.setup.enemy===this.setup.faction&&(this.setup.enemy=ra.find(n=>n!==this.setup.faction)),this.buildFactionGrid(),this.buildEnemyGrid(),this.updateMatchup()}))}buildEnemyGrid(){const e=Ue("enemy-grid");e&&(e.innerHTML=ra.filter(t=>t!==this.setup.faction).map(t=>{const n=$t[t];return`<button class="enemy-card ${t===this.setup.enemy?"selected":""}" data-enemy="${t}">${n.short}</button>`}).join(""),e.querySelectorAll("[data-enemy]").forEach(t=>t.onclick=()=>{this.setup.enemy=t.dataset.enemy,this.buildEnemyGrid(),this.updateMatchup()}))}buildMapGrid(){const e=Ue("map-grid");e&&(e.innerHTML=K0.map(t=>{const n=$s[t];return`<button class="map-card ${t===this.setup.map?"selected":""}" data-map="${t}"><b>${n.name}</b><small>${n.region}</small></button>`}).join(""),e.querySelectorAll("[data-map]").forEach(t=>t.onclick=()=>{this.setup.map=t.dataset.map,this.buildMapGrid(),this.updateMatchup()}))}buildDifficulty(){const e=Ue("difficulty-seg");e&&(e.innerHTML=Object.entries(Ks).map(([t,n])=>`<button class="${t===this.setup.difficulty?"active":""}" data-difficulty="${t}">${n.name}</button>`).join(""),e.querySelectorAll("[data-difficulty]").forEach(t=>t.onclick=()=>{this.setup.difficulty=t.dataset.difficulty,this.buildDifficulty(),this.updateMatchup()}))}buildSupplies(){const e=Ue("supplies-seg");if(!e)return;const t=[900,1300,1800];e.innerHTML=t.map(n=>`<button class="${n===this.setup.supplies?"active":""}" data-supplies="${n}">${n}</button>`).join(""),e.querySelectorAll("[data-supplies]").forEach(n=>n.onclick=()=>{this.setup.supplies=+n.dataset.supplies,this.buildSupplies(),this.updateMatchup()})}updateMatchup(){const e=Ue("matchup-card");if(!e)return;const t=$t[this.setup.faction],n=$t[this.setup.enemy],s=$s[this.setup.map];e.innerHTML=`<span>${t.short}</span><b>VS</b><span>${n.short}</span><small>${s.name} · ${Ks[this.setup.difficulty].name}</small>`}buildCampaign(){const e=Ue("mission-list");e&&(e.innerHTML=Pi.map((t,n)=>`<button class="mission-card" data-mission="${t.id}"><span>${String(n+1).padStart(2,"0")}</span><b>${t.title}</b><small>${t.location}</small></button>`).join(""),e.querySelectorAll("[data-mission]").forEach(t=>t.onclick=()=>{const n=Pi.find(s=>s.id===t.dataset.mission);this.openBriefing(n)}))}openBriefing(e){this.pendingMission=e,Ue("brief-stamp").textContent=`OPERATION ${e.op}`,Ue("brief-date").textContent=e.date.toUpperCase(),Ue("brief-title").textContent=e.title,Ue("brief-loc").textContent=e.location.toUpperCase(),Ue("brief-text").textContent=e.brief,Ue("brief-history").textContent=e.history,Ue("brief-flags").innerHTML=`<span>${$t[e.player].short}</span><b>VS</b><span>${$t[e.enemy].short}</span>`,Ue("brief-intel").textContent=e.intel||"Reconnaissance reports limited enemy movement.",Ue("brief-objectives").innerHTML=(e.objectives||["Destroy the enemy headquarters"]).map(t=>`<li>${t}</li>`).join(""),Ue("briefing-overlay")?.classList.add("open")}async startSkirmish(){await this.startMatch({playerFaction:this.setup.faction,enemyFaction:this.setup.enemy,map:this.setup.map,difficulty:this.setup.difficulty,supplies:this.setup.supplies,mode:"skirmish",mission:null})}async startMission(e){e&&await this.startMatch({playerFaction:e.player,enemyFaction:e.enemy,map:e.map,difficulty:typeof e.difficulty=="number"?["recruit","veteran","marshal"][e.difficulty-1]||"veteran":e.difficulty||"veteran",supplies:e.setup?.supplies||900,mode:"campaign",mission:e,setup:e.setup})}async startMatch(e){this.showScreen("screen-game"),Ue("loading")?.classList.add("active"),await new Promise(r=>setTimeout(r,180)),this.cleanupBattle(),this.config=e,this.playerFaction=e.playerFaction,this.enemyFaction=e.enemyFaction,this.difficulty=typeof e.difficulty=="object"?e.difficulty:Ks[e.difficulty],this.difficulty||(this.difficulty=Ks.veteran),this.team="player",this.running=!0,this.ended=!1,this.elapsed=0,this.suppliesPlayer=e.supplies||900,this.suppliesEnemy=e.supplies||900;const t=Ue("game-canvas");this.renderer=new Kl({canvas:t,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=kt,this.renderer.toneMapping=io,this.renderer.toneMappingExposure=.9,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=cc,this.camera=new Qt(48,window.innerWidth/window.innerHeight,.1,700),this.camera.position.set(-95,58,95),this.camera.lookAt(-55,0,-55),this.scene=new nl;const n=$s[e.map]||$s.normandy,s=[{x:-92,z:-92},{x:92,z:92}];this.world=ng(this.scene,n,{bases:s,seed:1337+Math.floor(Math.random()*100)}),this.playerBase=s[0],this.enemyBase=s[1],this.effects=new bg(this.scene),this.registerSupplies(),this.spawnInitial(e.setup),this.ai=new yg(this),this.bindBattleControls(),this.updateHud(),Ue("loading")?.classList.remove("active"),Ue("mission-banner-faction").textContent=$t[this.playerFaction].name.toUpperCase(),Ue("mission-banner-title").textContent=e.mission?.title?.toUpperCase()||"SKIRMISH",Ue("mission-banner-date").textContent=e.mission?.date?.toUpperCase()||"FIELD ENGAGEMENT",this.lastTime=performance.now(),requestAnimationFrame(r=>this.loop(r))}registerSupplies(){for(const e of[[-50,-35],[50,35],[0,0],[-60,45],[60,-45]])this.supplies.push(new Mg(this,e[0],e[1],this.setup.supplies))}spawnInitial(e){const t=e||null,n=t?.player?.buildings||{hq:1,barracks:1,factory:1,depot:1},s=t?.enemy?.buildings||{hq:1,barracks:1,factory:1,depot:1,turret:2};this.spawnBuildings("player",this.playerFaction,this.playerBase,n),this.spawnBuildings("enemy",this.enemyFaction,this.enemyBase,s);const r=t?.player?.units||{rifle:3,engineer:1,harvester:2,tank:1},a=t?.enemy?.units||{rifle:3,engineer:1,harvester:2,tank:1};this.spawnUnits("player",this.playerFaction,this.playerBase,r),this.spawnUnits("enemy",this.enemyFaction,this.enemyBase,a)}spawnBuildings(e,t,n,s){const r={hq:[0,0],barracks:[-10,6],factory:[10,7],depot:[-10,-8],turret:[12,-9]};let a=0;Object.entries(s).forEach(([o,l])=>{for(let c=0;c<l;c++){let[h,u]=r[o]||[0,0];o==="turret"&&(h=12+a*7,u=-9-a*4,a++);const d=n.x+h+(c>0?c*4:0),m=n.z+u;new vg(this,t,e,o,d,m)}})}spawnUnits(e,t,n,s){let r=0;Object.entries(s).forEach(([a,o])=>{for(let l=0;l<o;l++){const c=r*2.39,h=7+r%4*3,u=n.x+Math.cos(c)*h,d=n.z+Math.sin(c)*h;new ch(this,t,e,a,u,d),r++}})}registerUnit(e){this.units.push(e)}registerBuilding(e){this.buildings.push(e)}removeProjectile(e){this.projectiles=this.projectiles.filter(t=>t!==e)}spend(e,t){if(e==="player"){if(this.suppliesPlayer<t)return this.toast("Insufficient supply","bad"),!1;this.suppliesPlayer-=t}else{if(this.suppliesEnemy<t)return!1;this.suppliesEnemy-=t}return!0}nearestSupply(e,t){let n=null,s=1/0;for(const r of this.supplies){if(r.amount<=0)continue;const a=Math.hypot(r.x-e,r.z-t);a<s&&(s=a,n=r)}return n}getSupplies(e){return e==="player"?this.suppliesPlayer:this.suppliesEnemy}enemyTargets(e){return[...this.units,...this.buildings].filter(t=>t.alive&&t.team!==e)}bindBattleControls(){this.canvas=Ue("game-canvas"),this.raycaster=new Ku,this.pointer=new Be,this.dragStart=null,this.canvas.onpointerdown=e=>this.pointerDown(e),this.canvas.onpointermove=e=>this.pointerMove(e),this.canvas.oncontextmenu=e=>e.preventDefault(),this.canvas.onpointerup=e=>this.pointerUp(e)}pointerDown(e){if(!(!this.running||this.ended)){if(e.button===2){this.issueRightClick(e);return}this.dragStart={x:e.clientX,y:e.clientY}}}pointerMove(e){const t=this.canvas.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1}pointerUp(e){if(!this.dragStart)return;const t=e.clientX-this.dragStart.x,n=e.clientY-this.dragStart.y;Math.hypot(t,n)>5?this.boxSelect(this.dragStart,{x:e.clientX,y:e.clientY}):this.selectAt(e),this.dragStart=null}raycast(e){const t=this.canvas.getBoundingClientRect();return this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster}selectAt(e){const t=this.raycast(e),n=[...this.units.map(r=>r.hull),...this.buildings.map(r=>r.hull)],s=t.intersectObjects(n,!1);this.selected=[],s[0]?.object.userData.entity?.team==="player"&&(this.selected=[s[0].object.userData.entity]),this.updateSelection()}boxSelect(e,t){const n=Math.min(e.x,t.x),s=Math.min(e.y,t.y),r=Math.max(e.x,t.x),a=Math.max(e.y,t.y);this.selected=this.units.filter(o=>o.alive&&o.team==="player"&&o.group).filter(o=>{const l=o.group.position.clone().project(this.camera),c=(l.x*.5+.5)*this.canvas.clientWidth,h=(-l.y*.5+.5)*this.canvas.clientHeight;return c>=n&&c<=r&&h>=s&&h<=a}),this.updateSelection()}issueRightClick(e){const t=this.raycast(e),n=[...this.units.map(o=>o.hull),...this.buildings.map(o=>o.hull)],r=t.intersectObjects(n,!1)[0]?.object.userData.entity,a=t.intersectObject(this.world.terrain,!1)[0];if(r&&r.team==="enemy")this.selected.forEach(o=>o.setOrder?.({type:"attack",target:r}));else if(a){const o=a.point;this.selected.forEach((l,c)=>l.setOrder?.({type:"move",x:o.x+c*2,z:o.z+c*2}))}}updateSelection(){const e=Ue("sel-content");if(!e)return;if(!this.selected.length){Ue("sel-empty")?.classList.remove("hidden"),e.innerHTML="";return}Ue("sel-empty")?.classList.add("hidden");const t=this.selected[0];e.innerHTML=`<b>${t.name||t.type}</b><small>${Math.ceil(t.hp)} / ${t.maxHp} HP</small>`}loop(e){if(!this.running)return;const t=Math.min(.05,(e-this.lastTime)/1e3);this.lastTime=e;const n=t*this.speed;!this.paused&&!this.ended&&(this.elapsed+=n,this.world.update(n),this.units.forEach(s=>s.update(n)),this.buildings.forEach(s=>s.update(n)),this.projectiles.forEach(s=>s.update(n)),this.supplies.forEach(s=>s.update?.(n)),this.effects.update(n,this.camera),this.ai?.update(n),this.updateHud(),this.checkVictory()),this.renderer.render(this.scene,this.camera),requestAnimationFrame(s=>this.loop(s))}updateHud(){if(Ue("res-supplies")&&(Ue("res-supplies").textContent=Math.floor(this.suppliesPlayer)),Ue("res-pop")){const e=this.units.filter(t=>t.alive&&t.team==="player").reduce((t,n)=>t+(n.stats?.pop||0),0);Ue("res-pop").textContent=`${e} / 60`}Ue("res-rate")&&(Ue("res-rate").textContent=`+${this.getIncome("player")}/s`),Ue("res-clock")&&(Ue("res-clock").textContent=this.formatTime(this.elapsed))}getIncome(e){return this.buildings.filter(t=>t.alive&&t.team===e).reduce((t,n)=>t+(n.income||0),0)}formatTime(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}checkVictory(){const e=this.buildings.some(n=>n.alive&&n.team==="player"&&n.type==="hq");this.buildings.some(n=>n.alive&&n.team==="enemy"&&n.type==="hq")?e||this.end(!1):this.end(!0)}end(e){if(this.ended)return;this.ended=!0,Ue("end-overlay")?.classList.add("open"),Ue("end-kicker").textContent=e?"OPERATION COMPLETE":"OPERATION FAILED",Ue("end-title").textContent=e?"VICTORY":"DEFEAT",Ue("end-text").textContent=e?"The enemy command post has fallen. The field is yours.":"Your headquarters has fallen. Rally and retry."}retry(){this.config?.mode==="campaign"?this.startMission(this.config.mission):this.startSkirmish()}nextMission(){const e=Pi.findIndex(t=>t.id===this.config?.mission?.id);this.startMission(Pi[(e+1)%Pi.length])}toggleSpeed(){this.speed=this.speed===1?2:this.speed===2?4:1,Ue("btn-speed")&&(Ue("btn-speed").textContent=`${this.speed}×`)}toggleSound(){this.audio.muted=!this.audio.muted}toast(e,t=""){const n=document.createElement("div");n.className=`toast ${t}`,n.textContent=e,Ue("toasts")?.appendChild(n),setTimeout(()=>n.remove(),2600)}onEntityKilled(e,t){e.kind==="building"?this.buildings=this.buildings.filter(n=>n!==e):this.units=this.units.filter(n=>n!==e)}onBuildingComplete(e){}cleanupBattle(){this.running=!1,this.units=[],this.buildings=[],this.projectiles=[],this.supplies=[]}showMenu(){this.cleanupBattle(),Ue("end-overlay")?.classList.remove("open"),this.showScreen("screen-menu")}}window.ironFront=new Eg;
