room = game.createRoom("room", "background.png") // 방 생성

room.door = room.createObject("door", "door.png") // 문 생성
room.door.setWidth(1700) // 크기 조절
room.locateObject(room.door, 580, 370) // 문 배치
room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.clear() // 게임 클리어
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("door-open.png") // 열린 문으로 변경
	room.door.setWidth(1800) // 크기 조절
	room.locateObject(room.door, 490, 340) // 문 배치
}

room.keypad = room.createObject("keypad", "숫자키-좌.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 250, 290) // 위치 변경

room.keypad.onClick = function() {
	printMessage("비밀번호 : 국군의 날")
	showKeypad("number", "1001" , function(){ // 키패드 1 - 숫자4자리
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

game.start(room) // 게임시작
printMessage("익숙한 풍경이다... 분명 나는 1년 전에 전역을 했는데... 뭐지?") // 재입대 메시지 출력