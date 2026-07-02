logs.innerHTML='<p>✔ Modules Loaded</p><p>✔ Demo Database Active</p><p>✔ Matrix Enabled</p>';
let t='CyberVault Ultimate Booted\nAnimations Active\nReady';
let i=0;setInterval(()=>{if(i<t.length)term.textContent+=t[i++]},35);
const c=matrix,x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;
const a=Array(220).fill(1),ch='01CYBER';
(function d(){x.fillStyle='rgba(0,0,0,.05)';x.fillRect(0,0,c.width,c.height);x.fillStyle='#00ff88';
a.forEach((y,i)=>{x.fillText(ch[Math.random()*ch.length|0],i*8,y);a[i]=y>c.height?0:y+8;});
requestAnimationFrame(d)})();