
//생성 함수
function frameMake(i){
	const myNovelListSection=document.querySelector('section');
	const createArticle = document.createElement('article');
	myNovelListSection.prepend(createArticle);
	const imgDiv = document.createElement('div');
	createArticle.prepend(imgDiv);
	const contentDiv = document.createElement('div');
	createArticle.append(contentDiv);
	const createButton = document.createElement('button');
	createButton.textContent = '글쓰기';
	contentDiv.append(createButton);
	const createTitle = document.createElement('h2');
	createTitle.textContent = JSON.parse(localStorage.getItem('EveryNovelData'))[i][1].title;
	contentDiv.append(createTitle);
	const img = document.createElement('img');
	img.setAttribute('src',JSON.parse(localStorage.getItem('EveryNovelData'))[i][0].image);
	imgDiv.append(img);
}

// savedEveryNovelData, parseSavedEveryNovelData는 makeNovel.js에서 '페이지 처음 접속했을 때, EveryNovelData 배열 다시 채워주기'에서 추출
if(parseSavedEveryNovelData){
	let i;
	for(i = 0; i < parseSavedEveryNovelData.length; i++){
		frameMake(i);
	}
}

