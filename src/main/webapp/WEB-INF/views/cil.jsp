<%@ page pageEncoding="UTF-8" contentType="text/html;charset=utf-8"%>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet"  href="${pageContext.request.contextPath}/resources/css/cil.css">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
</head>
<body>
<header>
	<jsp:include page="/WEB-INF/views/include/header.jsp"/>
</header>
    <section class="main_contents">
        <div class="modal">
	      <div class="modal_body">
	      	<table class="modal_table">
	      		<tr><th colspan="2" class="modal_title">디지털역사학입문</th></tr>
	      		<tr>
	      			<td rowspan="4" class="modal_cont">
	      				디지털시대의 대두로 접근 가능한 정보가 양정/질적으로 제한적인 시대에서
	      				다양한 수단을 통해 방대한 정보에 제한 없이 접근하고 입체적 분석이 가능한 시대에 접어들었다.
	      				본 강의는 이러한 연구 환경의 변화에 능동적으로 대응하고 주도하기 위해 디지털역사학의 세계로 학생들을 안내한다.
	      				디지털역사학은 디지털 기술을 활용하여 거시적이고 시계열적인 복잡계의 역사학적 사실을 탐구하는 역사학 기반 융합학문이다.
	      			</td>
	      			<td>Prerequisite Courses</td>
	      		</tr>
	      		<tr>
	      			<td class="modal_pre"></td>
	      		</tr>
	      		<tr>
	      			<td class="modal_engYN">외국어 강의여부 : X</td>
	      		</tr>
	      		<tr>
	      			<td class="modal_publicYN">공동개설 학과 : X</td>
	      		</tr>
	      	</table>
	      </div>
	    </div>
        <div class="area_section">
            <table class="area_table">
                <tr>
                    <th class="area_title"><span>TRACK</span></th>
                </tr>
                <tr>
                    <td class="gi_wrap">
                        <img id="gi_but" src="${pageContext.request.contextPath}/resources/img/areaIcon_game.png">
                    </td>
                </tr>
                <tr>
                    <td class="cd_wrap">
                        <img id="cd_but" src="${pageContext.request.contextPath}/resources/img/areaIcon_dd.png">
                    </td>
                </tr>
                <tr>
                    <td class="de_wrap">
                        <img id="de_but" src="${pageContext.request.contextPath}/resources/img/areaIcon_df.png">
                    </td>
                </tr>
            </table>
        </div>
        <div class="cil_table_section">
            <table>
                <!-- 행: 17, 열 :8 -->
                <tr>
                    <th><span class="class_mark">1-1</span></th>
                    <th><span class="class_mark">1-2</span></th>
                    <th><span class="class_mark">2-1</span></th>
                    <th><span class="class_mark">2-2</span></th>
                    <th><span class="class_mark">3-1</span></th>
                    <th><span class="class_mark">3-2</span></th>
                    <th><span class="class_mark">4-1</span></th>
                    <th><span class="class_mark">4-2</span></th>
                </tr>
                <tr>
                    <td colspan="2"><span id="tr2td1" class="colspan2">문:삶과 꿈, 사:시대와 정신<br>(1,2학기 중 선택 이수)<a id="tr2td2"></a></span></td>
                    <td colspan="2"><span id="tr2td3" class="colspan2">해:기호와 사유<br>(1,2학기 선택 이수)<a id="tr2td4"></a></span></td>
                    <td colspan="4"><span id="tr2td5" class="colspan4">인문인턴쉽<a id="tr2td6"></a><a id="tr2td7"></a><a id="tr2td8"></a></span></td>
                </tr>
                <tr>
                    <td colspan="2"><span id="tr3td1" class="colspan2">컴퓨팅사고, 컴퓨터와 인간<br>(1,2학기 중 선택 이수)<a id="tr3td2"></a></span></td>
                    <td><span id="tr3td3">데이터분석기초,<br>영어데이터분석기초 중 택1</span></td>
                    <td><a id="tr3td4"></a></td>
                    <td><a id=tr3td5></a></td>
                    <td><a id="tr3td6"></a></td>
                    <td><a id="tr3td7"></a></td>
                    <td><a id="tr3td8"></a></td>
                </tr>
                <tr>
                    <td colspan="2"><span id="tr4td1" class="colspan2">언어강독(한문,불어,중국어,일본어)<br>(1,2학기 중 선택 이수)<a id="tr4td2"></a></span></td>
                    <td><div class="mandatory_cont"><span id="tr4td3">영문사료감독</span><div class="mandatory"><a>M</a></div></div></td>
                    <td><span id="tr4td4">자기주도<br>진로선택</span></td>
                    <td><span id="tr4td5">고고학개론</span></td>
                    <td><a id="tr4td6"></a></td>
                    <td colspan="2"><div class="mandatory_cont"><span id="tr4td7" class="colspan2">산학협력전공실습1/2<a id="tr4td8"></a></span><div class="mandatory"><a>C</a></div></div></td>
                </tr>
                <tr>
                    <td><span id="tr5td1">아주인성</span></td>
                    <td><span id="tr5td2">아주희망</span></td>
                    <td><span id="tr5td3">신화와<br>디지털 콘텐츠</span></td>
                    <td><div class="mandatory_cont"><span id="tr5td4">한문사료감독</span><div class="mandatory"><a>M</a></div></div></td>
                    <td><span id="tr5td5">박물관학개론</span></td>
                    <td><div class="mandatory_cont"><span id="tr5td6">역사융합세미나<br>(캡스톤디자인)</span><div class="mandatory"><a>M</a></div></div></td>
                    <td><div class="mandatory_cont"><span id="tr5td7">디지털역사학입문</span><div class="mandatory"><a>C</a></div></div></td>
                    <td><div class="mandatory_cont"><span id="tr5td8">디지털역사학연구<br>방법론</span><div class="mandatory"><a>C</a></div></div></td>
                </tr>
                <tr>
                    <td><span id="tr6td1">영어2</span></td>
                    <td><span id="tr6td2">영어1</span></td>
                    <td><span id="tr6td3">영상매체와영상</span></td>
                    <td><span id="tr6td4">한국근세사</span></td>
                    <td><span id="tr6td5">중국근현대사</span></td>
                    <td><span id="tr6td6">아메리카사</span></td>
                    <td><span id="tr6td7">문화로역사읽기</span></td>
                    <td><span id="tr6td8">일본세미나</span></td>
                </tr>
                <tr>
                    <td><span id="tr7td1">글쓰기</span></td>
                    <td><div class="mandatory_cont"><span id="tr7td2">역사학으로의 초대</span><div class="mandatory"><a>M</a></div></div></td>
                    <td><span id="tr7td3">한국고증세사</span></td>
                    <td><span id="tr7td4">서양근세사</span></td>
                    <td><span id="tr7td5">일본근현대사</span></td>
                    <td><span id="tr7td6">디지털역사학<br>연구방법론</span></td>
                    <td><a id="tr7td7"></a></td>
                    <td><span id="tr7td8">한중일국제관계사</span></td>
                </tr>
                <tr>
                    <td><span id="tr8td1">한국사입문</span></td>
                    <td><span id="tr8td2">아시아사입문</span></td>
                    <td><span id="tr8td3">서양고증세사</span></td>
                    <td><span id="tr8td4">유럽전통과<br>문화유산</span></td>
                    <td><span id="tr8td5">한국근현대사</span></td>
                    <td><div class="mandatory_cont"><span id="tr8td6">디지털역사학<br>데이터분석연습</span><div class="mandatory"><a>C</a></div></div></td>
                    <td><a id="tr8td7"></a></td>
                    <td><a id="tr8td8"></a></td>
                </tr>
                <tr>
                    <td><span id="tr9td1">서양사입문</span></td>
                    <td><span id="tr9td2">역사와인물</span></td>
                    <td><span id="tr9td3">동양고증세사</span></td>
                    <td><span id="tr9td4">아시아의역사<br>문화콘텐츠</span></td>
                    <td><span id="tr9td5">서양근현대사</span></td>
                    <td><a id="tr9td6"></a></td>
                    <td><a id="tr9td7"></a></td>
                    <td><a id="tr9td8"></a></td>
                </tr>
                <tr>
                    <td><span id="tr10td1">문화콘텐츠학입문</span></td>
                    <td><a id="tr10td2"></a></td>
                    <td><a id="tr10td3"></a></td>
                    <td><span id="tr10td4">유족민족의<br>역사와문화</span></td>
                    <td><span id="tr10td5">중국사상과예술</span></td>
                    <td><a id="tr10td6"></a></td>
                    <td><a id="tr10td7"></a></td>
                    <td><a id="tr10td8"></a></td>
                </tr>
                <tr>
                    <td><a id="tr11td1"></a></td>
                    <td><a id="tr11td2"></a></td>
                    <td><a id="tr11td3"></a></td>
                    <td><a id="tr11td4"></a></td>
                    <td><span id="tr11td5">일본사상과예술</span></td>
                    <td><a id="tr11td6"></a></td>
                    <td><a id="tr11td7"></a></td>
                    <td><a id="tr11td8"></a></td>
                </tr>
                <tr>
                    <td><a id="tr12td1"></a></td>
                    <td><a id="tr12td2"></a></td>
                    <td><a id="tr12td3"></a></td>
                    <td><a id="tr12td4"></a></td>
                    <td><div class="mandatory_cont"><span id="tr12td5">디지털역사학입문</span><div class="mandatory"><a>C</a></div></div></td>
                    <td><a id="tr12td6"></a></td>
                    <td><a id="tr12td7"></a></td>
                    <td><a id="tr12td8"></a></td>
                </tr>
            </table>
        </div>
        <div class="jobs_section">
            <table class="jobs_table">
                <tr>
                    <th class="jobs_title"><span>JOBS</span></th>
                </tr>
                <tr>
                    <td class="gi_jobs">게임기획자</td>
                </tr>
                <tr>
                    <td class="gi_jobs">게임프로그래머</td>
                </tr>
                <tr>
                    <td class="gi_jobs">게임그래픽디자이너</td>
                </tr>
                <tr>
                    <td class="gi_jobs">스마트문화앱콘텐츠제작</td>
                </tr>
                <tr>
                    <td class="cd_jobs">시각디자이너</td>
                </tr>
                <tr>
                    <td class="cd_jobs">서비스경험디자이너</td>
                </tr>
                <tr>
                    <td class="cd_jobs">디지털디자이너</td>
                </tr>
                <tr>
                    <td class="de_jobs">영상연출가</td>
                </tr>
                <tr>
                    <td class="de_jobs">제작PD</td>
                </tr>
                <tr>
                    <td class="de_jobs">브랜드디자이너(OAP)</td>
                </tr>
                <tr>
                    <td class="de_jobs">CG아티스트</td>
                </tr>
                <tr>
                    <td class="de_jobs">모션그래픽디자이너</td>
                </tr>
                <tr>
                    <td class="de_jobs">사운드슈퍼바이저</td>
                </tr>
                <tr>
                    <td class="vc_jobs">3D 컴퓨터그래픽스</td>
                </tr>
                <tr>
                    <td class="vc_jobs">영상테크니컬디렉터</td>
                </tr>
                <tr>
                    <td class="vc_jobs">게임클라이언트개발자</td>
                </tr>
            </table>
        </div>
        <div>
        </div>
    </section>
</body>
<script src="${pageContext.request.contextPath}/resources/js/cil.js">
</script>
</html>