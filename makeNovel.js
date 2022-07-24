//makeNovel.html 출처
const inputTitle=document.querySelector('#title input');
const titleButton=document.querySelector('#title button');
const chooseAbleNodeImgs = document.querySelectorAll("#chooseAbleImgs img");
const inputContentIntroduce = document.querySelector("#contentIntroduce textarea");
const contentIntroduceButton=document.querySelector('#contentIntroduce button');
const genre = document.querySelector("#genre");
const dayOfWeek = document.querySelector("#dayOfWeek");
const creation = document.querySelector("#creation");

let localPropertyValues = [];
let EveryNovelData=[];
//로컬 저장
function newNovelData(){
	if(localPropertyValues.length==5){
		EveryNovelData.push(localPropertyValues);
		localStorage.setItem("EveryNovelData",JSON.stringify(EveryNovelData));
	}
}
//이미지 선택=> 객체 내부에 찾고 있는 프로퍼티를 가지고 있는 지를 true false로 알려주는 함수가 들어있습니다.
function chooseImg(e){
	const choosedImgNode=e.target;
	const choosedImg = choosedImgNode.getAttribute('src');
	const choosedImgObj = {
		id:0,
		image:choosedImg
	};
	let _localPropertyValues = localPropertyValues.filter(function(localPropertyValue){
		const imageExist = localPropertyValue.hasOwnProperty('image');
		return imageExist == false;
	});
	_localPropertyValues.push(choosedImgObj);
	localPropertyValues = _localPropertyValues;
	localPropertyValues.sort(function(a,b){return a.id-b.id});//배열 오름차순 정리
	console.log(localPropertyValues);
}

//제목 값 받기=>이하동문
function writeTitle(){
	const inputTitleValue=inputTitle.value;
	inputTitle.value="";
	const choosedTitleObj ={
		id:1,
		title:inputTitleValue
	};
	let _localPropertyValues = localPropertyValues.filter(function(localPropertyValue){
		const titleExist = localPropertyValue.hasOwnProperty('title');
		return titleExist == false;
	});
	_localPropertyValues.push(choosedTitleObj);
	localPropertyValues = _localPropertyValues;
	localPropertyValues.sort(function(a,b){return a.id-b.id});
	console.log(localPropertyValues);
}
//작품소개 값 받기=>이하동문
function writeContentIntroduce(){
	const inputContentIntroduceValue=inputContentIntroduce.value;
	inputContentIntroduce.value="";
	const choosedContentIntroduceObj ={
		id:2,
		contentIntroduce:inputContentIntroduceValue
	};
	//기존에 작품소개를 받은 정보가 있다면 그것을 제거하고 다시 새롭게 입력한 작품소개로 업데이트해서 보여주기
	let _localPropertyValues = localPropertyValues.filter(function(localPropertyValue){
		const contentIntroduceExist = localPropertyValue.hasOwnProperty('contentIntroduce');
		return contentIntroduceExist == false;
	});
	_localPropertyValues.push(choosedContentIntroduceObj);
	localPropertyValues = _localPropertyValues;
	localPropertyValues.sort(function(a,b){return a.id-b.id});
	console.log(localPropertyValues);
}
//장르 값 받기=>이하동문 0=스릴러 1=공포 2=추리
function chooseGenre(){
	let index = genre.selectedIndex;
  	const choosedGenreObj ={
		id:3,
		genre:index
	};
	let _localPropertyValues = localPropertyValues.filter(function(localPropertyValue){
		const genreExist = localPropertyValue.hasOwnProperty('genre');
		return genreExist == false;
	});
	_localPropertyValues.push(choosedGenreObj);
	localPropertyValues = _localPropertyValues;
	localPropertyValues.sort(function(a,b){return a.id-b.id});
	console.log(localPropertyValues);
}
//연재 요일 값 받기=>이하동문 0=월 1=화 2=수 3=목 4=금 5=토 6=일
function chooseDayOfWeek(){
	let index = dayOfWeek.selectedIndex;
  	const choosedDayOfWeekObj ={
		id:4,
		DayOfWeek:index
	};
	let _localPropertyValues = localPropertyValues.filter(function(localPropertyValue){
		const dayOfWeekExist = localPropertyValue.hasOwnProperty('dayOfWeek');
		return dayOfWeekExist == false;
	});
	_localPropertyValues.push(choosedDayOfWeekObj);
	localPropertyValues = _localPropertyValues;
	localPropertyValues.sort(function(a,b){return a.id-b.id});
	console.log(localPropertyValues);
}
//페이지 처음 접속했을 때, EveryNovelData 배열 다시 채워주기
const parseSavedEveryNovelData=JSON.parse(localStorage.getItem("EveryNovelData"));
if(parseSavedEveryNovelData){
	EveryNovelData = parseSavedEveryNovelData;
}
	
//이미지 클릭 시 이벤트
chooseAbleNodeImgs.forEach(chooseAbleNodeImg => {chooseAbleNodeImg.addEventListener('click', chooseImg);});
//제목 버튼 클릭 시 이벤트
titleButton.addEventListener('click',writeTitle);

//작품 소개 버튼 클릭 시 이벤트
contentIntroduceButton.addEventListener('click',writeContentIntroduce);
//장르 변경 시 이벤트
genre.addEventListener('change',chooseGenre);
//연재 요일 변경 시 이벤트
dayOfWeek.addEventListener('change',chooseDayOfWeek);
//전체 저장 데이터 로컬로 옮기기 이벤트
creation.addEventListener('click',newNovelData);
