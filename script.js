(function () {
	const questions = [
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

	function Question() {
		const dom = document.createElement('div');
	}

	function Answer() {
		const answer1 = document.createElement('div').setAttribute('data-score', 0);
		const answer2 = document.createElement('div').setAttribute('data-score', 0);
		const answer3 = document.createElement('div').setAttribute('data-score', 0);
		const answer4 = document.createElement('div').setAttribute('data-score', 0);
		const answer5 = document.createElement('div').setAttribute('data-score', 0);
	}
})();
