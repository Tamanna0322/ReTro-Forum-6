const loadCard = async(cardId) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${cardId}`);
    const data = await response.json();
    // console.log(data.posts);
    const posts = data.posts;
    // console.log(posts);
    loadingSpinner(false);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    posts.forEach( (item) => {
        console.log(item);
        const div = document.createElement('div');
        div.innerHTML= `
        <div class=" lg:p-8 p-4 rounded-3xl bg-slate-100 mt-6">
        <div class="flex space-x-7 justify-start">
            <div class="lg:h-[80px] lg:w-[80px] h-[70px] w-[70px] relative">
                <img class="w-full rounded-xl"
                    src="${item.image}" alt="">
                <div id="active" class="lg:h-[20px] lg:w-[20px] h-[15px] w-[15px] border-2 rounded-full absolute bottom-[85%] left-[80%] ${item.isActive?"bg-green-600":"bg-red-600"}">
                </div>
            </div>
            <div class="space-y-3 w-[80%]">
                <div class="space-x-9 text-[#12132DCC] font-semibold">
                    <span># ${item.category}</span>
                    <span>Authore: ${item.author.name}</span>
                </div>
                <div>
                    <h3 class="lg:text-xl mb-3 font-bold text-[#12132D]">${item.title}</h3>
                </div>
                <div>
                    <p class="w-3/4 text-[#12132D99]">${item.description}</p>
                </div>
                <hr>
                <div class="flex justify-between">
                    <div class="flex flex-1 lg:space-x-7 space-x-2 text-[#12132D99]">
                        <div class="flex lg:space-x-3 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <span>${item.comment_count}</span>
                        </div>
                        <div class="flex lg:space-x-3 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span>${item.view_count}</span>
                        </div>
                        <div class="flex lg:space-x-3 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span>${item.posted_time} min</span>
                        </div>

                    </div>
                    <div>
                        <button onclick="addTitle('${item.title.replace("'", '')}','${item.view_count}')"
                            class="bg-green-500 h-[35px] w-[35px] rounded-full text-white flex justify-center items-center">
                            <i class="fa-solid fa-envelope-open"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
        `
        
        cardContainer.appendChild(div);
       
        
    });

}

let sum = 0;

function addTitle(title, view){
    sum++;
    console.log(title,view);
    const markAsRead = document.getElementById('mark-as');
    markAsRead.innerText = sum;

    const titleSection = document.getElementById('title-section');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="flex justify-between mb-7 bg-white p-4 rounded-2xl">
    <h2 class="text-[#12132D] font-bold">${title}</h2>
    <p class="text-[#12132D99] font-bold flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:mr-2 mr-1">
    <path stroke-linecap="round" stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path stroke-linecap="round" stroke-linejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>${view}</p>
</div>
    `
    titleSection.appendChild(div);
}


function search(){
    loadingSpinner(true);
    const inputField = document.getElementById('input-field');
    const inputVal = inputField.value;
    // console.log(inputVal);
    if(inputVal){
       setTimeout(() => {
        loadCard(inputVal);
       }, 2000);
       loadingSpinner(true);
       const cardContainer = document.getElementById('card-container');
       cardContainer.scrollIntoView({ behavior: 'smooth' });
    }
    else{
        alert('Enter any valid input');
        loadingSpinner(false);
    }
}

function loadingSpinner(isLoading){
         const spinner = document.getElementById('spinner');
         if(isLoading){
            spinner.classList.remove('hidden');
         }
         else{
            spinner.classList.add('hidden');
         }
}


const latestCard = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await response.json();
    // console.log(data);
    const postContainer = document.getElementById('post-container');
    data.forEach((item) => {
        console.log(item);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border-2 p-4 rounded-2xl">
        <div class="rounded-2xl">
            <img class="w-full rounded-2xl" src="${item.cover_image}"
                alt="">
        </div>
        <div class="flex space-x-3 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-[#12132DB3]">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            <span class="text-[#12132DB3]">${item?.author?.posted_date ? item.author.posted_date : 'No Publish Date'}</span>
        </div>
        <div>
            <h3 class="text-xl font-bold mt-4">${item.title}</h3>
        </div>
        <div>
            <p class="mt-4 w-[85%] text-[#12132DB3]">${item.description}</p>
        </div>
        <div class="mt-4 flex space-x-5">
            <div class="h-[50px] w-[50px] rounded-full">
                <img class="rounded-full" src="${item.profile_image}" alt="">
            </div>
            <div>
                <h4 class="font-bold ">${item.author.name}</h4>
                <p class="text-[#12132DB3]">${item?.author?.designation ? item.author.designation : 'Unknown'}</p>
            </div>
        </div>
        
    </div>
        `
        postContainer.appendChild(div);
    })
}



loadCard('music');
latestCard();