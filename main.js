// JavaScript Document
function getDogs(num){
	const options = {method: 'GET'}
	fetch(`https://dog.ceo/api/breeds/image/random/${num}`, options).then(response => response.json()).then(responseJson => displayDogs(responseJson)).catch(error => alert("Something went wrong"));
}

function displayDogs(responseJson){
	console.log(responseJson.message);
	let arrLength = responseJson.message.length;
	
	for(let i = 0; i < arrLength; i++){
		$("section").append(`<image src="${responseJson.message[i]}" alt="img${i}" width="300">`);
	}
	
}

function watchForm(){
	$(".js-dogs").submit(e =>{
	
	e.preventDefault();
	$("section").empty();
	number = $("#numberOfDogs").val();
	getDogs(number);
	});
}

$(function(){
	console.log("App has loaded!");
	watchForm();
});