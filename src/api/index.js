

// for fetching all data 

export async function fetchStoriesData() {

    let data = await fetch("https://child.onrender.com/api/sciencefiction");

    data = await data.json();
    console.log(" data is :- ",data);
    return data;
}

export async function fetchStoriesDataById(id) {

    let data = await fetch(`https://child.onrender.com/api/sciencefiction/${id}`);
    data = await data.json();
    console.log(" data  by id is :- ",data);
    return data;
}



