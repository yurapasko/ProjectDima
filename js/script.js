function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}



let devOneimg = document.querySelector(".dev1_img");
let devTwoimg = document.querySelector(".dev2_img");
let devThreeimg = document.querySelector(".dev3_img");

let devOne = document.querySelector(".dev1");
let devTwo = document.querySelector(".dev2");
let devThree = document.querySelector(".dev3");

devOneimg.onmouseover = function(event){
	if(event.type === "mouseover"){
	devOneimg.classList.add("topImg");
	devTwoimg.classList.add("SecImg");
	devThreeimg.classList.add("LastImg");
	devTwoimg.classList.remove("topImg");
	devThreeimg.classList.remove("topImg");
	devTwoimg.classList.remove("LastImg");
	devThreeimg.classList.remove("SecImg");

	devTwo.classList.add("hidden");
	devThree.classList.add("hidden");
	devOne.classList.remove("hidden");
	}
}
devTwoimg.onmouseover = function(event){
	if(event.type === "mouseover"){
	devOneimg.classList.add("SecImg");
	devTwoimg.classList.add("topImg");
	devThreeimg.classList.add("SecImg");
	devOneimg.classList.remove("topImg");
	devThreeimg.classList.remove("topImg");
	devOneimg.classList.remove("LastImg");
	devThreeimg.classList.remove("LastImg");

	devThree.classList.add("hidden");
	devOne.classList.add("hidden");
	devTwo.classList.remove("hidden");
}

}
devThreeimg.onmouseover = function(event){
	if(event.type === "mouseover"){
	devOneimg.classList.add("LastImg");
	devTwoimg.classList.add("SecImg");
	devThreeimg.classList.add("topImg");
	devOneimg.classList.remove("topImg");
	devTwoimg.classList.remove("topImg");
	devOneimg.classList.remove("SecImg");
	devTwoimg.classList.remove("LastImg");

	devTwo.classList.add("hidden");
	devOne.classList.add("hidden");
	devThree.classList.remove("hidden");
}
}