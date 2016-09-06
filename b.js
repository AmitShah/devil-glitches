(function(){function va(b,a){return Math.atan2(a[1]-b[1],a[0]-b[0])}function Ja(b,a){return Math.sqrt(b*b+a*a)}function ca(b){var a;a=h.VERTEX_SHADER;a=h.createShader(a);h.shaderSource(a,"attribute vec2 p;varying vec2 uv;void main(){gl_Position=vec4(p,0.0,1.0);uv=0.5*(p+1.0);}");h.compileShader(a);var e=a;a=h.FRAGMENT_SHADER;a=h.createShader(a);h.shaderSource(a,b);h.compileShader(a);b=h.createProgram();h.attachShader(b,e);h.attachShader(b,a);h.linkProgram(b);h.useProgram(b);e=h.getAttribLocation(b,
"p");h.enableVertexAttribArray(e);h.vertexAttribPointer(e,2,h.FLOAT,!1,0,0);return[b]}function ga(b){h.useProgram(b[0])}function z(b,a){return b[a]||(b[a]=h.getUniformLocation(b[0],a))}function Ta(){var b=h.createTexture();h.bindTexture(h.TEXTURE_2D,b);h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MIN_FILTER,h.LINEAR);h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MAG_FILTER,h.LINEAR);h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_S,h.CLAMP_TO_EDGE);h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_T,h.CLAMP_TO_EDGE);return b}
function M(b){h.activeTexture(h.TEXTURE0+0);h.bindTexture(h.TEXTURE_2D,b);return 0}function Ua(){var b=h.createFramebuffer();h.bindFramebuffer(h.FRAMEBUFFER,b);var a=Ta();h.texImage2D(h.TEXTURE_2D,0,h.RGBA,D,G,0,h.RGBA,h.UNSIGNED_BYTE,null);h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,a,0);return[b,a]}function N(b){h.bindFramebuffer(h.FRAMEBUFFER,b[0])}function ib(){this.T=function(b){for(var a=0;24>a;a++)this[String.fromCharCode(97+a)]=b[a]||0;.01>this.c&&(this.c=.01);b=
this.b+this.c+this.e;.18>b&&(b=.18/b,this.b*=b,this.c*=b,this.e*=b)}}function jb(b,a,e){Ka.F.T(b);var h=Ka.V();b=new Uint8Array(4*((h+1)/2|0)+44);var h=2*Ka.U(new Uint16Array(b.buffer,44),h),f=new Uint32Array(b.buffer,0,44);f[0]=1179011410;f[1]=h+36;f[2]=1163280727;f[3]=544501094;f[4]=16;f[5]=65537;f[6]=44100;f[7]=88200;f[8]=1048578;f[9]=1635017060;f[10]=h;h+=44;for(f=0;f<h;f+=3);a&&a.decodeAudioData(b.buffer,e)}function ha(b){b=b.split(kb);this.frequency=ha.M(b[0])||0;this.duration=ha.L(b[1])||0}
function w(b,a,e){this.C=b||new wa;this.J();this.I=a||120;this.loop=!0;this.D=this.H=0;this.B=[];this.push.apply(this,e||[])}function ra(b,a,q,h,f){e.save();e.beginPath();e.strokeStyle=f;for(f=0;f<b.length;f++){var k=lb["0123456789?abcdefghijklmnopqrstuvwxyz .-'".indexOf(b[f])],m=shakeScreen[0]+a-(h+10)*(b.length-f),p=shakeScreen[1]+q,l=h;k&1&&(e.moveTo(m+2,p-1),e.lineTo(l+m-2,p-1));k&2&&(e.moveTo(l+m+1,p),e.lineTo(l+m+1,l+p-1));k&4&&(e.moveTo(l+m+1,l+p+1),e.lineTo(l+m+1,2*l+p));k&8&&(e.moveTo(m+
2,2*l+p+1),e.lineTo(l+m-2,2*l+p+1));k&16&&(e.moveTo(m-1,p+l+1),e.lineTo(m-1,p+2*l));k&32&&(e.moveTo(m-1,p),e.lineTo(m-1,l+p-1));k&64&&(e.moveTo(m+2,l+p),e.lineTo(m+l/2-2,l+p));k&128&&(e.moveTo(m+2,p+2),e.lineTo(m+l/2-2,l+p-2));k&256&&(e.moveTo(l/2+m,p+2),e.lineTo(l/2+m,l+p-2));k&512&&(e.moveTo(l/2+m+2,l+p-2),e.lineTo(l+m-2,p+2));k&1024&&(e.moveTo(l/2+m+2,l+p),e.lineTo(l+m-2,l+p));k&2048&&(e.moveTo(l/2+m+2,l+p+2),e.lineTo(l+m-2,2*l+p-2));k&4096&&(e.moveTo(l/2+m,l+p+2),e.lineTo(l/2+m,2*l+p-2));k&8192&&
(e.moveTo(m+2,2*l+p-2),e.lineTo(l/2+m-2,l+p+2))}e.closePath();e.stroke();e.restore()}function I(b,a,e,f,h){a+=(f+10)*b.length/2;ra(b,a,e,f,h)}function Va(b){return Math.round(b[0]/84)+"-"+Math.round(b[1]/84)}function La(b){for(var a={},e,f=0;9>f;f++)if(e=Va([b[0]+84*(f%3-1),b[1]+84*(~~(f/3)-1)]),!a[e])for(a[e]=1,e=na[e],f=0;e&&f<e.length;f++)if(Ja(b[1]-e[f][1],b[0]-e[f][0])<e[f][2]+b[2])return e[f]}function Wa(b,a){for(var e=[],f=0;f<a;f++){var h=b.slice();h[5]=.05*(f-a/2)+b[5];e.push(J(h))}return e}
function Xa(){na={};ia=21;f=40;U=!1;xa=0;B=ia*f;K=[];Ma=.3;n=[(800-B)/2,(600-B)/2,370,270];C=[];k=[10.5*f,10.5*f,16,0,150,0,0,12,0,0];ya=[[0,1,0,-1],[-1,1,.5,1]];V=[];Y=[];za="";Na=Math.PI/2;O=F=0;L=[0,0,0,0,0,0,0];Aa={500:[1,ja],2500:[0,10.5*f,5.5*f,10],8999:[5,"what are you doing?"],10500:[1,P],11E3:[0,5.5*f,5.5*f,10],18E3:[0,15.5*f,15.5*f,10],18001:[5,""],25E3:[0,15.5*f,5.5*f,10],31E3:[0,5.5*f,15.5*f,10],37E3:[0,10.5*f,11.5*f,11],37500:[1,Z],46E3:[5,"you can't stop us!"],48500:[2,10,0,0,0,10,10,
10],49E3:[2,10,10,10,15,10,20,10],49001:[4,P,1],49002:[4,Z,1],49003:[4,ja,1],50004:[2,60,60,68,55,50,45,60],51E3:[4,P,138],51001:[4,Z,138],51002:[4,ja,138],51003:[5,"we are perfect!"],52E3:[0,4.5*f,10.5*f,11],53E3:[0,14.5*f,10.5*f,10],55550:[5,""],61E3:[0,10.5*f,16.5*f,11],63E3:[0,10.5*f,6.5*f,10],7E4:[0,16.5*f,10.5*f,11],72E3:[0,6.5*f,10.5*f,10],78E3:[0,10.5*f,4.5*f,11],88501:[2,1E3,0,0,0,0,0,10],92E3:[0,10.5*f,9.5*f,12],92500:[1,Q],108050:[5,"do you think we are an error?"],112050:[5,"you are a glitch!"],
115E3:[0,10.5*f,1.5*f,12],120050:[5,""],121E3:[0,1.5*f,10.5*f,12],126E3:[0,19.5*f,10.5*f,12],131E3:[0,10.5*f,19.5*f,12],154499:[5,"your limited dimension..."],160001:[2,100,100,50,20,20,100,10],160500:[5,"is just a plane"],164600:[0,10.5*f,15.5*f,10],164601:[0,12.5*f,16.5*f,10],164602:[0,12.5*f,18.5*f,10],164603:[0,10.5*f,19.5*f,10],164604:[0,8.5*f,18.5*f,10],164605:[0,8.5*f,16.5*f,10],18E4:[0,10.5*f,17.5*f,13],21E4:[0,10.5*f,10.5*f,14],11E5:[0,12.5*f,6.5*f,10]};Oa=void 0;oa=Object.keys(Aa).map(function(a){return parseInt(a)});
for(var b=0;b<ia;b++){K.push([]);for(var a=0;a<ia;a++)K[b].push([])}Z.stop();Q.stop();P.stop();ja.stop();record=parseFloat(Ya.getItem("agar3sjs13k-record")||0);E&&E[0]&&(E[0][3]=!1);E&&E[1]&&(E[1][3]=!1);E&&E[2]&&(E[2][3]=!1);sa=!1}function Za(){return"I reached "+F.toFixed()+" points in devilGlitches #js13k #js13kgames "}function $a(b,a){var e=da([b[0]+10*Math.cos(Math.PI*a/3),b[1]+10*Math.sin(Math.PI*a/3),4]);e[13]=b;e[9]=va(e,b);e[3]=e[9]+b[11];e[15]=0;e[16]=0;C.push(e)}function da(b){b=b.slice(0,
2).concat(mb[b[2]].slice(0));if(12==b[5]||14==b[5])for(var a=0;6>a;a++)$a(b,a);return b}function nb(b){if(.99<b)return 1;var a=1/b;return 100*b%a>a/2?1:0}function R(b,a){return b?Math.random()*a*2-a:0}function Pa(b,a,f){e.moveTo(b[0]*f,a[0]*f);for(var h=1;h<b.length;h++)e.lineTo(b[h]*f,a[h]*f);e.lineTo(b[0]*f,a[0]*f)}function Qa(b,a,e,f,h,k,m){return"rgba("+(~~(Math.random()*b)+a)+","+(~~(Math.random()*e)+f)+","+(~~(Math.random()*h)+k)+","+(~~(0*Math.random())+m)+")"}function ab(b){Ba||(Ba=b);dt=
Math.min(100,b-Ba)/1E3;Ba=b;xa++;if(0>L[6]){b=dt;if(!U){t=b*k[4]*(0<k[8]?Ma:1);var a=b*k[4]*(0<k[8]?1.4:1);K[Math.round(k[1]/f)]&&1==K[Math.round(k[1]/f)][Math.round(k[0]/f)]&&(a-=.5);S&ka[65]&&(k[0]-=a,k[0]<k[2]&&(k[0]=k[2]),k[0]>n[2]&&k[0]<B-n[2]&&(n[0]+=a));S&ka[87]&&(k[1]-=a,k[1]<k[2]&&(k[1]=k[2]),k[1]>n[3]&&k[1]<B-n[3]&&(n[1]+=a));S&ka[83]&&(k[1]+=a,k[1]>B-k[2]&&(k[1]=B-k[2]),k[1]>n[3]&&k[1]<B-n[3]&&(n[1]-=a));S&ka[68]&&(k[0]+=a,k[0]>B-k[2]&&(k[0]=B-k[2]),k[0]>n[2]&&k[0]<B-n[2]&&(n[0]-=a));k[3]=
va([k[0]+n[0],k[1]+n[1]],x);if(La(k)){aa(ob);for(a=-10;10>a;a++)Y.push([k[0],k[1],k[2]+Na*a*Math.random(),100]);ya=[[],[]];U=!0;Z.stop();Q.stop();P.stop();ja.stop();E[0][3]=!0;if(sa=F>record)record=F,Ya.setItem("agar3sjs13k-record",F),E[1][3]=!0,E[2][3]=!0}x[2]&&0>=k[6]&&0>=k[8]?(V.push([k[0]+R(1,2+k[7]/30),k[1]+R(1,2+k[7]/30),2,k[3]+R(1,.05+.001*k[7])]),aa(bb[~~(Math.random()*bb.length)]),k[6]=1/k[7]):k[6]-=b;x[3]&&0>=k[8]&&0>=k[9]?(aa(pb),k[8]=.55,k[9]=1.2):(k[8]-=b,k[9]-=b)}b=V.length-1;for(;0<=
b;b--)if(a=V[b],a[0]+=Math.cos(a[3])*t*a[2],a[1]+=Math.sin(a[3])*t*a[2],(-20>a[0]||a[0]>B+20||-20>a[1]||a[1]>B+20)&&V.splice(b,1),a=La(a))V.splice(b,1),--a[6],a[4]=200,5<a[5]&&aa(cb[~~(Math.random()*cb.length)]);for(b=0;b<Y.length;b++)a=Y[b],a[0]+=Math.cos(a[2])*(2+3*Math.random()),a[1]+=Math.sin(a[2])*(2+3*Math.random()),0>--a[3]&&Y.splice(b,1);na={};for(b=C.length-1;0<=b;b--)a:{var a=C[b],q=b;if(0>=a[6]){if(C.splice(q,1),5!=a[5]){for(q=-10;10>q;q++)Y.push([a[0],a[1],a[2]+Na*q*Math.random(),100]);
if(9<a[5]){for(var q=a[0],A=a[1],a=a[10],u=~~(q/f),r=~~(A/f),m=Math.ceil(a/f),p=r-m;p<r+m;p++)if("undefined"!=typeof K[p])for(var l=u-m;l<u+m;l++)if(1==K[p][l]||Ja((p+.5)*f-A,(l+.5)*f-q)<=a)K[p][l]=0;aa(qb)}else aa(rb)}}else{0<a[4]&&(a[4]-=50);if(10>a[5]){0<a[10]*(a[9]-a[3])&&(a[3]=2==a[5]?va(a,Oa||[0,0]):4==a[5]?a[3]+(a[9]+a[11]):va(a,k),a[10]=a[3]>a[9]?a[11]:-a[11]);A=La(a);a[9]=4==a[5]?a[9]+a[10]*t:3!=a[5]||A&&3==A[5]?a[9]+(A?-1:1)*a[10]:a[9]+a[10];5==a[5]&&(a[6]-=t/10);if(5<a[5]&&10>a[5]&&(a[13]-=
dt,0>a[13])){a=[(~~(a[0]/f)+.5)*f,(~~(a[1]/f)+.5)*f,a[5]+4];console.log(a);ea.push([a[0],a[1],1,1,a]);C.splice(q,1);break a}4!=a[5]?(a[0]+=Math.cos(a[9])*t*a[12],a[1]+=Math.sin(a[9])*t*a[12]):(1>a[13][6]&&(a[10]*=.99),a[15]=2*f*(-Math.cos(a[16])+1.2),a[16]+=t/200,a[0]=a[13][0]+Math.cos(a[9])*a[15],a[1]=a[13][1]+Math.sin(a[9])*a[15])}else{a[9]-=t;12<=a[5]&&(a[3]+=a[12]*t);if(0>a[9]&&!U)sb[a[5]](a);a[10]+=dt*a[11];q=a[0];A=a[1];u=a[10];r=~~(q/f);m=~~(A/f);p=Math.ceil(u/f);for(l=m-p;l<m+p;l++)if("undefined"!=
typeof K[l])for(var w=r-p;w<r+p;w++)1==K[l][w]||Ja((l+.5)*f-A,(w+.5)*f-q)>=u||(K[l][w]=1)}q=Va(a);na[q]=na[q]||[];na[q].push(a)}}if(0<oa.length&&F>oa[0])switch(b=Aa[oa.splice(0,1)[0]],b.splice(0,1)[0]){case 0:ea.push([b[0],b[1],1,1,b]);break;case 1:b[0].play();break;case 2:L=b;break;case 3:aa(b[0]);break;case 4:b[0].I=b[1];138==b[1]&&(b[0].stop(),b[0].play());break;case 5:za=b[0]}else 0==oa.length&&(Aa[F+7500]=[21*Math.random()*f,21*Math.random()*f,6],O=5,oa.push(F+7500));for(b=0;b<ea.length;b++)a=
ea[b],a[2]-=dt,0>a[2]&&(C.push(da(a[4])),9<a[4][2]&&(O=10,aa(tb)),3==a[4][2]&&(Oa=C[C.length-1]),ea.splice(b,1))}for(b=0;b<E.length;b++)a=E[b],!a[3]||x[0]<a[0]||x[0]>a[0]+a[2]||x[1]<a[1]||x[1]>a[1]+42?a[6]=a[7]=!1:(a[7]=!0,1==x[2]?a[6]=!0:0==x[2]&&a[6]&&(a[6]=!1,a[8]()));e.save();b=dt;e.fillStyle="rgba(0,0,0,0.1)";e.fillRect(0,0,800,600);e.fillStyle=Qa(180,0,185,0,185,0,1);for(a=0;6>a;a++)e.fillRect(800*Math.random(),600*Math.random(),2,2);e.save();e.strokeStyle="rgb(51,193,178)";e.beginPath();shakeScreen=
U?[0,0]:[R(x[2],2),R(x[2],2)];e.translate(shakeScreen[0],shakeScreen[1]);e.fillStyle="rgba(26,10,44,"+(.2-(0<k[8]?.1:0))+")";e.translate(n[0],n[1]);e.fillRect(0,0,B,B);for(a=0;a<=ia;a++)e.moveTo(a*f,0),e.lineTo(a*f,B),e.moveTo(0,a*f),e.lineTo(B,a*f);e.closePath();e.stroke();e.restore();e.save();e.beginPath();e.fillStyle="rgba(10,4,28,1)";e.strokeStyle="rgba(38,82,255,1)";for(q=0;q<ia;q++)for(a=0;a<ia;a++)0!=K[q][a]&&(e.fillRect(a*f+n[0]+shakeScreen[0],q*f+n[1]+shakeScreen[1],f,f),e.strokeRect(a*f+
n[0]+shakeScreen[0],q*f+n[1]+shakeScreen[1],f,f));e.fill();e.closePath();e.stroke();e.restore();e.save();e.beginPath();for(a=0;a<ea.length;a++)q=ea[a],A=q[2],A/=q[3],A=1*A*(A-2)+1,e.strokeStyle="rgba(38,82,255,"+A+")",e.fillRect(q[0]+n[0]+shakeScreen[0]-A*f/2,q[1]+n[1]+shakeScreen[1]-A*f/2,A*f,A*f);e.closePath();e.fill();e.stroke();e.restore();e.save();e.translate(k[0]+n[0]+R(x[2],1),k[1]+n[1]+R(x[2],1));e.rotate(k[3]+Math.PI/2);e.lineWidth=3;e.strokeStyle="rgb(201,133,187)";e.beginPath();Pa(ya[0],
ya[1],k[2]);e.closePath();e.stroke();e.restore();e.save();for(a=0;a<C.length;a++)if(u=C[a],!(20>u[0]+n[0]||u[0]+n[0]>D-20||20>u[1]+n[1]||u[1]+n[1]>G-20)){q=u[0]+n[0]+shakeScreen[0]+(.5<Math.random()?1:-1)*u[4]/40;A=u[1]+n[1]+shakeScreen[1]+(.5<Math.random()?1:-1)*u[4]/40;e.translate(q,A);e.beginPath();if(10>u[5])e.strokeStyle="hsla("+36*u[5]+",50%,70%,0.6)",e.lineWidth=3,e.rotate(u[9]),Pa(u[7],u[8],u[2]),e.rotate(-u[9]);else if(14==u[5]){r="hsla("+20*u[3]+",50%,60%, 0.5)";e.lineWidth=2;e.beginPath();
e.strokeStyle=0<u[4]?"rgba(180,0,50,0.3)":r;r=u[2]/3.5;e.arc(0,0,r/2,0,2*Math.PI,!1);e.stroke();e.beginPath();e.bezierCurveTo(-r,0,0,-r,r,0);e.bezierCurveTo(r,0,0,r,-r,0);e.stroke();e.rotate(u[3]);for(m=0;6>m;m++)p=T[2*m],l=T[2*m+1],e.beginPath(),e.arc(4*p*r,4*l*r,r,0,2*Math.PI,!1),e.stroke(),e.beginPath(),e.arc(2*p*r,2*l*r,r,0,2*Math.PI,!1),e.stroke(),e.beginPath(),e.moveTo(p*r*4,l*r*4),e.lineTo(4*r*T[(2*m+2)%12],4*r*T[(2*m+3)%12]),e.lineTo(4*r*T[(2*m+6)%12],4*r*T[(2*m+7)%12]),e.moveTo(p*r*2,l*r*
2),e.lineTo(2*r*T[(2*m+2)%12],2*r*T[(2*m+3)%12]),e.lineTo(2*r*T[(2*m+6)%12],2*r*T[(2*m+7)%12]),e.stroke();e.beginPath();e.rotate(-u[3])}else for(e.lineWidth=2,r=(ta[u[5]]-u[9])/ta[u[5]],r=0<u[4]?-55:~~(200*r)*db[r.toFixed(4)],e.strokeStyle=0<u[4]?"#0ff":0==r?"#66A":"#559",m=0;m<u[7].length;m++){var p=u[7][m],l=u[8][m],w=u[2],J=[80+u[4],55+r,130+~~(r/2),0<u[4]?.9:.4];e.beginPath();e.fillStyle="rgba("+J+")";Pa(p,l,w);e.closePath();e.fill();e.stroke()}e.closePath();e.stroke();e.translate(-q,-A)}e.closePath();
e.restore();e.save();e.fillStyle="rgb(40,145,160)";for(a=0;a<V.length;a++)q=V[a],20>q[0]+n[0]||q[0]+n[0]>D-20||20>q[1]+n[1]||q[1]+n[1]>G-20||(e.beginPath(),e.arc(q[0]+n[0],q[1]+n[1],q[2],0,2*Math.PI,!1),e.closePath(),e.fill());e.restore();e.save();e.fillStyle=Qa(125,50,125,50,125,50,1);for(a=0;a<Y.length;a++)q=Y[a],5>q[0]+n[0]||q[0]+n[0]>D-5||5>q[1]+n[1]||q[1]+n[1]>G-5||(e.beginPath(),e.fillStyle=Qa(125,0,125,100,125,100,q[3]/100),e.arc(q[0]+n[0],q[1]+n[1],2,0,2*Math.PI,!1),e.closePath(),e.fill());
e.restore();e.save();e.lineWidth=2;e.translate(x[0],x[1]);e.strokeStyle="#F952FF";k[5]+=25*b*(8*x[2]+1);k[5]%=360;e.translate(-10,-10);e.beginPath();e.moveTo(0,10);e.lineTo(20,10);e.moveTo(10,0);e.lineTo(10,20);e.closePath();e.stroke();e.restore();e.save();I(za,401,501,14,"#90702F");I(za,402,502,14,"#D6AE45");U?(e.fillStyle="rgba(0,0,0,0.6)",e.fillRect(0,0,B,B),sa?(I("-new record-",400,240,22,"#F66"),I("-new record-",401,240,22,"#F6F"),I("-share it-",400,400,14,"#F6F"),I("-share it-",400,400,14,"#F6F")):
(I("game over",400,240,20,"#FFF"),I("game over",401,240,20,"#2FF")),I(F.toFixed(0),400,160,sa?20:16,"#2F2"),I(F.toFixed(0),401,161,sa?20:16,"#FFF")):(ra(F.toFixed(0),750,60,18,"#2F2"),ra(F.toFixed(0),751,61,18,"#FFF"),b=F>record?"record":record.toFixed(0),ra(b,750,110,9,"#F22"),ra(b,751,111,9,"#FFF"));e.restore();for(b=0;b<E.length;b++){a=E[b];if(!a[3])break;e.strokeStyle=a[7]?"#066":a[4];e.lineWidth=2;e.strokeRect(a[0],a[1],a[2],42);I(a[5],a[0]+a[2]/2+1,a[1]+10,12,"#FFF");I(a[5],a[0]+a[2]/2,a[1]+
8,12,a[5])}e.restore();b=g;h.bindTexture(h.TEXTURE_2D,eb);h.texImage2D(h.TEXTURE_2D,0,h.RGBA,h.RGBA,h.UNSIGNED_BYTE,b);O--;for(b=0;b<L.length;b++)L[b]--;N(H);ga(ua);h.uniform1i(z(ua,"t"),M(eb));h.uniform1f(z(ua,"time"),xa/60%180);h.uniform3fv(z(ua,"colors"),[0<O+1||0<L[0]?1:0,0<O+2||0<L[1]?1:0,0<O||0<L[2]?1:0]);h.drawArrays(h.TRIANGLES,0,6);N(ba);ga(Ca);h.uniform1i(z(Ca,"t"),M(H[1]));h.uniform1f(z(Ca,"time"),0<O||0<L[3]?15:0);h.drawArrays(h.TRIANGLES,0,6);N(H);ga(Da);h.uniform1i(z(Da,"t"),M(ba[1]));
h.uniform1f(z(Da,"time"),0<O+1||0<L[4]?1:0);h.drawArrays(h.TRIANGLES,0,6);N(ba);ga(Ea);h.uniform1i(z(Ea,"tex"),M(H[1]));h.uniform1f(z(Ea,"rand"),-.5);h.drawArrays(h.TRIANGLES,0,6);N(H);ga(Fa);h.uniform1i(z(Fa,"t"),M(ba[1]));h.uniform1f(z(Fa,"slit_h"),0<O||0<L[5]?9:1);h.drawArrays(h.TRIANGLES,0,6);N(ba);ga(Ga);h.uniform1i(z(Ga,"t"),M(H[1]));h.uniform1f(z(Ga,"time"),xa);h.drawArrays(h.TRIANGLES,0,6);N(H);ga(Ra);h.uniform1i(z(Ra,"t"),M(ba[1]));h.drawArrays(h.TRIANGLES,0,6);h.bindFramebuffer(h.FRAMEBUFFER,
null);h.drawArrays(h.TRIANGLES,0,6);h.flush();U||(F+=1E3*dt*(0<k[8]?Ma:1));requestAnimationFrame(ab)}var Ka=new function(){this.F=new ib;var b,a,e,f,h,k,m,p,l,n,w,x;this.r=function(){var a=this.F;f=100/(a.f*a.f+.001);h=100/(a.g*a.g+.001);k=1-a.h*a.h*a.h*.01;m=-a.i*a.i*a.i*1E-6;a.a||(w=.5-a.n/2,x=5E-5*-a.o);p=1+a.l*a.l*(0<a.l?-.9:10);l=0;n=1==a.m?0:(1-a.m)*(1-a.m)*2E4+32};this.V=function(){this.r();var f=this.F;b=f.b*f.b*1E5;a=f.c*f.c*1E5;e=f.e*f.e*1E5+12;return 3*((b+a+e)/3|0)};this.U=function(z,
B){var v=this.F,E=1!=v.s||v.v,C=v.v*v.v*.1,F=1+3E-4*v.w,D=v.s*v.s*v.s*.1,G=1+1E-4*v.t,I=1!=v.s,K=v.x*v.x,L=v.g,J=v.q||v.r,T=v.r*v.r*v.r*.2,O=v.q*v.q*(0>v.q?-1020:1020),P=v.p?((1-v.p)*(1-v.p)*2E4|0)+32:0,aa=v.d,Z=v.j/2,ea=v.k*v.k*.01,V=v.a,Y=b,ja=1/b,ka=1/a,ma=1/e,v=5/(1+v.u*v.u*20)*(.01+D);.8<v&&(v=.8);for(var v=1-v,ca=!1,ga=0,M=0,N=0,ia=0,U=0,R,S=0,fa,H=0,qa,ha=0,y,na=0,Q,oa=0,da=Array(1024),ba=Array(32),la=da.length;la--;)da[la]=0;for(la=ba.length;la--;)ba[la]=2*Math.random()-1;for(la=0;la<B;la++){if(ca)return la;
P&&++na>=P&&(na=0,this.r());n&&++l>=n&&(n=0,f*=p);k+=m;f*=k;f>h&&(f=h,0<L&&(ca=!0));fa=f;0<Z&&(oa+=ea,fa*=1+Math.sin(oa)*Z);fa|=0;8>fa&&(fa=8);V||(w+=x,0>w?w=0:.5<w&&(w=.5));if(++M>Y)switch(M=0,++ga){case 1:Y=a;break;case 2:Y=e}switch(ga){case 0:N=M*ja;break;case 1:N=1+2*(1-M*ka)*aa;break;case 2:N=1-M*ma;break;case 3:N=0,ca=!0}J&&(O+=T,qa=O|0,0>qa?qa=-qa:1023<qa&&(qa=1023));E&&F&&(C*=F,1E-5>C?C=1E-5:.1<C&&(C=.1));Q=0;for(var pa=8;pa--;){H++;if(H>=fa&&(H%=fa,3==V))for(R=ba.length;R--;)ba[R]=2*Math.random()-
1;switch(V){case 0:y=H/fa<w?.5:-.5;break;case 1:y=1-H/fa*2;break;case 2:y=H/fa;y=6.28318531*(.5<y?y-1:y);y=1.27323954*y+.405284735*y*y*(0>y?1:-1);y=.225*((0>y?-1:1)*y*y-y)+y;break;case 3:y=ba[Math.abs(32*H/fa|0)]}E&&(R=S,D*=G,0>D?D=0:.1<D&&(D=.1),I?(U+=(y-S)*D,U*=v):(S=y,U=0),S+=U,ia+=S-R,y=ia*=1-C);J&&(da[ha%1024]=y,y+=da[(ha-qa+1024)%1024],ha++);Q+=y}Q*=.125*N*K;z[la]=1<=Q?32767:-1>=Q?-32768:32767*Q|0}return B}},pa,Ha,J,aa,wa=window.AudioContext||window.webkitAudioContext;if(wa){pa=new wa;Ha=pa.createDynamicsCompressor();
var Sa=pa.createGain();Sa.gain.value=window.chrome?.2:.4;Ha.connect(Sa);Sa.connect(pa.destination);J=function(b){var a=[];jb(b,pa,function(b){a.push(b)});return a};aa=function(b){if(b[0]){var a=pa.createBufferSource();a.context.sampleRate+=~~(500*Math.random());a.buffer=b[0];a.start(0);a.connect(Ha);setTimeout(function(){a.disconnect(Ha)},1E3*b[0].duration+300)}}}else J=aa=function(){};var ub=440*Math.pow(Math.pow(2,1/12),-9),vb=/^[0-9.]+$/,kb=/\s+/,wb=/(\d+)/,fb={};"B#-C C#-Db D D#-Eb E-Fb E#-F F#-Gb G G#-Ab A A#-Bb B-Cb".split(" ").forEach(function(b,
a){b.split("-").forEach(function(b){fb[b]=a})});ha.M=function(b){b=b.split(wb);return ub*Math.pow(Math.pow(2,1/12),fb[b[0]])*Math.pow(2,(b[1]||4)-4)};ha.L=function(b){return vb.test(b)?parseFloat(b):b.toLowerCase().split("").reduce(function(a,b){return a+("w"===b?4:"h"===b?2:"q"===b?1:"e"===b?.5:"s"===b?.25:0)},0)};w.prototype.J=function(){var b=this.gain=this.C.createGain();[["bass",100],["mid",1E3],["treble",2500]].forEach(function(a,e){e=this[a[0]]=this.C.createBiquadFilter();e.type="peaking";
e.frequency.value=a[1];b.connect(b=e)}.bind(this));b.connect(this.C.destination)};w.prototype.push=function(){Array.prototype.forEach.call(arguments,function(b){this.B.push(b instanceof ha?b:new ha(b))}.bind(this));return this};w.prototype.createOscillator=function(){this.stop();this.A=this.C.createOscillator();this.K?this.A.setPeriodicWave(this.C.createPeriodicWave.apply(this.C,this.K)):this.A.type=this.Y||"square";this.A.connect(this.gain);return this};w.prototype.R=function(b,a){var e=60/this.I*
this.B[b].duration,f=e*(1-(this.D||0));this.G(this.B[b].frequency,a);this.H&&this.B[b].frequency&&this.S(b,a,f);this.G(0,a+f);return a+e};w.prototype.N=function(b){return this.B[b<this.B.length-1?b+1:0]};w.prototype.O=function(b){return b-Math.min(b,60/this.I*this.H)};w.prototype.S=function(b,a,e){var f=this.N(b);this.G(this.B[b].frequency,a+this.O(e));this.P(f.frequency,a+e)};w.prototype.G=function(b,a){this.A.frequency.setValueAtTime(b,a)};w.prototype.P=function(b,a){this.A.frequency.linearRampToValueAtTime(b,
a)};w.prototype.play=function(b){b="number"===typeof b?b:this.C.currentTime;this.createOscillator();this.A.start(b);this.B.forEach(function(a,e){b=this.R(e,b)}.bind(this));this.A.stop(b);this.A.onended=this.loop?this.play.bind(this,b):null;return this};w.prototype.stop=function(){this.A&&(this.A.onended=null,this.A.disconnect(),this.A=null);return this};var lb=[8767,518,1115,1039,1126,1133,1149,7,1151,1135,5123,1143,5391,57,4367,121,113,1085,1142,4361,30,2672,56,694,2230,63,1139,2111,3187,1133,4353,
62,8752,10294,10880,4736,8713,0,16,1088,256],na={},h=c.getContext("webgl")||c.getContext("experimental-webgl"),e=g.getContext("2d"),D=800,G=600,Ya=localStorage;d.style.webkitTransformOrigin=d.style.transformOrigin="0 0";g.width=c.width=D;g.height=c.height=G;c.style.top="0px";c.style.left="0px";document.oncontextmenu=function(b){b.preventDefault()};h.viewport(0,0,D,G);h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!0);var xb=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,xb);h.bufferData(h.ARRAY_BUFFER,new Float32Array([-1,
-1,1,-1,-1,1,-1,1,1,-1,1,1]),h.STATIC_DRAW);var Ga=ca("precision highp float;uniform vec2 dim;uniform sampler2D t;varying vec2 uv;uniform float time;void main(){vec2 a=uv*dim;vec4 b=texture2D(t,uv);vec4 c=vec4(0.0);float d=0.02*sin(time)+0.25;float e=0.05;for(int f=0;f<9;f++){float g=float(mod(float(f),4.0));float h=float(f/3);vec2 i=vec2(a.x+g,a.y+h);vec2 j=vec2(a.x-g,a.y+h);vec2 k=vec2(a.x+g,a.y-h);vec2 l=vec2(a.x-g,a.y-h);c+=texture2D(t,i/dim)*e;c+=texture2D(t,j/dim)*e;c+=texture2D(t,k/dim)*e;c+=texture2D(t,l/dim)*e;}b+=c;vec4 m=texture2D(t,uv+vec2((-15.0/dim.x)*d,0));vec4 n=texture2D(t,uv+vec2((8.0/dim.x)*d,0));vec4 o=texture2D(t,uv+vec2((-7.5/dim.x)*d,0));b.r=b.r+n.r*max(1.0,sin(uv.y*dim.y*1.2)*2.5)*d;b.b=b.b+m.b*max(1.0,sin(uv.y*dim.y*1.2)*2.5)*d;b.g=b.g+o.g*max(1.0,sin(uv.y*dim.y*1.2)*2.5)*d;vec2 p=uv*sin(time);float q=fract(sin(dot(p.xy,vec2(12.9898,78.233)))*43758.5453);vec3 r=vec3(q);b.rgb=mix(b.rgb,r,0.08);gl_FragColor.rgba=b;}");
h.uniform2f(z(Ga,"dim"),D,G);var Ra=ca("precision highp float;uniform sampler2D t;uniform vec2 dim;varying vec2 uv;void main(){vec2 a=uv*dim;a-=dim/2.0;float b=length(a);if(b<600.0){float c=b/600.0;a*=mix(1.0,smoothstep(0.0,600.0/b,c),0.125);}a+=dim/2.0;vec4 d=texture2D(t,a/dim);float e=distance(uv,vec2(0.5,0.5));d.rgb*=smoothstep(0.8,0.35*0.799,e);gl_FragColor=d;}");h.uniform2f(z(Ra,"dim"),D,G);var ua=ca("precision mediump float;uniform vec2 dim;uniform sampler2D t;varying vec2 uv;uniform float time;uniform vec3 colors;void main(void){float a=sin(time);vec4 b=texture2D(t,uv);vec4 c=texture2D(t,uv+vec2((-15.0/dim.x),0));vec4 d=texture2D(t,uv+vec2((15.0/dim.x),0));vec4 e=texture2D(t,uv+vec2((-7.5/dim.x),0));if(colors.r==1.0){b.r=b.r+d.r*max(1.0,sin(uv.y*dim.y*1.2))*a;}if(colors.g==1.0){b.b=b.b+c.b*max(1.0,sin(uv.y*dim.y*1.2))*a;}if(colors.b==1.0){b.g=b.g+e.g*max(1.0,sin(uv.y*dim.y*1.2))*a;}gl_FragColor.rgba=b.rgba;}");
h.uniform2f(z(ua,"dim"),D,G);var Ca=ca("precision mediump float;uniform vec2 dim;uniform sampler2D t;varying vec2 uv;uniform float time;void main(void){float a=5.0;float b=0.5;vec2 c=uv*dim;vec2 d=c+vec2(floor(sin(c.y/a*time+time*time))*b*time,0);d=d/dim;vec4 e=texture2D(t,d);gl_FragColor.rgba=e.rgba;}");h.uniform2f(z(Ca,"dim"),D,G);var Da=ca("precision mediump float;uniform vec2 dim;uniform sampler2D t;varying vec2 uv;uniform float time;void main(void){float a=0.3;float b=0.3;float c=10.00*time;float d=10.00*time;float e=dim.x;float f=dim.y;vec2 g=uv*dim;vec2 h=vec2(max(3.0,min(float(e),g.x+sin(g.y/(153.25*a*a)*a+a*c+b*3.0)*d)),max(3.0,min(float(f),g.y+cos(g.x/(251.57*a*a)*a+a*c+b*2.4)*d)-3.0));vec4 i=texture2D(t,h/dim);gl_FragColor.rgba=i.rgba;}");
h.uniform2f(z(Da,"dim"),D,G);var Ea=ca("precision mediump float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform float rand;void main(void){vec4 a=texture2D(tex,uv);gl_FragColor.rgba=a.rgba;}");h.uniform2f(z(Ea,"dim"),D,G);var Fa=ca("precision mediump float;uniform vec2 dim;uniform sampler2D t;varying vec2 uv;uniform float slit_h;void main(void){vec2 a=uv*dim;vec2 b=vec2(3.0+floor(a.x/slit_h)*slit_h,a.y);vec4 c=texture2D(t,b/dim);gl_FragColor.rgba=c.rgba;}");h.uniform2f(z(Fa,
"dim"),D,G);var H=Ua(),ba=Ua(),eb=Ta(),x=[0,0,0];c.onmousedown=function(b){x[2]=3==b.which?0:1;x[3]=3==b.which?1:0;b.preventDefault()};c.onmouseup=function(b){x[2]=0;x[3]=0;b.preventDefault()};c.onmousemove=function(b){0<L[6]||(x[0]=b.offsetX,x[1]=b.offsetY)};var S=0,ka={65:1,87:2,68:4,83:8};document.onkeydown=function(b){var a=b.keyCode||b.which;ka[a]&&(S|=ka[a],b.preventDefault())};document.onkeyup=function(b){var a=b.keyCode?b.keyCode:b.which;S&ka[a]&&(S^=ka[a],b.preventDefault())};var Ia=new wa,
Z,Q,P,ja;g2e="G2 e";c2e="C2 e";lead="Bb1 s;D2 s;Bb1 s;D2 s;Bb1 s;D2 s;Bb1 s;D2 s;Bb1 s;D2 s;Bb1 s;D2 s;Bb1 s;D2 s;Bb1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s".split(";");harmony=[g2e,"G2b e",g2e,"G2b e",g2e,"G2b e",g2e,"G2b e",c2e,"G2b e",c2e,"G2b e",c2e,"G2b e",c2e,"G2b e"];bass2="- w;D1 s;- s;D1 e;- q;- m;- w".split(";");bass=basebass=["C1 e","- e","A1 e","- e"];Z=new w(Ia,138,lead);Q=new w(Ia,138,harmony);P=new w(Ia,138,bass);ja=new w(Ia,138,
bass2);Z.D=.81;Q.D=.55;P.D=.05;P.H=.35;ja.D=.05;Z.gain.gain.value=.12;Q.gain.gain.value=.09;P.gain.gain.value=.11;ja.gain.gain.value=.1;window.W=Z;window.X=P;var bb=Wa([0,,.12,.14,.3,.8,,-.3399,.04,,,-.04,,.51,-.02,,-.74,,.21,.24,,,.02,.41],6),tb=J([1,,.38,,.03,.03,,.8799,.96,.9411,.9785,-.9219,.82,.7513,.6049,.8,-.6041,-.8402,.28,.7,.78,.1423,-.7585,.5]),rb=J([3,.0597,.11,.2,.2513,.5277,,.5841,-.0248,-.076,.5312,-.2978,.7065,-.9091,.4202,.966,.7036,.4575,1,-.9064,.6618,.0266,-.0655,.42]),pb=J([2,
,.09,.06,.45,.27,.02,-.28,.82,.41,.58,-.88,.07,.448,-.355,1,.54,-.073,1,,,,,.42]),qb=J([3,.002,.6302,.499,.0804,.5224,,-.0324,4E-4,.5448,,-.7762,-.1765,.6762,-.4386,.7747,-.0347,-.2051,.931,-.0732,.4693,.1444,,.42]),ob=J([1,.145,.2094,.4645,.4954,.7134,,-.1659,-.8866,.9733,,-.572,-.7927,-.1186,.4699,.6044,.4604,.1762,.9998,.0236,.1554,,.659,.42]);J([1,.0076,.66,,,.09,,.96,.32,.1,.97,-1,,.0615,-.1587,1,,-.02,.83,.12,.23,.0231,-.02,.96]);var cb=Wa([3,.0691,.183,.0949,.5678,.46,,-1E-4,,,,-.542,-.2106,
-.2402,-.1594,,-.3133,-.0707,.1592,-.4479,.5788,.0169,-.919,.42],8),ia,f,U,xa,B,K,Ma,n,C,k,ya,V,Y,za,Na,F,O,L,Aa,Oa,oa,sa;Xa();for(var gb=window.location.href||"http://js13kgames.com/entries/",E=[[240,320,300,!1,"#F66","start again",!1,!1,Xa],[120,460,250,!1,"#69F","twitter",!1,!1,function(){window.open("https://twitter.com/home?status="+encodeURIComponent(Za()+gb))}],[430,460,250,!1,"#32F","facebook",!1,!1,function(){window.open("https://www.facebook.com/sharer/sharer.php?u="+(encodeURIComponent(gb)+
"&description="+encodeURIComponent(Za())))}]],ea=[],mb=[[15,0,0,0,1,[1,.25,-1,.25],[0,-.75,0,.75],0,3,.1,1.1],[15,0,0,1,4,[1,.3,0,-2,0,.3],[0,1,.3,0,-.3,-1],0,3,.05,.8],[8,0,0,2,2,[1,.25,-1,.25],[0,-.5,0,.5],0,3.5,.15,1.6],[20,0,0,3,9,[0,.25,.75,.75,1,.75,.75,.25,0,-.25,-.75,-.75,-1,-.75,-.75,-.25],[-1,-.75,-.75,-.25,0,.25,.75,.75,1,.75,.75,.25,0,-.25,-.75,-.75],0,1,.12,1.05],[12,0,0,4,5,[0,.25,1,.25,0,-.25,-1,-.25],[-1,-.25,0,.25,1,.25,0,-.25],0,3,.03,2.5,0,0,0],[3,0,0,5,150,[1,-1,-1],[0,1,-1],0,
0,0,1.4],[16,0,0,6,9,[1,.25,-1,.25],[0,-.75,0,.75],0,0,0,.6,3.5],[18,0,0,7,8,[1,.25,-1,.25],[0,.75,0,-.75],0,0,0,.8,2.5],[20,0,0,8,7,[1,.25,-1,.25],[0,.75,0,-.75],0,0,0,1.2,1.5],,[f/2,0,0,10,9,[[-1,0,0],[0,0,1],[-1,1,0]],[[-1.5,-.5,.5],[-.5,.5,-1.5],[-1.5,-1.5,-.5]],100,0,7],[f/2,0,0,11,10,[[-1,0,0,-1],[1,0,0,1],[-1,0,1,0],[-1,0,1,0],[-1,0,0,-1],[1,0,0,1]],[[-1.25,-.5,.8,.25],[-1.25,-.5,.8,.25],[-1.25,-.5,-1.25,-1.8],[.25,-.5,.25,.8],[.25,-.5,-1.8,-1.25],[.25,-.5,-1.8,-1.25]],100,0,6],[.8*f,0,0,12,
15,[[-.5,0,.5,0],[-.5,0,0],[.5,0,0],[-.5,0,0],[.5,0,0]],[[-.75,-1,-.75,-.5],[-.75,-.5,.25],[-.75,-.5,.25],[-.75,-1.75,-.5],[-.75,-1.75,-.5]],.9,0,4,.004],[1.2*f,0,0,13,30,[[0,-.75,0],[0,.75,0],[-.75,.75,0],[-.75,.75,0],[-.35,.35,0]],[[-1,.5,0],[-1,.5,0],[.5,.5,0],[-.5,-.5,1],[.25,.25,-.5]],.9,0,13,.1],[2.5*f,0,0,14,200,[],[],.9,0,60,.003,1,0,[6,7,6,7,8]]],ta={10:2800,11:2600,12:60,13:200},T=[],ma=0;6>ma;ma++){var hb=(ma-3)*Math.PI/3+Math.PI/6;T.push(Math.cos(hb),Math.sin(hb))}for(var db={},ma=0;1E4>
ma;ma++)db[(ma/1E4).toFixed(4)]=nb(ma/1E4);var sb={10:function(b){for(var a=0;9>a;a++)if(4!=a){var e=b[0]+(a%3-1)*f,h=b[1]+(~~(a/3)-1)*f;ea.push([e,h,.65,.65,[e,h,1==a?1:0]])}b[9]=ta[10]},11:function(b){for(var a=0;12>a;a++)if(4!=a){var e=b[0]+(a%3-1)*f,h=b[1]+(~~(a/3)-1)*f;ea.push([e,h,.65,.65,[e,h,1==a?3:2]])}b[9]=ta[11]},12:function(b){for(var a=0;2>a;a++){var e=da([b[0],b[1],5]);e[9]=b[3]+a*Math.PI;C.push(e)}b[9]=ta[12]},13:function(b){for(var a=0;6>a;a++){var e=da([b[0],b[1],5]);e[9]=b[3]+(a-
3)*Math.PI/3;e[12]+=1.2;C.push(e)}b[9]=100},14:function(b){for(var a=0;6>a;a++){var e=da([b[0],b[1],5]);e[9]=b[3]+(a-3)*Math.PI/3+Math.PI/6;e[12]-=.6;C.push(e)}0==b[13]%16&&(e=da([b[0],b[1],b[15][b[14]%b[15].length]]),e[9]=b[3]/2,C.push(e),b[14]++);if(0==b[13]%100)for(a=0;6>a;a++)$a(b,a);b[9]=70;b[13]++}},Ba;requestAnimationFrame(ab)})();
