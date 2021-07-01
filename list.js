
$(function(){
	
	let rollingId = setInterval(function() { rollingStart(); }, 3000);
	
	//합계값 변수 선언 및 초기화 
	let tot=0;

	$('.menu select').change(function(){

		//변수 선언 및 초기화
		
		let add = '' 
		let label = $(this).siblings('span:eq(0)').text();
		let price = $(this).siblings('span:eq(1)').text();
		let count = $(this).val();

		//개수가 0일 경우 경고창 띄우고 함수종료
		if(count == 0){
			alert("최소 수량은 0개 이상입니다");
			return;
		}

		add += '<tr>';
		add += '<td>'+label+'</td>';
		add += '<input type="hidden" name="label" value="'+label+'">'
		add += '<td>'+price+'</td>';
		add += '<input type="hidden" name="price" value="'+price+'">'
		add += '<td>'+count+'</td>';
		add += '<input type="hidden" name="count" value="'+count+'">'
		add += '<td>'+price*count+'</td>';
		add += '<input type="hidden" name="tot" value="'+price*count+'">'
		add += '<td><button type="button" class="del"><img src="./images/delete.png" width="25px"/></button></td>';
		add += '</tr>';
		$('#listTable').append(add);
		tot += price*count;
		$('#total').val(tot);
		
		//선택값 0으로 초기화
		$(this).val(0);

	});
	
	$('#listTable').on('click', '.del', function(){		
		//현재 합계값 받아오기 
		tot = $('#total').val();
		//del 클래스와 같은 행의 td의 네 번째 요소 값 찾기 
		let delPrice=$(this).parents('tr').find('td:eq(3)').text();
		
		tot=tot-delPrice
		//합계에서 삭제되는 요소의 값 빼기 
		$('#total').val(tot);
				
		//this = del 클래스 
		//del 클래스가 속한 행 삭제
		$(this).parent().parent().remove();
		
	});
	
	$('#btn').click(function(){
		//alert('주문이 완료되었습니다.' )
		$('#element_to_pop_up').bPopup();
	})

		function rollingStart() {
		var banner = $(".banner").find("ul");
		var bannerWidth = banner.children().outerWidth();// 폭
		var bannerHeight = banner.children().outerHeight(); // 높이
		var bannerLength = banner.children().length;// 배너 개수
		banner.css("width", bannerWidth * bannerLength + "px");
		banner.css("height", bannerHeight + "px");

		banner.animate({
			left : -bannerWidth + "px"
		}, 1500, function() { // 배너 왼쪽 위치 옮기기. 롤링 시간 1500
			$(this).append("<li>" + $(this).find("li:first").html() + "</li>"); // 첫번째 이미지는 마지막 끝에 복사해서 추가
			$(this).find("li:first").remove();// 뒤로 복사된 첫번째 이미지는 삭제
			$(this).css("left", 0); // 배너 좌측 위치값 초기화
		});

	}

});


