var gi_flag=1;
var cd_flag=1;
var de_flag=1;
var vc_flag=1;
var md_flag=1;



function reset_color(){
    var ch_td;

    for(i=2;i<=12;i++)
    {
        for(j=1;j<=8;j++)
        {
            str = "tr"+i+"td"+j;
            ch_td = document.getElementById(str);
            ch_td.style.background = "#f5f5f5";
        }
    }
}
function giClick(){
    var ch_td;

    reset_color();

    var gi_core = [ 'tr4td5', 'tr5td5', 'tr6td4',
                 'tr6td6', 'tr7td3', 'tr7td4',
                 'tr8td1', 'tr8td2', 'tr8td3',
                 'tr8td5', 'tr9td2', 'tr9td3',
                 'tr10td1'];
    var gi_support = [ 'tr2td1', 'tr2td3',
                 'tr5td1', 'tr5td2', 'tr7td3',
                 'tr6td5', 'tr6td8', 'tr7td1',
                 'tr7td5', 'tr7td8', 'tr9td1', 'tr10td4'];
    

    if(gi_flag>0)
    {
        for(i=0;i<gi_core.length;i++)
        {
            ch_td = document.getElementById(gi_core[i]);
            ch_td.style.background = "#59bb4f";
        }

        for(i=0;i<gi_support.length;i++)
        {
            ch_td = document.getElementById(gi_support[i]);
            ch_td.style.background = "#c1dfbf";
        }
    }
    if(gi_flag<0)
    {
        reset_color();
    }
    gi_flag*=-1;

    cd_flag=1;
    de_flag=1;
    vc_flag=1;
    md_flag=1;
}

function cdClick(){
    
    reset_color();

    var cd_core = [ 'tr4td4', 'tr4td6', 'tr5td5',
                 'tr5td4', 'tr6td7', 'tr7td4',
                 'tr10td7', 'tr12td6'];
    var cd_support = [ 'tr5td7','tr6td3', 'tr6td4',
                 'tr7td6', 'tr7td7', 'tr8td8','tr9td1', 'tr9td3',
                 'tr9td4', 'tr9td5', 'tr11td8', 'tr12td4'];
    var ch_td;

    if(cd_flag>0)
    {
        for(i=0;i<cd_core.length;i++)
        {
            ch_td = document.getElementById(cd_core[i]);
            ch_td.style.background = "#f19a48";
        }

        for(i=0;i<cd_support.length;i++)
        {
            ch_td = document.getElementById(cd_support[i]);
            ch_td.style.background = "#ecb887";
        }
    }
    if(cd_flag<0)
    {
        reset_color();
    }
    cd_flag*=-1;

    gi_flag=1;
    de_flag=1;
    vc_flag=1;
    md_flag=1;
}

function deClick(){
    reset_color();
    var core = [ 'tr3td4', 'tr3td5', 'tr3td7',
                 'tr5td4', 'tr7td5', 'tr8td6',
                 'tr9td6', 'tr10td2', 'tr10td3',
                 'tr11td3', 'tr11td4', 'tr11td6',
                 'tr11td7', 'tr13td6', 'tr14td4','tr14td6'];
    var support = [ 'tr4td5', 'tr5td3',
                 'tr5td7', 'tr6td4', 'tr7td3',
                 'tr7td6', 'tr8td8', 'tr9td1',
                 'tr11td8', 'tr12td4', 'tr12td6'];
    var ch_td;

    if(de_flag>0)
    {
        for(i=0;i<core.length;i++)
        {
            ch_td = document.getElementById(core[i]);
            ch_td.style.background = "rgb(191, 122, 231)";
        }

        for(i=0;i<support.length;i++)
        {
            ch_td = document.getElementById(support[i]);
            ch_td.style.background = "rgb(240, 213, 255)";
        }
    }
    if(de_flag<0)
    {
        reset_color();
    }
    de_flag*=-1;

    gi_flag=1;
    cd_flag=1;
    vc_flag=1;
    md_flag=1;
}

function vcClick(){
    reset_color();
    var core = [ 'tr3td4', 'tr3td5', 'tr3td7',
                 'tr5td4', 'tr7td5', 'tr8td6',
                 'tr9td6', 'tr10td2', 'tr10td3',
                 'tr11td3', 'tr11td4', 'tr11td6',
                 'tr11td7', 'tr13td6', 'tr14td4','tr14td6'];
    var support = [ 'tr4td5', 'tr5td3',
                 'tr5td7', 'tr6td4', 'tr7td3',
                 'tr7td6', 'tr8td8', 'tr9td1',
                 'tr11td8', 'tr12td4', 'tr12td6'];
    var ch_td;

    if(vc_flag>0)
    {
        for(i=0;i<core.length;i++)
        {
            ch_td = document.getElementById(core[i]);
            ch_td.style.background = "#3bd1ff";
        }

        for(i=0;i<support.length;i++)
        {
            ch_td = document.getElementById(support[i]);
            ch_td.style.background = "#caeff0";
        }
    }
    if(vc_flag<0)
    {
        reset_color();
    }
    vc_flag*=-1;

    gi_flag=1;
    cd_flag=1;
    de_flag=1;
    md_flag=1;
}

function mdClick(){
    reset_color();
    var core = [ 'tr3td4', 'tr3td5', 'tr3td7',
                 'tr5td4', 'tr7td5', 'tr8td6',
                 'tr9td6', 'tr10td2', 'tr10td3',
                 'tr11td3', 'tr11td4', 'tr11td6',
                 'tr11td7', 'tr13td6', 'tr14td4','tr14td6'];
    var support = [ 'tr4td5', 'tr5td3',
                 'tr5td7', 'tr6td4', 'tr7td3',
                 'tr7td6', 'tr8td8', 'tr9td1',
                 'tr11td8', 'tr12td4', 'tr12td6'];
    var ch_td;

    if(md_flag>0)
    {
        for(i=0;i<core.length;i++)
        {
            ch_td = document.getElementById(core[i]);
            ch_td.style.background = "#ff6f6f";
        }

        for(i=0;i<support.length;i++)
        {
            ch_td = document.getElementById(support[i]);
            ch_td.style.background = "#f7b9b9";
        }
    }
    if(md_flag<0)
    {
        reset_color();
    }
    md_flag*=-1;

    gi_flag=1;
    cd_flag=1;
    de_flag=1;
    vc_flag=1;
}

/*
    area 클릭 이벤트
*/
const gi = document.getElementById("gi_but");
gi.addEventListener("click", giClick);

const cd = document.getElementById("cd_but");
cd.addEventListener("click", cdClick);

const de = document.getElementById("de_but");
de.addEventListener("click", deClick);

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('#tr12td5');

btnOpenPopup.addEventListener('click', () => {
	modal.classList.toggle('show');

	if (modal.classList.contains('show')) {
   	 	body.style.overflow = 'hidden';
	}
});

modal.addEventListener('click', (event) => {
     if (event.target === modal) {
         modal.classList.toggle('show');

     if (!modal.classList.contains('show')) {
         body.style.overflow = 'auto';
    }
   }
});