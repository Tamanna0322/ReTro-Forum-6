const loadCard = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    // console.log(data.posts);
    const posts = data.posts;
    console.log(posts);
    posts.forEach( (item) => {
        console.log(item);
        const cardContainer = document.getElementById('card-container');
        const div = document.createElement('div');
        div.innerHTML= `
        <div class=" lg:p-8 p-4 rounded-3xl bg-slate-100 mt-6">
        <div class="flex space-x-7 flex-1">
            <div class="lg:h-[120px] lg:w-[120px] h-[80px] w-[80px] relative">
                <img class="w-full rounded-xl"
                    src="https://i.ibb.co/z8zx95w/pexels-davide-de-giovanni-1649675.jpg" alt="">
                <div class="lg:h-[20px] lg:w-[20px] h-[15px] w-[15px] border-2 rounded-full absolute bottom-[85%] left-[80%] bg-pink-600">
                </div>
            </div>
            <div class="space-y-3">
                <div class="space-x-9 text-[#12132DCC] font-semibold">
                    <span># ${item.category}</span>
                    <span>Authore: Awald Hossain</span>
                </div>
                <div>
                    <h3 class="lg:text-xl mb-3 font-bold text-[#12132D]">10 Kids Unaware of Their Halloween
                        Costume</h3>
                </div>
                <div>
                    <p class="text-[#12132D99]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                        consequatur nobis blanditiis veritatis voluptas nesciunt, facilis sequi. Iste
                        dolorem labore unde</p>
                </div>
                <hr>
                <div class="flex justify-between">
                    <div class="flex lg:space-x-7 space-x-2 text-[#12132D99]">
                        <div class="flex lg:space-x-3 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <span>560</span>
                        </div>
                        <div class="flex lg:space-x-3 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span>1568</span>
                        </div>
                        <div class="flex lg:space-x-3 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span>5 min</span>
                        </div>

                    </div>
                    <div>
                        <button
                            class="bg-green-500 h-[30px] w-[30px] rounded-full text-white flex justify-center items-center">
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

loadCard();