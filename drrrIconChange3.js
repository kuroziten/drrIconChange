// ブックマークレット
// javascript:const room_name=document.getElementsByName("room_name")[0].value,user_name=document.querySelector(".profname").innerText,iconList=["setton","gg","tanaka","kanra","bakyura","zaika","zawa","neko","neko2","twin","purple","orange","kai","usa","moza","girl","numakuro","bm","bear","rab","nyan","muff","muff_nyan"],pop=document.createElement("div");for(icon of(pop.style.position="fixed",pop.style.width="90vw",pop.style.height="80vh",pop.style.left="5vw",pop.style.top="10vh",pop.style.backgroundColor="white",document.body.append(pop),document.getElementsByClassName("message_box")[0].style.zIndex="0",iconList)){const e=document.createElement("img");e.src=`/css/icon_${icon}.png`;const n=icon;e.addEventListener("click",(async function(){await changeAction(n)})),pop.append(e)}async function changeAction(e){document.body.innerHTML="",$.cookie("durarara-like-chat1","",{path:"/",expires:-1});let n=await(await fetch("/logout/",{method:"POST"})).text(),o=document.createElement("div");o.style.display="none",o.innerHTML=n,document.body.append(o);const t=o.querySelector('input[name="token"]').value;o.remove();let a=new FormData;a.append("name",user_name),a.append("login","login"),a.append("language","ja-JP"),a.append("icon",e),a.append("token",t),n=await(await fetch("/",{method:"POST",body:a})).text(),o=document.createElement("div"),o.style.display="none",o.innerHTML=n,document.body.append(o);const c=o.querySelector("#zatsu").querySelectorAll(".rooms");let m=null;for(_room of c)if(_room.querySelector(".name").textContent==room_name){m=_room;break}const p=m.querySelector("input[type='hidden']").value;o.remove();const r=document.createElement("form");r.action="/room/",r.method="post";const i=document.createElement("input");i.name="id",i.value=p;const d=document.createElement("input");d.name="login",d.value="login",r.append(i),r.append(d),document.body.append(r),r.submit()};void(0);

const room_name = document.getElementsByName("room_name")[0].value;
const user_name = document.querySelector(".profname").innerText;
const iconList = [
    "setton",
    "gg",
    "tanaka",
    "kanra",
    "bakyura",
    "zaika",
    "zawa",
    "neko",
    "neko2",
    "twin",
    "purple",
    "orange",
    "kai",
    "usa",
    "moza",
    "girl",
    "numakuro",
    "bm",
    "bear",
    "rab",
    "nyan",
    "muff",
    "muff_nyan",
];
const pop = document.createElement("div");
pop.style.position = "fixed";
pop.style.width = "90vw";
pop.style.height = "80vh";
pop.style.left = "5vw";
pop.style.top = "10vh";
pop.style.backgroundColor = "white";
document.body.append(pop);
document.getElementsByClassName("message_box")[0].style.zIndex = "0";
for (icon of iconList) {
    const img = document.createElement("img");
    img.src = `/css/icon_${icon}.png`;
    const _icon = icon;
    img.addEventListener("click", async function() {
        await changeAction(_icon);
    });
    pop.append(img);
}
async function changeAction(icon) {
    document.body.innerHTML = "";
    $.cookie('durarara-like-chat1', "", {
        path: "/",
        expires: -1
    });
    let html = await (await fetch("/logout/",{method:"POST"})).text();
    let div = document.createElement("div");
    div.style.display = 'none';
    div.innerHTML = html;
    document.body.append(div);
    const token = div.querySelector('input[name="token"]').value;
    div.remove();
    let body = new FormData();
    body.append("name", user_name);
    body.append("login", "login");
    body.append("language", "ja-JP");
    body.append("icon", icon);
    body.append("token", token);
    html = await (await fetch("/",{method:"POST",body: body})).text();
    div = document.createElement("div");
    div.style.display = 'none';
    div.innerHTML = html;
    document.body.append(div);
    const zatsu = div.querySelector("#zatsu");
    const rooms = zatsu.querySelectorAll(".rooms");
    let room = null;
    for (_room of rooms) {
        if (_room.querySelector(".name").textContent == room_name) {
            room = _room;
            break;
        }
    }
    const roomId = room.querySelector("input[type='hidden']").value;
    div.remove();
    const form = document.createElement('form');
    form.action = '/room/';
    form.method = 'post';
    const id = document.createElement("input");
    id.name = "id";
    id.value = roomId;
    const login = document.createElement("input");
    login.name = "login";
    login.value = "login";
    form.append(id);
    form.append(login);
    document.body.append(form);
    form.submit();
    
}
