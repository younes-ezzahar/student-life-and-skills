document.getElementById('yr').textContent=new Date().getFullYear();
var icons=['🧩','🐘','🌈','🚀'],board=document.getElementById('board'),msg=document.getElementById('msg'),first=null,lock=false,moves=0,found=0;
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function start(){board.innerHTML='';msg.textContent='';first=null;lock=false;moves=0;found=0;
shuffle(icons.concat(icons)).forEach(function(ic){var b=document.createElement('button');b.type='button';b.className='tile';b.setAttribute('aria-label','Carte cachée');b.dataset.v=ic;b.innerHTML='<span>'+ic+'</span>';b.addEventListener('click',function(){flip(b)});board.appendChild(b)})}
function flip(b){if(lock||b===first||b.classList.contains('done'))return;b.classList.add('open');
if(!first){first=b;return}
moves++;var a=first;first=null;
if(a.dataset.v===b.dataset.v){a.className=b.className='tile done';found++;
if(found===icons.length)msg.textContent='Bravo ! Terminé en '+moves+' essais.'}
else{lock=true;setTimeout(function(){a.classList.remove('open');b.classList.remove('open');lock=false},800)}}
document.getElementById('reset').addEventListener('click',start);start();
document.getElementById('form').addEventListener('submit',function(e){e.preventDefault();var f=e.target,v=function(n){return f.elements[n].value};
var body='Bonjour,\n\nJe souhaite prendre rendez-vous.\n\nNom : '+v('nom')+'\nE-mail : '+v('email')+'\nÂge de l’enfant : '+v('age')+'\nMotif : '+v('motif')+'\n\n'+v('message');
window.location.href='mailto:studentlifeandskills1@gmail.com?subject='+encodeURIComponent('Demande de rendez-vous – '+v('motif'))+'&body='+encodeURIComponent(body);
document.getElementById('fnote').textContent='Si rien ne s’ouvre, écrivez-nous directement à studentlifeandskills1@gmail.com.'});
