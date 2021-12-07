var gi_flag=1;
var cd_flag=1;
var de_flag=1;
var vc_flag=1;
var md_flag=1;

var gij_flag = 1;
var cdj_flag = 1;
var dej_flag = 1;
var vij_flag = 1;



function reset_color(){
    var ch_td;

    for(i=2;i<=13;i++)
    {
        for(j=1;j<=8;j++)
        {
            str = "tr"+i+"td"+j;

            ch_td = document.getElementById(str);

			if(str=="tr5td3"||str=="tr6td6"||str=="tr8td2"||str=="tr6td4")
				ch_td.style.background = "#d0d0d0";
			else
				ch_td.style.background = "#f5f5f5";
        }
    }
}
function giClick(){
    var ch_td;

    reset_color();

    var gi_core = [ 'tr5td5', 'tr6td5', 'tr7td4',
                 'tr7td6', 'tr8td3', 'tr8td4',
                 'tr9td1', 'tr9td2', 'tr9td3',
                 'tr9td5', 'tr10td2', 'tr10td3',
                 'tr11td1','tr2td5','tr7td7','tr5td7'];
    var gi_support = [ 'tr2td1', 'tr2td3',
                 'tr6td1', 'tr6td2', 'tr8td3',
                 'tr7td5', 'tr7td8', 'tr8td1',
                 'tr8td5', 'tr8td8', 'tr10td1', 'tr11td4','tr9td4','tr6td5','tr10td5','tr11td5'];
    

    if(gi_flag>0)
    {
        for(i=0;i<gi_core.length;i++)
        {
            ch_td = document.getElementById(gi_core[i]);
            ch_td.style.background = "#FADC86";
        }

        for(i=0;i<gi_support.length;i++)
        {
            ch_td = document.getElementById(gi_support[i]);
            ch_td.style.background = "#FFF2CC";
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
	gij_flag=1;
	dej_flag=1;
	cdj_flag=1;
	vij_flag=1;
}

function cdClick(){
    
    reset_color();

    var cd_core = [ 'tr4td1', 'tr7td1', 'tr7td2',
                 'tr2td3', 'tr7td7', 'tr9td4','tr10td4','tr11td4',
                 'tr7td5', 'tr8td5', 'tr11td5', 'tr12td5','tr5td7','tr2td5'];
    var cd_support = [ 'tr6td1','tr6td2', 'tr8td1',
                 'tr2td1', 'tr10td1', 'tr9td2','tr9td3', 'tr10td3',
                 'tr10td4', 'tr2td6','tr8td4','tr9td5','tr7td6'];
    var ch_td;

    if(cd_flag>0)
    {
        for(i=0;i<cd_core.length;i++)
        {
            ch_td = document.getElementById(cd_core[i]);
            ch_td.style.background = "#B5D999";
        }

        for(i=0;i<cd_support.length;i++)
        {
            ch_td = document.getElementById(cd_support[i]);
            ch_td.style.background = "#E2EED9";
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
	gij_flag=1;
	dej_flag=1;
	cdj_flag=1;
	vij_flag=1;
}

function deClick(){
    reset_color();
    var core = [ 'tr13td5', 'tr8td6', 'tr9td6','tr10td2','tr11td1', 'tr3td1','tr6td3','tr7td3','tr6td6','tr6td7','tr5td7','tr2td5'];
    var support = [ 'tr2td1',
                 'tr4td1', 'tr11td1', 'tr3td3',
                 'tr9td4', 'tr10td4', 'tr11td4',
                 'tr7td7','tr8td3','tr7td4','tr8td5'];
    var ch_td;

    if(de_flag>0)
    {
        for(i=0;i<core.length;i++)
        {
            ch_td = document.getElementById(core[i]);
            ch_td.style.background = "#ABCAE9";
        }

        for(i=0;i<support.length;i++)
        {
            ch_td = document.getElementById(support[i]);
            ch_td.style.background = "#DEEBF6";
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
	gij_flag=1;
	dej_flag=1;
	cdj_flag=1;
	vij_flag=1;
}

function giJobsClick(){
    reset_color();
    var core = ['tr6td1','tr6td2','tr7td2','tr7td1','tr8td1',
'tr2td1','tr4td1','tr9td1','tr10td1','tr9td2','tr2td3',
'tr8td3','tr9td3','tr10td3','tr7td4','tr8td4','tr9td4','tr10td4',
'tr11td4','tr4td5','tr5td5','tr6td5','tr7td5','tr8td5','tr9td5','tr10td5','tr11td5',
'tr6td5','tr7td6','tr7td7','tr8td8','tr7td8'];
    var ch_td;

    if(gij_flag>0)
    {
        for(i=0;i<core.length;i++)
        {
            ch_td = document.getElementById(core[i]);
            ch_td.style.background = "#B1BB50";
        }
    }

    gi_flag=1;
    cd_flag=1;
    vc_flag=1;
    md_flag=1;
	dej_flag=1;
	cdj_flag=1;
	vij_flag=1;
}

function cdJobsClick(){
    reset_color();
    var core = ['tr2td1','tr3td1','tr4td1','tr8td2','tr11td1',
'tr3td3','tr5td3','tr6td4','tr9td4','tr10td4','tr11td4',
'tr12td5','tr6td6','tr8td6','tr9td6','tr7td7'];
    var ch_td;

    if(cdj_flag>0)
    {
        for(i=0;i<core.length;i++)
        {
            ch_td = document.getElementById(core[i]);
            ch_td.style.background = "#F4B183";
        }
    }

    gi_flag=1;
    cd_flag=1;
    vc_flag=1;
    md_flag=1;
	gij_flag=1;
	dej_flag=1;
	vij_flag=1;
}


function deJobsClick(){
    reset_color();
    var core = ['tr6td1','tr6td2','tr8td1','tr2td1','tr9td1',
'tr10td1','tr11td1','tr9td2','tr10td2','tr8td3','tr9td3',
'tr10td3','tr7td4','tr8td4','tr11td4','tr4td5','tr5td5','tr6td5',
'tr7td5','tr8td5','tr9td5','tr7td6','tr8td8','tr7td8'];
    var ch_td;

    if(dej_flag>0)
    {
        for(i=0;i<core.length;i++)
        {
            ch_td = document.getElementById(core[i]);
            ch_td.style.background = "#F6B90E";
        }
    }

    gi_flag=1;
    cd_flag=1;
    vc_flag=1;
    md_flag=1;
	gij_flag=1;
	cdj_flag=1;
	vij_flag=1;
}



function viJobsClick(){
    reset_color();
    var core = ['tr2td1','tr3td1','tr4td1','tr3td3','tr11td1',
'tr9td4','tr10td4','tr11td4','tr12td5','tr8td6','tr9td6',
'tr7td7'];
    var ch_td;

    if(vij_flag>0)
    {
        for(i=0;i<core.length;i++)
        {
            ch_td = document.getElementById(core[i]);
            ch_td.style.background = "#5195D3";
        }
    }

    gi_flag=1;
    cd_flag=1;
    vc_flag=1;
    md_flag=1;
	dej_flag=1;
	cdj_flag=1;
	dej_flag=1;
}

/*
    area 클릭 이벤트
*/
const home = document.getElementById("title");
home.addEventListener("click", reset_color);

const gi = document.getElementById("gi_but");
gi.addEventListener("click", giClick);

const cd = document.getElementById("cd_but");
cd.addEventListener("click", cdClick);

const de = document.getElementById("de_but");
de.addEventListener("click", deClick);

const gi_jobs = document.getElementById("gi_jobs");
gi_jobs.addEventListener("click", giJobsClick);

const gi_jobs2 = document.getElementById("gi_jobs2");
gi_jobs2.addEventListener("click", giJobsClick);

const gi_jobs3 = document.getElementById("gi_jobs3");
gi_jobs3.addEventListener("click", giJobsClick);

const gi_jobs4 = document.getElementById("gi_jobs4");
gi_jobs4.addEventListener("click", giJobsClick);

const cd_jobs = document.getElementById("cd_jobs");
cd_jobs.addEventListener("click", cdJobsClick);

const cd_jobs2 = document.getElementById("cd_jobs2");
cd_jobs2.addEventListener("click", cdJobsClick);

const cd_jobs3 = document.getElementById("cd_jobs3");
cd_jobs3.addEventListener("click", cdJobsClick);

const de_jobs = document.getElementById("de_jobs");
de_jobs.addEventListener("click", deJobsClick);

const vi_jobs = document.getElementById("vc_jobs");
vi_jobs.addEventListener("click", viJobsClick);

const body = document.querySelector('body');
const modal = document.querySelector('.modal');

const btnOpenPopup1 = document.querySelector('#tr2td1');
const btnOpenPopup2 = document.querySelector('#tr2td3');
const btnOpenPopup3 = document.querySelector('#tr2td5');
const btnOpenPopup4 = document.querySelector('#tr3td1');
const btnOpenPopup5 = document.querySelector('#tr3td3');
const btnOpenPopup6 = document.querySelector('#tr4td1');
const btnOpenPopup7 = document.querySelector('#tr5td3');
const btnOpenPopup8 = document.querySelector('#tr5td4');
const btnOpenPopup9 = document.querySelector('#tr5td5');
const btnOpenPopup10 = document.querySelector('#tr5td7');
const btnOpenPopup11 = document.querySelector('#tr6td1');
const btnOpenPopup12 = document.querySelector('#tr6td2');
const btnOpenPopup13 = document.querySelector('#tr6td3');
const btnOpenPopup14 = document.querySelector('#tr6td4');
const btnOpenPopup15 = document.querySelector('#tr6td5');
const btnOpenPopup16 = document.querySelector('#tr6td6');
const btnOpenPopup17 = document.querySelector('#tr6td7');
const btnOpenPopup18 = document.querySelector('#tr6td8');
const btnOpenPopup19 = document.querySelector('#tr7td1');
const btnOpenPopup20 = document.querySelector('#tr7td2');
const btnOpenPopup21 = document.querySelector('#tr7td3');
const btnOpenPopup22 = document.querySelector('#tr7td4');
const btnOpenPopup23 = document.querySelector('#tr7td5');
const btnOpenPopup24 = document.querySelector('#tr7td6');
const btnOpenPopup25 = document.querySelector('#tr7td7');
const btnOpenPopup26 = document.querySelector('#tr7td8');
const btnOpenPopup27 = document.querySelector('#tr8td1');
const btnOpenPopup28 = document.querySelector('#tr8td2');
const btnOpenPopup29 = document.querySelector('#tr8td3');
const btnOpenPopup30 = document.querySelector('#tr8td4');
const btnOpenPopup31 = document.querySelector('#tr8td5');
const btnOpenPopup32 = document.querySelector('#tr8td6');
const btnOpenPopup33 = document.querySelector('#tr8td8');
const btnOpenPopup34 = document.querySelector('#tr9td1');
const btnOpenPopup35 = document.querySelector('#tr9td2');
const btnOpenPopup36 = document.querySelector('#tr9td3');
const btnOpenPopup37 = document.querySelector('#tr9td4');
const btnOpenPopup38 = document.querySelector('#tr9td5');
const btnOpenPopup39 = document.querySelector('#tr9td6');
const btnOpenPopup40 = document.querySelector('#tr10td1');
const btnOpenPopup41 = document.querySelector('#tr10td2');
const btnOpenPopup42 = document.querySelector('#tr10td3');
const btnOpenPopup43 = document.querySelector('#tr10td4');
const btnOpenPopup44 = document.querySelector('#tr10td5');
const btnOpenPopup45 = document.querySelector('#tr11td1');
const btnOpenPopup46 = document.querySelector('#tr11td4');
const btnOpenPopup47 = document.querySelector('#tr11td5');
const btnOpenPopup48 = document.querySelector('#tr12td5');
const btnOpenPopup49 = document.querySelector('#tr13td5');

function modalPopup(subject)
{
	var title = document.querySelector(".modal_title");
	var cont = document.querySelector(".modal_cont");
	var pre = document.querySelector(".modal_pre");
	var engYN = document.querySelector(".modal_engYN");
	var publicYN = document.querySelector(".modal_publicYN");

    if(subject == 1) //문:삶과꿈
	{
		/*title.innerText = "publicYN";
		cont.innerText = "Hello World!";
		pre.innerText = "Hello World!";
		engYN.innerText = "Hello World!";
		publicYN.innerText = "Hello World!";*/
	}else if(subject == 2) //해:기호와사유
	{
		title.innerText = "해(解): 기호와 사유";
		cont.innerText = "언어가 있어 인간은 다른 존재들과 구별될 정도로 언어는 인간에게 본질적인 것이다. 또 언어와 사고는 밀접한 관련을 맺고 있어 인간 사유의 본질을 이해하는 데에도 언어의 이해는 필수적이다. 그러므로 인간과 세계를 이해할 수 있는 가장 중요한 길은 언어를 연구하는 것이라 할 수 있다. 본 교과목에서는 이 언어와 관련된 여러 고전들을 읽어 인간과 세계에 대한 이해에 한 걸음 다가갈 수 있도록 한다.";
		pre.innerText = "문(文): 삶과 꿈,\n사(史)시대와 정신";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";	
	}else if(subject == 3) //인문인턴쉽
	{
		title.innerText = "인문인턴십";
		cont.innerText = "회사, 박물관, 전시, 축제 등 다양한 분야에서 언어, 문학, 문화 등 전공에서 배운 지식을 현장에 적용해 봄으로써 전공 관련 실무 능력과 경험을 높인다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";		
	}else if(subject == 4) //컴퓨팅사고, 컴퓨터와 인간
	{
		title.innerText = "";
		cont.innerText = "";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";	
	}else if(subject == 5) //데분기,영데분기
	{
		title.innerText = "";
		cont.innerText = "";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";	
	}else if(subject == 6) //언어강독
	{
		title.innerText = "";
		cont.innerText = "";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 7) //영문사료감독
	{
		title.innerText = "영문사료강독";
		cont.innerText = "본 과목은 서양의 역사와 문화를 이해하는 데 필수적인 사료와 다양한 영문 텍스트들을 정확히 읽고 분석하는 능력을 제고함으로써 역사 연구자가 갖춰야 할 기본 소양과 자질을 배양하는 것을 목표로 삼는다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : O";
		publicYN.innerText = "공동개설 학과 : X";				
	}else if(subject == 8) //자기주도진로선택
	{
		title.innerText = "";
		cont.innerText = "";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";				
	}else if(subject == 9) //고고학개론
	{
		title.innerText = "고고학개론";
		cont.innerText = "본 강의는 유적과 유물 분석을 통해 선사시대 인간들의 생활문화와 역사를 알기 위한 기초지식을 배양하는 데 있다. 고고학의 학문적 발전과정과 구체적인 방법론, 분석방법을 고찰하고 한국과 다른 지역의 실제 사례를 중심으로 고고학의 성과와 문제점을 개관한다. 한국의 경우에는 석기시대, 청동기 시대, 철기 시대의 유적과 유물을 구체적으로 살펴봄으로서 한반도 선사시대의 형성과 발전과정을 이해한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";				
	}else if(subject == 10) //산학협력전공실습
	{
		title.innerText = "산학협력전공실습";
		cont.innerText = "산업계의 수요를 반영한 산학협력 실습과목으로 학교와 기업의 공동지도 아래 주어진 과제를 수행한다. 현장실습을 통해 과제수행에서 발생하는 문제를 해결하는 실무능력을 키우고 산학협력 프로젝트에 참여함으로써 관련 산업에 대한 이해를 향상시키는 것을 목적으로 한다";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 11) //아주인성
	{
		title.innerText = "아주인성";
		cont.innerText = "민주시민의 한 사람으로서 갖추어야 할 덕, 미래사회의 리더가 될 대학인 특히 아주인으로서 갖추어야 할 덕이 무엇인지에 대해서 생각해보고, 현재의 우리의 삶의 현장에 적용하고 반성을 할 기회를 갖는데. 또한 국제화 시대, 다문화 시대에 살아가는 현대인에게 요구되는 헌신과 배려, 관용과 공감등의 가치에 대해 토론하고 생명존중의 사상을 몸으로 익히는 심폐소생술 실습을 하도록 한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 12) //아주희망
	{
		title.innerText = "아주희망";
		cont.innerText = "단과대학과 각 전공별로 자율적으로 운영하되, 대학과 전공(학과)에 대한 소개와 함께 자기성찰을 통한 인생설계(꿈찾기) 및 진로설정을 위한 로드맵 작성을 그 내용으로 포함한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 13) //신화와 디지털 콘텐츠
	{
		title.innerText = "신화와 디지털콘텐츠";
		cont.innerText = "그리스와 로마의 신화를 비롯해 여러 지역의 신화들을 읽고 이해함으로서 현대의 문화콘텐츠 제작에 필요한 다양한 소재와 주제를 끌어내는 역량을 키우고자 한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 14) //한문사료감독
	{
		title.innerText = "한문사료강독";
		cont.innerText = "한자로 기록된 과거의 기록들을 정확히 읽고 분석하는 능력을 제고함으로써 역사 연구자가 갖춰야 할 기본 소양과 자질을 배양하는 것을 목표로 삼는다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : O";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 15) //박물관학개론
	{
		title.innerText = "박물관학개론";
		cont.innerText = "본 강의는 박물관이나 문화원 등의 큐레이터를 진로로 설정한 학생들에게 필수적이다. 박물관의 전반에 대한 개괄적 설명과 큐레이터 역할을 이론과 실제 답사를 통해 이해한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 16) //역사융합세미나
	{
		title.innerText = "역사융합세미나";
		cont.innerText = "본 과목은 사학과 교육의 종합적 성과를 도출하고 사학과 교육의 융합적 성격을 강화하기 위한 기본 과목이다. 학생들은 사학과 강의에서 습득한 이론 지식과 사료학습 역량을 기반으로, 역사학 혹은 연관 학문의 특정 주제에 관한 학술 연구나 기획/제작 작업을 수행한다. 이 과정에서 학생들은 역사학의 활용성 및 타 전공과의 융합 가능성을 확인하고, 나아가 학생 개인의 진로를 모색하는 구체적인 기회를 갖게 된다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : O";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 17) //디지털역사학입문
	{
		title.innerText = "디지털역사학입문";
		cont.innerText = "디지털시대의 대두로 접근 가능한 정보가 양적·질적으로 제한적인 시대에서 다양한 수단을 통해 방대한 정보에 제한 없이 접근하고 입체적 분석이 가능한 시대에 접어들었다. 본 강의는 이러한 연구 환경의 변화에 능동적으로 대응하고 주도하기 위해 디지털역사학의 세계로 학생들을 안내한다. 디지털역사학은 디지털 기술을 활용하여 거시적이고 시계열적인 복잡계의 역사학적 사실을 탐구하는 역사학 기반 융합학문이다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 18) //디지털역사학연구방법론
	{
		title.innerText = "디지털역사학연구방법론";
		cont.innerText = "본 강좌는 디지털역사학(디지털기술을 활용한 사료(데이터) 분석) 교육을 구체화하기 위해, 다양한 역사 자료의 특성을 파악해 데이터를 추출하고 구조화하는 과정, 그리고 디지털기술을 활용해 분석하는 방법론을 교육하는 것을 목표로 한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 19)
	{
		title.innerText = "영어2";
		cont.innerText = "";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 20)
	{
		title.innerText = "영어1";
		cont.innerText = "";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 21)
	{
		title.innerText = "영상매체와 영상";
		cont.innerText = "새로운 미디어 문법 속에 반영된 아시아 역사세계의 분석을 통하여 아시아 역사문화에 대한 이해를 넓힌다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 22)
	{
		title.innerText = "한국근세사";
		cont.innerText = "각 시대에 새로이 등장하는 계층을 중심으로 그 정치와 사상을 기저에서 진행되는 사회변동과 관련지어 체계적으로 이해한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 23)
	{
		title.innerText = "중국근현대사";
		cont.innerText = "명대 이후 중국 정치의 변천, 사회경제의 동향, 학술의 개괄적 양상을 다른 시대와 비교하면서 동양 제곡의 정치, 경제, 문화적 관계를 사적으로 개관한다. 그리고 아편전쟁 이후 현대에 이르기까지 약 1세기의 중국현대사에서 중국인이 낯선 문명인 서구 문명에 어떻게 도전하고 대응했는가에 초점을 둔다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 24)
	{
		title.innerText = "아메리카사";
		cont.innerText = "현대 세계 질서의 중심축으로 부상한 미국의 국가건설과 이후 발전과 대외팽창 과정을 살펴보고 정치ㆍ외교, 사회, 경제, 문화 등 여러 측면에서 미국의 실체를 파악하는 데 주안점을 둔다. 또한 라틴아메리카 국가들의 독립과 후속 역사에 대한 검토와 아울러 대내외적인 주요 현안들의 역사적 이해를 도모하고자 한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 25)
	{
		title.innerText = "문화로 역사 읽기";
		cont.innerText = "20세기 말 서양 역사학계에 새로운 바람을 일으킨 ‘문화로의 전환’에 주목하고 역사 연구의 대상이자 방법으로서 문화가 미친 영향력을 추적함으로써 21세기 전 지구적 문화 교류와 변용의 시대에 걸맞은 소양을 쌓고 여러 지역의 문화에 대한 균형 잡힌 이해를 도모하고자 한다. 또한 문화란 특정 사회의 정치적ㆍ경제적 영역과 별개로 존재하는 것이 아니라 정치적 관계를 반영하고 사회경제적 변동과 긴밀하게 연관되어 있다는 점, 따라서 예술 분야뿐 아니라 의식(儀式)과 상징, 기억과 정체성을 비롯해 인간의 의식적인 활동이라는 넓은 의미에서 이해되어야 한다는 점을 강조하고자 한다. ";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 26)
	{
		title.innerText = "일본세미나";
		cont.innerText = "지역연구에 관련된 접근방법들을 공부하고 이에 관한 특정한 주제를 잡아 연구보고서를 발표함으로써 주제 분석 및 발표능력을 기른다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 27)
	{
		title.innerText = "글쓰기";
		cont.innerText = "";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 28)
	{
		title.innerText = "역사학으로의 초대";
		cont.innerText = "역사와 역사학의 의미를 묻고 과거의 실체에 접근하는 방법론에 대해 논의하며 다양한 관련 쟁점들을 검토함으로써 역사학 연구자뿐 아니라 교양 시민에게 필요한 사료(문서 자료와 각종 ‘데이터’ 포함) 이해와 비판적 분석 능력, 시대의 흐름에 대한 종합적인 통찰력을 함양하고자 한다. ";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 29)
	{
		title.innerText = "한국고중세사";
		cont.innerText = "한국 고대사에서 중세사의 역사발전 과정과 성격을 장기적인 시각에서 조망하고 중대한 변화의 인과관계를 파악하면서, 현재 한국 역사와 문화의 시원을 찾아서 ‘또 다른 전통’을 종합적으로 고찰한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 30)
	{
		title.innerText = "서양근대사";
		cont.innerText = "근대 유럽의 탄생은 르네상스, 종교개혁, ‘지리상의 발견’에서 비롯된다. 근대 유럽의 탄생에서 19세기 중반까지의 과정을 살펴봄으로써 서양 시민사회의 성립배경을 그 특징적 요소를 이해한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : O";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 31)
	{
		title.innerText = "일본근현대사";
		cont.innerText = "근대로부터 현대까지의 일본인의 생활과 문화. 각종제도의 발생 및 변천을 개관하고 일본사 특유의 용어와 개념을 익힌다. 특히 시대별 특색을 고찰하는데 중점을 둔다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 32)
	{
		title.innerText = "디지털역사학연구방법론";
		cont.innerText = "근대로부터 현대까지의 일본인의 생활과 문화. 각종제도의 발생 및 변천을 개관하고 일본사 특유의 용어와 개념을 익힌다. 특히 시대별 특색을 고찰하는데 중점을 둔다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 33)
	{
		title.innerText = "한중일 국제관계사";
		cont.innerText = "이 과목은 19세기 중엽 이래 한국, 중국, 일본 사이의 역사적 관계를 학습함으로써 동북아시아 국가 간 이해관계 충돌의 배경과 원인을 검토하고 일방적인 역사 인식과 역사 왜곡의 현실을 비판적으로 고찰하며 평화적 관계를 지향하는 지역 내 협력의 기반을 마련하는 데 기여하고자 한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 34)
	{
		title.innerText = "한국사입문";
		cont.innerText = "한국사 연구의 기본적인 역사적 사실과 논쟁점을 통시대적으로 살펴봄으로써 한국사 연구의 올바른 방향을 정립함과 동시에 한국사 기반 역사콘텐츠를 생산하는 기초를 확립한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : O";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 35)
	{
		title.innerText = "아시아사입문";
		cont.innerText = "문화, 역사인식, 인구변화, 가족제도, 사상, 국제관계 등을 검토하면서 아시아사 이해를 위한 기본 개념과 정보를 습득한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 36)
	{
		title.innerText = "서양고중세사";
		cont.innerText = "고대 지중해 세계의 변동으로부터 중세의 성숙기에 이르는 긴 시기를 조망하고 중대한 변화의 계기들을 짚어내면서 유럽 사회가 15세기 초 이래 세계의 다른 지역으로 팽창하기 전에 어떤 정치적ㆍ문화적 전통을 쌓고 인접 문화권과 갈등과 교류의 관계를 이루었는지에 대해 폭넓게 이해하고자 한다. ";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}
	else if(subject == 37)
	{
		title.innerText = "유럽의 전통과 문화유산";
		cont.innerText = "유럽의 전통과 그 전통이 배어 있는 구체적인 문화유산은 현대 유럽의 토대이자 유럽인의 상상력의 보고이다. 유럽의 전통과 문화유산을 학습함으로써 유럽문명의 형성과정과 그 성격을 종합적으로 이해한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}
	else if(subject == 38)
	{
		title.innerText = "한국근현대사";
		cont.innerText = "한국사에서 19세기와 20세기는 오늘날 사회의 기반을 제공하였기에 매우 중요한 지점이다. 전통과 근대, 동양과 서양의 이분법적 사고를 뛰어넘어 근현대 한국 역사의 주요 전개 과정을 정치, 경제, 사회 등의 분야에서 추적하고, 이를 통해 19세기 이후 한국사의 주요한 흐름을 정확하게 이해함으로써 한국사 속 전통과 근대성의 의미를 고민해 본다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}
	else if(subject == 39)
	{
		title.innerText = "디지털역사학데이터분석연습";
		cont.innerText = "역사데이터를 본격적으로 이용하기에 앞서 데이터가 어떠한 특징을 가진 사료로부터 추출되었지 확인하여 데이터의 가능성과 한계에 대한 이해를 증진하고자 한다. 이에 디지털화의 대상이 된 주요 사료들의 사료적 특징을 이해하고, 이 사료들을 기반으로 구성된 데이터의 특징과 한계를 살펴봄으로써 디지털역사학에 대한 관심과 이해도를 높인다. 더 나아가 역사 콘텐츠와 디지털 기술의 융합 가능성을 타진해본다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}
	else if(subject == 40)
	{
		title.innerText = "서양사입문";
		cont.innerText = "역사데이터를 본격적으로 이용하기에 앞서 데이터가 어떠한 특징을 가진 사료로부터 추출되었지 확인하여 데이터의 가능성과 한계에 대한 이해를 증진하고자 한다. 이에 디지털화의 대상이 된 주요 사료들의 사료적 특징을 이해하고, 이 사료들을 기반으로 구성된 데이터의 특징과 한계를 살펴봄으로써 디지털역사학에 대한 관심과 이해도를 높인다. 더 나아가 역사 콘텐츠와 디지털 기술의 융합 가능성을 타진해본다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}
	else if(subject == 41)
	{
		title.innerText = "역사와인물";
		cont.innerText = "한국사, 동양사, 서양사에 등장하는 다양한 인물들을 통해 당대 상황을 분석, 검토해봄으로써 새로운 시각에서 역사를 해석하고 이해하는 안목을 키운다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 42)
	{
		title.innerText = "동양고중세사";
		cont.innerText = "중국문명의 성립부터 송대까지의 역사를 개괄한다. 고중세 국가의 정치적 변화, 경제·사회 전반에 걸친 다양한 제도, 문학·종교·사상 등을 포함한 문화의 변천, 중국과 주변 국가와의 관계 등에 관한 통시대적인 고찰을 통해 동양고중세사 역사전개에 대한 전반적인 이해를 도모하고, 나아가 동아시아 근현대사를 이해할 수 있는 기본적인 틀을 마련한다. ";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 43)
	{
		title.innerText = "아시아의역사문화콘텐츠";
		cont.innerText = "아시아에 대한 전반적인 이해를 토대로 지역의 역사·문화·유산·예술·사상·종교·민족·풍속·정책 등에 관한 기본 지식을 습득하고, 전통시기부터 현재까지를 아우르는 통시대사적 안목 속에서 아시아의 역사·문화 콘텐츠의 분석과 기획 능력을 제고하여 다양한 스토리 재구성 능력과 역사·문화 콘텐츠의 활용능력을 배양한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 44)
	{
		title.innerText = "서양근대사";
		cont.innerText = "근대 유럽의 탄생은 르네상스, 종교개혁, ‘지리상의 발견’에서 비롯된다. 근대 유럽의 탄생에서 19세기 중반까지의 과정을 살펴봄으로써 서양 시민사회의 성립배경을 그 특징적 요소를 이해한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 45)
	{
		title.innerText = "문화콘텐츠학 입문";
		cont.innerText = "문화콘텐츠학에서 다루는 모든 내용을 조금씩 접해보는것을 목표로 한다. 문화콘텐츠의 정의, 산업적 측면, 정책적 측면, 문화적 측면 등을 간략하게 학습한다. 문화콘텐츠학에 입문하고자 하는 학생들을 위한 가장 기본적인 강좌이다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 46)
	{
		title.innerText = "유목민족의역사와문화";
		cont.innerText = "유라시아 대륙에서는 수많은 유목 민족들(흉노·돌궐·소그드·거란·티베트·몽골·여진·만주족)의 등장, 발전, 정복, 소멸 등이 진행되었다. 이들 유목민족들의 역사와 문화를 고찰하여 아시아 지역에서 한족(漢族)과 주변 유목 민족 상호 간의 작용·반작용의 과정을 탐색하고, 유목민족과 중국과의 관계를 면밀히 분석하여 농경세계와 유목세계의 특징을 이해한다.  ";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 47)
	{
		title.innerText = "중국사상과예술";
		cont.innerText = "고대로부터 현대에 이르기까지 종교, 철학, 사회문제에 관련하여 중국에서 발생한 제 관념을 개관하고 분석하여 중국사상에 관한 제 용어와 개념을 파악한다. 특히 유가, 불가, 도가의 사상과 중국 전통문화의 연관관계를 이해한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 48)
	{
		title.innerText = "일본사상과예술";
		cont.innerText = "고대로부터 근세에 이르는 동안 일본인의 의식과 개인적, 사회적인 생활양식을 규정해 온 신화, 종교사상, 철학, 미학 등의 내용과 그 역사적인 계보를 개관한다. 또 이 강의와 관련하여 인용되는 문헌과 참고자료의 독해와 주석을 통해서 인명, 지명을 고찰함과 동시에 정치와 경제, 사회, 문화와의 관련을 사회과학의 제 방법으로 고찰한다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}else if(subject == 49)
	{
		title.innerText = "디지털역사학입문";
		cont.innerText = "디지털시대의 대두로 접근 가능한 정보가 양적·질적으로 제한적인 시대에서 다양한 수단을 통해 방대한 정보에 제한 없이 접근하고 입체적 분석이 가능한 시대에 접어들었다. 본 강의는 이러한 연구 환경의 변화에 능동적으로 대응하고 주도하기 위해 디지털역사학의 세계로 학생들을 안내한다. 디지털역사학은 디지털 기술을 활용하여 거시적이고 시계열적인 복잡계의 역사학적 사실을 탐구하는 역사학 기반 융합학문이다.";
		pre.innerText = "";
		engYN.innerText = "외국어 강의여부 : X";
		publicYN.innerText = "공동개설 학과 : X";			
	}

	modal.classList.toggle('show');

	if (modal.classList.contains('show')) {
   	 	body.style.overflow = 'hidden';
	}
}

btnOpenPopup1.addEventListener("click", function(){modalPopup(1)});
btnOpenPopup2.addEventListener("click", function(){modalPopup(2)});
btnOpenPopup3.addEventListener("click", function(){modalPopup(3)});
btnOpenPopup4.addEventListener("click", function(){modalPopup(4)});
btnOpenPopup5.addEventListener("click", function(){modalPopup(5)});
btnOpenPopup6.addEventListener("click", function(){modalPopup(6)});
btnOpenPopup7.addEventListener("click", function(){modalPopup(7)});
btnOpenPopup8.addEventListener("click", function(){modalPopup(8)});
btnOpenPopup9.addEventListener("click", function(){modalPopup(9)});
btnOpenPopup10.addEventListener("click", function(){modalPopup(10)});
btnOpenPopup11.addEventListener("click", function(){modalPopup(11)});
btnOpenPopup12.addEventListener("click", function(){modalPopup(12)});
btnOpenPopup13.addEventListener("click", function(){modalPopup(13)});
btnOpenPopup14.addEventListener("click", function(){modalPopup(14)});
btnOpenPopup15.addEventListener("click", function(){modalPopup(15)});
btnOpenPopup16.addEventListener("click", function(){modalPopup(16)});
btnOpenPopup17.addEventListener("click", function(){modalPopup(17)});
btnOpenPopup18.addEventListener("click", function(){modalPopup(18)});
btnOpenPopup19.addEventListener("click", function(){modalPopup(19)});
btnOpenPopup20.addEventListener("click", function(){modalPopup(20)});
btnOpenPopup21.addEventListener("click", function(){modalPopup(21)});
btnOpenPopup22.addEventListener("click", function(){modalPopup(22)});
btnOpenPopup23.addEventListener("click", function(){modalPopup(23)});
btnOpenPopup24.addEventListener("click", function(){modalPopup(24)});
btnOpenPopup25.addEventListener("click", function(){modalPopup(25)});
btnOpenPopup26.addEventListener("click", function(){modalPopup(26)});
btnOpenPopup27.addEventListener("click", function(){modalPopup(27)});
btnOpenPopup28.addEventListener("click", function(){modalPopup(28)});
btnOpenPopup29.addEventListener("click", function(){modalPopup(29)});
btnOpenPopup30.addEventListener("click", function(){modalPopup(30)});
btnOpenPopup31.addEventListener("click", function(){modalPopup(31)});
btnOpenPopup32.addEventListener("click", function(){modalPopup(32)});
btnOpenPopup33.addEventListener("click", function(){modalPopup(33)});
btnOpenPopup34.addEventListener("click", function(){modalPopup(34)});
btnOpenPopup35.addEventListener("click", function(){modalPopup(35)});
btnOpenPopup36.addEventListener("click", function(){modalPopup(36)});
btnOpenPopup37.addEventListener("click", function(){modalPopup(37)});
btnOpenPopup38.addEventListener("click", function(){modalPopup(38)});
btnOpenPopup39.addEventListener("click", function(){modalPopup(39)});
btnOpenPopup40.addEventListener("click", function(){modalPopup(40)});
btnOpenPopup41.addEventListener("click", function(){modalPopup(41)});
btnOpenPopup42.addEventListener("click", function(){modalPopup(42)});
btnOpenPopup43.addEventListener("click", function(){modalPopup(43)});
btnOpenPopup44.addEventListener("click", function(){modalPopup(44)});
btnOpenPopup45.addEventListener("click", function(){modalPopup(45)});
btnOpenPopup46.addEventListener("click", function(){modalPopup(46)});
btnOpenPopup47.addEventListener("click", function(){modalPopup(47)});
btnOpenPopup48.addEventListener("click", function(){modalPopup(48)});
btnOpenPopup49.addEventListener("click", function(){modalPopup(49)});



modal.addEventListener('click', (event) => {
     if (event.target === modal) {
         modal.classList.toggle('show');

     if (!modal.classList.contains('show')) {
         body.style.overflow = 'auto';
    }
   }
});