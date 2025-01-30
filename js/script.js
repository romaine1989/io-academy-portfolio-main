const target = document.querySelector('.portfolio-row')

/** 
fetch gets data from URL. and this will always be asynchronous 
**/
fetch('information.json')

    /** this then is chained to the fetch before with the . and what it does is
    catches asynchronous data (object) from the thing it's chained to (fetch)
    .json is to turn the json format recieved from the fetch (amongst the collection of data in the in fetch) into 
    a JS object that we can use synchronously and the fat arrow
    is another way of 'returning' so we can use this object in another then if necessary
    **/
    .then((response) => response.json())

    /*
    this then, is chained to the one before with the . and outlines a parameter 
    called data which stores the value of the object returned from the previous then
    */
    .then(data => {// data represents the object got from the first then
        console.log(data)
        data.projects.forEach((item) => {

            let list = document.createElement('div');
            list.innerHTML = `
                <div class="portfolio-item">
                        <img src="${item.image}" alt="${item.alt}" width="100%">
                        <div class="profile-blurb">
                            <h3>${item.title}</h2>
                            <p>
                                ${item.description}
                            </p>

                            <div class="techs">
                                <span>CSS</span>
                                <span>HTML</span>
                                <span>JavaScript</span>
                                <span>VS Code</span>
                            </div>
                        </div>

                        <div class="links">
                            <a href="${item.liveLink}" target="_blank">Live Project</a>
                            <a href="${item.gitHubLink} target="_blank"">Git Repo</a>
                        </div> 
                    </div>
            `;
            target.appendChild(list)
        });

    });