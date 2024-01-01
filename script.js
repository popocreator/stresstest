(function () {
	let questions = [
		{
			id: 1,
			title: '예상치 못한 일로 당황했던 적이 얼마나 자주 있으신가요?',
			score: 0,
		},
		{
			id: 2,
			title:
				"매우 중요한 일들을 '내 의지대로 조절 할 수 없다' 라는 느낌을 얼마나 자주 있으신가요?",
			score: 0,
		},
		{
			id: 3,
			title:
				'신경이 예민해지고, 스트레스를 받고 있다는 느낌을 경험 자주 하시나요?',
			score: 0,
		},
		{
			id: 4,
			title:
				"'내가 꼭 해야 할 일들을 해낼수 없겠다' 라고 느낀 경우는 얼마나 자주 있으신가요?",
			score: 0,
		},
		{
			id: 5,
			title:
				'자신이 통제할 수 없는 일로 화를 낸 경험이 얼마나 자주 있으신가요?',
			score: 0,
		},
		{
			id: 6,
			title:
				"'난해한 일들이 많이 쌓여 해결하지 못할것같다' 라는 생각을 하는 경우가 자주 있으신가요?",
			score: 0,
		},
		{
			id: 7,
			title:
				"평소 짜증이나도 참고 '좋아 잘 참았어' 하는 경우가 얼마나 자주 있으신가요?",
			score: 0,
		},
		{
			id: 8,
			title: "'컨디션이 정말 좋다~!' 라고 느끼는 얼마나 자주 있으신가요?",
			score: 0,
		},
		{
			id: 9,
			title:
				"어떤 문제에 있어서 '난 꼭 해낼수 있어!' 라고 자신감을 느끼는 경우는 얼마나 자주 있으신가요?",
			score: 0,
		},
		{
			id: 10,
			title:
				'내가 생각대로 일들이 잘 진행되고 있다 라는 생각을 얼마나 하시나요?',
			score: 0,
		},
	];

	function ProgressBar(index = 0, length = 0) {
		const dom = document.createElement('div');
		dom.classList.add('progress');

		for (let i = 0; i < length; i++) {
			const blockDom = document.createElement('div');
			blockDom.classList.add('progress-block');
			if (i <= index) {
				blockDom.classList.add('active');
			}
			dom.appendChild(blockDom);
		}

		function update(index) {
			document
				.querySelectorAll('.progress-block')
				.forEach((progressBlock, i) => {
					if (i <= index) {
						progressBlock.classList.add('active');
					} else {
						progressBlock.classList.remove('active');
					}
				});
		}

		return {
			dom,
			update,
		};
	}

	function Question(index = 0, text = '') {
		const dom = document.createElement('div');
		dom.classList.add('question');

		const labelDom = document.createElement('div');
		labelDom.classList.add('question-label');
		labelDom.innerHTML = `Question ${index + 1}`;
		dom.appendChild(labelDom);

		const textDom = document.createElement('div');
		textDom.classList.add('question-text');
		textDom.innerHTML = text;
		dom.appendChild(textDom);

		function update(index, text) {
			document.querySelector('.question-label').innerHTML = `Question ${
				index + 1
			}`;
			document.querySelector('.question-text').innerHTML = text;
		}

		return {
			dom,
			update,
		};
	}

	function Answer() {
		const dom = document.createElement('div');
		dom.classList.add('answer-list');

		const answerData = [
			{score: 1, text: '전혀 없다'},
			{score: 2, text: '거의 없다'},
			{score: 3, text: '종종 있다'},
			{score: 4, text: '자주 있다'},
			{score: 5, text: '매우 자주 있다'},
		];

		answerData.forEach((answer) => {
			const answerDom = document.createElement('div');
			answerDom.classList.add('answer');
			answerDom.innerHTML = `
				<div class="answer-circle-container">
					<div class="answer-circle"></div>
				</div>
				<span class="answer-text">${answer.text}</span>
			`;
			answerDom.setAttribute('data-score', answer.score);
			answerDom.addEventListener('click', () => {
				const selectedAnswerDom = document.querySelector('.answer.selected');
				if (selectedAnswerDom) {
					selectedAnswerDom.classList.remove('selected');
				}
				answerDom.classList.add('selected');
			});
			dom.appendChild(answerDom);
		});

		return {
			dom,
		};
	}

	function Main(questionData = []) {
		let index = 0;
		const progressBar = ProgressBar(index, questionData.length);
		const question = Question(index, questionData[index].title);
		const answer = Answer();

		const dom = document.querySelector('.content');
		dom.appendChild(progressBar.dom);
		dom.appendChild(question.dom);
		dom.appendChild(answer.dom);

		return {
			update: (_index) => {
				if (_index < questionData.length) {
					index = _index;
					progressBar.update(index);
					question.update(index, questionData[index].title);
				}
				return index;
			},
		};
	}

	let currentIndex = 0;
	const {update} = Main(questions);
	document.querySelector('#continue').addEventListener('click', () => {
		currentIndex = update(currentIndex + 1);
		console.log(currentIndex);
	});
})();
