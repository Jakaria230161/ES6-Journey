
/*
1, for specific = use getElementById
2, for many = use getElementsByClassName
3,for input or area to getting value = use .value
*/

document.getElementById("apply-bg").addEventListener("click", function () {

    const friends = document.getElementsByClassName("friend");

    for (const friend of friends) {

        friend.style.backgroundColor = "lightgreen";
    }
})

document.getElementById("center-text").addEventListener("click", function () {
    const third = document.getElementById("third-friend");
    third.style.textAlign = "center";
    third.style.backgroundColor = "lightblue";
    third.style.borderRadius = "10px";
})

document.getElementById("add-friend").addEventListener("click", function () {
    const friendContainer = document.getElementById("friends");
    const friend = document.createElement('div');
    friend.classList.add("friend");
    friend.innerHTML = `
    <h3 class ="friend-name">New friend</h3>
    <p>Something added </p>
    `
    friendContainer.appendChild(friend);
})